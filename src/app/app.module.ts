import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameCanvasComponent } from "./game-canvas/game-canvas.component";
import { UnitPanelComponent } from "./ui/unit-panel/unit-panel.component";
import { Game } from "./game/game";
import { NextTurnButtonComponent } from "./ui/next-turn-button/next-turn-button.component";
import { GameInfoComponent } from "./ui/game-info/game-info.component";
import { DebugComponent } from "./ui/debug/debug.component";
import { TurnCounterComponent } from "./ui/turn-counter/turn-counter.component";
import { EditorComponent } from "./ui/editor/editor.component";
import { UIState } from "./ui/ui-state";
import { TabsComponent, TabComponent } from "./ui/widgets/tabs";
import { TileEditorComponent } from "./ui/editor/tile-editor/tile-editor.component";
import { RadioComponent } from "./ui/widgets/radio/radio.component";
import { MultiselectComponent } from "./ui/widgets/multiselect/multiselect.component";
import { ToggleComponent } from "./ui/widgets/toggle/toggle.component";
import { TilePaintingComponent } from "./ui/editor/tile-painting/tile-painting.component";
import { GameMenuComponent } from "./ui/game-menu/game-menu.component";
import { SavesListComponent } from "./ui/game-menu/saves-list/saves-list.component";
import { SaveViewComponent } from "./ui/game-menu/save-view/save-view.component";
import { LoadViewComponent } from "./ui/game-menu/load-view/load-view.component";
import { MainMenuViewComponent } from "./ui/game-menu/main-menu-view/main-menu-view.component";
import { NewGameViewComponent } from "./ui/game-menu/new-game-view/new-game-view.component";
import { UnitEditorComponent } from "./ui/editor/unit-editor/unit-editor.component";
import { CityEditorComponent } from "./ui/editor/city-editor/city-editor.component";
import { CitiesLayerComponent } from './ui/cities-layer/cities-layer.component';
import { CityInfoComponent } from './ui/cities-layer/city-info/city-info.component';
import { CityViewComponent } from './ui/city-view/city-view.component';
import { TurnsPipe } from './ui/turns.pipe';

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
    ToggleComponent,
    TilePaintingComponent,
    GameMenuComponent,
    SavesListComponent,
    SaveViewComponent,
    LoadViewComponent,
    MainMenuViewComponent,
    NewGameViewComponent,
    UnitEditorComponent,
    CityEditorComponent,
    CitiesLayerComponent,
    CityInfoComponent,
    CityViewComponent,
    TurnsPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [Game, UIState],
  bootstrap: [AppComponent],
})
export class AppModule {}
