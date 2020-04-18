import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { UnitPanelComponent } from './ui/unit-panel/unit-panel.component';
import { Game } from './game/game';
import { NextTurnButtonComponent } from './ui/next-turn-button/next-turn-button.component';
import { GameInfoComponent } from './ui/game-info/game-info.component';

@NgModule({
  declarations: [AppComponent, GameCanvasComponent, UnitPanelComponent, NextTurnButtonComponent, GameInfoComponent],
  imports: [BrowserModule],
  providers: [Game],
  bootstrap: [AppComponent],
})
export class AppModule {}
