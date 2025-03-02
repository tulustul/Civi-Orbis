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

  plan() {
    this.operations = [];

    const militaryUnits = this.player.units.filter(
      (unit) =>
        unit.definition.trait === UnitTrait.military && unit.parent === null
    );

    // Find enemy cities to attack
    const enemyCities = this.findEnemyCities();
    const cityDefenders = new Map<CityCore, UnitCore[]>();

    // Assign defenders to our cities
    for (const city of this.player.cities) {
      cityDefenders.set(city, []);
    }

    // First, assign existing military units to defense or attack
    for (const unit of militaryUnits) {
      // Skip units with existing orders
      if (unit.order === "go") {
        continue;
      }

      // Decide whether to use this unit for attack or defense
      if (enemyCities.length > 0 && Math.random() > 0.5) {
        // Find closest enemy city to attack
        const targetCity = this.findClosestEnemyCity(unit.tile, enemyCities);
        if (targetCity) {
          this.operations.push({
            group: "unit",
            entityId: unit.id,
            focus: "military",
            priority: 100,
            perform: () => {
              unit.path = findPath(unit, targetCity.tile);
            },
          });
        }
      } else {
        // Defend our closest city
        const cityToDefend = this.findClosestFriendlyCity(unit.tile);
        if (cityToDefend) {
          const defenders = cityDefenders.get(cityToDefend) || [];
          defenders.push(unit);
          cityDefenders.set(cityToDefend, defenders);
          this.operations.push({
            group: "unit",
            entityId: unit.id,
            focus: "military",
            priority: 100,
            perform: () => {
              unit.path = findPath(unit, cityToDefend.tile);
            },
          });
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
            priority: 100,
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

  private findClosestEnemyCity(
    fromTile: TileCore,
    enemyCities: CityCore[]
  ): CityCore | null {
    if (enemyCities.length === 0) {
      return null;
    }

    let closestCity = enemyCities[0];
    let closestDistance = this.estimateDistance(fromTile, closestCity.tile);

    for (let i = 1; i < enemyCities.length; i++) {
      const city = enemyCities[i];
      const distance = this.estimateDistance(fromTile, city.tile);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCity = city;
      }
    }

    return closestCity;
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

  private estimateDistance(from: TileCore, to: TileCore): number {
    // Simple manhattan distance approximation for hex grid
    const dx = Math.abs(to.x - from.x);
    const dy = Math.abs(to.y - from.y);
    return dx + dy;
  }
}
