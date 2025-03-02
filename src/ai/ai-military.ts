import { CityCore } from "@/core/city";
import { getUnitById } from "@/core/data-manager";
import { UnitDefinition, UnitTrait } from "@/core/data.interface";
import { findPath } from "@/core/pathfinding";
import { TileCore } from "@/core/tile";
import { UnitCore } from "@/core/unit";
import { AISystem } from "./ai-system";

export class MilitaryAI extends AISystem {
  // How many military units to maintain per city
  private UNITS_PER_CITY = 3;
  // Minimum units needed for invasion
  private MIN_INVASION_FORCE = 4;
  // Maximum distance for opportunistic attacks on enemy cities
  private MAX_INVASION_DISTANCE = 30;
  // Priority values
  private PRIORITY = {
    RETREAT_INJURED: 350,
    CITY_DEFENSE: 300,
    ATTACK_NEARBY_ENEMY: 200,
    CITY_INVASION: 100,
    PRODUCE_MILITARY: 150,
  };

  plan() {
    this.operations = [];

    const militaryUnits = this.player.units.filter(
      (unit) =>
        unit.definition.trait === UnitTrait.military && unit.parent === null
    );

    // Find enemy cities to attack
    const enemyCities = this.findEnemyCities();
    // Find enemy units to attack
    const enemyUnits = this.findEnemyUnits();
    const cityDefenders = new Map<CityCore, UnitCore[]>();
    // Track units assigned to invasions
    const invasionForces = new Map<CityCore, UnitCore[]>();
    // Initialize invasion forces for potential target cities
    for (const city of enemyCities) {
      invasionForces.set(city, []);
    }

    // Assign defenders to our cities
    for (const city of this.player.cities) {
      cityDefenders.set(city, []);
    }

    // First priority: Retreat injured units to friendly territory for healing
    const injuredUnits = militaryUnits.filter(
      (unit) => unit.health < 50 && unit.order !== "go"
    );

    for (const unit of injuredUnits) {
      // Find the closest friendly city to retreat to
      const retreatCity = this.findClosestFriendlyCity(unit.tile);

      if (retreatCity) {
        this.operations.push({
          group: "unit",
          entityId: unit.id,
          focus: "military",
          priority: this.PRIORITY.RETREAT_INJURED,
          perform: () => {
            unit.path = findPath(unit, retreatCity.tile);
          },
        });

        // Remove this unit from consideration for other tasks
        const index = militaryUnits.indexOf(unit);
        if (index > -1) {
          militaryUnits.splice(index, 1);
        }
      }
    }

    // Second priority: Defend our cities under threat
    const citiesUnderThreat = this.findCitiesUnderThreat();
    for (const city of citiesUnderThreat) {
      // Calculate how many defenders we need
      const threatLevel = this.assessThreatLevel(city);
      const neededDefenders = Math.max(2, Math.min(5, threatLevel));

      // Find available units to defend this city
      const availableDefenders = militaryUnits.filter(
        (unit) =>
          unit.order !== "go" &&
          this.estimateDistance(unit.tile, city.tile) < 10
      );

      // Sort by distance to city
      availableDefenders.sort(
        (a, b) =>
          this.estimateDistance(a.tile, city.tile) -
          this.estimateDistance(b.tile, city.tile)
      );

      // Assign defenders up to needed amount
      for (
        let i = 0;
        i < Math.min(neededDefenders, availableDefenders.length);
        i++
      ) {
        const unit = availableDefenders[i];
        const defenders = cityDefenders.get(city) || [];
        defenders.push(unit);
        cityDefenders.set(city, defenders);

        this.operations.push({
          group: "unit",
          entityId: unit.id,
          focus: "military",
          priority: this.PRIORITY.CITY_DEFENSE,
          perform: () => {
            unit.path = findPath(unit, city.tile);
          },
        });

        // Remove this unit from consideration for other tasks
        const index = militaryUnits.indexOf(unit);
        if (index > -1) {
          militaryUnits.splice(index, 1);
        }
      }
    }

    // Third priority: Attack nearby enemy units
    for (const enemyUnit of enemyUnits) {
      // Find the closest military unit to attack this enemy
      const availableAttackers = militaryUnits.filter(
        (unit) =>
          unit.order !== "go" &&
          this.estimateDistance(unit.tile, enemyUnit.tile) < 8
      );

      if (availableAttackers.length > 0) {
        // Sort by distance to enemy
        availableAttackers.sort(
          (a, b) =>
            this.estimateDistance(a.tile, enemyUnit.tile) -
            this.estimateDistance(b.tile, enemyUnit.tile)
        );

        const attacker = availableAttackers[0];
        this.operations.push({
          group: "unit",
          entityId: attacker.id,
          focus: "military",
          priority: this.PRIORITY.ATTACK_NEARBY_ENEMY,
          perform: () => {
            attacker.path = findPath(attacker, enemyUnit.tile);
          },
        });

        // Remove this unit from consideration for other tasks
        const index = militaryUnits.indexOf(attacker);
        if (index > -1) {
          militaryUnits.splice(index, 1);
        }
      }
    }

    // Fourth priority: Standard city defense
    for (const city of this.player.cities) {
      const defenders = cityDefenders.get(city) || [];

      // Ensure each city has at least minimum defenders
      const availableDefenders = militaryUnits.filter(
        (unit) =>
          unit.order !== "go" &&
          this.estimateDistance(unit.tile, city.tile) < 12
      );

      // Sort by distance to city
      availableDefenders.sort(
        (a, b) =>
          this.estimateDistance(a.tile, city.tile) -
          this.estimateDistance(b.tile, city.tile)
      );

      // Assign defenders up to minimum amount
      const neededDefenders = Math.max(
        0,
        this.UNITS_PER_CITY - defenders.length
      );
      for (
        let i = 0;
        i < Math.min(neededDefenders, availableDefenders.length);
        i++
      ) {
        const unit = availableDefenders[i];
        defenders.push(unit);
        cityDefenders.set(city, defenders);

        this.operations.push({
          group: "unit",
          entityId: unit.id,
          focus: "military",
          priority: this.PRIORITY.CITY_DEFENSE - 50, // Lower priority than threatened cities
          perform: () => {
            unit.path = findPath(unit, city.tile);
          },
        });

        // Remove this unit from consideration for other tasks
        const index = militaryUnits.indexOf(unit);
        if (index > -1) {
          militaryUnits.splice(index, 1);
        }
      }
    }

    // Fifth priority: Plan invasions of enemy cities
    if (
      enemyCities.length > 0 &&
      militaryUnits.length >= this.MIN_INVASION_FORCE
    ) {
      // Filter cities that are close enough to invade
      const invasionTargets = enemyCities.filter((city) => {
        // Find the average position of our military units
        const avgX =
          militaryUnits.reduce((sum, unit) => sum + unit.tile.x, 0) /
          militaryUnits.length;
        const avgY =
          militaryUnits.reduce((sum, unit) => sum + unit.tile.y, 0) /
          militaryUnits.length;

        // Calculate distance from our military center to this city
        const dx = Math.abs(city.tile.x - avgX);
        const dy = Math.abs(city.tile.y - avgY);
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance <= this.MAX_INVASION_DISTANCE;
      });

      if (invasionTargets.length > 0) {
        // Choose the closest target
        const targetCity = invasionTargets.sort((a, b) => {
          const avgX =
            militaryUnits.reduce((sum, unit) => sum + unit.tile.x, 0) /
            militaryUnits.length;
          const avgY =
            militaryUnits.reduce((sum, unit) => sum + unit.tile.y, 0) /
            militaryUnits.length;

          const distA = Math.sqrt(
            Math.pow(a.tile.x - avgX, 2) + Math.pow(a.tile.y - avgY, 2)
          );

          const distB = Math.sqrt(
            Math.pow(b.tile.x - avgX, 2) + Math.pow(b.tile.y - avgY, 2)
          );

          return distA - distB;
        })[0];

        // Prepare invasion force
        const invasionForce = militaryUnits.slice(
          0,
          Math.min(militaryUnits.length, this.MIN_INVASION_FORCE + 2)
        );
        invasionForces.set(targetCity, invasionForce);

        // Calculate rally point near the target city
        const rallyPoint = this.findRallyPoint(
          targetCity.tile,
          invasionForce[0].tile
        );

        // Send units to rally point first
        for (const unit of invasionForce) {
          this.operations.push({
            group: "unit",
            entityId: unit.id,
            focus: "military",
            priority: this.PRIORITY.CITY_INVASION,
            perform: () => {
              // First path to rally point, then to city
              unit.path = findPath(unit, rallyPoint);
              // In a real implementation, you'd want to check when all units arrive
              // at the rally point before proceeding to the target
            },
          });

          // Remove this unit from consideration for other tasks
          const index = militaryUnits.indexOf(unit);
          if (index > -1) {
            militaryUnits.splice(index, 1);
          }
        }
      }
    }

    // Schedule production of new military units if needed
    for (const city of this.player.citiesWithoutProduction) {
      const defenders = cityDefenders.get(city) || [];

      // If city needs more defenders and doesn't have production, build military units
      if (defenders.length < this.UNITS_PER_CITY) {
        const unitDef = this.chooseUnitDef(city);
        if (unitDef) {
          this.operations.push({
            group: "city-produce",
            entityId: city.id,
            focus: "military",
            priority: this.PRIORITY.PRODUCE_MILITARY,
            perform: () => {
              city.produce(unitDef);
            },
          });
        }
      }
    }

    return this.operations;
  }

