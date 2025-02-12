import { Container } from "pixi.js";
import { Area } from "./area";
import { programs as suppliesPrograms } from "@/renderer/shaders/supplies-shaders";
import { mapUi } from "@/ui/mapUi";
import { game } from "@/api";
import { City } from "@/api/city";
import { CityDetails } from "@/api/city-details";
import { UnitDetails } from "@/api/unit-details";
import { UnitTrait } from "@/core/data.interface";

export class AreasDrawer {
  unitRangeArea: Area;
  cityRangeArea: Area;
  cityBordersOnlyArea: Area;
  cityWorkedTilesArea: Area;
  cityNotWorkedTilesArea: Area;
  editorArea: Area;
  suppliesRangeArea: Area;

  constructor(private container: Container) {
    this.unitRangeArea = new Area({
      color: 0xddffdd,
      container: this.container,
      backgroundOpacity: 0.15,
      borderShadow: 0.4,
      borderSize: 0.0,
      borderShadowStrength: 2,
      visibleOnWater: true,
    });

    this.cityRangeArea = new Area({
      color: 0xffffff,
      container: this.container,
      backgroundOpacity: 0.2,
      borderShadow: 0.3,
      borderSize: 0.1,
      borderShadowStrength: 1.2,
      visibleOnWater: false,
    });

    this.cityBordersOnlyArea = new Area({
      color: 0xffffff,
      container: this.container,
      backgroundOpacity: 0,
      borderShadow: 0.3,
      borderSize: 0.1,
      borderShadowStrength: 1.2,
      visibleOnWater: false,
    });

    this.cityWorkedTilesArea = new Area({
      color: 0xffa001,
      container: this.container,
      backgroundOpacity: 0.2,
      borderShadow: 0.8,
      borderSize: 0,
      borderShadowStrength: 1,
      visibleOnWater: true,
    });

    this.cityNotWorkedTilesArea = new Area({
      color: 0xffffff,
      container: this.container,
      backgroundOpacity: 0.2,
      borderShadow: 0.3,
      borderSize: 0,
      borderShadowStrength: 1.5,
      visibleOnWater: false,
    });

    this.editorArea = new Area({
      color: 0xffffff,
      container: this.container,
      backgroundOpacity: 0.25,
      borderShadow: 0.5,
      borderSize: 0.05,
      borderShadowStrength: 1,
      visibleOnWater: true,
    });

    this.suppliesRangeArea = new Area({
      color: 0xffffff,
      container: this.container,
      backgroundOpacity: 0.25,
      borderShadow: 0.5,
      borderSize: 0.05,
      borderShadowStrength: 1,
      visibleOnWater: true,
      programs: suppliesPrograms,
    });

    mapUi.selectedCity$.subscribe((city) => this.onSelectedCity(city));
    mapUi.hoveredCity$.subscribe((city) => this.onHoveredCity(city));
    mapUi.selectedUnit$.subscribe((unit) => this.onSelectedUnit(unit));
  }

  destroy() {
    this.clear();
    this.container.destroy();
  }

  clear() {
    this.editorArea.clear();
    this.cityRangeArea.clear();
    this.unitRangeArea.clear();
    this.cityBordersOnlyArea.clear();
    this.cityWorkedTilesArea.clear();
    this.cityNotWorkedTilesArea.clear();
  }

  private async onHoveredCity(city: City | null) {
    if (!city) {
      this.cityWorkedTilesArea.clear();
      this.cityNotWorkedTilesArea.clear();
      this.cityBordersOnlyArea.clear();
      this.cityRangeArea.clear();
      return;
    }

    if (city.player.id === game.state?.trackedPlayer.id) {
      const data = await city.getWorkTiles();
      this.cityWorkedTilesArea.setTiles(data.workedTiles);
      this.cityNotWorkedTilesArea.setTiles(data.notWorkedTiles);
      this.cityBordersOnlyArea.setTiles(
        data.notWorkedTiles.concat(data.workedTiles),
      );
    } else {
      const tiles = await city.getRange();
      this.cityRangeArea.setTiles(tiles);
    }
  }

  private async onSelectedCity(city: CityDetails | null) {
    if (city) {
      this.cityRangeArea.setTiles(Array.from(city.tiles));
    } else {
      this.cityRangeArea.clear();
    }
  }

  private async onSelectedUnit(unit: UnitDetails | null) {
    if (!unit) {
      this.unitRangeArea.clear();
      return;
    }

    if (
      unit.definition.trait === UnitTrait.military ||
      unit.definition.trait === UnitTrait.supply
    ) {
      unit.player.getSuppliedTiles().then((tiles) => {
        this.suppliesRangeArea.setTiles(tiles);
      });
    }

    unit.getRange().then((tiles) => this.unitRangeArea.setTiles(tiles));
  }
}
