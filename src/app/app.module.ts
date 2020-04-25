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
import { TurnCounterComponent } from './ui/turn-counter/turn-counter.component';
import { EditorComponent } from './ui/editor/editor.component';
import { UIStateService } from './ui/ui-state.service';
import { TabsComponent, TabComponent } from './ui/widgets/tabs';
import { TileEditorComponent } from './ui/editor/tile-editor/tile-editor.component';
import { RadioComponent } from './ui/widgets/radio/radio.component';
import { MultiselectComponent } from './ui/widgets/multiselect/multiselect.component';
import { TilePaintingComponent } from './ui/editor/tile-painting/tile-painting.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCanvasComponent,
    UnitPanelComponent,
    NextTurnButtonComponent,
    GameInfoComponent,
    DebugComponent,
    TurnCounterComponent,
    EditorComponent,
    TabsComponent,
    TabComponent,
    TileEditorComponent,
    RadioComponent,
    MultiselectComponent,
    TilePaintingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [Game, UIStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
