import { Component, HostListener, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { GameApi } from "src/app/api";
import { TileDetails } from "src/app/api/tile-details";
import { MapUi } from "../map-ui";

@Component({
  selector: "app-tile-tooltip",
  templateUrl: "./tile-tooltip.component.html",
  styleUrls: ["./tile-tooltip.component.scss"],
})
export class TileTooltipComponent implements OnInit {
  tileDetailsVisible$ = this.mapUi.hoveredTile$.pipe(debounceTime(1200));

  tileDetails: TileDetails | null = null;

  x = 0;
  y = 0;

  constructor(private game: GameApi, private mapUi: MapUi) {}

  ngOnInit(): void {
    this.tileDetailsVisible$.subscribe(async (tile) => {
      if (!tile) {
        return;
      }
      this.tileDetails = await this.game.state!.map.getTileDetails(
        tile,
        this.game.state!.trackedPlayer.id,
      );
    });

    this.mapUi.hoveredTile$.subscribe((tile) => {
      this.tileDetails = null;
    });
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.x = event.x;
    this.y = event.y;
  }
}
