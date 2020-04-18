import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Renderer } from '../renderer';
import { Game } from '../game/game';
import { Camera } from '../renderer/camera';
import { SimplexMapGenerator } from '../map-generators/simplex';
import { Player } from '../game/player';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss'],
})
export class GameCanvasComponent implements AfterViewInit {
  renderer: Renderer;

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor(public game: Game) {}

  ngOnInit(): void {
    const generator = new SimplexMapGenerator(10);
    const map = generator.generate(40, 30);

    const human_player = new Player('human');
    this.game.players.push();
    this.game.start(map);

    this.game.unitsManager.spawn(
      'scout',
      generator.getStartingLocations()[0],
      human_player
    );
  }

  ngAfterViewInit() {
    this.game.camera = new Camera(this.game);

    this.game.renderer.setCanvas(this.canvas.nativeElement);

    this.game.camera.moveToTile(
      Math.floor(this.game.map.width / 2),
      Math.floor(this.game.map.height / 2)
    );
  }
}
