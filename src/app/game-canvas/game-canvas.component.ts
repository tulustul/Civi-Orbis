import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

import { Game } from '../game/game';
import { Camera } from '../renderer/camera';
import { SimplexMapGenerator } from '../map-generators/simplex';
import { Player, PlayerType } from '../game/player';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss']
})
export class GameCanvasComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor(public game: Game) {}

  ngOnInit(): void {
    const generator = new SimplexMapGenerator(10);
    const map = generator.generate(100, 80);
    map.precomputeMovementCosts();

    const humanPlayer = new Player(PlayerType.human);
    this.game.players.push(humanPlayer);

    this.game.unitsManager.spawn(
      'scout',
      generator.getStartingLocations()[0],
      humanPlayer
    );

    this.game.start(map);
  }

  ngAfterViewInit() {
    this.game.camera = new Camera(this.game);

    this.game.renderer.setCanvas(this.canvas.nativeElement);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.game.renderer.resize(window.innerWidth, window.innerHeight);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.game.controls.onKeyDown(event);
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.game.controls.onKeyUp(event);
  }
}
