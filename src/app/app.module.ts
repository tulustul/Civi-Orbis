import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { UnitPanelComponent } from './ui/unit-panel/unit-panel.component';
import { Game } from './game/game';
import { NextTurnButtonComponent } from './ui/next-turn-button/next-turn-button.component';
import { GameInfoComponent } from './ui/game-info/game-info.component';
import { DebugComponent } from './ui/debug/debug.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCanvasComponent,
    UnitPanelComponent,
    NextTurnButtonComponent,
    GameInfoComponent,
    DebugComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [Game],
  bootstrap: [AppComponent]
})
export class AppModule {}