  private chooseUnitDef(city: CityCore): UnitDefinition | null {
    // Check for naval units if coastal
    const isCoastal = city.tile.neighbours.some((tile) => tile.isWater);

    // Randomly choose between land and naval units if coastal
    if (isCoastal && Math.random() > 0.7) {
      const navalUnit = getUnitById("unit_tireme");
      if (city.canProduce(navalUnit)) {
        return navalUnit;
      }
    }

    // Default to warrior
    const warrior = getUnitById("unit_warrior");
    if (city.canProduce(warrior)) {
      return warrior;
    }

    return null;
  }

  private findEnemyCities(): CityCore[] {
    const result: CityCore[] = [];

    // Find enemy cities in discovered tiles
    for (const tile of this.player.exploredTiles) {
      if (tile.city && tile.city.player !== this.player) {
        result.push(tile.city);
      }
    }

    return result;
  }

  private estimateDistance(from: TileCore, to: TileCore): number {
    // Simple manhattan distance approximation for hex grid
    const dx = Math.abs(to.x - from.x);
    const dy = Math.abs(to.y - from.y);
    return dx + dy;
  }

  private findEnemyUnits(): UnitCore[] {
    const result: UnitCore[] = [];

    // Find enemy units in discovered tiles
    for (const tile of this.player.exploredTiles) {
      if (tile.units.length > 0) {
        for (const unit of tile.units) {
          if (
            unit.player !== this.player &&
            unit.definition.trait === UnitTrait.military
          ) {
            result.push(unit);
          }
        }
      }
    }

    return result;
  }

  private findCitiesUnderThreat(): CityCore[] {
    const result: CityCore[] = [];
    const enemyUnits = this.findEnemyUnits();

    // Check each city for nearby enemy units
    for (const city of this.player.cities) {
      let threatCount = 0;

      for (const enemyUnit of enemyUnits) {
        const distance = this.estimateDistance(city.tile, enemyUnit.tile);

        // Enemy units within threatening distance
        if (distance < 5) {
          threatCount++;
        }
      }

      if (threatCount > 0) {
        result.push(city);
      }
    }

    return result;
  }

  private assessThreatLevel(city: CityCore): number {
    const enemyUnits = this.findEnemyUnits();
    let threatLevel = 0;

    for (const enemyUnit of enemyUnits) {
      const distance = this.estimateDistance(city.tile, enemyUnit.tile);

      // Closer units are more threatening
      if (distance < 3) {
        threatLevel += 3;
      } else if (distance < 5) {
        threatLevel += 1;
      }
    }

    return threatLevel;
  }

  private findRallyPoint(targetTile: TileCore, originTile: TileCore): TileCore {
    // Find a tile that's in the direction of the target, but about 3 tiles away
    const dx = targetTile.x - originTile.x;
    const dy = targetTile.y - originTile.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If already close, just use target's adjacent tile
    if (distance <= 4) {
      // Find a neighboring tile that's not water
      for (const neighbor of targetTile.neighbours) {
        if (!neighbor.isWater && !neighbor.city) {
          return neighbor;
        }
      }
      return targetTile;
    }

    // Direction vector normalized and scaled to 3 units away from target
    const scale = 3 / distance;
    const rallyX = Math.round(targetTile.x + dx * scale);
    const rallyY = Math.round(targetTile.y + dy * scale);

    // Find a tile near this calculated position
    let closestTile = targetTile;
    let closestDistance = Number.MAX_VALUE;

    for (const tile of this.player.exploredTiles) {
      if (tile.isWater || tile.city) continue;

      const tileDx = tile.x - rallyX;
      const tileDy = tile.y - rallyY;
      const tileDistance = Math.sqrt(tileDx * tileDx + tileDy * tileDy);

      if (tileDistance < closestDistance) {
        closestDistance = tileDistance;
        closestTile = tile;
      }
    }

    return closestTile;
  }

  private findClosestFriendlyCity(fromTile: TileCore): CityCore | null {
    if (this.player.cities.length === 0) {
      return null;
    }

    let closestCity = this.player.cities[0];
    let closestDistance = this.estimateDistance(fromTile, closestCity.tile);

    for (let i = 1; i < this.player.cities.length; i++) {
      const city = this.player.cities[i];
      const distance = this.estimateDistance(fromTile, city.tile);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCity = city;
      }
    }

    return closestCity;
  }
}
