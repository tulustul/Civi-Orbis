(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es2015.worker.js"

/***/ }),

/***/ "./src/app/api/change-handlers.ts":
/*!****************************************!*\
  !*** ./src/app/api/change-handlers.ts ***!
  \****************************************/
/*! exports provided: initChangeHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChangeHandlers", function() { return initChangeHandlers; });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/app/api/unit.ts");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city */ "./src/app/api/city.ts");
/* harmony import */ var _tracked_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracked-player */ "./src/app/api/tracked-player.ts");
/* harmony import */ var _internal_changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/changes */ "./src/app/api/internal/changes.ts");




const HANDLERS = {
    "tiles.updated": onTilesUpdate,
    "unit.updated": onUnitUpdate,
    "unit.destroyed": onUnitDestroyed,
    "city.updated": onCityUpdate,
    "game.turn": onTurn,
    "area.destroyed": onAreaDestroyed,
    "area.tilesAdded": onAreaTilesAdded,
    "area.tilesRemoved": onAreaTilesRemoved,
    "trackedPlayer.set": onTrackedPlayerSet,
    "trackedPlayer.yields": onPlayerYieldsUpdate,
    "trackedPlayer.tilesExplored": onTilesExplored,
};
function initChangeHandlers() {
    Object(_internal_changes__WEBPACK_IMPORTED_MODULE_3__["setChangesHandlers"])(HANDLERS);
}
function onUnitUpdate(state, unitChanneled) {
    const unit = state.unitsMap.get(unitChanneled.id);
    if (unit) {
        unit.update(state, unitChanneled);
        state["_unitUpdated$"].next(unit);
    }
    else {
        const newUnit = new _unit__WEBPACK_IMPORTED_MODULE_0__["Unit"](state, unitChanneled);
        state.units.push(newUnit);
        state["_unitSpawned$"].next(newUnit);
    }
}
function onUnitDestroyed(state, id) {
    const unit = state.unitsMap.get(id);
    if (unit) {
        unit.destroy(state);
        state["_unitDestroyed$"].next(unit);
    }
}
function onCityUpdate(state, cityChanneled) {
    const city = state.citiesMap.get(cityChanneled.id);
    if (city) {
        city.update(cityChanneled);
        state["_cityUpdated$"].next(city);
    }
    else {
        const newCity = new _city__WEBPACK_IMPORTED_MODULE_1__["City"](state, cityChanneled);
        state.cities.push(newCity);
        state["_citySpawned$"].next(newCity);
    }
}
function onTurn(state, turn) {
    state["_turn$"].next(turn);
}
function onAreaDestroyed(state, turn) {
    state["_turn$"].next(turn);
}
function onAreaTilesAdded(state, data) {
    const area = state.areasMap.get(data.id);
    if (!area) {
        return;
    }
    area.addTiles(state.map.getTilesFromIds(data.tiles));
}
function onAreaTilesRemoved(state, data) {
    const area = state.areasMap.get(data.id);
    if (!area) {
        return;
    }
    area.removeTiles(state.map.getTilesFromIds(data.tiles));
}
function onPlayerYieldsUpdate(state, yields) {
    state.trackedPlayer.yields = yields;
}
function onTilesExplored(state, tilesIds) {
    const tiles = tilesIds.map((id) => state.map.tilesMap.get(id));
    state.trackedPlayer.exploreTiles(tiles);
    state["_tilesExplored$"].next(tiles);
}
function onTrackedPlayerSet(state, trackedPlayer) {
    state.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_2__["TrackedPlayer"](state, trackedPlayer);
    state["_trackedPlayer$"].next(state.trackedPlayer);
}
function onTilesUpdate(state, tilesChanneled) {
    const tiles = [];
    for (const tileChanneled of tilesChanneled) {
        const tile = state.map.tilesMap.get(tileChanneled.id);
        Object.assign(tile, tileChanneled);
        if (tileChanneled.areaOf !== null) {
            tile.areaOf = state.citiesMap.get(tileChanneled.areaOf);
        }
        if (tileChanneled.cityId !== null) {
            tile.city = state.citiesMap.get(tileChanneled.cityId);
        }
        tiles.push(tile);
    }
    state["_tilesUpdated$"].next(tiles);
}


/***/ }),

/***/ "./src/app/api/city-details.ts":
/*!*************************************!*\
  !*** ./src/app/api/city-details.ts ***!
  \*************************************/
/*! exports provided: CityDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetails", function() { return CityDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/buildings */ "./src/app/core/buildings.ts");
/* harmony import */ var _core_idle_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/idle-product */ "./src/app/core/idle-product.ts");
/* harmony import */ var _core_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/unit */ "./src/app/core/unit.ts");
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");





class CityDetails {
    constructor(game, city) {
        this.game = game;
        this.id = city.id;
        this.update(city);
        this.citySimple = game.citiesMap.get(city.id);
    }
    update(city) {
        this.name = city.name;
        this.size = city.size;
        this.tile = this.game.map.tilesMap.get(city.tileId);
        this.player = this.game.playersMap.get(city.playerId);
        this.totalFood = city.totalFood;
        this.foodToGrow = city.foodToGrow;
        this.turnsToGrow = city.turnsToGrow;
        this.totalProduction = city.totalProduction;
        this.turnsToProductionEnd = city.turnsToProductionEnd;
        this.product = null;
        if (city.productId && city.productType) {
            let defition;
            if (city.productType === "building") {
                defition = _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(city.productId);
            }
            else if (city.productType === "unit") {
                defition = _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(city.productId);
            }
            else {
                defition = _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(city.productId);
            }
            this.product = {
                type: city.productType,
                productDefinition: defition,
            };
        }
        this.foodConsumed = city.foodConsumed;
        this.totalCulture = city.totalCulture;
        this.cultureToExpand = city.cultureToExpand;
        this.tileYields = city.tileYields;
        this.yields = city.yields;
        this.perTurn = city.perTurn;
        this.buildings = city.buildingsIds.map((id) => _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id));
        this.buildingsIds = new Set(city.buildingsIds);
        this.tiles = new Set(city.tiles.map((id) => this.game.map.tilesMap.get(id)));
        this.workedTiles = new Set(city.workedTiles.map((id) => this.game.map.tilesMap.get(id)));
        this.availableBuildings = city.availableBuildings.map((id) => _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id));
        this.availableIdleProducts = city.availableIdleProducts.map((id) => _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(id));
        this.availableUnits = city.availableUnits.map((id) => _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(id));
        this.disabledBuildings = new Set(city.disabledBuildings.map((id) => _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id)));
        this.disabledUnits = new Set(city.disabledUnits.map((id) => _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(id)));
        this.disabledIdleProducts = new Set(city.disabledIdleProducts.map((id) => _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(id)));
    }
    getTurnsToProduce(product) {
        return Math.ceil(product.productionCost / this.yields.production);
    }
    get turnsToExpand() {
        const remainingCulture = this.cultureToExpand - this.totalCulture;
        return Math.ceil(remainingCulture / this.perTurn.culture);
    }
    workTile(tile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.workTile", {
                cityId: this.id,
                tileId: tile.id,
            });
            this.update(cityData);
        });
    }
    unworkTile(tile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.unworkTile", {
                cityId: this.id,
                tileId: tile.id,
            });
            this.update(cityData);
        });
    }
    produceBuilding(building) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                cityId: this.id,
                type: "building",
                productId: building.id,
            });
            this.update(cityData);
        });
    }
    produceUnit(unit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                cityId: this.id,
                type: "unit",
                productId: unit.id,
            });
            this.update(cityData);
        });
    }
    workOnIdleProduct(idleProduct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                cityId: this.id,
                type: "idleProduct",
                productId: idleProduct.id,
            });
            this.update(cityData);
        });
    }
    optimizeYields() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cityData = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.optimizeYields", this.id);
            this.update(cityData);
        });
    }
    getNotWorkedTiles() {
        const notWorkedTiles = [];
        for (const tile of this.tiles) {
            if (!this.workedTiles.has(tile)) {
                notWorkedTiles.push(tile);
            }
        }
        return notWorkedTiles;
    }
}


/***/ }),

/***/ "./src/app/api/city.ts":
/*!*****************************!*\
  !*** ./src/app/api/city.ts ***!
  \*****************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");


class City {
    constructor(game, city) {
        this.game = game;
        this.id = city.id;
        this.tile = game.map.tilesMap.get(city.tileId);
        this.tile.city = this;
        this.update(city);
        game.citiesMap.set(this.id, this);
    }
    update(city) {
        this.name = city.name;
        this.size = city.size;
        this.player = this.game.playersMap.get(city.playerId);
        this.totalFood = city.totalFood;
        this.foodToGrow = city.foodToGrow;
        this.foodPerTurn = city.foodPerTurn;
        this.turnsToGrow = city.turnsToGrow;
        this.totalProduction = city.totalProduction;
        this.productionRequired = city.productionRequired;
        this.productionPerTurn = city.productionPerTurn;
        this.turnsToProductionEnd = city.turnsToProductionEnd;
        this.productName = city.productName;
    }
    getRange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ids = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_1__["makeCommand"])("city.getRange", this.id);
            return ids.map((id) => this.game.map.tilesMap.get(id));
        });
    }
    getWorkTiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_1__["makeCommand"])("city.getWorkTiles", this.id);
            return {
                workedTiles: data.workedTiles.map((id) => this.game.map.tilesMap.get(id)),
                notWorkedTiles: data.notWorkedTiles.map((id) => this.game.map.tilesMap.get(id)),
            };
        });
    }
}


/***/ }),

/***/ "./src/app/api/game.ts":
/*!*****************************!*\
  !*** ./src/app/api/game.ts ***!
  \*****************************/
/*! exports provided: GameApi, gameApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameApi", function() { return GameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameApi", function() { return gameApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/app/api/state.ts");





class GameApi {
    constructor() {
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.state$ = this._state$.asObservable();
        this.init$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((state) => !!state));
        this.stop$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((state) => !state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1));
        this._nextTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.nextTask$ = this._nextTask$.asObservable();
    }
    newGame(mapGeneratorOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state) {
                this._state$.next(null);
            }
            const gameChanneled = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.new", mapGeneratorOptions);
            this._state$.next(new _state__WEBPACK_IMPORTED_MODULE_4__["GameState"](gameChanneled));
            return this._state$.value;
        });
    }
    loadGame(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.state) {
                this._state$.next(null);
            }
            const gameChanneled = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.loadDump", data);
            this._state$.next(new _state__WEBPACK_IMPORTED_MODULE_4__["GameState"](gameChanneled));
            return this._state$.value;
        });
    }
    saveGame() {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.saveDump");
    }
    nextPlayer() {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.nextPlayer");
    }
    get state() {
        return this._state$.value;
    }
    get nextTask() {
        return this._nextTask$.value;
    }
}
const gameApi = new GameApi();


/***/ }),

/***/ "./src/app/api/index.ts":
/*!******************************!*\
  !*** ./src/app/api/index.ts ***!
  \******************************/
/*! exports provided: GameApi, gameApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/listener */ "./src/app/api/internal/listener.ts");
/* harmony import */ var _change_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-handlers */ "./src/app/api/change-handlers.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/app/api/game.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameApi", function() { return _game__WEBPACK_IMPORTED_MODULE_2__["GameApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameApi", function() { return _game__WEBPACK_IMPORTED_MODULE_2__["gameApi"]; });




Object(_internal_listener__WEBPACK_IMPORTED_MODULE_0__["initWorkerListeners"])();
Object(_change_handlers__WEBPACK_IMPORTED_MODULE_1__["initChangeHandlers"])();


/***/ }),

/***/ "./src/app/api/internal/changes.ts":
/*!*****************************************!*\
  !*** ./src/app/api/internal/changes.ts ***!
  \*****************************************/
/*! exports provided: changeHandlers, setChangesHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandlers", function() { return changeHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChangesHandlers", function() { return setChangesHandlers; });
const changeHandlers = new Map();
function setChangesHandlers(handlers) {
    for (const [changeType, handler] of Object.entries(handlers)) {
        changeHandlers.set(changeType, handler);
    }
}


/***/ }),

/***/ "./src/app/api/internal/commander.ts":
/*!*******************************************!*\
  !*** ./src/app/api/internal/commander.ts ***!
  \*******************************************/
/*! exports provided: makeCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCommand", function() { return makeCommand; });
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ "./src/app/api/internal/worker.ts");

function makeCommand(command, data = {}) {
    return new Promise((resolve, reject) => {
        _worker__WEBPACK_IMPORTED_MODULE_0__["awaitingExecutors"].push(resolve);
        _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].postMessage({ command, data });
    });
}


/***/ }),

/***/ "./src/app/api/internal/listener.ts":
/*!******************************************!*\
  !*** ./src/app/api/internal/listener.ts ***!
  \******************************************/
/*! exports provided: initWorkerListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWorkerListeners", function() { return initWorkerListeners; });
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ "./src/app/api/internal/worker.ts");
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changes */ "./src/app/api/internal/changes.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ "./src/app/api/game.ts");



function initWorkerListeners() {
    _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].addEventListener("error", onError, false);
    _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].addEventListener("message", onMessage, false);
}
function onMessage(event) {
    const executor = _worker__WEBPACK_IMPORTED_MODULE_0__["awaitingExecutors"].shift();
    if (!executor) {
        console.error("No awaiting executors but message received.");
        return;
    }
    if (event.data.changes.length && !_game__WEBPACK_IMPORTED_MODULE_2__["gameApi"].state) {
        console.error("Received change events but state is not instantiated yet.");
    }
    else {
        for (const change of event.data.changes) {
            console.debug(`change received: ${change.type}`);
            const handler = _changes__WEBPACK_IMPORTED_MODULE_1__["changeHandlers"].get(change.type);
            if (!handler) {
                console.error(`No handler for change with type "${change.type}"`);
                continue;
            }
            handler(_game__WEBPACK_IMPORTED_MODULE_2__["gameApi"].state, change.data);
        }
    }
    executor(event.data.result);
    _game__WEBPACK_IMPORTED_MODULE_2__["gameApi"]["_nextTask$"].next(event.data.nextTask);
}
function onError(error) {
    console.error(`Webworker error: ${error.message}`);
}


/***/ }),

/***/ "./src/app/api/internal/worker.ts":
/*!****************************************!*\
  !*** ./src/app/api/internal/worker.ts ***!
  \****************************************/
/*! exports provided: worker, awaitingExecutors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return worker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitingExecutors", function() { return awaitingExecutors; });
const worker = new Worker(__webpack__worker__0, );
const awaitingExecutors = [];

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!../../core.worker */ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts")))

/***/ }),

/***/ "./src/app/api/map.ts":
/*!****************************!*\
  !*** ./src/app/api/map.ts ***!
  \****************************/
/*! exports provided: TilesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesMap", function() { return TilesMap; });
/* harmony import */ var _shared_hex_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/hex-math */ "./src/app/shared/hex-math.ts");

class TilesMap {
    constructor(map) {
        this.width = 0;
        this.height = 0;
        this.tiles = [];
        this.tilesMap = new Map();
        this.width = map.width;
        this.height = map.height;
        this.tiles = map.tiles;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.tiles[x][y];
                this.tilesMap.set(tile.id, tile);
                tile.neighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_0__["getTileNeighbours"])(this.tiles, x, y);
                tile.fullNeighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_0__["getTileFullNeighbours"])(this.tiles, x, y);
                tile.units = [];
            }
        }
    }
    preprocess(game) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.tiles[x][y];
                if (tile.areaOf !== null) {
                    tile.areaOf = game.citiesMap.get(tile.areaOf);
                }
            }
        }
    }
    get(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return null;
        }
        return this.tiles[x][y];
    }
    getTilesFromIds(ids) {
        return ids.map((id) => this.tilesMap.get(id));
    }
}


/***/ }),

/***/ "./src/app/api/player.ts":
/*!*******************************!*\
  !*** ./src/app/api/player.ts ***!
  \*******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(player) {
        this.id = player.id;
        this.color = player.color;
        this.cssColor = "#" + this.color.toString(16).padStart(6, "0");
        this.vec4Color = [
            parseInt(this.cssColor[1] + this.cssColor[2], 16) / 255,
            parseInt(this.cssColor[3] + this.cssColor[4], 16) / 255,
            parseInt(this.cssColor[5] + this.cssColor[6], 16) / 255,
            1,
        ];
        this.areaId = player.areaId;
    }
}


/***/ }),

/***/ "./src/app/api/saving.ts":
/*!*******************************!*\
  !*** ./src/app/api/saving.ts ***!
  \*******************************/
/*! exports provided: saveGameData, loadGameData, deleteSaveGame, listSaveGames, exportSave, importSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGameData", function() { return saveGameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGameData", function() { return loadGameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSaveGame", function() { return deleteSaveGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSaveGames", function() { return listSaveGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSave", function() { return exportSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importSave", function() { return importSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const savesKeyPrefix = "saves:";
const listKey = "savesList";
function saveGameData(data, saveName) {
    storeData(saveName, data);
}
function loadGameData(saveName) {
    const data = getSave(saveName);
    if (!data) {
        console.error(`No save with name ${saveName}`);
        return null;
    }
    return data;
}
function deleteSaveGame(saveName) {
    const saveGames = listSaveGames();
    if (!saveGames.includes(saveName)) {
        console.error(`No save with name ${saveName}`);
        return;
    }
    localStorage.removeItem(`${savesKeyPrefix}${saveName}`);
    const index = saveGames.indexOf(saveName);
    saveGames.splice(index, 1);
    saveList(saveGames);
}
function listSaveGames() {
    const data = localStorage.getItem(listKey);
    if (!data) {
        return [];
    }
    return JSON.parse(data) || [];
}
function exportSave(saveName) {
    const data = getSave(saveName);
    if (!data) {
        return;
    }
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${saveName}.json`;
    a.click();
}
function importSave(file) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const extension = ".json";
        let filename = file.name;
        if (!filename.endsWith(extension)) {
            return;
        }
        const originalName = filename.slice(0, -extension.length);
        let name = originalName;
        const saves = listSaveGames();
        let i = 1;
        while (saves.includes(name)) {
            name = `${originalName}_${i++}`;
        }
        const data = yield readFile(file);
        storeData(name, data);
    });
}
// private functions below
function readFile(file) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                if (reader.result) {
                    resolve(reader.result);
                }
                else {
                    reject();
                }
            };
        });
    });
}
function storeData(saveName, data) {
    localStorage.setItem(`${savesKeyPrefix}${saveName}`, data);
    const saveGames = listSaveGames();
    if (!saveGames.includes(saveName)) {
        saveGames.push(saveName);
    }
    saveList(saveGames);
}
function getSave(saveName) {
    return localStorage.getItem(`${savesKeyPrefix}${saveName}`);
}
function saveList(saveGames) {
    localStorage.setItem(listKey, JSON.stringify(saveGames));
}


/***/ }),

/***/ "./src/app/api/state.ts":
/*!******************************!*\
  !*** ./src/app/api/state.ts ***!
  \******************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/app/api/map.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit */ "./src/app/api/unit.ts");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city */ "./src/app/api/city.ts");
/* harmony import */ var _tracked_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracked-player */ "./src/app/api/tracked-player.ts");
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player */ "./src/app/api/player.ts");








class GameState {
    constructor(game) {
        this._turn$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
        this.turn$ = this._turn$.asObservable();
        this.players = [];
        this.units = [];
        this.cities = [];
        this.unitsMap = new Map();
        this.citiesMap = new Map();
        this.areasMap = new Map();
        this.playersMap = new Map();
        this._tilesUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.tilesUpdated$ = this._tilesUpdated$.asObservable();
        this._unitSpawned$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.unitSpawned$ = this._unitSpawned$.asObservable();
        this._unitUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.unitUpdated$ = this._unitUpdated$.asObservable();
        this._unitDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.unitDestroyed$ = this._unitDestroyed$.asObservable();
        this._citySpawned$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.citySpawned$ = this._citySpawned$.asObservable();
        this._cityUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.cityUpdated$ = this._cityUpdated$.asObservable();
        this._cityDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.cityDestroyed$ = this._cityDestroyed$.asObservable();
        this._areaSpawned$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.areaSpawned$ = this._areaSpawned$.asObservable();
        this._areaUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.areaUpdated$ = this._areaUpdated$.asObservable();
        this._areaDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.areaDestroyed$ = this._areaDestroyed$.asObservable();
        this._tilesExplored$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.tilesExplored$ = this._tilesExplored$.asObservable();
        this._trackedPlayer$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.trackedPlayer$ = this._trackedPlayer$.asObservable();
        this._turn$.next(game.turn);
        this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["TilesMap"](game.map);
        this.players = this.restorePlayers(game);
        for (const player of this.players) {
            this.playersMap.set(player.id, player);
        }
        this.units = this.restoreUnits(game);
        this.cities = this.restoreCities(game);
        this.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_4__["TrackedPlayer"](this, game.trackedPlayer);
        this.map.preprocess(this);
    }
    restorePlayers(game) {
        return game.players.map((player) => new _player__WEBPACK_IMPORTED_MODULE_7__["Player"](player));
    }
    restoreUnits(game) {
        return game.units.map((unit) => new _unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](this, unit));
    }
    restoreCities(game) {
        return game.cities.map((city) => new _city__WEBPACK_IMPORTED_MODULE_3__["City"](this, city));
    }
    setTrackedPlayer(playerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("trackedPlayer.set", playerId);
            this.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_4__["TrackedPlayer"](this, data);
            this._trackedPlayer$.next(this.trackedPlayer);
        });
    }
    getUnitDetails(unitId) {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("unit.getDetails", unitId);
    }
    updateTile(tile) {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("tile.update", this.serializeTileToUpdate(tile));
    }
    serializeTileToUpdate(tile) {
        return {
            id: tile.id,
            climate: tile.climate,
            landForm: tile.landForm,
            seaLevel: tile.seaLevel,
            riverParts: tile.riverParts,
            forest: tile.forest,
            wetlands: tile.wetlands,
            improvement: tile.improvement,
            road: tile.road,
        };
    }
    updateTiles(tiles) {
        const data = tiles.map((t) => this.serializeTileToUpdate(t));
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("tile.bulkUpdate", data);
    }
    getCityDetails(cityId) {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("city.getDetails", cityId);
    }
    getAreaTiles(areaId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tileIds = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("area.getTiles", areaId);
            return tileIds.map((id) => this.map.tilesMap.get(id));
        });
    }
    updateUnit(unitId) {
        this._unitUpdated$.next(this.unitsMap.get(unitId));
    }
}


/***/ }),

/***/ "./src/app/api/tracked-player.ts":
/*!***************************************!*\
  !*** ./src/app/api/tracked-player.ts ***!
  \***************************************/
/*! exports provided: TrackedPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackedPlayer", function() { return TrackedPlayer; });
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");

class TrackedPlayer {
    constructor(game, player) {
        this.exploredTiles = new Set();
        this.units = [];
        this.cities = [];
        this.id = player.id;
        this.color = player.color;
        this.exploredTiles = new Set(player.exploredTiles.map((id) => game.map.tilesMap.get(id)));
        this.units = player.units.map((id) => game.unitsMap.get(id));
        this.cities = player.cities.map((id) => game.citiesMap.get(id));
        this.yields = player.yields;
    }
    exploreTiles(tiles) {
        for (const tile of tiles) {
            this.exploredTiles.add(tile);
        }
    }
    revealWorld() {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_0__["makeCommand"])("trackedPlayer.revealWorld");
    }
}


/***/ }),

/***/ "./src/app/api/unit-details.ts":
/*!*************************************!*\
  !*** ./src/app/api/unit-details.ts ***!
  \*************************************/
/*! exports provided: UnitDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetails", function() { return UnitDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/unit */ "./src/app/core/unit.ts");
/* harmony import */ var _internal_commander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/commander */ "./src/app/api/internal/commander.ts");



class UnitDetails {
    constructor(game, unit) {
        this.game = game;
        this.path = null;
        this.id = unit.id;
        this.definition = _core_unit__WEBPACK_IMPORTED_MODULE_1__["UNITS_MAP"].get(unit.definitionId);
        this.update(unit);
    }
    update(unit) {
        this.tile = this.game.map.tilesMap.get(unit.tileId);
        this.player = this.game.playersMap.get(unit.playerId);
        this.actionPointsLeft = unit.actionPointsLeft;
        this.order = unit.order;
        this.path = null;
        if (unit.path) {
            this.path = unit.path.map((turn) => turn.map((id) => this.game.map.tilesMap.get(id)));
        }
    }
    doAction(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.doAction", {
                unitId: this.id,
                action,
            });
            this.update(data);
        });
    }
    canDoAction(action) {
        return true;
    }
    setOrder(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.setOrder", {
                unitId: this.id,
                order,
            });
            this.update(data);
        });
    }
    disband() {
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.disband", this.id);
    }
    findPath(destination) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.findPath", {
                unitId: this.id,
                destinationId: destination.id,
            });
            this.update(data);
        });
    }
    moveAlongPath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.moveAlongPath", this.id);
            this.update(data);
        });
    }
    getRange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ids = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getRange", this.id);
            return ids.map((tileId) => this.game.map.tilesMap.get(tileId));
        });
    }
    getFailedActionRequirements(action) {
        // Returns failed requirements.
        return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getFailedActionRequirements", {
            unitId: this.id,
            action,
        });
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getDetails", this.id);
            this.update(data);
        });
    }
}


/***/ }),

/***/ "./src/app/api/unit.ts":
/*!*****************************!*\
  !*** ./src/app/api/unit.ts ***!
  \*****************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony import */ var _core_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/unit */ "./src/app/core/unit.ts");

class Unit {
    constructor(game, unit) {
        this.id = unit.id;
        this.tile = game.map.tilesMap.get(unit.tileId);
        this.player = game.playersMap.get(unit.playerId);
        this.definition = _core_unit__WEBPACK_IMPORTED_MODULE_0__["UNITS_MAP"].get(unit.definitionId);
        this.tile.units.push(this);
        game.unitsMap.set(this.id, this);
    }
    update(game, unit) {
        const index = this.tile.units.indexOf(this);
        if (index !== -1) {
            this.tile.units.splice(index, 1);
        }
        this.tile = game.map.tilesMap.get(unit.tileId);
        this.tile.units.push(this);
    }
    destroy(game) {
        const index = this.tile.units.indexOf(this);
        if (index !== -1) {
            this.tile.units.splice(index, 1);
        }
        game.unitsMap.delete(this.id);
    }
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _ui_map_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-canvas/game-canvas.component */ "./src/app/game-canvas/game-canvas.component.ts");
/* harmony import */ var _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/game-menu/game-menu.component */ "./src/app/ui/game-menu/game-menu.component.ts");
/* harmony import */ var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/editor/editor.component */ "./src/app/ui/editor/editor.component.ts");
/* harmony import */ var _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/turn-counter/turn-counter.component */ "./src/app/ui/turn-counter/turn-counter.component.ts");
/* harmony import */ var _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/unit-panel/unit-panel.component */ "./src/app/ui/unit-panel/unit-panel.component.ts");
/* harmony import */ var _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-info/game-info.component */ "./src/app/ui/game-info/game-info.component.ts");
/* harmony import */ var _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/player-yields/player-yields.component */ "./src/app/ui/player-yields/player-yields.component.ts");
/* harmony import */ var _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/next-turn-button/next-turn-button.component */ "./src/app/ui/next-turn-button/next-turn-button.component.ts");
/* harmony import */ var _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/minimap/minimap.component */ "./src/app/ui/minimap/minimap.component.ts");
/* harmony import */ var _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/cities-layer/cities-layer.component */ "./src/app/ui/cities-layer/cities-layer.component.ts");
/* harmony import */ var _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/city-view/city-view.component */ "./src/app/ui/city-view/city-view.component.ts");

















function AppComponent_app_game_menu_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-menu");
} }
function AppComponent_ng_container_3_app_editor_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-editor", 3);
} }
function AppComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_3_app_editor_1_Template, 1, 0, "app-editor", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.uiState.editorEnabled$))("ngIfElse", _r2);
} }
function AppComponent_ng_template_5_app_cities_layer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cities-layer");
} }
function AppComponent_ng_template_5_app_city_view_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-city-view", 8);
} if (rf & 2) {
    const city_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", city_r7);
} }
function AppComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_app_cities_layer_0_Template, 1, 0, "app-cities-layer", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-turn-counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_5_app_city_view_3_Template, 1, 1, "app-city-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-unit-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-game-info", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-player-yields", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-next-turn-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-minimap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r3.mapUi.cityLabelsVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r3.uiState.selectedCity$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx_r3.uiState.selectedCity$));
} }
class AppComponent {
    constructor(game, uiState, mapUi) {
        this.game = game;
        this.uiState = uiState;
        this.mapUi = mapUi;
        this.title = "civ";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 6, consts: [[4, "ngIf"], ["gameUiTmpl", ""], ["class", "panel", 4, "ngIf", "ngIfElse"], [1, "panel"], [3, "city", 4, "ngIf"], [1, "panel", "panel-bottom-left-corner"], [1, "panel", "panel-bottom-right-corner"], [1, "panel", "panel-top-left-corner"], [3, "city"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_game_menu_0_Template, 1, 0, "app-game-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 13, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.uiState.menuVisible$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.game.state$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"], _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__["GameMenuComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"], _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_8__["TurnCounterComponent"], _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_9__["UnitPanelComponent"], _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_11__["PlayerYieldsComponent"], _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_12__["NextTurnButtonComponent"], _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_13__["MinimapComponent"], _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_14__["CitiesLayerComponent"], _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_15__["CityViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .panel.panel-top-left-corner[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0FDQUo7QURDSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FDQ047QURFRTtFQUNFLHdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJi5wYW5lbC10b3AtbGVmdC1jb3JuZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiOmhvc3QgY2FudmFzIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgLnBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgLnBhbmVsLnBhbmVsLXRvcC1sZWZ0LWNvcm5lciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG46aG9zdCAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_1__["GameApi"] }, { type: _ui_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"] }, { type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-canvas/game-canvas.component */ "./src/app/game-canvas/game-canvas.component.ts");
/* harmony import */ var _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/unit-panel/unit-panel.component */ "./src/app/ui/unit-panel/unit-panel.component.ts");
/* harmony import */ var _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/next-turn-button/next-turn-button.component */ "./src/app/ui/next-turn-button/next-turn-button.component.ts");
/* harmony import */ var _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-info/game-info.component */ "./src/app/ui/game-info/game-info.component.ts");
/* harmony import */ var _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/debug/debug.component */ "./src/app/ui/debug/debug.component.ts");
/* harmony import */ var _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/turn-counter/turn-counter.component */ "./src/app/ui/turn-counter/turn-counter.component.ts");
/* harmony import */ var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/editor/editor.component */ "./src/app/ui/editor/editor.component.ts");
/* harmony import */ var _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/widgets/tabs */ "./src/app/ui/widgets/tabs/index.ts");
/* harmony import */ var _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/editor/tile-editor/tile-editor.component */ "./src/app/ui/editor/tile-editor/tile-editor.component.ts");
/* harmony import */ var _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/widgets/radio/radio.component */ "./src/app/ui/widgets/radio/radio.component.ts");
/* harmony import */ var _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/widgets/multiselect/multiselect.component */ "./src/app/ui/widgets/multiselect/multiselect.component.ts");
/* harmony import */ var _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/widgets/toggle/toggle.component */ "./src/app/ui/widgets/toggle/toggle.component.ts");
/* harmony import */ var _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/editor/tile-painting/tile-painting.component */ "./src/app/ui/editor/tile-painting/tile-painting.component.ts");
/* harmony import */ var _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/game-menu/game-menu.component */ "./src/app/ui/game-menu/game-menu.component.ts");
/* harmony import */ var _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/game-menu/saves-list/saves-list.component */ "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
/* harmony import */ var _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/game-menu/save-view/save-view.component */ "./src/app/ui/game-menu/save-view/save-view.component.ts");
/* harmony import */ var _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/game-menu/load-view/load-view.component */ "./src/app/ui/game-menu/load-view/load-view.component.ts");
/* harmony import */ var _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/game-menu/main-menu-view/main-menu-view.component */ "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts");
/* harmony import */ var _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/game-menu/new-game-view/new-game-view.component */ "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts");
/* harmony import */ var _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/editor/unit-editor/unit-editor.component */ "./src/app/ui/editor/unit-editor/unit-editor.component.ts");
/* harmony import */ var _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/editor/city-editor/city-editor.component */ "./src/app/ui/editor/city-editor/city-editor.component.ts");
/* harmony import */ var _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/cities-layer/cities-layer.component */ "./src/app/ui/cities-layer/cities-layer.component.ts");
/* harmony import */ var _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/cities-layer/city-info/city-info.component */ "./src/app/ui/cities-layer/city-info/city-info.component.ts");
/* harmony import */ var _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/city-view/city-view.component */ "./src/app/ui/city-view/city-view.component.ts");
/* harmony import */ var _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ui/turns.pipe */ "./src/app/ui/turns.pipe.ts");
/* harmony import */ var _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ui/city-view/work-tiles/work-tiles.component */ "./src/app/ui/city-view/work-tiles/work-tiles.component.ts");
/* harmony import */ var _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ui/widgets/progress-bar/progress-bar.component */ "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
/* harmony import */ var _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ui/button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ui/minimap/minimap.component */ "./src/app/ui/minimap/minimap.component.ts");
/* harmony import */ var _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ui/widgets/tooltip.directive */ "./src/app/ui/widgets/tooltip.directive.ts");
/* harmony import */ var _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ui/widgets/tooltip/tooltip.component */ "./src/app/ui/widgets/tooltip/tooltip.component.ts");
/* harmony import */ var _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ui/bonuses/bonuses.component */ "./src/app/ui/bonuses/bonuses.component.ts");
/* harmony import */ var _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ui/percent-bonus.pipe */ "./src/app/ui/percent-bonus.pipe.ts");
/* harmony import */ var _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ui/product-requirements/product-requirements.component */ "./src/app/ui/product-requirements/product-requirements.component.ts");
/* harmony import */ var _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ui/player-yields/player-yields.component */ "./src/app/ui/player-yields/player-yields.component.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./controls */ "./src/app/controls.ts");
/* harmony import */ var _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ui/next-turn.service */ "./src/app/ui/next-turn.service.ts");
/* harmony import */ var _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./renderer/renderer */ "./src/app/renderer/renderer.ts");
/* harmony import */ var _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ui/map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ui/unit-action-requirements/unit-action-requirements.component */ "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts");
/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./api/game */ "./src/app/api/game.ts");
/* harmony import */ var _core_game__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./core/game */ "./src/app/core/game.ts");
/* harmony import */ var _renderer_camera__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ui/editor/players-editor/players-editor.component */ "./src/app/ui/editor/players-editor/players-editor.component.ts");
/* harmony import */ var _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ui/widgets/spinner/spinner.component */ "./src/app/ui/widgets/spinner/spinner.component.ts");
/* harmony import */ var _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ui/widgets/modal/modal.component */ "./src/app/ui/widgets/modal/modal.component.ts");
/* harmony import */ var _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ui/unit-marker/unit-marker.component */ "./src/app/ui/unit-marker/unit-marker.component.ts");






















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_game__WEBPACK_IMPORTED_MODULE_47__["Game"],
        { provide: _api_game__WEBPACK_IMPORTED_MODULE_46__["GameApi"], useValue: _api_game__WEBPACK_IMPORTED_MODULE_46__["gameApi"] },
        _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__["UIState"],
        _controls__WEBPACK_IMPORTED_MODULE_41__["Controls"],
        _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__["NextTurnService"],
        _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__["GameRenderer"],
        _renderer_camera__WEBPACK_IMPORTED_MODULE_48__["Camera"],
        _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__["MapUi"],
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"],
        _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__["UnitPanelComponent"],
        _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__["NextTurnButtonComponent"],
        _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__["GameInfoComponent"],
        _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__["DebugComponent"],
        _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__["TurnCounterComponent"],
        _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"],
        _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
        _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabComponent"],
        _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__["TileEditorComponent"],
        _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__["RadioComponent"],
        _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"],
        _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__["ToggleComponent"],
        _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__["TilePaintingComponent"],
        _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__["GameMenuComponent"],
        _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__["SavesListComponent"],
        _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__["SaveViewComponent"],
        _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__["LoadViewComponent"],
        _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__["MainMenuViewComponent"],
        _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__["NewGameViewComponent"],
        _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__["UnitEditorComponent"],
        _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__["CityEditorComponent"],
        _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__["CitiesLayerComponent"],
        _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__["CityInfoComponent"],
        _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__["CityViewComponent"],
        _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__["TurnsPipe"],
        _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__["WorkTilesComponent"],
        _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__["ProgressBarComponent"],
        _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__["ButtonDirective"],
        _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__["MinimapComponent"],
        _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__["TooltipDirective"],
        _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"],
        _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__["BonusesComponent"],
        _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__["PercentBonusPipe"],
        _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__["ProductRequirementsComponent"],
        _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__["PlayerYieldsComponent"],
        _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__["UnitActionRequirementsComponent"],
        _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__["PlayersEditorComponent"],
        _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__["SpinnerComponent"],
        _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__["ModalComponent"],
        _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__["UnitMarkerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"],
                    _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__["UnitPanelComponent"],
                    _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__["NextTurnButtonComponent"],
                    _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__["GameInfoComponent"],
                    _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__["DebugComponent"],
                    _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__["TurnCounterComponent"],
                    _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"],
                    _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                    _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabComponent"],
                    _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__["TileEditorComponent"],
                    _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__["RadioComponent"],
                    _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"],
                    _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__["ToggleComponent"],
                    _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__["TilePaintingComponent"],
                    _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__["GameMenuComponent"],
                    _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__["SavesListComponent"],
                    _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__["SaveViewComponent"],
                    _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__["LoadViewComponent"],
                    _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__["MainMenuViewComponent"],
                    _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__["NewGameViewComponent"],
                    _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__["UnitEditorComponent"],
                    _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__["CityEditorComponent"],
                    _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__["CitiesLayerComponent"],
                    _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__["CityInfoComponent"],
                    _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__["CityViewComponent"],
                    _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__["TurnsPipe"],
                    _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__["WorkTilesComponent"],
                    _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__["ProgressBarComponent"],
                    _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__["ButtonDirective"],
                    _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__["MinimapComponent"],
                    _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__["TooltipDirective"],
                    _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"],
                    _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__["BonusesComponent"],
                    _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__["PercentBonusPipe"],
                    _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__["ProductRequirementsComponent"],
                    _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__["PlayerYieldsComponent"],
                    _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__["UnitActionRequirementsComponent"],
                    _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__["PlayersEditorComponent"],
                    _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__["SpinnerComponent"],
                    _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__["ModalComponent"],
                    _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__["UnitMarkerComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]],
                providers: [
                    _core_game__WEBPACK_IMPORTED_MODULE_47__["Game"],
                    { provide: _api_game__WEBPACK_IMPORTED_MODULE_46__["GameApi"], useValue: _api_game__WEBPACK_IMPORTED_MODULE_46__["gameApi"] },
                    _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__["UIState"],
                    _controls__WEBPACK_IMPORTED_MODULE_41__["Controls"],
                    _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__["NextTurnService"],
                    _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__["GameRenderer"],
                    _renderer_camera__WEBPACK_IMPORTED_MODULE_48__["Camera"],
                    _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__["MapUi"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/controls.ts":
/*!*****************************!*\
  !*** ./src/app/controls.ts ***!
  \*****************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/game */ "./src/app/api/game.ts");
/* harmony import */ var _renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/next-turn.service */ "./src/app/ui/next-turn.service.ts");
/* harmony import */ var _ui_map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _ui_ui_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ui-state */ "./src/app/ui/ui-state.ts");









class Controls {
    constructor(game, camera, nextTurnService, mapUi, uiState) {
        this.game = game;
        this.camera = camera;
        this.nextTurnService = nextTurnService;
        this.mapUi = mapUi;
        this.uiState = uiState;
        this.isMousePressed = false;
        this._mouseButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.mouseButton$ = this._mouseButton$.asObservable();
    }
    onMouseDown(event) {
        this.isMousePressed = true;
        this._mouseButton$.next(event.button);
        event.preventDefault();
        event.stopPropagation();
        if (this.mapUi.selectedUnit && this.mouseButton === 2) {
            const tile = this.getTileFromMouseEvent(event);
            if (tile) {
                this.mapUi.selectedUnit.findPath(tile).then(() => {
                    if (this.mapUi.selectedUnit) {
                        this.mapUi.setPath(this.mapUi.selectedUnit.path);
                    }
                });
            }
        }
        return false;
    }
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const hoveredTile = this.mapUi.hoveredTile;
        if (hoveredTile) {
            this.mapUi.clickTile(hoveredTile);
        }
        return false;
    }
    onMouseUp(event) {
        const [x, y] = this.camera.screenToGame(event.clientX, event.clientY);
        const selectedUnit = this.mapUi.selectedUnit;
        if (selectedUnit && this.mouseButton === 2) {
            const tile = this.game.state.map.get(x, y);
            if (tile) {
                selectedUnit.moveAlongPath().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.mapUi.setPath(selectedUnit.path);
                    // to refresh the ui
                    this.mapUi["_selectedUnit$"].next(selectedUnit);
                    this.mapUi.unitRangeArea.setTiles(yield selectedUnit.getRange());
                }));
            }
        }
        this.isMousePressed = false;
        this._mouseButton$.next(null);
    }
    onMouseMove(event) {
        const tile = this.getTileFromMouseEvent(event);
        if (tile !== this.mapUi.hoveredTile) {
            this.mapUi.hoverTile(tile);
            if (tile && this.mapUi.selectedUnit && this.mouseButton === 2) {
                this.mapUi.selectedUnit.findPath(tile).then(() => {
                    if (this.mapUi.selectedUnit) {
                        this.mapUi.setPath(this.mapUi.selectedUnit.path);
                    }
                });
            }
        }
        if (this.mapUi.allowMapPanning && this.isMousePressed) {
            if (this.mouseButton === 1) {
                this.camera.moveBy(event.movementX, event.movementY);
            }
        }
    }
    onWheel(event) {
        this.camera.scaleByWithEasing(1 + (event.deltaY > 0 ? -0.3 : 0.3), event.clientX, event.clientY, 300);
    }
    onKeyDown(event) {
        if (event.key === "Enter") {
            this.nextTurnService.next();
        }
        else if (event.key === "Escape") {
            this.uiState.menuVisible$.next(true);
        }
    }
    onKeyUp(event) { }
    getTileFromMouseEvent(event) {
        const [x, y] = this.camera.screenToGame(event.clientX, event.clientY);
        return this.game.state.map.get(x, y);
    }
    nextTurn() {
        // this.mapUi.setPath(this.activeUnit?.path || null);
    }
    get mouseButton() {
        return this._mouseButton$.value;
    }
}
Controls.ɵfac = function Controls_Factory(t) { return new (t || Controls)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_game__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__["NextTurnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_ui_state__WEBPACK_IMPORTED_MODULE_7__["UIState"])); };
Controls.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Controls, factory: Controls.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Controls, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _api_game__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: _renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"] }, { type: _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__["NextTurnService"] }, { type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"] }, { type: _ui_ui_state__WEBPACK_IMPORTED_MODULE_7__["UIState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/area.ts":
/*!******************************!*\
  !*** ./src/app/core/area.ts ***!
  \******************************/
/*! exports provided: AreaCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCore", function() { return AreaCore; });
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");

class AreaCore {
    constructor() {
        this.id = 0;
        this.tiles = new Set();
    }
    add(tile) {
        this.tiles.add(tile);
        _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].addAreaTiles(this.id, [tile]);
    }
    addBulk(tiles) {
        for (const tile of tiles) {
            this.tiles.add(tile);
        }
        _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].addAreaTiles(this.id, tiles);
    }
    remove(tile) {
        this.tiles.delete(tile);
        _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].removeAreaTiles(this.id, [tile]);
    }
    removeBulk(tiles) {
        for (const tile of tiles) {
            this.tiles.delete(tile);
        }
        _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].removeAreaTiles(this.id, tiles);
    }
}


/***/ }),

/***/ "./src/app/core/areas-manager.ts":
/*!***************************************!*\
  !*** ./src/app/core/areas-manager.ts ***!
  \***************************************/
/*! exports provided: AreasManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasManager", function() { return AreasManager; });
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ "./src/app/core/area.ts");

class AreasManager {
    constructor() {
        this.areas = [];
        this.areasMap = new Map();
        this.lastId = 0;
    }
    make() {
        const area = new _area__WEBPACK_IMPORTED_MODULE_0__["AreaCore"]();
        area.id = this.lastId++;
        this.areas.push(area);
        this.areasMap.set(area.id, area);
        return area;
    }
    destroy(area) {
        this.areasMap.delete(area.id);
        const index = this.areas.indexOf(area);
        if (index !== -1) {
            this.areas.splice(index, 1);
        }
    }
}


/***/ }),

/***/ "./src/app/core/buildings.ts":
/*!***********************************!*\
  !*** ./src/app/core/buildings.ts ***!
  \***********************************/
/*! exports provided: BUILDINGS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDINGS_MAP", function() { return BUILDINGS_MAP; });
/* harmony import */ var _data_buildings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/buildings */ "./src/app/data/buildings.ts");

const BUILDINGS_MAP = new Map();
for (const definition of _data_buildings__WEBPACK_IMPORTED_MODULE_0__["BUILDINGS"]) {
    BUILDINGS_MAP.set(definition.id, definition);
}


/***/ }),

/***/ "./src/app/core/cities-manager.ts":
/*!****************************************!*\
  !*** ./src/app/core/cities-manager.ts ***!
  \****************************************/
/*! exports provided: CitiesManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesManager", function() { return CitiesManager; });
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city */ "./src/app/core/city.ts");
/* harmony import */ var _tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");




class CitiesManager {
    constructor() {
        this.cities = [];
        this.citiesMap = new Map();
        this.lastId = 0;
    }
    spawn(tile, player, isNew = true) {
        if (tile.city) {
            return null;
        }
        if (tile.landForm === _shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains ||
            tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            return null;
        }
        const city = new _city__WEBPACK_IMPORTED_MODULE_0__["CityCore"](tile, player);
        city.id = this.lastId++;
        city.size = 1;
        city.name = `City ${city.id}`;
        city.tile = tile;
        this.cities.push(city);
        this.citiesMap.set(city.id, city);
        for (const neighbour of tile.neighbours) {
            city.addTile(neighbour);
        }
        player.addCity(city);
        tile.city = city;
        tile.forest = false;
        tile.wetlands = false;
        tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road;
        tile.update();
        for (const t of tile.getTilesInRange(3)) {
            t.sweetSpotValue = 0;
        }
        if (isNew) {
            city.optimizeYields();
        }
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].cities.add(city);
        return city;
    }
    destroy(city) {
        // TODO rewrite to sets for better performance?
        let index = this.cities.indexOf(city);
        if (index !== -1) {
            this.cities.splice(index, 1);
        }
        this.citiesMap.delete(city.id);
        index = city.player.cities.indexOf(city);
        if (index !== -1) {
            city.player.cities.splice(index, 1);
        }
        city.tile.city = null;
        for (const tile of city.tiles) {
            city.removeTile(tile);
        }
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].citiesDestroyed.add(city.id);
    }
    nextTurn() {
        for (const city of this.cities) {
            city.nextTurn();
        }
    }
}


/***/ }),

/***/ "./src/app/core/city.ts":
/*!******************************!*\
  !*** ./src/app/core/city.ts ***!
  \******************************/
/*! exports provided: CityCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityCore", function() { return CityCore; });
/* harmony import */ var _yields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yields */ "./src/app/core/yields.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _data_buildings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/buildings */ "./src/app/data/buildings.ts");
/* harmony import */ var _data_idle_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/idle-products */ "./src/app/data/idle-products.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");





class CityCore {
    constructor(tile, player) {
        this.tile = tile;
        this.player = player;
        this.totalFood = 0;
        this.foodToGrow = 20;
        this.foodConsumed = 1;
        this.totalCulture = 0;
        this.cultureToExpand = 20;
        this.tileYields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_0__["EMPTY_YIELDS"]);
        this.yields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_0__["EMPTY_YIELDS"]);
        this.perTurn = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_0__["EMPTY_YIELDS"]);
        this.product = null;
        this.totalProduction = 0;
        this.buildings = [];
        this.buildingsIds = new Set();
        this.tiles = new Set();
        this.workedTiles = new Set();
        this.notWorkedTiles = new Set();
        this.availableBuildings = [];
        this.disabledBuildings = new Set();
        this.availableUnits = [];
        this.disabledUnits = new Set();
        this.availableIdleProducts = [];
        this.disabledIdleProducts = new Set();
        this.changedSize = false;
        this.addTile(tile);
    }
    nextTurn() {
        this.changedSize = false;
        this.progressExpansion();
        this.progressProduction();
        this.progressGrowth();
        this.updateYields();
        if (this.player === this.player.game.trackedPlayer || this.changedSize) {
            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);
        }
    }
    progressProduction() {
        if (!this.product) {
            return;
        }
        this.totalProduction += this.yields.production;
        if (this.totalProduction >= this.product.productDefinition.productionCost) {
            if (this.product.type === "unit") {
                this.player.game.unitsManager.spawn(this.product.productDefinition.id, this.tile, this.player);
            }
            else if (this.product.type === "building") {
                this.buildings.push(this.product.productDefinition);
                this.buildingsIds.add(this.product.productDefinition.id);
            }
            this.totalProduction = 0;
            this.product = null;
        }
    }
    progressGrowth() {
        this.totalFood += this.yields.food - this.foodConsumed;
        if (this.totalFood >= this.foodToGrow) {
            this.size++;
            this.changedSize = true;
            const bestWorkableTile = this.pickBestTileToWork(this.notWorkedTiles);
            if (bestWorkableTile) {
                this.workTile(bestWorkableTile);
            }
            this.totalFood -= this.foodToGrow;
        }
        else if (this.totalFood < 0) {
            if (this.size > 1) {
                this.size--;
                this.changedSize = true;
                this.totalFood += this.foodToGrow;
            }
            else {
                this.totalFood = 0;
            }
        }
        this.foodToGrow = 15 * Math.pow(1.2, this.size);
    }
    progressExpansion() {
        this.totalCulture += this.perTurn.culture;
        if (this.totalCulture >= this.cultureToExpand) {
            this.totalCulture -= this.cultureToExpand;
            this.cultureToExpand = 5 * Math.pow(1.2, this.tiles.size);
            const tile = this.pickBestTileToExpand(this.tile, this.getTilesAvailableForExpansion());
            if (tile) {
                this.addTile(tile);
                tile.sweetSpotValue = 0;
            }
        }
    }
    produceUnit(unit) {
        this.startProducing({
            type: "unit",
            productDefinition: unit,
        });
    }
    produceBuilding(building) {
        if (this.canConstruct(building)) {
            this.startProducing({
                type: "building",
                productDefinition: building,
            });
        }
    }
    workOnIdleProduct(idleProduct) {
        this.startProducing({
            type: "idleProduct",
            productDefinition: idleProduct,
        });
        this.updateYields();
        this.player.updateYields();
    }
    cancelProduction() {
        if (this.product) {
            const type = this.product.type;
            this.product = null;
            if (type === "idleProduct") {
                this.updateYields();
                this.player.updateYields();
            }
        }
    }
    startProducing(product) {
        if (!this.canProduce(product.productDefinition)) {
            return;
        }
        this.cancelProduction();
        this.product = product;
        this.totalProduction = 0;
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);
    }
    get turnsToGrow() {
        if (this.perTurn.food >= 0) {
            const remainingFood = this.foodToGrow - this.totalFood;
            return Math.ceil(remainingFood / this.perTurn.food);
        }
        else {
            return Math.ceil(this.totalFood / this.perTurn.food) - 1;
        }
    }
    get turnsToProductionEnd() {
        if (!this.product) {
            return null;
        }
        const remainingProduction = this.product.productDefinition.productionCost - this.totalProduction;
        return Math.ceil(remainingProduction / this.yields.production);
    }
    get turnsToExpand() {
        const remainingCulture = this.cultureToExpand - this.totalCulture;
        return Math.ceil(remainingCulture / this.perTurn.culture);
    }
    getTurnsToProduce(unit) {
        return Math.ceil(unit.productionCost / this.yields.production);
    }
    updateYields() {
        var _a;
        Object(_yields__WEBPACK_IMPORTED_MODULE_0__["zeroYields"])(this.tileYields);
        this.tileYields.food = 2;
        this.tileYields.production = 1;
        for (const tile of this.workedTiles) {
            Object(_yields__WEBPACK_IMPORTED_MODULE_0__["addYields"])(this.tileYields, tile.yields);
        }
        this.tileYields.production += this.freeTileWorkers;
        Object(_yields__WEBPACK_IMPORTED_MODULE_0__["copyYields"])(this.yields, this.tileYields);
        for (const building of this.buildings) {
            this.applyBonuses(building.bonuses);
        }
        if (((_a = this.product) === null || _a === void 0 ? void 0 : _a.type) === "idleProduct") {
            const idleProduct = this.product.productDefinition;
            this.applyBonuses(idleProduct.bonuses);
        }
        Object(_yields__WEBPACK_IMPORTED_MODULE_0__["roundYields"])(this.yields);
        this.foodConsumed = this.size;
        Object(_yields__WEBPACK_IMPORTED_MODULE_0__["copyYields"])(this.perTurn, this.yields);
        this.perTurn.food -= this.foodConsumed;
    }
    applyBonuses(bonuses) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.yields.food += ((_a = bonuses.yieldValue) === null || _a === void 0 ? void 0 : _a.food) || 0;
        this.yields.production += ((_b = bonuses.yieldValue) === null || _b === void 0 ? void 0 : _b.production) || 0;
        this.yields.culture += ((_c = bonuses.yieldValue) === null || _c === void 0 ? void 0 : _c.culture) || 0;
        this.yields.publicWorks += ((_d = bonuses.yieldValue) === null || _d === void 0 ? void 0 : _d.publicWorks) || 0;
        if ((_e = bonuses.yieldFactor) === null || _e === void 0 ? void 0 : _e.food) {
            this.yields.food += this.tileYields.food * bonuses.yieldFactor.food;
        }
        if ((_f = bonuses.yieldFactor) === null || _f === void 0 ? void 0 : _f.production) {
            this.yields.production +=
                this.tileYields.production * bonuses.yieldFactor.production;
        }
        if ((_g = bonuses.yieldFactor) === null || _g === void 0 ? void 0 : _g.culture) {
            this.yields.culture +=
                this.tileYields.culture * bonuses.yieldFactor.culture;
        }
        if ((_h = bonuses.yieldFactor) === null || _h === void 0 ? void 0 : _h.publicWorks) {
            this.yields.publicWorks +=
                this.tileYields.publicWorks * bonuses.yieldFactor.publicWorks;
        }
        if (bonuses.transferProductionToFood) {
            this.yields.food +=
                this.yields.production * bonuses.transferProductionToFood;
        }
        if (bonuses.transferProductionToCulture) {
            this.yields.culture +=
                this.yields.production * bonuses.transferProductionToCulture;
        }
        if (bonuses.transferProductionToPublicWorks) {
            this.yields.publicWorks +=
                this.yields.production * bonuses.transferProductionToPublicWorks;
        }
    }
    addTile(tile) {
        if (!tile.areaOf) {
            this.tiles.add(tile);
            this.notWorkedTiles.add(tile);
            tile.areaOf = this;
            this.player.area.add(tile);
            this.player.exploreTiles([tile]);
            this.player.exploreTiles(tile.neighbours);
            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
        }
    }
    removeTile(tile) {
        if (this.tiles.has(tile)) {
            this.tiles.delete(tile);
            tile.areaOf = null;
            this.player.area.remove(tile);
            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
        }
    }
    workTile(tile, updateYields = true) {
        if (this.freeTileWorkers && this.tiles.has(tile)) {
            this.workedTiles.add(tile);
            this.notWorkedTiles.delete(tile);
            if (updateYields) {
                this.updateYields();
            }
        }
    }
    unworkTile(tile, updateYields = true) {
        this.workedTiles.delete(tile);
        this.notWorkedTiles.add(tile);
        if (updateYields) {
            this.updateYields();
        }
    }
    getTilesAvailableForExpansion() {
        const availableTiles = new Set();
        for (const tile of this.tiles) {
            for (const neighbour of tile.neighbours) {
                if (!neighbour.areaOf) {
                    availableTiles.add(neighbour);
                }
            }
        }
        return availableTiles;
    }
    pickBestTileToWork(tiles) {
        let bestTile = null;
        let bestYields = 0;
        for (const tile of tiles) {
            const yields = tile.totalYields;
            if (yields > bestYields) {
                bestYields = yields;
                bestTile = tile;
            }
        }
        return bestTile;
    }
    pickBestTileToExpand(cityTile, tiles) {
        let bestTile = null;
        let bestScore = -Infinity;
        for (const tile of tiles) {
            const score = tile.totalYields - cityTile.getDistanceTo(tile) / 2;
            if (score > bestScore) {
                bestScore = score;
                bestTile = tile;
            }
        }
        return bestTile;
    }
    get freeTileWorkers() {
        return this.size - this.workedTiles.size;
    }
    optimizeYields() {
        this.workedTiles.clear();
        this.notWorkedTiles = new Set(this.tiles);
        while (this.freeTileWorkers && this.notWorkedTiles.size) {
            const tile = this.pickBestTileToWork(this.notWorkedTiles);
            if (!tile) {
                break;
            }
            this.workTile(tile, false);
        }
        this.updateYields();
    }
    canConstruct(building) {
        return !this.buildings.includes(building);
    }
    canProduce(product) {
        for (const r of product.requirements) {
            if (!r.check(this)) {
                return false;
            }
        }
        for (const r of product.weakRequirements) {
            if (!r.check(this)) {
                return false;
            }
        }
        return true;
    }
    getAvailableProducts(products, city) {
        const results = [];
        for (const p of products) {
            let ok = true;
            for (const r of p.requirements) {
                if (!r.check(city)) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                results.push(p);
            }
        }
        return results;
    }
    getDisabledProducts(products, city) {
        const results = new Set();
        for (const p of products) {
            for (const r of p.weakRequirements) {
                if (!r.check(city)) {
                    results.add(p);
                }
            }
        }
        return results;
    }
    updateProductsList() {
        this.availableUnits = this.getAvailableProducts(_data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"], this);
        this.disabledUnits = this.getDisabledProducts(this.availableUnits, this);
        const notBuildBuildings = _data_buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS"].filter((b) => { var _a; return ((_a = this.product) === null || _a === void 0 ? void 0 : _a.productDefinition) !== b && !this.buildings.includes(b); });
        this.availableBuildings = this.getAvailableProducts(notBuildBuildings, this);
        this.disabledBuildings = this.getDisabledProducts(this.availableBuildings, this);
        this.availableIdleProducts = _data_idle_products__WEBPACK_IMPORTED_MODULE_3__["IDLE_PRODUCTS"];
    }
    changeOwner(newOwner) {
        if (this.player === newOwner) {
            return;
        }
        const oldOwner = this.player;
        this.player = newOwner;
        const cityTiles = Array.from(this.tiles);
        let index = oldOwner.cities.indexOf(this);
        if (index !== -1) {
            oldOwner.cities.splice(index, 1);
            oldOwner.area.removeBulk(cityTiles);
        }
        newOwner.cities.push(this);
        newOwner.area.addBulk(cityTiles);
        newOwner.updateYields();
        oldOwner.updateYields();
        // TODO explored area should be bigger then city tiles. Change this once fog of war is implement (probably a city should store it's visible tiles)
        newOwner.exploreTiles(this.tiles);
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);
        for (const tile of this.tiles) {
            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
        }
    }
}


/***/ }),

/***/ "./src/app/core/collector.ts":
/*!***********************************!*\
  !*** ./src/app/core/collector.ts ***!
  \***********************************/
/*! exports provided: collector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collector", function() { return collector; });
/* harmony import */ var _serialization_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialization/channel */ "./src/app/core/serialization/channel.ts");

class Collector {
    constructor() {
        this.tiles = new Set();
        this.units = new Set();
        this.unitsDestroyed = new Set();
        this.cities = new Set();
        this.citiesDestroyed = new Set();
        this.areaTilesAdded = new Map();
        this.areaTilesRemoved = new Map();
        this.tilesExplored = new Set();
        this.turn = 0;
    }
    flush() {
        const changes = [];
        for (const unit of this.units) {
            changes.push({ type: "unit.updated", data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["unitToChannel"])(unit) });
        }
        for (const id of this.unitsDestroyed) {
            changes.push({ type: "unit.destroyed", data: id });
        }
        for (const city of this.cities) {
            changes.push({ type: "city.updated", data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["cityToChannel"])(city) });
        }
        for (const id of this.citiesDestroyed) {
            changes.push({ type: "city.destroyed", data: id });
        }
        if (this.tiles.size) {
            changes.push({
                type: "tiles.updated",
                data: Array.from(this.tiles).map((tile) => Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["tileToChannel"])(tile)),
            });
        }
        for (const [id, tiles] of this.areaTilesAdded.entries()) {
            changes.push({
                type: "area.tilesAdded",
                data: { id, tiles: tiles.map((t) => t.id) },
            });
        }
        for (const [id, tiles] of this.areaTilesRemoved.entries()) {
            changes.push({
                type: "area.tilesRemoved",
                data: { id, tiles: tiles.map((t) => t.id) },
            });
        }
        if (this.turn) {
            changes.push({ type: "game.turn", data: this.turn });
        }
        if (this.trackedPlayer) {
            changes.push({
                type: "trackedPlayer.set",
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["trackedPlayerToChannel"])(this.trackedPlayer),
            });
        }
        if (this.trackedPlayerYields) {
            changes.push({
                type: "trackedPlayer.yields",
                data: this.trackedPlayerYields,
            });
        }
        if (this.tilesExplored.size) {
            changes.push({
                type: "trackedPlayer.tilesExplored",
                data: Array.from(this.tilesExplored),
            });
        }
        this.tiles.clear();
        this.unitsDestroyed.clear();
        this.units.clear();
        this.cities.clear();
        this.citiesDestroyed.clear();
        this.areaTilesAdded.clear();
        this.areaTilesRemoved.clear();
        this.trackedPlayer = undefined;
        this.tilesExplored.clear();
        this.turn = 0;
        return changes;
    }
    addAreaTiles(areaId, tiles) {
        if (!this.areaTilesAdded.has(areaId)) {
            this.areaTilesAdded.set(areaId, tiles);
        }
        else {
            this.areaTilesAdded.get(areaId).push(...tiles);
        }
    }
    removeAreaTiles(areaId, tiles) {
        if (!this.areaTilesRemoved.has(areaId)) {
            this.areaTilesRemoved.set(areaId, tiles);
        }
        else {
            this.areaTilesRemoved.get(areaId).push(...tiles);
        }
    }
}
const collector = new Collector();


/***/ }),

/***/ "./src/app/core/debug.ts":
/*!*******************************!*\
  !*** ./src/app/core/debug.ts ***!
  \*******************************/
/*! exports provided: Debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
class Debug {
    constructor() {
        this.revealMap = false;
    }
}


/***/ }),

/***/ "./src/app/core/game.ts":
/*!******************************!*\
  !*** ./src/app/core/game.ts ***!
  \******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _unit_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-manager */ "./src/app/core/unit-manager.ts");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/app/core/debug.ts");
/* harmony import */ var _cities_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities-manager */ "./src/app/core/cities-manager.ts");
/* harmony import */ var _areas_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas-manager */ "./src/app/core/areas-manager.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");





class Game {
    constructor() {
        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"]();
        this.players = [];
        this.activePlayerIndex = -1;
        this.humanPlayer = null;
        this.turn = 1;
        this.areasManager = new _areas_manager__WEBPACK_IMPORTED_MODULE_3__["AreasManager"]();
        this.unitsManager = new _unit_manager__WEBPACK_IMPORTED_MODULE_0__["UnitsManager"](this);
        this.citiesManager = new _cities_manager__WEBPACK_IMPORTED_MODULE_2__["CitiesManager"]();
    }
    start() {
        this.activePlayerIndex = -1;
        this.nextPlayer();
    }
    addPlayer(player) {
        player.id = this.players.length;
        this.players.push(player);
        if (!this.trackedPlayer) {
            this.trackedPlayer = player;
        }
    }
    nextPlayer() {
        this.activePlayerIndex++;
        if (this.activePlayerIndex >= this.players.length) {
            this.nextTurn();
            this.activePlayerIndex = 0;
        }
        if (this.activePlayer.ai) {
            this.activePlayer.ai.nextTurn();
            this.nextPlayer();
        }
        else {
            if (this.trackedPlayer !== this.activePlayer) {
                this.trackedPlayer = this.activePlayer;
                _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].trackedPlayer = this.trackedPlayer;
            }
        }
    }
    nextTurn() {
        this.unitsManager.nextTurn();
        this.citiesManager.nextTurn();
        for (const player of this.players) {
            player.nextTurn();
        }
        this.turn++;
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].turn = this.turn;
    }
    get activePlayer() {
        return this.players[this.activePlayerIndex];
    }
}


/***/ }),

/***/ "./src/app/core/idle-product.ts":
/*!**************************************!*\
  !*** ./src/app/core/idle-product.ts ***!
  \**************************************/
/*! exports provided: IDLE_PRODUCTS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDLE_PRODUCTS_MAP", function() { return IDLE_PRODUCTS_MAP; });
/* harmony import */ var _data_idle_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/idle-products */ "./src/app/data/idle-products.ts");

const IDLE_PRODUCTS_MAP = new Map();
for (const definition of _data_idle_products__WEBPACK_IMPORTED_MODULE_0__["IDLE_PRODUCTS"]) {
    IDLE_PRODUCTS_MAP.set(definition.id, definition);
}


/***/ }),

/***/ "./src/app/core/product.ts":
/*!*********************************!*\
  !*** ./src/app/core/product.ts ***!
  \*********************************/
/*! exports provided: ProductRequirement, BuildingRequirement, SizeRequirement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRequirement", function() { return ProductRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRequirement", function() { return BuildingRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeRequirement", function() { return SizeRequirement; });
class ProductRequirement {
}
class BuildingRequirement extends ProductRequirement {
    constructor(buildingId) {
        super();
        this.buildingId = buildingId;
        this.id = "building";
    }
    check(city) {
        return city.buildingsIds.has(this.buildingId);
    }
}
class SizeRequirement extends ProductRequirement {
    constructor(size) {
        super();
        this.size = size;
        this.id = "size";
    }
    check(city) {
        return city.size >= this.size;
    }
}


/***/ }),

/***/ "./src/app/core/serialization/channel.ts":
/*!***********************************************!*\
  !*** ./src/app/core/serialization/channel.ts ***!
  \***********************************************/
/*! exports provided: gameToChannel, mapToChannel, tileToChannel, cityToChannel, cityDetailsToChannel, playerToChannel, trackedPlayerToChannel, unitToChannel, unitDetailsToChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameToChannel", function() { return gameToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToChannel", function() { return mapToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileToChannel", function() { return tileToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityToChannel", function() { return cityToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityDetailsToChannel", function() { return cityDetailsToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerToChannel", function() { return playerToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackedPlayerToChannel", function() { return trackedPlayerToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitToChannel", function() { return unitToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitDetailsToChannel", function() { return unitDetailsToChannel; });
function gameToChannel(game) {
    return {
        turn: game.turn,
        map: mapToChannel(game.map),
        players: game.players.map((p) => playerToChannel(p)),
        trackedPlayer: trackedPlayerToChannel(game.trackedPlayer),
        units: game.unitsManager.units.map((u) => unitToChannel(u)),
        cities: game.citiesManager.cities.map((c) => cityToChannel(c)),
    };
}
function mapToChannel(map) {
    const tiles = [];
    for (let x = 0; x < map.width; x++) {
        const row = [];
        tiles.push(row);
        for (let y = 0; y < map.height; y++) {
            row.push(tileToChannel(map.tiles[x][y]));
        }
    }
    return {
        width: map.width,
        height: map.height,
        tiles,
    };
}
function tileToChannel(tile) {
    return {
        id: tile.id,
        x: tile.x,
        y: tile.y,
        climate: tile.climate,
        forest: tile.forest,
        improvement: tile.improvement,
        landForm: tile.landForm,
        riverParts: tile.riverParts,
        road: tile.road,
        seaLevel: tile.seaLevel,
        wetlands: tile.wetlands,
        yields: tile.yields,
        areaOf: tile.areaOf ? tile.areaOf.id : null,
        unitsIds: tile.units.map((u) => u.id),
        cityId: tile.city ? tile.city.id : null,
    };
}
function cityToChannel(city) {
    return {
        id: city.id,
        name: city.name,
        size: city.size,
        playerId: city.player.id,
        tileId: city.tile.id,
        totalFood: city.totalFood,
        foodToGrow: city.foodToGrow,
        foodPerTurn: city.perTurn.food,
        turnsToGrow: city.turnsToGrow,
        totalProduction: city.totalProduction,
        productionPerTurn: city.yields.production,
        productionRequired: city.product
            ? city.product.productDefinition.productionCost
            : null,
        turnsToProductionEnd: city.turnsToProductionEnd,
        productName: city.product ? city.product.productDefinition.name : null,
    };
}
function cityDetailsToChannel(city) {
    var _a, _b;
    city.updateProductsList();
    return {
        id: city.id,
        name: city.name,
        size: city.size,
        playerId: city.player.id,
        tileId: city.tile.id,
        totalFood: city.totalFood,
        foodToGrow: city.foodToGrow,
        turnsToGrow: city.turnsToGrow,
        totalProduction: city.totalProduction,
        turnsToProductionEnd: city.turnsToProductionEnd,
        availableBuildings: city.availableBuildings.map((b) => b.id),
        availableIdleProducts: city.availableIdleProducts.map((p) => p.id),
        availableUnits: city.availableUnits.map((u) => u.id),
        buildingsIds: Array.from(city.buildingsIds),
        cultureToExpand: city.cultureToExpand,
        disabledBuildings: Array.from(city.disabledBuildings).map((b) => b.id),
        disabledIdleProducts: Array.from(city.disabledIdleProducts).map((p) => p.id),
        disabledUnits: Array.from(city.disabledUnits).map((u) => u.id),
        foodConsumed: city.foodConsumed,
        perTurn: city.perTurn,
        productId: ((_a = city.product) === null || _a === void 0 ? void 0 : _a.productDefinition.id) || null,
        productType: ((_b = city.product) === null || _b === void 0 ? void 0 : _b.type) || null,
        tileYields: city.tileYields,
        tiles: Array.from(city.tiles).map((t) => t.id),
        totalCulture: city.totalCulture,
        workedTiles: Array.from(city.workedTiles).map((t) => t.id),
        yields: city.yields,
    };
}
function playerToChannel(player) {
    return {
        id: player.id,
        color: player.color,
        areaId: player.area.id,
    };
}
function trackedPlayerToChannel(player) {
    return {
        id: player.id,
        color: player.color,
        exploredTiles: Array.from(player.exploredTiles).map((t) => t.id),
        units: player.units.map((u) => u.id),
        cities: player.cities.map((c) => c.id),
        yields: player.yields,
    };
}
function unitToChannel(unit) {
    return {
        id: unit.id,
        tileId: unit.tile.id,
        definitionId: unit.definition.id,
        playerId: unit.player.id,
    };
}
function unitDetailsToChannel(unit) {
    var _a;
    return {
        id: unit.id,
        tileId: unit.tile.id,
        definitionId: unit.definition.id,
        playerId: unit.player.id,
        actionPointsLeft: unit.actionPointsLeft,
        order: unit.order,
        path: ((_a = unit.path) === null || _a === void 0 ? void 0 : _a.map((row) => row.map((tile) => tile.id))) || null,
    };
}


/***/ }),

/***/ "./src/app/core/tile-improvements.ts":
/*!*******************************************!*\
  !*** ./src/app/core/tile-improvements.ts ***!
  \*******************************************/
/*! exports provided: TileImprovement, TileRoad, IMPROVEMENT_PUBLIC_WORKS_COSTS, IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN, ROAD_PUBLIC_WORKS_COSTS, ROAD_PUBLIC_WORKS_COSTS_PER_TURN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileImprovement", function() { return TileImprovement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileRoad", function() { return TileRoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_PUBLIC_WORKS_COSTS", function() { return IMPROVEMENT_PUBLIC_WORKS_COSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN", function() { return IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROAD_PUBLIC_WORKS_COSTS", function() { return ROAD_PUBLIC_WORKS_COSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROAD_PUBLIC_WORKS_COSTS_PER_TURN", function() { return ROAD_PUBLIC_WORKS_COSTS_PER_TURN; });
var TileImprovement;
(function (TileImprovement) {
    TileImprovement[TileImprovement["farm"] = 0] = "farm";
    TileImprovement[TileImprovement["mine"] = 1] = "mine";
    TileImprovement[TileImprovement["sawmill"] = 2] = "sawmill";
})(TileImprovement || (TileImprovement = {}));
var TileRoad;
(function (TileRoad) {
    TileRoad[TileRoad["road"] = 0] = "road";
})(TileRoad || (TileRoad = {}));
const IMPROVEMENT_PUBLIC_WORKS_COSTS = {
    [TileImprovement.farm]: 15,
    [TileImprovement.mine]: 15,
    [TileImprovement.sawmill]: 15,
};
const IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN = {
    [TileImprovement.farm]: 1,
    [TileImprovement.mine]: 1,
    [TileImprovement.sawmill]: 1,
};
const ROAD_PUBLIC_WORKS_COSTS = {
    [TileRoad.road]: 15,
};
const ROAD_PUBLIC_WORKS_COSTS_PER_TURN = {
    [TileRoad.road]: 1,
};


/***/ }),

/***/ "./src/app/core/unit-actions.ts":
/*!**************************************!*\
  !*** ./src/app/core/unit-actions.ts ***!
  \**************************************/
/*! exports provided: getPublicWorksRequired, getPublicWorksPerTurn, ActionRequirement, OwnTileRequirement, NotForeignTileRequirement, ImprovementNotYetBuiltRequirement, IsImprovementPossibleRequirement, NoRoadRequirement, isRoadPossibleRequirement, PublicWorksPointsRequirement, ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublicWorksRequired", function() { return getPublicWorksRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublicWorksPerTurn", function() { return getPublicWorksPerTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRequirement", function() { return ActionRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnTileRequirement", function() { return OwnTileRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotForeignTileRequirement", function() { return NotForeignTileRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprovementNotYetBuiltRequirement", function() { return ImprovementNotYetBuiltRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsImprovementPossibleRequirement", function() { return IsImprovementPossibleRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRoadRequirement", function() { return NoRoadRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoadPossibleRequirement", function() { return isRoadPossibleRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicWorksPointsRequirement", function() { return PublicWorksPointsRequirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony import */ var _tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");


const ACTION_TO_IMPROVEMENT = {
    buildFarm: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm,
    buildMine: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine,
    buildSawmill: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill,
};
function getPublicWorksRequired(action) {
    if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
    }
    const improvement = ACTION_TO_IMPROVEMENT[action];
    if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
    }
    return 0;
}
function getPublicWorksPerTurn(action) {
    if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
    }
    const improvement = ACTION_TO_IMPROVEMENT[action];
    if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
    }
    return 0;
}
class ActionRequirement {
    constructor() {
        this.id = this.constructor["id"];
    }
}
class OwnTileRequirement extends ActionRequirement {
    constructor() {
        super(...arguments);
        this.id = "ownTile";
    }
    check(unit) {
        var _a;
        return ((_a = unit.tile.areaOf) === null || _a === void 0 ? void 0 : _a.player) === unit.player;
    }
}
class NotForeignTileRequirement extends ActionRequirement {
    constructor() {
        super(...arguments);
        this.id = "notForeignTile";
    }
    check(unit) {
        var _a;
        return !unit.tile.areaOf || ((_a = unit.tile.areaOf) === null || _a === void 0 ? void 0 : _a.player) === unit.player;
    }
}
class ImprovementNotYetBuiltRequirement extends ActionRequirement {
    constructor(improvement) {
        super();
        this.improvement = improvement;
        this.id = "sameImprovement";
    }
    check(unit) {
        return unit.tile.improvement !== this.improvement;
    }
}
class IsImprovementPossibleRequirement extends ActionRequirement {
    constructor(improvement) {
        super();
        this.improvement = improvement;
        this.id = "improvementPossible";
    }
    check(unit) {
        return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["isImprovementPossible"])(unit.tile, this.improvement);
    }
}
class NoRoadRequirement extends ActionRequirement {
    constructor() {
        super(...arguments);
        this.id = "noRoad";
    }
    check(unit) {
        return unit.tile.road === null;
    }
}
class isRoadPossibleRequirement extends ActionRequirement {
    constructor() {
        super(...arguments);
        this.id = "roadPossible";
    }
    check(unit) {
        return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["isRoadPossible"])(unit.tile);
    }
}
class PublicWorksPointsRequirement extends ActionRequirement {
    constructor() {
        super(...arguments);
        this.id = "publicWorks";
    }
    check(unit, action) {
        return (unit.player.yields.total.publicWorks >= getPublicWorksRequired(action));
    }
}
function foundCity(game, unit) {
    const city = game.citiesManager.spawn(unit.tile, unit.player);
    if (city) {
        game.unitsManager.destroy(unit);
    }
}
function buildImprovement(game, unit, improvement) {
    unit.actionPointsLeft = 0;
    unit.tile.improvement = improvement;
    unit.tile.update();
    unit.player.updateUnitsWithoutOrders();
    unit.player.yields.total.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
    unit.player.yields.costs.publicWorks +=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
    unit.player.yields.perTurn.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
}
function buildRoad(game, unit) {
    unit.actionPointsLeft = 0;
    unit.tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road;
    unit.tile.update();
    for (const neighbour of unit.tile.neighbours) {
        neighbour.update();
    }
    unit.player.updateUnitsWithoutOrders();
    unit.player.yields.total.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
    unit.player.yields.costs.publicWorks +=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
    unit.player.yields.perTurn.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
}
const ACTIONS = {
    foundCity: {
        action: "foundCity",
        name: "Found a city",
        fn: foundCity,
        requirements: [new NotForeignTileRequirement()],
    },
    buildFarm: {
        action: "buildFarm",
        name: "Build a farm",
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm),
            new PublicWorksPointsRequirement(),
        ],
    },
    buildMine: {
        action: "buildMine",
        name: "Build a mine",
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine),
            new PublicWorksPointsRequirement(),
        ],
    },
    buildSawmill: {
        action: "buildSawmill",
        name: "Build a sawmill",
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill),
            new PublicWorksPointsRequirement(),
        ],
    },
    buildRoad: {
        action: "buildRoad",
        name: "Build a road",
        fn: (game, unit) => buildRoad(game, unit),
        requirements: [
            new NoRoadRequirement(),
            new isRoadPossibleRequirement(),
            new PublicWorksPointsRequirement(),
        ],
    },
};


/***/ }),

/***/ "./src/app/core/unit-manager.ts":
/*!**************************************!*\
  !*** ./src/app/core/unit-manager.ts ***!
  \**************************************/
/*! exports provided: UnitsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsManager", function() { return UnitsManager; });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/app/core/unit.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");



class UnitsManager {
    constructor(game) {
        this.game = game;
        this.definitions = new Map();
        this.units = [];
        this.unitsMap = new Map();
        this.lastId = 0;
        for (const definition of _data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"]) {
            this.definitions.set(definition.id, definition);
        }
    }
    spawn(id, tile, player) {
        const definition = this.definitions.get(id);
        if (!definition) {
            throw Error(`UnitsManager: No unit with id "${id}"`);
        }
        const unit = new _unit__WEBPACK_IMPORTED_MODULE_0__["UnitCore"](tile, definition, player);
        unit.id = this.lastId++;
        this.units.push(unit);
        this.unitsMap.set(unit.id, unit);
        player.units.push(unit);
        tile.units.push(unit);
        unit.player.exploreTiles(unit.tile.getTilesInRange(2));
        unit.player.unitsWithoutOrders.push(unit);
        _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].units.add(unit);
        return unit;
    }
    destroy(unit) {
        // TODO rewrite to sets for better performance?
        this.unitsMap.delete(unit.id);
        let index = this.units.indexOf(unit);
        if (index !== -1) {
            this.units.splice(index, 1);
        }
        index = unit.player.units.indexOf(unit);
        if (index !== -1) {
            unit.player.units.splice(index, 1);
        }
        index = unit.tile.units.indexOf(unit);
        if (index !== -1) {
            unit.tile.units.splice(index, 1);
        }
        unit.player.updateUnitsWithoutOrders();
        _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].unitsDestroyed.add(unit.id);
    }
    move(unit, tile) {
        if (!unit.actionPointsLeft) {
            return;
        }
        const cost = this.getMovementCost(unit, tile);
        if (cost === Infinity) {
            return;
        }
        if (unit.definition.power) {
            if (tile.units.length &&
                tile.units.find((u) => u.player !== unit.player)) {
                // battle
            }
            else if (tile.city && tile.city.player !== unit.player) {
                tile.city.changeOwner(unit.player);
            }
        }
        const index = unit.tile.units.indexOf(unit);
        if (index !== -1) {
            unit.tile.units.splice(index, 1);
        }
        tile.units.push(unit);
        unit.tile = tile;
        unit.actionPointsLeft = Math.max(unit.actionPointsLeft - cost, 0);
        unit.player.exploreTiles(tile.getTilesInRange(2));
    }
    moveAlongPath(unit) {
        if (!unit.path) {
            unit.setOrder(null);
            return;
        }
        unit.setOrder(unit.path.length ? "go" : null);
        _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].units.add(unit);
        while (unit.actionPointsLeft && unit.path.length) {
            this.move(unit, unit.path[0][0]);
            unit.path[0].shift();
            if (!unit.path[0].length) {
                unit.path.shift();
            }
            if (!unit.path.length) {
                unit.path = null;
                unit.setOrder(null);
                return;
            }
        }
    }
    getMovementCost(unit, target) {
        return unit.tile.neighboursCosts.get(target) || Infinity;
    }
    nextTurn() {
        for (const unit of this.units) {
            if (unit.path) {
                this.moveAlongPath(unit);
            }
            if (unit.order === "skip") {
                unit.setOrder(null);
            }
            unit.actionPointsLeft = unit.definition.actionPoints;
        }
    }
}


/***/ }),

/***/ "./src/app/core/unit.ts":
/*!******************************!*\
  !*** ./src/app/core/unit.ts ***!
  \******************************/
/*! exports provided: UNITS_MAP, UnitCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNITS_MAP", function() { return UNITS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitCore", function() { return UnitCore; });
/* harmony import */ var _unit_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-actions */ "./src/app/core/unit-actions.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");



const UNITS_MAP = new Map();
for (const definition of _data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"]) {
    UNITS_MAP.set(definition.id, definition);
}
class UnitCore {
    constructor(tile, definition, player) {
        this.tile = tile;
        this.definition = definition;
        this.player = player;
        this.order = null;
        this.actionPointsLeft = definition.actionPoints;
    }
    doAction(action) {
        if (!this.canDoAction(action)) {
            return;
        }
        _unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].fn(this.player.game, this);
        _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].units.add(this);
    }
    canDoAction(action) {
        if (!this.actionPointsLeft) {
            return false;
        }
        if (!this.definition.actions.includes(action)) {
            return false;
        }
        for (const r of _unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].requirements) {
            if (!r.check(this, action)) {
                return false;
            }
        }
        return true;
    }
    getFailedActionRequirements(action) {
        return _unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].requirements
            .filter((r) => !r.check(this, action))
            .map((r) => r.id);
    }
    setOrder(order) {
        this.order = order;
        this.player.updateUnitsWithoutOrders();
    }
    getPathDestination() {
        if (!this.path) {
            return null;
        }
        const lastPathTurn = this.path[this.path.length - 1];
        return lastPathTurn[lastPathTurn.length - 1];
    }
    getRange() {
        const result = new Set();
        const actionPointsLeftAtTile = new Map();
        this._getRange(this.tile, this.actionPointsLeft, result, actionPointsLeftAtTile);
        if (result.size === 1) {
            result.delete(this.tile);
        }
        return result;
    }
    _getRange(tile = this.tile, actionPointsLeft = this.actionPointsLeft, result, actionPointsLeftAtTile) {
        result.add(tile);
        if (actionPointsLeft <= 0) {
            return result;
        }
        for (const neighbour of tile.neighbours) {
            const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);
            const cost = tile.neighboursCosts.get(neighbour);
            if (cost === Infinity) {
                continue;
            }
            const newActionPointsLeft = actionPointsLeft - cost;
            if (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) {
                actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);
                this._getRange(neighbour, newActionPointsLeft, result, actionPointsLeftAtTile);
            }
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/core/yields.ts":
/*!********************************!*\
  !*** ./src/app/core/yields.ts ***!
  \********************************/
/*! exports provided: EMPTY_YIELDS, zeroYields, addYields, subtractYields, copyYields, roundYields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_YIELDS", function() { return EMPTY_YIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroYields", function() { return zeroYields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYields", function() { return addYields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractYields", function() { return subtractYields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyYields", function() { return copyYields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundYields", function() { return roundYields; });
const EMPTY_YIELDS = {
    food: 0,
    production: 0,
    culture: 0,
    publicWorks: 0,
};
function zeroYields(yields) {
    yields.food = 0;
    yields.production = 0;
    yields.culture = 0;
    yields.publicWorks = 0;
}
function addYields(targetYields, yields) {
    targetYields.food += yields.food;
    targetYields.production += yields.production;
    targetYields.culture += yields.culture;
    targetYields.publicWorks += yields.publicWorks;
}
function subtractYields(targetYields, yields) {
    targetYields.food -= yields.food;
    targetYields.production -= yields.production;
    targetYields.culture -= yields.culture;
    targetYields.publicWorks -= yields.publicWorks;
}
function copyYields(targetYields, yields) {
    targetYields.food = yields.food;
    targetYields.production = yields.production;
    targetYields.culture = yields.culture;
    targetYields.publicWorks = yields.publicWorks;
}
function roundYields(yields) {
    yields.food = Math.ceil(yields.food);
    yields.production = Math.ceil(yields.production);
    yields.culture = Math.ceil(yields.culture);
    yields.publicWorks = Math.ceil(yields.publicWorks);
}


/***/ }),

/***/ "./src/app/data/buildings.ts":
/*!***********************************!*\
  !*** ./src/app/data/buildings.ts ***!
  \***********************************/
/*! exports provided: BUILDINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDINGS", function() { return BUILDINGS; });
/* harmony import */ var _core_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/product */ "./src/app/core/product.ts");

const BUILDINGS = [
    {
        id: "granary",
        name: "Granary",
        productionCost: 40,
        bonuses: { yieldValue: { food: 3 } },
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "well",
        name: "Well",
        productionCost: 20,
        bonuses: { yieldValue: { food: 1 } },
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "bigGranary",
        name: "Grand granary",
        productionCost: 100,
        bonuses: { yieldFactor: { food: 0.2 } },
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("granary")],
        weakRequirements: [],
    },
    {
        id: "workshop",
        name: "Workshop",
        productionCost: 80,
        bonuses: { yieldValue: { production: 5 } },
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "bigWorkshop",
        name: "Grand workshop",
        productionCost: 200,
        bonuses: { yieldFactor: { production: 0.2 } },
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("workshop")],
        weakRequirements: [],
    },
    {
        id: "slaveMarket",
        name: "Slave market",
        productionCost: 50,
        bonuses: { yieldValue: { publicWorks: 2 } },
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "bigWorkshop",
        name: "Grand workshop",
        productionCost: 200,
        bonuses: { yieldFactor: { production: 0.2 } },
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("workshop")],
        weakRequirements: [],
    },
    {
        id: "monument",
        name: "Monument",
        productionCost: 30,
        bonuses: { yieldValue: { culture: 2 } },
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "allDoingBuilding",
        name: "All doing building",
        productionCost: 500,
        bonuses: {
            yieldValue: { food: 1, production: 1 },
            yieldFactor: { food: 0.1, production: 0.1 },
        },
        requirements: [
            new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("bigGranary"),
            new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("bigWorkshop"),
        ],
        weakRequirements: [],
    },
];


/***/ }),

/***/ "./src/app/data/idle-products.ts":
/*!***************************************!*\
  !*** ./src/app/data/idle-products.ts ***!
  \***************************************/
/*! exports provided: IDLE_PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDLE_PRODUCTS", function() { return IDLE_PRODUCTS; });
const IDLE_PRODUCTS = [
    {
        id: "growth",
        name: "Growth",
        productionCost: Infinity,
        requirements: [],
        weakRequirements: [],
        bonuses: { transferProductionToFood: 0.25 },
    },
    {
        id: "culture",
        name: "Culture",
        productionCost: Infinity,
        requirements: [],
        weakRequirements: [],
        bonuses: { transferProductionToCulture: 0.25 },
    },
    {
        id: "public-works",
        name: "Public works",
        productionCost: Infinity,
        requirements: [],
        weakRequirements: [],
        bonuses: { transferProductionToPublicWorks: 0.25 },
    },
];


/***/ }),

/***/ "./src/app/data/units.ts":
/*!*******************************!*\
  !*** ./src/app/data/units.ts ***!
  \*******************************/
/*! exports provided: UNITS_DEFINITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNITS_DEFINITIONS", function() { return UNITS_DEFINITIONS; });
/* harmony import */ var _core_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/product */ "./src/app/core/product.ts");

const UNITS_DEFINITIONS = [
    {
        id: "settler",
        name: "Settler",
        type: "civilian",
        actionPoints: 2,
        power: 0,
        actions: ["foundCity"],
        productionCost: 50,
        requirements: [],
        weakRequirements: [
            new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("granary"),
            new _core_product__WEBPACK_IMPORTED_MODULE_0__["SizeRequirement"](3),
        ],
    },
    {
        id: "worker",
        name: "Worker",
        type: "civilian",
        actionPoints: 2,
        power: 0,
        actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
        productionCost: 20,
        requirements: [],
        weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["SizeRequirement"](2)],
    },
    {
        id: "scout",
        name: "Scout",
        type: "military",
        actionPoints: 2,
        power: 2,
        actions: [],
        productionCost: 10,
        requirements: [],
        weakRequirements: [],
    },
    {
        id: "warrior",
        name: "Warrior",
        type: "military",
        actionPoints: 2,
        power: 5,
        actions: [],
        productionCost: 30,
        requirements: [],
        weakRequirements: [],
    },
];


/***/ }),

/***/ "./src/app/game-canvas/game-canvas.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-canvas/game-canvas.component.ts ***!
  \******************************************************/
/*! exports provided: GameCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCanvasComponent", function() { return GameCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls */ "./src/app/controls.ts");
/* harmony import */ var _renderer_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/renderer */ "./src/app/renderer/renderer.ts");




const _c0 = ["canvas"];
class GameCanvasComponent {
    constructor(controls, renderer) {
        this.controls = controls;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.renderer.setCanvas(this.canvas.nativeElement);
    }
    onContextMenu(event) {
        event.preventDefault();
    }
    onResize(event) {
        this.renderer.resize(window.innerWidth, window.innerHeight);
    }
    onKeyDown(event) {
        this.controls.onKeyDown(event);
    }
    onKeyUp(event) {
        this.controls.onKeyUp(event);
    }
}
GameCanvasComponent.ɵfac = function GameCanvasComponent_Factory(t) { return new (t || GameCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controls__WEBPACK_IMPORTED_MODULE_1__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_renderer_renderer__WEBPACK_IMPORTED_MODULE_2__["GameRenderer"])); };
GameCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCanvasComponent, selectors: [["app-game-canvas"]], viewQuery: function GameCanvasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function GameCanvasComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GameCanvasComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown", function GameCanvasComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup", function GameCanvasComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, consts: [[3, "click", "mousedown", "mouseup", "mousemove", "wheel", "contextmenu"], ["canvas", ""]], template: function GameCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameCanvasComponent_Template_canvas_click_0_listener($event) { return ctx.controls.onClick($event); })("mousedown", function GameCanvasComponent_Template_canvas_mousedown_0_listener($event) { return ctx.controls.onMouseDown($event); })("mouseup", function GameCanvasComponent_Template_canvas_mouseup_0_listener($event) { return ctx.controls.onMouseUp($event); })("mousemove", function GameCanvasComponent_Template_canvas_mousemove_0_listener($event) { return ctx.controls.onMouseMove($event); })("wheel", function GameCanvasComponent_Template_canvas_wheel_0_listener($event) { return ctx.controls.onWheel($event); })("contextmenu", function GameCanvasComponent_Template_canvas_contextmenu_0_listener($event) { return ctx.onContextMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  background-color: black;\n  z-index: -10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC9nYW1lLWNhbnZhcy9nYW1lLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS1jYW52YXMvZ2FtZS1jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FudmFzL2dhbWUtY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjYW52YXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IC0xMDsgLy8gYWxsb3cgdWkgdG8gY292ZXIgdGhlIGNhbnZhc1xuICB9XG59XG4iLCI6aG9zdCBjYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgei1pbmRleDogLTEwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-game-canvas",
                templateUrl: "./game-canvas.component.html",
                styleUrls: ["./game-canvas.component.scss"],
            }]
    }], function () { return [{ type: _controls__WEBPACK_IMPORTED_MODULE_1__["Controls"] }, { type: _renderer_renderer__WEBPACK_IMPORTED_MODULE_2__["GameRenderer"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["canvas"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize", ["$event"]]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:keydown", ["$event"]]
        }], onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:keyup", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/map-generators/utils.ts":
/*!*****************************************!*\
  !*** ./src/app/map-generators/utils.ts ***!
  \*****************************************/
/*! exports provided: findCoastline, placeRiverBetweenTiles, POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE, POSSIBLE_BORDER_PATHS, OPPOSITE_DIRECTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCoastline", function() { return findCoastline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeRiverBetweenTiles", function() { return placeRiverBetweenTiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE", function() { return POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSSIBLE_BORDER_PATHS", function() { return POSSIBLE_BORDER_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPPOSITE_DIRECTIONS", function() { return OPPOSITE_DIRECTIONS; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");

function findCoastline(tiles) {
    const coastline = [];
    for (let x = 0; x < tiles.length; x++) {
        for (let y = 0; y < tiles[x].length; y++) {
            const tile = tiles[x][y];
            if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"].none) {
                continue;
            }
            if (tile.neighbours.find((t) => t.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"].none)) {
                coastline.push(tile);
            }
        }
    }
    return coastline;
}
function placeRiverBetweenTiles(tileA, tileB) {
    const direction = tileA.getDirectionTo(tileB);
    if (tileA.riverParts.includes(direction)) {
        return false;
    }
    tileA.riverParts.push(direction);
    tileB.riverParts.push(OPPOSITE_DIRECTIONS[direction]);
    return true;
}
// first direction is clockwise, second is counterclockwise
const POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE = {
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE]: [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE],
};
// flow is clockwise for first tile
const POSSIBLE_BORDER_PATHS = {
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE],
        [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE],
    ],
};
const OPPOSITE_DIRECTIONS = {
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E,
    [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE]: _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE,
};


/***/ }),

/***/ "./src/app/renderer/animation.ts":
/*!***************************************!*\
  !*** ./src/app/renderer/animation.ts ***!
  \***************************************/
/*! exports provided: Animation, AnimationEaseOutQuad, AnimationEaseOutCubic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEaseOutQuad", function() { return AnimationEaseOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEaseOutCubic", function() { return AnimationEaseOutCubic; });
class Animation {
    constructor(start, end, duration) {
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.progress = 0;
        this.diff = end - start;
    }
    step(stepTime) {
        if (this.progress >= this.duration) {
            return null;
        }
        this.progress += stepTime;
        const eased = this.ease(this.progress / this.duration);
        return this.start + this.diff * Math.min(eased, 1);
    }
}
class AnimationEaseOutQuad extends Animation {
    ease(t) {
        return t * (2 - t);
    }
}
class AnimationEaseOutCubic extends Animation {
    ease(t) {
        return --t * t * t + 1;
    }
}


/***/ }),

/***/ "./src/app/renderer/area.ts":
/*!**********************************!*\
  !*** ./src/app/renderer/area.ts ***!
  \**********************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/renderer/utils.ts");



const VS_BORDER_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;
attribute float aUvs;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying float vUvs;

void main() {
  vUvs = aUvs;
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;
const FRAG_BORDER_PROGRAM = `
precision mediump float;

varying float vUvs;

uniform vec4 color;
uniform float borderSize;
uniform float borderShadow;
uniform float borderShadowStrength;

void main() {
  vec4 c = color;
  float a = 1.0;
  if (vUvs < borderSize) {
    a = 0.0;
  } else if (vUvs < (1.0 - borderSize)) {
    a = (vUvs - (1.0 - borderShadow)) * borderShadowStrength;
  }

  gl_FragColor = vec4(c.r * a, c.g * a, c.b * a, a);
}`;
const VS_BACKGROUND_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

void main() {
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;
const FRAG_BACKGROUND_PROGRAM = `
precision mediump float;

uniform vec4 color;
uniform float opacity;

void main() {
  float a = 0.5;
  gl_FragColor = vec4(color.r * opacity, color.g * opacity, color.b * opacity, opacity);
}`;
const TRIANGLES = [
    [0.5, 0.5, 0, 0.25, 0.5, 0],
    [0.5, 0.5, 0.5, 0, 1, 0.25],
    [0.5, 0.5, 1, 0.25, 1, 0.75],
    [0.5, 0.5, 1, 0.75, 0.5, 1],
    [0.5, 0.5, 0.5, 1, 0, 0.75],
    [0.5, 0.5, 0, 0.75, 0, 0.25],
];
const LEFT_SIDE_TRIANGLES = [
    [0.5, 0.5, 0, 0.5, 0, 0.25],
    [0.5, 0.5, 0.25, 0.125, 0.5, 0],
    [0.5, 0.5, 0.75, 0.125, 1, 0.25],
    [0.5, 0.5, 1, 0.5, 1, 0.75],
    [0.5, 0.5, 0.75, 0.875, 0.5, 1],
    [0.5, 0.5, 0.25, 0.875, 0, 0.75],
];
const RIGHT_SIDE_TRIANGLES = [
    [0.5, 0.5, 0.5, 0, 0.75, 0.125],
    [0.5, 0.5, 1, 0.25, 1, 0.5],
    [0.5, 0.5, 1, 0.75, 0.75, 0.875],
    [0.5, 0.5, 0.5, 1, 0.25, 0.875],
    [0.5, 0.5, 0, 0.75, 0, 0.5],
    [0.5, 0.5, 0, 0.25, 0.25, 0.125],
];
const borderGeometries = new Map();
const borderProgram = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Program"].from(VS_BORDER_PROGRAM, FRAG_BORDER_PROGRAM);
const backgroundProgram = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Program"].from(VS_BACKGROUND_PROGRAM, FRAG_BACKGROUND_PROGRAM);
function makeBorderGeometry(borders) {
    const vertices = [];
    const uvs = [];
    for (let i = 0; i < 6; i++) {
        if (borders[i] === "1") {
            vertices.push(...TRIANGLES[i]);
            uvs.push(...[0, 1, 1]);
            let leftNeighbour = i - 1;
            if (leftNeighbour < 0) {
                leftNeighbour += 6;
            }
            if (borders[leftNeighbour] === "0") {
                vertices.push(...LEFT_SIDE_TRIANGLES[i]);
                uvs.push(...[0, 0, 1]);
            }
            let rightNeighbour = i + 1;
            if (rightNeighbour > 5) {
                rightNeighbour -= 6;
            }
            if (borders[rightNeighbour] === "0") {
                vertices.push(...RIGHT_SIDE_TRIANGLES[i]);
                uvs.push(...[0, 1, 0]);
            }
        }
    }
    return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]()
        .addAttribute("aVertexPosition", vertices, 2)
        .addAttribute("aUvs", uvs, 1);
}
class Area {
    constructor(state, options) {
        this.options = options;
        this.tiles = new Set();
        this.borders = new Map();
        this.drawer = new AreaDrawer(this, state, options);
    }
    destroy() {
        this.drawer.clear();
    }
    setTiles(tiles) {
        this.clear();
        this.tiles = new Set(tiles);
        this.computeAllBorders();
        for (const [tile, borders] of this.borders) {
            this.drawer.drawTileBorders(tile, borders);
        }
        if (this.options.backgroundOpacity > 0) {
            for (const tile of this.tiles) {
                this.drawer.drawTileBackground(tile);
            }
        }
    }
    addTiles(tiles) {
        for (const tile of tiles) {
            this.tiles.add(tile);
            this.drawer.drawTileBackground(tile);
        }
        this.computeBordersForTiles(tiles);
    }
    removeTiles(tiles) {
        this.drawer.removeTiles(tiles);
        for (const tile of tiles) {
            this.tiles.delete(tile);
        }
        this.computeBordersForTiles(tiles);
    }
    computeBordersForTiles(tiles) {
        const visited = new Set();
        for (const tile of tiles) {
            if (visited.has(tile)) {
                continue;
            }
            visited.add(tile);
            this.computeTileBorders(tile);
            this.drawer.updateTileBorders(tile);
            for (const neighbour of tile.neighbours) {
                if (!this.tiles.has(neighbour) || visited.has(neighbour)) {
                    continue;
                }
                this.computeTileBorders(neighbour);
                this.drawer.updateTileBorders(neighbour);
            }
        }
    }
    computeAllBorders() {
        this.borders.clear();
        for (const tile of this.tiles) {
            this.computeTileBorders(tile);
        }
    }
    computeTileBorders(tile) {
        const borders = tile.fullNeighbours
            .map((n) => (n && this.tiles.has(n) ? "0" : "1"))
            .join("");
        if (borders === "000000") {
            this.borders.delete(tile);
        }
        else {
            this.borders.set(tile, borders);
        }
    }
    clear() {
        this.borders.clear();
        this.tiles = new Set();
        this.drawer.clear();
    }
}
class AreaDrawer {
    constructor(area, state, options) {
        this.area = area;
        this.state = state;
        this.options = options;
        this.bordersMap = new Map();
        this.backgroundMap = new Map();
        const cssColor = "#" + options.color.toString(16).padStart(6, "0");
        this.vec4Color = [
            parseInt(cssColor[1] + cssColor[2], 16) / 255,
            parseInt(cssColor[3] + cssColor[4], 16) / 255,
            parseInt(cssColor[5] + cssColor[6], 16) / 255,
            1,
        ];
        this.borderShader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Shader"](borderProgram, {
            color: this.vec4Color,
            borderSize: this.options.borderSize,
            borderShadow: this.options.borderShadow,
            borderShadowStrength: this.options.borderShadowStrength,
        });
        this.backgroundShader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Shader"](backgroundProgram, {
            color: this.vec4Color,
            opacity: this.options.backgroundOpacity,
        });
    }
    removeTiles(tiles) {
        for (const tile of tiles) {
            const mesh = this.backgroundMap.get(tile);
            if (mesh) {
                mesh.destroy();
                this.backgroundMap.delete(tile);
            }
        }
    }
    drawTileBackground(tile) {
        if (tile.seaLevel !== src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none && !this.options.visibleOnWater) {
            return;
        }
        const mesh = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Mesh"](_utils__WEBPACK_IMPORTED_MODULE_2__["HEX_GEOMETRY"], this.backgroundShader);
        mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
        mesh.position.y = tile.y * 0.75;
        this.options.container.addChild(mesh, tile);
        this.backgroundMap.set(tile, mesh);
        if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
            mesh.visible = false;
        }
    }
    updateTileBorders(tile) {
        const mesh = this.bordersMap.get(tile);
        if (mesh) {
            mesh.destroy();
        }
        if (!this.area.tiles.has(tile)) {
            return;
        }
        const borders = this.area.borders.get(tile);
        if (borders) {
            this.drawTileBorders(tile, borders);
        }
        else {
            this.bordersMap.delete(tile);
        }
    }
    drawTileBorders(tile, borders) {
        let geometry = borderGeometries.get(borders);
        if (!geometry) {
            geometry = makeBorderGeometry(borders);
            borderGeometries.set(borders, geometry);
        }
        const mesh = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, this.borderShader);
        mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
        mesh.position.y = tile.y * 0.75;
        this.options.container.addChild(mesh, tile);
        this.bordersMap.set(tile, mesh);
        if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
            mesh.visible = false;
        }
    }
    clear() {
        for (const obj of this.bordersMap.values()) {
            obj.destroy();
        }
        this.bordersMap.clear();
        for (const obj of this.backgroundMap.values()) {
            obj.destroy();
        }
        this.backgroundMap.clear();
    }
}


/***/ }),

/***/ "./src/app/renderer/camera.ts":
/*!************************************!*\
  !*** ./src/app/renderer/camera.ts ***!
  \************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/renderer/utils.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/app/renderer/animation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/renderer/constants.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");







class Camera {
    constructor(game) {
        this.game = game;
        this.MAX_ZOOM = _constants__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]; // tile graphics width in pixels
        this.MIN_ZOOM = 7;
        this.transform = { x: 0, y: 0, scale: 130 };
        this._transform$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.transform);
        this.transform$ = this._transform$.asObservable();
        this.transformChanged = false;
        this.scaleAnimation = null;
        this.moveXAnimation = null;
        this.moveYAnimation = null;
        this.tileBoundingBox = {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        };
    }
    setRenderer(renderer) {
        this.renderer = renderer;
        renderer.tick$.subscribe(() => {
            if (this.transformChanged) {
                this._transform$.next(this.transform);
                this.transformChanged = false;
            }
        });
    }
    moveBy(x, y) {
        this.transform.x -= x / this.transform.scale;
        this.transform.y -= y / this.transform.scale;
        this.transformChanged = true;
    }
    moveTo(x, y) {
        this.transform.x = x;
        this.transform.y = y;
        this.transformChanged = true;
    }
    moveToTileWithEasing(tile) {
        const t = this.transform;
        const [x, y] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTileCoords"])(tile);
        this.moveXAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.x, x, 600);
        this.moveYAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.y, y, 600);
    }
    scaleToWithEasing(newScale, screenPivotX, screenPivotY, duration = 600) {
        const t = this.transform;
        this.scalePivotX = screenPivotX;
        this.scalePivotY = screenPivotY;
        this.scaleAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.scale, newScale, duration);
    }
    scaleByWithEasing(scaleFactor, screenPivotX, screenPivotY, duration = 600) {
        var _a;
        const t = this.transform;
        const currentScale = ((_a = this.scaleAnimation) === null || _a === void 0 ? void 0 : _a.end) || t.scale;
        const newScale = currentScale * scaleFactor;
        this.scaleToWithEasing(newScale, screenPivotX, screenPivotY, duration);
    }
    scaleTo(scale, screenPivotX, screenPivotY) {
        const t = this.transform;
        const [x1, y1] = this.screenToCanvas(screenPivotX, screenPivotY);
        t.scale = Math.max(this.MIN_ZOOM, Math.min(this.MAX_ZOOM, scale));
        const [x2, y2] = this.screenToCanvas(screenPivotX, screenPivotY);
        t.x += x1 - x2;
        t.y += y1 - y2;
        this.transformChanged = true;
    }
    moveToTile(tile) {
        const [x, y] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTileCoords"])(tile);
        this.moveTo(x, y);
    }
    screenToCanvas(screenX, screenY) {
        const t = this.transform;
        return [
            (screenX - this.canvas.width / 2) / t.scale + t.x,
            (screenY - this.canvas.height / 2) / t.scale + t.y,
        ];
    }
    screenToGame(screenX, screenY) {
        let [x, y] = this.screenToCanvas(screenX, screenY);
        y = Math.floor(y / 0.75);
        x = Math.floor(x - (y % 2 ? 0.5 : 0));
        return [x, y];
    }
    canvasToScreen(canvasX, canvasY) {
        const t = this.transform;
        return [
            t.scale * (canvasX - t.x) + this.canvas.width / 2,
            t.scale * (canvasY - t.y) + this.canvas.height / 2,
        ];
    }
    gameToScreen(gameX, gameY) {
        if (Math.floor(gameY) % 2) {
            gameX += 0.5;
        }
        return this.canvasToScreen(gameX, gameY * 0.75);
    }
    get canvas() {
        return this.renderer.canvas;
    }
    update() {
        const elapsedMS = this.renderer.app.ticker.elapsedMS;
        if (this.scaleAnimation) {
            const newScale = this.scaleAnimation.step(elapsedMS);
            if (newScale === null) {
                this.scaleAnimation = null;
            }
            else {
                this.scaleTo(newScale, this.scalePivotX, this.scalePivotY);
            }
        }
        if (this.moveXAnimation || this.moveYAnimation) {
            const t = this.transform;
            let [x, y] = [t.x, t.y];
            if (this.moveXAnimation) {
                const newX = this.moveXAnimation.step(elapsedMS);
                if (newX === null) {
                    this.moveXAnimation = null;
                }
                else {
                    x = newX;
                }
            }
            if (this.moveYAnimation) {
                const newY = this.moveYAnimation.step(elapsedMS);
                if (newY === null) {
                    this.moveYAnimation = null;
                }
                else {
                    y = newY;
                }
            }
            this.moveTo(x, y);
        }
        this.updateBoundingBox();
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        // const m = this.renderer.app.renderer.globalUniforms.uniforms
        const m = this.renderer.app.renderer.projection.projectionMatrix;
        m.tx = this.transform.x;
        m.ty = this.transform.y;
        m.d = this.transform.scale;
        m.a = this.transform.scale;
    }
    updateBoundingBox() {
        if (!this.game.state) {
            return;
        }
        const t = this.transform;
        const width = Math.floor(this.renderer.canvas.width / t.scale);
        const height = Math.floor(this.renderer.canvas.height / t.scale);
        const map = this.game.state.map;
        const xStart = Math.floor(t.x - width / 2 - 1);
        const yStart = Math.floor(t.y - height / 2);
        this.tileBoundingBox.xStart = Math.max(0, Math.min(map.width, xStart));
        this.tileBoundingBox.yStart = Math.max(0, Math.min(map.height, yStart));
        this.tileBoundingBox.xEnd = Math.min(map.width, xStart + width + 3);
        this.tileBoundingBox.yEnd = Math.min(map.height, (yStart + height + 2) / 0.75);
    }
}
Camera.ɵfac = function Camera_Factory(t) { return new (t || Camera)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"])); };
Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Camera, factory: Camera.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_5__["GameApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/renderer/constants.ts":
/*!***************************************!*\
  !*** ./src/app/renderer/constants.ts ***!
  \***************************************/
/*! exports provided: TILE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return TILE_SIZE; });
const TILE_SIZE = 256;


/***/ }),

/***/ "./src/app/renderer/map.ts":
/*!*********************************!*\
  !*** ./src/app/renderer/map.ts ***!
  \*********************************/
/*! exports provided: MapDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDrawer", function() { return MapDrawer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tile_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-container */ "./src/app/renderer/tile-container.ts");
/* harmony import */ var _tile_terrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile/terrain */ "./src/app/renderer/tile/terrain.ts");
/* harmony import */ var _tile_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile/unit */ "./src/app/renderer/tile/unit.ts");
/* harmony import */ var _tile_yields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile/yields */ "./src/app/renderer/tile/yields.ts");
/* harmony import */ var _tile_river__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tile/river */ "./src/app/renderer/tile/river.ts");
/* harmony import */ var _tile_city__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tile/city */ "./src/app/renderer/tile/city.ts");
/* harmony import */ var _politics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./politics */ "./src/app/renderer/politics.ts");









class MapDrawer {
    constructor(game, renderer, camera) {
        this.game = game;
        this.renderer = renderer;
        this.camera = camera;
        this.container = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileWrapperContainer"]();
        this.waterContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.terrainContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.riverContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.cityContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.yieldsContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.unitsContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.areasContainer = new _tile_container__WEBPACK_IMPORTED_MODULE_2__["TileContainer"](this.camera.tileBoundingBox);
        this.overlaysContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.waterContainer["interactiveChildren"] = false;
        this.terrainContainer["interactiveChildren"] = false;
        this.riverContainer["interactiveChildren"] = false;
        this.cityContainer["interactiveChildren"] = false;
        this.yieldsContainer["interactiveChildren"] = false;
        this.overlaysContainer["interactiveChildren"] = false;
        this.areasContainer["interactiveChildren"] = false;
        this.container.addChild(this.waterContainer);
        this.container.addChild(this.terrainContainer);
        this.container.addChild(this.riverContainer);
        this.container.addChild(this.cityContainer);
        this.container.addChild(this.yieldsContainer);
        this.container.addChild(this.overlaysContainer);
        this.container.addChild(this.areasContainer);
        this.container.addChild(this.unitsContainer);
        this.game.init$.subscribe((state) => {
            state.trackedPlayer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.game.stop$))
                .subscribe((player) => this.limitViewToPlayer(player));
            state.tilesExplored$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.game.stop$))
                .subscribe((tiles) => this.reveal(tiles));
            state.tilesUpdated$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.game.stop$))
                .subscribe((tiles) => {
                for (const tile of tiles) {
                    this.updateTile(tile);
                }
            });
            this.build(state);
        });
        this.game.stop$.subscribe(() => this.clear());
        // Drawers must be created after init$ subscription?. Race condition will occur otherwise.
        this.terrainDrawer = new _tile_terrain__WEBPACK_IMPORTED_MODULE_3__["TerrainDrawer"](this.renderer, this.game, this.terrainContainer, this.waterContainer);
        this.unitsDrawer = new _tile_unit__WEBPACK_IMPORTED_MODULE_4__["UnitsDrawer"](this.game, this.renderer, this.unitsContainer);
        this.yieldsDrawer = new _tile_yields__WEBPACK_IMPORTED_MODULE_5__["YiedsDrawer"](this.game, this.renderer.mapUi, this.yieldsContainer);
        this.riverDrawer = new _tile_river__WEBPACK_IMPORTED_MODULE_6__["RiverDrawer"](this.game, this.riverContainer);
        this.cityDrawer = new _tile_city__WEBPACK_IMPORTED_MODULE_7__["CityDrawer"](this.game, this.renderer, this.cityContainer);
    }
    hideAllTiles() {
        for (const objects of this.container.tilesMap.values()) {
            for (const obj of objects) {
                obj.visible = false;
            }
        }
    }
    reveal(tiles) {
        for (const tile of tiles) {
            const displayObjects = this.container.tilesMap.get(tile);
            if (displayObjects) {
                for (const obj of displayObjects) {
                    obj.visible = true;
                }
            }
        }
    }
    clear() {
        if (this.terrainDrawer) {
            this.terrainDrawer.clear();
            this.riverDrawer.clear();
            this.cityDrawer.clear();
            this.unitsDrawer.clear();
            this.yieldsDrawer.clear();
            this.politicsDrawer.clear();
        }
    }
    build(gameState) {
        var _a, _b;
        this.politicsDrawer = new _politics__WEBPACK_IMPORTED_MODULE_8__["PoliticsDrawer"](gameState, this.renderer);
        this.container.bindToMap(gameState.map);
        this.waterContainer.bindToMap(gameState.map);
        this.terrainContainer.bindToMap(gameState.map);
        this.cityContainer.bindToMap(gameState.map);
        this.yieldsContainer.bindToMap(gameState.map);
        this.riverContainer.bindToMap(gameState.map);
        this.unitsContainer.bindToMap(gameState.map);
        this.areasContainer.bindToMap(gameState.map);
        this.unitsDrawer.build();
        this.cityDrawer.build();
        for (let y = 0; y < gameState.map.height; y++) {
            for (let x = 0; x < gameState.map.width; x++) {
                const tile = gameState.map.tiles[x][y];
                this.drawTile(tile);
            }
        }
        if ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer) {
            this.limitViewToPlayer((_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer);
        }
    }
    updateTile(tile) {
        this.clearTile(tile);
        this.drawTile(tile);
    }
    drawTile(tile) {
        this.terrainDrawer.drawTile(tile);
        this.yieldsDrawer.drawTile(tile);
        this.riverDrawer.drawTile(tile);
    }
    clearTile(tile) {
        this.terrainDrawer.clearTile(tile);
        this.yieldsDrawer.clearTile(tile);
        this.riverContainer.clearTile(tile);
    }
    limitViewToPlayer(player) {
        this.hideAllTiles();
        this.reveal(player.exploredTiles);
    }
}


/***/ }),

/***/ "./src/app/renderer/minimap.ts":
/*!*************************************!*\
  !*** ./src/app/renderer/minimap.ts ***!
  \*************************************/
/*! exports provided: MinimapRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimapRenderer", function() { return MinimapRenderer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/app/renderer/utils.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");





const SEA_COLORS = {
    [_shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep]: 0x25619a,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].shallow]: 0x4383b5,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none]: 0x000000,
};
const CLIMATE_COLORS = {
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].continental]: 0x516733,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].desert]: 0xc7bd93,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].oceanic]: 0x678123,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].savanna]: 0xb4a73f,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical]: 0x6c9b2b,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tundra]: 0x9cb3b6,
    [_shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].arctic]: 0xe5e5e5,
};
const maxSize = 300;
class MinimapRenderer {
    constructor(game, renderer, camera) {
        this.game = game;
        this.renderer = renderer;
        this.camera = camera;
        this.width = 0;
        this.height = 0;
        this.scale = 1;
        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.mapScene = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.cameraGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.mapSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"]();
        this.tilesMap = new Map();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.game.init$.subscribe((state) => {
            state.trackedPlayer$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
                .subscribe((player) => {
                this.hideAllTiles();
                this.reveal(player.exploredTiles);
                this.updateMap();
            });
            state.tilesExplored$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
                .subscribe((tiles) => {
                this.reveal(tiles);
                this.updateMap();
            });
            state.tilesUpdated$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
                .subscribe((tiles) => {
                for (const tile of tiles) {
                    this.drawTile(tile);
                }
                this.updateMap();
            });
        });
        this.container.addChild(this.mapSprite);
        this.container.addChild(this.cameraGraphics);
    }
    calculateSize() {
        if (!this.game.state) {
            return;
        }
        const map = this.game.state.map;
        if (map.width > map.height) {
            this.width = maxSize;
            this.height = maxSize / (map.width / map.height);
            this.scale = maxSize / map.width;
        }
        else {
            this.width = maxSize / (map.height / map.width);
            this.height = maxSize;
            this.scale = maxSize / map.height;
        }
        this.height *= 0.75;
    }
    create(app) {
        if (!this.game.state) {
            return;
        }
        this.app = app;
        this.mapTexture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["RenderTexture"].create({
            width: this.width,
            height: this.height,
        });
        this.mapSprite.texture = this.mapTexture;
        this.drawMap();
        this.hideAllTiles();
        this.reveal(this.game.state.trackedPlayer.exploredTiles);
        this.app.stage.addChild(this.container);
        this.camera.transform$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe((transform) => {
            this.updateCamera(transform);
        });
        this.updateMap();
    }
    destroy() {
        this.mapTexture.destroy();
        this.mapSprite.destroy();
        for (const objects of this.tilesMap.values()) {
            for (const obj of objects) {
                obj.destroy();
            }
        }
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    hideAllTiles() {
        for (const obj of this.mapScene.children) {
            obj.visible = false;
        }
    }
    reveal(tiles) {
        for (const tile of tiles) {
            const displayObjects = this.tilesMap.get(tile);
            if (displayObjects) {
                for (const obj of displayObjects) {
                    obj.visible = true;
                }
            }
        }
    }
    updateCamera(t) {
        let width = this.renderer.canvas.width / t.scale;
        let height = this.renderer.canvas.height / t.scale;
        const xStart = (t.x - width / 2) * this.scale;
        const yStart = (t.y - height / 2) * this.scale;
        this.cameraGraphics.clear();
        this.cameraGraphics.lineStyle(1, 0xffffff);
        this.cameraGraphics.drawRect(xStart, yStart, width * this.scale, height * this.scale);
        if (this.app) {
            this.app.render();
        }
    }
    updateMap() {
        this.app.renderer.render(this.mapScene, this.mapTexture);
        this.app.render();
    }
    drawMap() {
        if (!this.game.state) {
            return;
        }
        for (let y = 0; y < this.game.state.map.height; y++) {
            for (let x = 0; x < this.game.state.map.width; x++) {
                this.drawTile(this.game.state.map.tiles[x][y]);
            }
        }
    }
    drawTile(tile) {
        let color;
        if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
            color = SEA_COLORS[tile.seaLevel];
        }
        else if (tile.areaOf) {
            color = tile.areaOf.player.color;
        }
        else {
            color = CLIMATE_COLORS[tile.climate];
        }
        const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        g.beginFill(color);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["drawHex"])(g);
        g.endFill();
        g.position.x = (tile.x + (tile.y % 2 ? 0.5 : 0)) * this.scale;
        g.position.y = tile.y * 0.75 * this.scale;
        g.scale.x = this.scale;
        g.scale.y = this.scale;
        this.mapScene.addChild(g);
        this.tilesMap.set(tile, [g]);
        this.renderRivers(tile, g);
        if (!this.game.state.trackedPlayer.exploredTiles.has(tile)) {
            g.visible = false;
        }
    }
    renderRivers(tile, graphics) {
        if (!tile.riverParts.length) {
            return;
        }
        graphics.lineStyle(0.3, SEA_COLORS[_shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep]);
        for (const river of tile.riverParts) {
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NW) {
                graphics.moveTo(0, 0.25);
                graphics.lineTo(0.5, 0);
            }
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NE) {
                graphics.moveTo(0.5, 0);
                graphics.lineTo(1, 0.25);
            }
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].E) {
                graphics.moveTo(1, 0.25);
                graphics.lineTo(1, 0.75);
            }
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].SE) {
                graphics.moveTo(1, 0.75);
                graphics.lineTo(0.5, 1);
            }
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].SW) {
                graphics.moveTo(0.5, 1);
                graphics.lineTo(0, 0.75);
            }
            if (river === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].W) {
                graphics.moveTo(0, 0.75);
                graphics.lineTo(0, 0.25);
            }
        }
    }
}


/***/ }),

/***/ "./src/app/renderer/overlays.ts":
/*!**************************************!*\
  !*** ./src/app/renderer/overlays.ts ***!
  \**************************************/
/*! exports provided: OverlaysRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysRenderer", function() { return OverlaysRenderer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/renderer/utils.ts");


class OverlaysRenderer {
    constructor(mapUi) {
        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.hoveredTileGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.selectedTileGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.highlightedTilesGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.container.addChild(this.hoveredTileGraphics);
        this.container.addChild(this.selectedTileGraphics);
        this.buildHoveredTileGraphics();
        this.buildSelectedTileGraphics();
        mapUi.hoveredTile$.subscribe((tile) => this.displayAtTile(this.hoveredTileGraphics, tile));
        mapUi.selectedTile$.subscribe((tile) => {
            this.displayAtTile(this.selectedTileGraphics, tile);
        });
        mapUi.highlightedTiles$.subscribe((tiles) => {
            this.buildHighlightedTiles(tiles);
        });
    }
    displayAtTile(obj, tile) {
        if (tile) {
            const [x, y] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCoords"])(tile);
            obj.position.x = x;
            obj.position.y = y;
            obj.visible = true;
        }
        else {
            obj.visible = false;
        }
    }
    buildHoveredTileGraphics() {
        this.hoveredTileGraphics.lineStyle(0.02, 0xffffff, 0.5);
        this.hoveredTileGraphics.beginFill(0xffffff, 0.1);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawClosedHex"])(this.hoveredTileGraphics);
        this.hoveredTileGraphics.endFill();
    }
    buildSelectedTileGraphics() {
        this.selectedTileGraphics.lineStyle(0.05, 0xff0000, 0.5);
        this.selectedTileGraphics.beginFill(0xffffff, 0.1);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawClosedHex"])(this.selectedTileGraphics);
        this.selectedTileGraphics.endFill();
    }
    buildHighlightedTiles(tiles) {
        this.highlightedTilesGraphics.clear();
        if (!tiles.size) {
            this.container.removeChild(this.highlightedTilesGraphics);
            return;
        }
        const g = this.highlightedTilesGraphics;
        for (const tile of tiles) {
            const [x, y] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCoords"])(tile);
            g.beginFill(0xffffff, 0.3);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawHex"])(g, x, y);
            g.endFill();
        }
        this.container.addChild(g);
    }
    clear() {
        this.highlightedTilesGraphics.clear();
        this.hoveredTileGraphics.visible = false;
        this.selectedTileGraphics.visible = false;
    }
}


/***/ }),

/***/ "./src/app/renderer/path.ts":
/*!**********************************!*\
  !*** ./src/app/renderer/path.ts ***!
  \**********************************/
/*! exports provided: PathRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRenderer", function() { return PathRenderer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/renderer/utils.ts");


class PathRenderer {
    constructor(game, camera, mapUi) {
        this.game = game;
        this.camera = camera;
        this.mapUi = mapUi;
        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.pathGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.labels = [];
        this.container.addChild(this.pathGraphics);
        mapUi.activePath$.subscribe((path) => this.buildPath(path));
    }
    clear() {
        this.pathGraphics.clear();
        for (const label of this.labels) {
            this.container.removeChild(label);
            label.destroy();
        }
        this.labels = [];
    }
    buildPath(path) {
        this.clear();
        const unit = this.mapUi.selectedUnit;
        if (!path || !path.length || !unit) {
            this.container.visible = false;
            return;
        }
        this.container.visible = true;
        const g = this.pathGraphics;
        g.lineStyle(0.1, 0xff0000);
        g.moveTo(...Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(unit.tile));
        for (const turn of path) {
            for (const tile of turn) {
                g.lineTo(...Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(tile));
            }
        }
        for (let turn = 0; turn < path.length; turn++) {
            if (path[turn][0]) {
                const scale = this.camera.transform.scale;
                const label = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](turn.toString(), {
                    align: "center",
                    fill: "white",
                    dropShadow: true,
                    dropShadowBlur: 5,
                    dropShadowDistance: 0,
                    fontSize: scale * 0.7,
                });
                label.scale.set(1 / scale, 1 / scale);
                this.container.addChild(label);
                this.labels.push(label);
                const metrics = pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextMetrics"].measureText(turn.toString(), label.style);
                const [x, y] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(path[turn][0]);
                label.position.x = x - metrics.width / 2 / scale;
                label.position.y = y - metrics.height / 2 / scale;
            }
        }
    }
}


/***/ }),

/***/ "./src/app/renderer/politics.ts":
/*!**************************************!*\
  !*** ./src/app/renderer/politics.ts ***!
  \**************************************/
/*! exports provided: PoliticsDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsDrawer", function() { return PoliticsDrawer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./src/app/renderer/area.ts");


class PoliticsDrawer {
    constructor(state, renderer) {
        this.state = state;
        this.renderer = renderer;
        this.areas = [];
        this.makeAreas();
    }
    makeAreas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const player of this.state.players) {
                const tiles = yield this.state.getAreaTiles(player.areaId);
                const area = new _area__WEBPACK_IMPORTED_MODULE_1__["Area"](this.state, {
                    color: player.color,
                    container: this.renderer.mapDrawer.areasContainer,
                    backgroundOpacity: 0.5,
                    borderShadow: 0.7,
                    borderSize: 0.08,
                    borderShadowStrength: 1,
                    visibleOnWater: false,
                });
                this.areas.push(area);
                area.setTiles(tiles);
                this.state.areasMap.set(player.areaId, area);
            }
        });
    }
    clear() {
        for (const area of this.areas) {
            area.clear();
        }
        this.areas = [];
    }
}


/***/ }),

/***/ "./src/app/renderer/renderer.ts":
/*!**************************************!*\
  !*** ./src/app/renderer/renderer.ts ***!
  \**************************************/
/*! exports provided: GameRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRenderer", function() { return GameRenderer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlays */ "./src/app/renderer/overlays.ts");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path */ "./src/app/renderer/path.ts");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/renderer/map.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera */ "./src/app/renderer/camera.ts");










class GameRenderer {
    constructor(game, mapUi, camera) {
        this.game = game;
        this.mapUi = mapUi;
        this.camera = camera;
        this.loader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Loader"]();
        this.atlas = this.loader.add("assets/atlas.json").load(() => this.onLoad());
        this._tick$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.tick$ = this._tick$.asObservable();
        this.camera.setRenderer(this);
    }
    setCanvas(canvas) {
        const [width, height] = [window.innerWidth, window.innerHeight];
        this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({ view: canvas, width, height });
        this.canvas = canvas;
        this.mapDrawer = new _map__WEBPACK_IMPORTED_MODULE_4__["MapDrawer"](this.game, this, this.camera);
        this.overlays = new _overlays__WEBPACK_IMPORTED_MODULE_2__["OverlaysRenderer"](this.mapUi);
        this.path = new _path__WEBPACK_IMPORTED_MODULE_3__["PathRenderer"](this.game, this.camera, this.mapUi);
        this.path.container.interactiveChildren = false;
        this.overlays.container.interactiveChildren = false;
        this.app.stage.addChild(this.mapDrawer.container);
        this.app.stage.addChild(this.overlays.container);
        this.app.stage.addChild(this.path.container);
        if (this.isLoaded) {
            this.onReady();
        }
        this.app.ticker.add(() => {
            this.camera.update();
            this.mapUi.update();
            this._tick$.next();
            const scale = this.camera.transform.scale;
            if (this.mapDrawer.politicsDrawer) {
                const backgroundOpacity = Math.min(0.4, Math.max(0, (70 - scale) / 150));
                const borderShadow = Math.max(0.4, Math.min(0.7, (150 - scale) / 100));
                for (const area of this.mapDrawer.politicsDrawer.areas) {
                    area.drawer.backgroundShader.uniforms.opacity = backgroundOpacity;
                    area.drawer.borderShader.uniforms.borderShadow = borderShadow;
                }
            }
        });
    }
    resize(width, height) {
        this.app.renderer.resize(width, height);
    }
    onReady() {
        this.camera.transform$.subscribe((t) => {
            const x = (-t.x + this.canvas.width / 2 / t.scale) * t.scale;
            const y = (-t.y + this.canvas.height / 2 / t.scale) * t.scale;
            this.app.stage.setTransform(x, y, t.scale, t.scale);
        });
    }
    onLoad() {
        const atlas = this.atlas.resources["assets/atlas.json"];
        atlas.spritesheet.baseTexture.mipmap = pixi_js__WEBPACK_IMPORTED_MODULE_0__["MIPMAP_MODES"].POW2;
        this.textures = atlas.textures;
        if (this.canvas) {
            this.onReady();
        }
    }
    clear() {
        this.mapDrawer.clear();
        this.path.clear();
        this.overlays.clear();
    }
    get isLoaded() {
        return !!this.textures;
    }
}
GameRenderer.ɵfac = function GameRenderer_Factory(t) { return new (t || GameRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"])); };
GameRenderer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameRenderer, factory: GameRenderer.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameRenderer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_6__["GameApi"] }, { type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"] }, { type: _camera__WEBPACK_IMPORTED_MODULE_8__["Camera"] }]; }, null); })();


/***/ }),

/***/ "./src/app/renderer/tile-container.ts":
/*!********************************************!*\
  !*** ./src/app/renderer/tile-container.ts ***!
  \********************************************/
/*! exports provided: TileWrapperContainer, TileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileWrapperContainer", function() { return TileWrapperContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileContainer", function() { return TileContainer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");

class TileWrapperContainer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super(...arguments);
        this.tilesMap = new Map();
    }
    bindToMap(map) {
        for (let x = 0; x < map.width; x++) {
            for (let y = 0; y < map.height; y++) {
                this.tilesMap.set(map.tiles[x][y], []);
            }
        }
    }
}
class TileContainer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(bBox) {
        super();
        this.bBox = bBox;
        this.grid = [];
        this.childrenMap = new Map();
        // TODO can it be rewritten with tile ids? Map<number, ...>
        this.tilesMap = new Map();
        // needed only for interactivity
        this.children = [];
    }
    addChild(child, tile) {
        var _a;
        if (child.parent) {
            child.parent.removeChild(child);
        }
        child.parent = this;
        child.transform._parentID = -1;
        this.grid[tile.x][tile.y].push(child);
        this.childrenMap.set(child, tile);
        (_a = this.tilesMap.get(tile)) === null || _a === void 0 ? void 0 : _a.push(child);
        this.children.push(child);
        this._boundsID++;
        this.parent.tilesMap.get(tile).push(child);
        child.emit("added", this);
    }
    removeChild(child) {
        if (this.childrenMap.has(child)) {
            // remove from childrenMap
            const tile = this.childrenMap.get(child);
            this.childrenMap.delete(child);
            // remove from grid
            let children = this.grid[tile.x][tile.y];
            let index = children.indexOf(child);
            if (index !== -1) {
                children.splice(index, 1);
            }
            // remove from tilesMap
            children = this.tilesMap.get(tile);
            index = children.indexOf(child);
            if (index !== -1) {
                children.splice(index, 1);
            }
            // remove from parent
            children = this.parent.tilesMap.get(tile);
            index = children.indexOf(child);
            if (index !== -1) {
                children.splice(index, 1);
            }
            // remove from children
            index = this.children.indexOf(child);
            if (index !== -1) {
                children.splice(index, 1);
            }
        }
    }
    moveChild(child, tile) {
        this.removeChild(child);
        this.addChild(child, tile);
    }
    getChildsFor(tile) {
        return this.tilesMap.get(tile);
    }
    clearTile(tile) {
        for (const obj of this.getChildsFor(tile)) {
            obj.destroy();
        }
    }
    destroyAllChildren() {
        if (!this.map) {
            return;
        }
        for (let x = 0; x < this.map.width; x++) {
            for (let y = 0; y < this.map.height; y++) {
                for (const child of this.grid[x][y]) {
                    child.destroy();
                }
            }
        }
    }
    bindToMap(map) {
        this.map = map;
        this.grid = new Array(map.width);
        this.tilesMap.clear();
        for (let x = 0; x < map.width; x++) {
            this.grid[x] = new Array(map.height);
            for (let y = 0; y < map.height; y++) {
                this.grid[x][y] = [];
                this.tilesMap.set(map.tiles[x][y], []);
            }
        }
    }
    render(renderer) {
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
            for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
                for (const child of this.grid[x][y]) {
                    child.render(renderer);
                }
            }
        }
        renderer.batch.flush();
    }
    updateTransform() {
        if (!this.grid.length) {
            return;
        }
        this._boundsID++;
        this.transform.updateTransform(this.parent.transform);
        // TODO: check render flags, how to process stuff here
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
            for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
                for (const child of this.grid[x][y]) {
                    if (child.visible) {
                        child.updateTransform();
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/renderer/tile/city.ts":
/*!***************************************!*\
  !*** ./src/app/renderer/tile/city.ts ***!
  \***************************************/
/*! exports provided: CityDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDrawer", function() { return CityDrawer; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/app/renderer/utils.ts");


const SMALL_CITY_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileVariants"])("villageSmall", 4);
const BIG_CITY_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileVariants"])("village", 4);
class CityDrawer {
    constructor(game, renderer, container) {
        this.game = game;
        this.renderer = renderer;
        this.container = container;
        this.citiesGraphics = new Map();
        game.init$.subscribe((state) => {
            state.citySpawned$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((city) => this.spawn(city));
            state.cityUpdated$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((city) => this.update(city));
            state.cityDestroyed$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((city) => this.destroy(city));
        });
    }
    build() {
        if (!this.game.state) {
            return;
        }
        for (const city of this.game.state.cities) {
            this.spawn(city);
        }
    }
    spawn(city) {
        const variants = city.size >= 10 ? BIG_CITY_TEXTURES : SMALL_CITY_TEXTURES;
        const textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["pickRandom"])(variants);
        const g = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSprite"])(city.tile, this.textures[textureName]);
        this.container.addChild(g, city.tile);
        this.citiesGraphics.set(city, g);
        if (!this.game.state.trackedPlayer.exploredTiles.has(city.tile)) {
            g.visible = false;
        }
    }
    destroy(city) {
        const g = this.citiesGraphics.get(city);
        this.citiesGraphics.delete(city);
        g.destroy();
    }
    update(city) {
        this.destroy(city);
        this.spawn(city);
    }
    clear() {
        this.container.destroyAllChildren();
        this.citiesGraphics.clear();
    }
    get textures() {
        return this.renderer.textures;
    }
}


/***/ }),

/***/ "./src/app/renderer/tile/river.ts":
/*!****************************************!*\
  !*** ./src/app/renderer/tile/river.ts ***!
  \****************************************/
/*! exports provided: RiverDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiverDrawer", function() { return RiverDrawer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");


class RiverDrawer {
    constructor(game, container) {
        this.game = game;
        this.container = container;
    }
    drawTile(tile) {
        if (!tile.riverParts.length) {
            return;
        }
        const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
        g.position.y = tile.y * 0.75;
        this.container.addChild(g, tile);
        g.lineStyle(0.15, 0x4169e1);
        for (const river of tile.riverParts) {
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW) {
                g.moveTo(0, 0.25);
                g.lineTo(0.5, 0);
            }
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE) {
                g.moveTo(0.5, 0);
                g.lineTo(1, 0.25);
            }
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E) {
                g.moveTo(1, 0.25);
                g.lineTo(1, 0.75);
            }
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE) {
                g.moveTo(1, 0.75);
                g.lineTo(0.5, 1);
            }
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW) {
                g.moveTo(0.5, 1);
                g.lineTo(0, 0.75);
            }
            if (river === src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W) {
                g.moveTo(0, 0.75);
                g.lineTo(0, 0.25);
            }
        }
        if (!this.game.state.trackedPlayer.exploredTiles.has(tile)) {
            g.visible = false;
        }
    }
    clearTile(tile) {
        this.container.clearTile(tile);
    }
    clear() {
        this.container.destroyAllChildren();
    }
}


/***/ }),

/***/ "./src/app/renderer/tile/terrain.ts":
/*!******************************************!*\
  !*** ./src/app/renderer/tile/terrain.ts ***!
  \******************************************/
/*! exports provided: TerrainDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainDrawer", function() { return TerrainDrawer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/renderer/utils.ts");
/* harmony import */ var src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");



const SEA_TEXTURES = {
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].deep]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexOcean", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].shallow]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexShallowWater", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none]: [],
};
const CLIMATE_TEXTURES = {
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].continental]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsCold", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsCold", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexSand", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsDesert", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainDesert", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].oceanic]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlains", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHighlands", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].savanna]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexScrublands", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsSavanna", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainDesert", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tropical]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexTropicalPlains", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHills", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tundra]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsColdSnowTransition", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsColdSnowTransition", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainSnow", 4),
    },
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].arctic]: {
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsColdSnowCovered", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsColdSnowCovered", 4),
        [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainSnow", 4),
    },
};
const FOREST_TEXTURES = {
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].continental]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestPine", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].oceanic]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestBroadleaf", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tropical]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexJungle", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tundra]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestPineSnowTransition", 4),
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].savanna]: [],
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert]: [],
    [src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].arctic]: [],
};
const WETLANDS_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMarsh", 4);
const WETLANDS_FOREST_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexSwamp", 4);
const DESERT_FLOOD_PLAINS_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexGrassySand", 4);
const FARM_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("field", 15);
const MINE_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("mines", 5);
const SAWMILL_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("forester_hut", 4);
class TerrainDrawer {
    constructor(renderer, game, terrainContainer, waterContainer) {
        this.renderer = renderer;
        this.game = game;
        this.terrainContainer = terrainContainer;
        this.waterContainer = waterContainer;
    }
    drawTile(tile) {
        let variants;
        if (tile.wetlands) {
            if (tile.forest) {
                variants = WETLANDS_FOREST_TEXTURES;
            }
            else {
                variants = WETLANDS_TEXTURES;
            }
        }
        else if (tile.forest) {
            variants = FOREST_TEXTURES[tile.climate];
        }
        else if (tile.seaLevel === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            if (tile.climate === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert &&
                tile.landForm === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains &&
                tile.riverParts.length) {
                variants = DESERT_FLOOD_PLAINS_TEXTURES;
            }
            else {
                variants = CLIMATE_TEXTURES[tile.climate][tile.landForm];
            }
        }
        else {
            variants = SEA_TEXTURES[tile.seaLevel];
        }
        const textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(variants);
        const sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSprite"])(tile, this.textures[textureName]);
        if (tile.seaLevel === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            this.terrainContainer.addChild(sprite, tile);
        }
        else {
            this.waterContainer.addChild(sprite, tile);
        }
        const isVisible = this.game.state.trackedPlayer.exploredTiles.has(tile);
        if (!isVisible) {
            sprite.visible = false;
        }
        const road = this.drawRoads(tile);
        if (road && !isVisible) {
            road.visible = false;
        }
        const improvement = this.drawImprovement(tile);
        if (improvement && !isVisible) {
            improvement.visible = false;
        }
    }
    drawImprovement(tile) {
        let sprite = null;
        if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm) {
            const textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(FARM_TEXTURES);
            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[textureName]);
            this.terrainContainer.addChild(sprite, tile);
        }
        else if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine) {
            const textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(MINE_TEXTURES);
            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[textureName]);
            this.terrainContainer.addChild(sprite, tile);
        }
        else if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill) {
            const textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(SAWMILL_TEXTURES);
            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[textureName]);
            this.terrainContainer.addChild(sprite, tile);
        }
        return sprite;
    }
    drawRoads(tile) {
        if (tile.road === null) {
            return null;
        }
        const roadId = tile.fullNeighbours
            .map((n) => (!n || n.road === null ? "0" : "1"))
            .join("");
        const textureName = `hexRoad-${roadId}-00.png`;
        const sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSprite"])(tile, this.textures[textureName]);
        this.terrainContainer.addChild(sprite, tile);
        return sprite;
    }
    clearTile(tile) {
        this.waterContainer.clearTile(tile);
        this.terrainContainer.clearTile(tile);
    }
    clear() {
        this.waterContainer.destroyAllChildren();
        this.terrainContainer.destroyAllChildren();
    }
    get textures() {
        return this.renderer.textures;
    }
}


/***/ }),

/***/ "./src/app/renderer/tile/unit.ts":
/*!***************************************!*\
  !*** ./src/app/renderer/tile/unit.ts ***!
  \***************************************/
/*! exports provided: UnitsDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsDrawer", function() { return UnitsDrawer; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/app/renderer/utils.ts");


class UnitsDrawer {
    constructor(game, renderer, container) {
        this.game = game;
        this.renderer = renderer;
        this.container = container;
        this.unitGraphics = new Map();
        game.init$.subscribe((state) => {
            state.unitSpawned$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((unit) => this.spawn(unit));
            state.unitUpdated$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((unit) => this.update(unit));
            state.unitDestroyed$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$))
                .subscribe((unit) => this.destroy(unit));
        });
    }
    build() {
        if (!this.game.state) {
            return;
        }
        for (const unit of this.game.state.units) {
            this.spawn(unit);
        }
    }
    spawn(unit) {
        const backgroundTextureName = `unitBackground-${unit.definition.type}.png`;
        const backgroundTexture = this.textures[backgroundTextureName];
        const unitTextureName = `unit-${unit.definition.id}.png`;
        const unitTexture = this.textures[unitTextureName];
        const objects = [];
        const backgroundSprite = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSpriteCentered"])(unit.tile, backgroundTexture);
        // TODO don't need set position here as layoutTile will do it.
        this.container.addChild(backgroundSprite, unit.tile);
        objects.push(backgroundSprite);
        backgroundSprite.tint = unit.player.color;
        const unitSprite = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSpriteCentered"])(unit.tile, unitTexture);
        this.container.addChild(unitSprite, unit.tile);
        objects.push(unitSprite);
        this.unitGraphics.set(unit, objects);
        this.layoutTile(unit.tile);
        backgroundSprite.interactive = true;
        backgroundSprite.on("pointerdown", (event) => {
            if (event.data.button === 0) {
                this.renderer.mapUi.selectUnit(unit);
            }
        });
    }
    destroy(unit) {
        const objs = this.unitGraphics.get(unit);
        if (!objs) {
            return;
        }
        this.unitGraphics.delete(unit);
        for (const obj of objs) {
            obj.destroy();
        }
    }
    update(unit) {
        const objs = this.unitGraphics.get(unit);
        if (!objs) {
            return;
        }
        const oldTile = this.container.childrenMap.get(objs[0]);
        if (oldTile && oldTile.units.length) {
            this.layoutTile(oldTile);
        }
        this.layoutTile(unit.tile);
    }
    layoutTile(tile) {
        var _a;
        const isVisible = this.game.state.trackedPlayer.exploredTiles.has(tile);
        let x = 1 / (tile.units.length + 1) - 0.5;
        const xOffset = 1 / (tile.units.length + 1);
        for (const unit of tile.units) {
            const sprites = this.unitGraphics.get(unit);
            if (!sprites) {
                // the sprites may not be created yet.
                continue;
            }
            for (const sprite of sprites) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["putSpriteAtTileCentered"])(unit.tile, sprite);
                sprite.position.x += x;
                if (unit.id === ((_a = this.renderer.mapUi.selectedUnit) === null || _a === void 0 ? void 0 : _a.id) &&
                    tile.units.length > 1) {
                    sprite.position.y -= 0.1;
                }
                this.container.moveChild(sprite, unit.tile);
                sprite.visible = isVisible;
            }
            x += xOffset;
        }
    }
    clear() {
        this.container.destroyAllChildren();
        this.unitGraphics.clear();
    }
    get textures() {
        return this.renderer.textures;
    }
}


/***/ }),

/***/ "./src/app/renderer/tile/yields.ts":
/*!*****************************************!*\
  !*** ./src/app/renderer/tile/yields.ts ***!
  \*****************************************/
/*! exports provided: YiedsDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YiedsDrawer", function() { return YiedsDrawer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");

class YiedsDrawer {
    constructor(game, mapUi, container) {
        this.game = game;
        this.mapUi = mapUi;
        this.container = container;
        this.mapUi.yieldsVisible$.subscribe((visible) => (this.container.visible = visible));
    }
    clearTile(tile) {
        this.container.clearTile(tile);
    }
    drawTile(tile) {
        const g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
        g.position.y = tile.y * 0.75;
        this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
        this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);
        this.container.addChild(g, tile);
        if (!this.game.state.trackedPlayer.exploredTiles.has(tile)) {
            g.visible = false;
        }
    }
    drawYield(g, y, quantity, color) {
        g.beginFill(color);
        for (let i = 0; i < quantity; i++) {
            const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
            g.drawRect(x, y, 0.05, 0.05);
        }
        g.endFill();
    }
    clear() {
        this.container.destroyAllChildren();
    }
}


/***/ }),

/***/ "./src/app/renderer/utils.ts":
/*!***********************************!*\
  !*** ./src/app/renderer/utils.ts ***!
  \***********************************/
/*! exports provided: HEX_GEOMETRY, getTileCenter, getTileCoords, drawHex, drawClosedHex, clearContainer, getTileVariants, drawTileSprite, drawTileSpriteCentered, putContainerAtTile, putSpriteAtTileCentered, pickRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEX_GEOMETRY", function() { return HEX_GEOMETRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileCenter", function() { return getTileCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileCoords", function() { return getTileCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHex", function() { return drawHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawClosedHex", function() { return drawClosedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearContainer", function() { return clearContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileVariants", function() { return getTileVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTileSprite", function() { return drawTileSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTileSpriteCentered", function() { return drawTileSpriteCentered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putContainerAtTile", function() { return putContainerAtTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putSpriteAtTileCentered", function() { return putSpriteAtTileCentered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRandom", function() { return pickRandom; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/renderer/constants.ts");


// prettier-ignore
const HEX_GEOMETRY = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]().addAttribute("aVertexPosition", [
    0, 0.25, 0.5, 0, 1, 0.25,
    0, 0.25, 1, 0.25, 1, 0.75,
    0, 0.25, 1, 0.75, 0, 0.75,
    0, 0.75, 1, 0.75, 0.5, 1,
], 2);
function getTileCenter(tile) {
    return [0.5 + tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75 + 0.5];
}
function getTileCoords(tile) {
    return [tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75];
}
function drawHex(graphics, x = 0, y = 0) {
    graphics.moveTo(x + 0, y + 0.25);
    graphics.lineTo(x + 0.5, y + 0);
    graphics.lineTo(x + 1, y + 0.25);
    graphics.lineTo(x + 1, y + 0.75);
    graphics.lineTo(x + 0.5, y + 1);
    graphics.lineTo(x + 0, y + 0.75);
}
function drawClosedHex(graphics) {
    drawHex(graphics);
    graphics.lineTo(0, 0.25);
}
function clearContainer(container) {
    while (container.children.length) {
        container.removeChildAt(0).destroy();
    }
}
function getTileVariants(tileName, variants) {
    const result = [];
    for (let i = 0; i < variants; i++) {
        result.push(`${tileName}${i.toString().padStart(2, "0")}.png`);
    }
    return result;
}
function drawTileSprite(tile, texture) {
    const sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
    sprite.scale.set(1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], 1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
    putContainerAtTile(tile, sprite);
    return sprite;
}
function drawTileSpriteCentered(tile, texture) {
    const sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
    sprite.scale.set(1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], 1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
    putSpriteAtTileCentered(tile, sprite);
    return sprite;
}
function putContainerAtTile(tile, container) {
    container.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    container.position.y = tile.y * 0.75 - 0.5;
}
function putSpriteAtTileCentered(tile, sprite) {
    sprite.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.5 - sprite.width / 2;
    sprite.position.y = tile.y * 0.75 + 0.5 - sprite.height / 2;
}
function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}


/***/ }),

/***/ "./src/app/shared/hex-math.ts":
/*!************************************!*\
  !*** ./src/app/shared/hex-math.ts ***!
  \************************************/
/*! exports provided: getTileFullNeighbours, getTileNeighbours, getTileInDirection, getDirectionTo, getTilesInRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileFullNeighbours", function() { return getTileFullNeighbours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileNeighbours", function() { return getTileNeighbours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileInDirection", function() { return getTileInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectionTo", function() { return getDirectionTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTilesInRange", function() { return getTilesInRange; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");

function getTileFullNeighbours(tiles, x, y) {
    return [
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W),
    ];
}
function getTileNeighbours(tiles, x, y) {
    return getTileFullNeighbours(tiles, x, y).filter((t) => !!t);
}
function getTileInDirection(tiles, tile, direction) {
    switch (direction) {
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW:
            if ((tile.y % 2 === 0 && tile.x === 0) || tile.y === 0) {
                return null;
            }
            return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE:
            if ((tile.y % 2 && tile.x === tiles.length - 1) || tile.y === 0) {
                return null;
            }
            return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E:
            if (tile.x === tiles.length - 1) {
                return null;
            }
            return tiles[tile.x + 1][tile.y];
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE:
            if ((tile.y % 2 && tile.x === tiles.length - 1) ||
                tile.y === tiles[tile.x].length - 1) {
                return null;
            }
            return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW:
            if ((tile.y % 2 === 0 && tile.x === 0) ||
                tile.y === tiles[tile.x].length - 1) {
                return null;
            }
            return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y + 1];
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W:
            if (tile.x === 0) {
                return null;
            }
            return tiles[tile.x - 1][tile.y];
    }
    return null;
}
function getDirectionTo(fromtile, toTile) {
    if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) &&
        toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW;
    }
    if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) &&
        toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE;
    }
    if (toTile.x === fromtile.x + 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E;
    }
    if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) &&
        toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE;
    }
    if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) &&
        toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW;
    }
    if (toTile.x === fromtile.x - 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W;
    }
    return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE;
}
function getTilesInRange(tile, range) {
    const result = new Set([tile]);
    for (let i = 0; i < range; i++) {
        let neighbours = new Set();
        for (const tile of result) {
            for (const neighbour of tile.neighbours) {
                // TODO fix typing
                neighbours.add(neighbour);
            }
        }
        for (const tile of neighbours) {
            result.add(tile);
        }
    }
    return result;
}


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: TileDirection, Climate, LandForm, SeaLevel, FORESTABLE_CLIMATES, WETLANDS_CLIMATES, isForestable, areWetlandsPossible, isImprovementPossible, isRoadPossible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.interface */ "./src/app/shared/tile.interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileDirection", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["TileDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Climate", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["Climate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandForm", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["LandForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeaLevel", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["FORESTABLE_CLIMATES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["WETLANDS_CLIMATES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isForestable", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isForestable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["areWetlandsPossible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isImprovementPossible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRoadPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isRoadPossible"]; });




/***/ }),

/***/ "./src/app/shared/tile.interface.ts":
/*!******************************************!*\
  !*** ./src/app/shared/tile.interface.ts ***!
  \******************************************/
/*! exports provided: TileDirection, Climate, LandForm, SeaLevel, FORESTABLE_CLIMATES, WETLANDS_CLIMATES, isForestable, areWetlandsPossible, isImprovementPossible, isRoadPossible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileDirection", function() { return TileDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Climate", function() { return Climate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandForm", function() { return LandForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaLevel", function() { return SeaLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function() { return FORESTABLE_CLIMATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function() { return WETLANDS_CLIMATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isForestable", function() { return isForestable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function() { return areWetlandsPossible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function() { return isImprovementPossible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoadPossible", function() { return isRoadPossible; });
/* harmony import */ var _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tile-improvements */ "./src/app/core/tile-improvements.ts");

var TileDirection;
(function (TileDirection) {
    TileDirection[TileDirection["NW"] = 0] = "NW";
    TileDirection[TileDirection["NE"] = 1] = "NE";
    TileDirection[TileDirection["E"] = 2] = "E";
    TileDirection[TileDirection["SE"] = 3] = "SE";
    TileDirection[TileDirection["SW"] = 4] = "SW";
    TileDirection[TileDirection["W"] = 5] = "W";
    TileDirection[TileDirection["NONE"] = 6] = "NONE";
})(TileDirection || (TileDirection = {}));
var Climate;
(function (Climate) {
    Climate[Climate["tropical"] = 0] = "tropical";
    Climate[Climate["savanna"] = 1] = "savanna";
    Climate[Climate["desert"] = 2] = "desert";
    Climate[Climate["continental"] = 3] = "continental";
    Climate[Climate["oceanic"] = 4] = "oceanic";
    Climate[Climate["tundra"] = 5] = "tundra";
    Climate[Climate["arctic"] = 6] = "arctic";
})(Climate || (Climate = {}));
var LandForm;
(function (LandForm) {
    LandForm[LandForm["plains"] = 0] = "plains";
    LandForm[LandForm["hills"] = 1] = "hills";
    LandForm[LandForm["mountains"] = 2] = "mountains";
})(LandForm || (LandForm = {}));
var SeaLevel;
(function (SeaLevel) {
    SeaLevel[SeaLevel["none"] = 0] = "none";
    SeaLevel[SeaLevel["shallow"] = 1] = "shallow";
    SeaLevel[SeaLevel["deep"] = 2] = "deep";
})(SeaLevel || (SeaLevel = {}));
const FORESTABLE_CLIMATES = new Set([
    Climate.continental,
    Climate.oceanic,
    Climate.tropical,
    Climate.tundra,
]);
const WETLANDS_CLIMATES = new Set([
    Climate.continental,
    Climate.oceanic,
    Climate.tropical,
]);
function isForestable(tile) {
    return (tile.seaLevel === SeaLevel.none &&
        tile.landForm === LandForm.plains &&
        FORESTABLE_CLIMATES.has(tile.climate));
}
function areWetlandsPossible(tile) {
    return !!(tile.seaLevel === SeaLevel.none &&
        tile.landForm === LandForm.plains &&
        tile.riverParts.length &&
        WETLANDS_CLIMATES.has(tile.climate));
}
function isImprovementPossible(tile, improvement) {
    if (improvement === null) {
        return true;
    }
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm) {
        return (tile.seaLevel === SeaLevel.none &&
            tile.landForm === LandForm.plains &&
            tile.climate !== Climate.arctic &&
            !tile.forest &&
            !tile.wetlands);
    }
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine) {
        return tile.landForm === LandForm.hills;
    }
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill) {
        return tile.forest && !tile.wetlands;
    }
    else {
        return false;
    }
}
function isRoadPossible(tile) {
    return (tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains);
}


/***/ }),

/***/ "./src/app/ui/bonuses/bonuses.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/bonuses/bonuses.component.ts ***!
  \*************************************************/
/*! exports provided: BonusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusesComponent", function() { return BonusesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../percent-bonus.pipe */ "./src/app/ui/percent-bonus.pipe.ts");




function BonusesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r143 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", food_r143, " food\n");
} }
function BonusesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const production_r144 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", production_r144, " production\n");
} }
function BonusesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const culture_r145 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", culture_r145, " culture\n");
} }
function BonusesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicWorks_r146 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", publicWorks_r146, " public works\n");
} }
function BonusesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r147 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, food_r147), " food\n");
} }
function BonusesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const production_r148 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, production_r148), " production\n");
} }
function BonusesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const culture_r149 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, culture_r149), " culture\n");
} }
function BonusesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicWorks_r150 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, publicWorks_r150), " public works\n");
} }
function BonusesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r151 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r151), " production transfered into food\n");
} }
function BonusesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r152 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r152), " production transfered into culture\n");
} }
function BonusesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r153 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r153), " production transfered into public works\n");
} }
class BonusesComponent {
    constructor() { }
    ngOnInit() { }
}
BonusesComponent.ɵfac = function BonusesComponent_Factory(t) { return new (t || BonusesComponent)(); };
BonusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusesComponent, selectors: [["app-bonuses"]], inputs: { bonuses: "bonuses" }, decls: 11, vars: 11, consts: [["class", "growth-color", 4, "ngIf"], ["class", "production-color", 4, "ngIf"], ["class", "culture-color", 4, "ngIf"], ["class", "public-works-color", 4, "ngIf"], [1, "growth-color"], [1, "production-color"], [1, "culture-color"], [1, "public-works-color"]], template: function BonusesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BonusesComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BonusesComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BonusesComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BonusesComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BonusesComponent_div_4_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BonusesComponent_div_5_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BonusesComponent_div_6_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BonusesComponent_div_7_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BonusesComponent_div_8_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BonusesComponent_div_9_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BonusesComponent_div_10_Template, 3, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldValue == null ? null : ctx.bonuses.yieldValue.food);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldValue == null ? null : ctx.bonuses.yieldValue.production);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldValue == null ? null : ctx.bonuses.yieldValue.culture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldValue == null ? null : ctx.bonuses.yieldValue.publicWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldFactor == null ? null : ctx.bonuses.yieldFactor.food);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldFactor == null ? null : ctx.bonuses.yieldFactor.production);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldFactor == null ? null : ctx.bonuses.yieldFactor.culture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.yieldFactor == null ? null : ctx.bonuses.yieldFactor.publicWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.transferProductionToFood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.transferProductionToCulture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bonuses == null ? null : ctx.bonuses.transferProductionToPublicWorks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_2__["PercentBonusPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2JvbnVzZXMvYm9udXNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonusesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-bonuses",
                templateUrl: "./bonuses.component.html",
                styleUrls: ["./bonuses.component.scss"],
            }]
    }], function () { return []; }, { bonuses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/button.directive.ts":
/*!****************************************!*\
  !*** ./src/app/ui/button.directive.ts ***!
  \****************************************/
/*! exports provided: ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick() {
        // Prevents clicking focused button when pressing "enter" for next turn.
        this.elementRef.nativeElement.blur();
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ButtonDirective, selectors: [["button"]], hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "button",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/cities-layer/cities-layer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/cities-layer/cities-layer.component.ts ***!
  \***********************************************************/
/*! exports provided: CitiesLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesLayerComponent", function() { return CitiesLayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-info/city-info.component */ "./src/app/ui/cities-layer/city-info/city-info.component.ts");
/* harmony import */ var src_app_renderer_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/renderer/utils */ "./src/app/renderer/utils.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CitiesLayerComponent_app_city_info_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-city-info", 1);
} if (rf & 2) {
    const city_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", city_r95);
} }
class CitiesLayerComponent {
    constructor(cdr, elementRef, game, camera) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.game = game;
        this.camera = camera;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        if (!this.game.state) {
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.game.state.citySpawned$, this.game.state.cityDestroyed$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => {
            this.updateCities();
        });
        this.game.stop$.subscribe(() => {
            this.cities = [];
            this.cdr.markForCheck();
        });
        this.updateCities();
    }
    ngAfterViewInit() {
        this.camera.transform$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => this.updateTransforms());
    }
    updateTransforms() {
        const el = this.elementRef.nativeElement;
        let scale = this.camera.transform.scale;
        const box = this.camera.tileBoundingBox;
        let opacity = 1;
        if (scale < 30) {
            opacity = Math.max(0, 1 - (30 - scale) / 8);
        }
        el.style.opacity = opacity.toString();
        if (opacity === 0) {
            return;
        }
        for (const cityComponent of this.citiesComponents) {
            const tile = cityComponent.city.tile;
            const cityEl = cityComponent.elementRef.nativeElement;
            if (tile.x >= box.xStart &&
                tile.x <= box.xEnd &&
                tile.y >= box.yStart &&
                tile.y <= box.yEnd) {
                cityEl.style.display = "flex";
            }
            else {
                cityEl.style.display = "none";
                continue;
            }
            const cityScale = Math.pow(scale / 70, 0.4);
            let [x, y] = Object(src_app_renderer_utils__WEBPACK_IMPORTED_MODULE_4__["getTileCoords"])(cityComponent.city.tile);
            [x, y] = this.camera.canvasToScreen(x + 0.5, y + 0.8);
            cityEl.style.transform = `translate(${x}px, ${y}px) scale(${cityScale})`;
        }
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    updateCities() {
        const player = this.game.state.trackedPlayer;
        this.cities = this.game.state.cities.filter((city) => player.exploredTiles.has(city.tile));
        this.cdr.markForCheck();
        setTimeout(() => this.updateTransforms());
    }
    trackByCityId(index, city) {
        return city.id;
    }
}
CitiesLayerComponent.ɵfac = function CitiesLayerComponent_Factory(t) { return new (t || CitiesLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"])); };
CitiesLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitiesLayerComponent, selectors: [["app-cities-layer"]], viewQuery: function CitiesLayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.citiesComponents = _t);
    } }, decls: 1, vars: 2, consts: [[3, "city", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "city"]], template: function CitiesLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CitiesLayerComponent_app_city_info_0_Template, 1, 1, "app-city-info", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities)("ngForTrackBy", ctx.trackByCityId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  will-change: opacity;\n}\n.hidden[_nghost-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAmLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuOmhvc3QuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cities-layer",
                templateUrl: "./cities-layer.component.html",
                styleUrls: ["./cities-layer.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"] }]; }, { citiesComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/cities-layer/city-info/city-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui/cities-layer/city-info/city-info.component.ts ***!
  \******************************************************************/
/*! exports provided: CityInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityInfoComponent", function() { return CityInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var src_app_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/controls */ "./src/app/controls.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/progress-bar/progress-bar.component */ "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
/* harmony import */ var _turns_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../turns.pipe */ "./src/app/ui/turns.pipe.ts");










function CityInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "turns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-progress-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "turns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", ctx_r91.city.totalFood)("nextProgress", ctx_r91.city.totalFood + ctx_r91.city.foodPerTurn)("total", ctx_r91.city.foodToGrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r91.city.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx_r91.city.turnsToGrow), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", ctx_r91.city.totalProduction)("nextProgress", ctx_r91.city.totalProduction + ctx_r91.city.productionPerTurn)("total", ctx_r91.city.productionRequired || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r91.city.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, ctx_r91.city.turnsToProductionEnd), ")");
} }
function CityInfoComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r93.city.name);
} }
class CityInfoComponent {
    constructor(cdr, elementRef, game, controls, mapUi) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.game = game;
        this.controls = controls;
        this.mapUi = mapUi;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        const el = this.elementRef.nativeElement;
        const thisCity = this.game.state.cityUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((c) => c.id === this.city.id));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.game.state.turn$, thisCity)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => {
            el.style.setProperty("--player-color", this.city.player.cssColor);
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    set city(city) {
        this._city = city;
    }
    get city() {
        return this._city;
    }
    selectCity() {
        this.mapUi.selectCity(this.city);
    }
    onContextMenu(event) {
        event.preventDefault();
    }
    get areDetailsVisible() {
        return this.city.player.id === this.game.state.trackedPlayer.id;
    }
}
CityInfoComponent.ɵfac = function CityInfoComponent_Factory(t) { return new (t || CityInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_controls__WEBPACK_IMPORTED_MODULE_4__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"])); };
CityInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityInfoComponent, selectors: [["app-city-info"]], inputs: { city: "city" }, decls: 6, vars: 3, consts: [[1, "info", 3, "click", "mousedown", "mouseup", "mousemove", "wheel", "contextmenu"], [1, "size"], [4, "ngIf", "ngIfElse"], ["simpleViewTmpl", ""], [1, "growth", 3, "progress", "nextProgress", "total"], [1, "turns"], [1, "production", 3, "progress", "nextProgress", "total"], [1, "simple-view"]], template: function CityInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityInfoComponent_Template_div_click_0_listener() { return ctx.selectCity(); })("click", function CityInfoComponent_Template_div_click_0_listener($event) { return ctx.controls.onClick($event); })("mousedown", function CityInfoComponent_Template_div_mousedown_0_listener($event) { return ctx.controls.onMouseDown($event); })("mouseup", function CityInfoComponent_Template_div_mouseup_0_listener($event) { return ctx.controls.onMouseUp($event); })("mousemove", function CityInfoComponent_Template_div_mousemove_0_listener($event) { return ctx.controls.onMouseMove($event); })("wheel", function CityInfoComponent_Template_div_wheel_0_listener($event) { return ctx.controls.onWheel($event); })("contextmenu", function CityInfoComponent_Template_div_contextmenu_0_listener($event) { return ctx.onContextMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CityInfoComponent_div_3_Template, 13, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CityInfoComponent_ng_template_4_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areDetailsVisible)("ngIfElse", _r92);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["ProgressBarComponent"]], pipes: [_turns_pipe__WEBPACK_IMPORTED_MODULE_8__["TurnsPipe"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  margin-left: -150px;\n  transform-origin: top;\n  will-change: transform;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  color: white;\n  box-shadow: 0 0 4px 0 black;\n  display: flex;\n  pointer-events: all;\n  overflow: hidden;\n  cursor: pointer;\n  text-shadow: 0px 0px 5px black;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 26px;\n  padding: 0 5px;\n  min-width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--player-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%] {\n  height: 20px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%]   .turns[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar.growth[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--growth-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar.production[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--production-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .simple-view[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0eS1pbmZvL2NpdHktaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvY2l0aWVzLWxheWVyL2NpdHktaW5mby9jaXR5LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEREk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FDR047QURESTtFQUNFLFlBQUE7QUNHTjtBREZNO0VBQ0UsaUJBQUE7QUNJUjtBREZNO0VBQ0UseUNBQUE7QUNJUjtBREZNO0VBQ0UsNkNBQUE7QUNJUjtBRERJO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0eS1pbmZvL2NpdHktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC5pbmZvIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDAgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcbiAgICAuc2l6ZSB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xuICAgIH1cbiAgICBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIC50dXJucyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgJi5ncm93dGgge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICYucHJvZHVjdGlvbiB7XG4gICAgICAgIC0tcHJvZ3Jlc3MtYmFyLWNvbG9yOiB2YXIoLS1wcm9kdWN0aW9uLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNpbXBsZS12aWV3IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuOmhvc3QgLmluZm8ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XG59XG46aG9zdCAuaW5mbyAuc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XG59XG46aG9zdCAuaW5mbyBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLmluZm8gYXBwLXByb2dyZXNzLWJhciAudHVybnMge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbjpob3N0IC5pbmZvIGFwcC1wcm9ncmVzcy1iYXIuZ3Jvd3RoIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWdyb3d0aC1jb2xvcik7XG59XG46aG9zdCAuaW5mbyBhcHAtcHJvZ3Jlc3MtYmFyLnByb2R1Y3Rpb24ge1xuICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG59XG46aG9zdCAuaW5mbyAuc2ltcGxlLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-city-info",
                templateUrl: "./city-info.component.html",
                styleUrls: ["./city-info.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: src_app_controls__WEBPACK_IMPORTED_MODULE_4__["Controls"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"] }]; }, { city: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/city-view/city-view.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/city-view/city-view.component.ts ***!
  \*****************************************************/
/*! exports provided: CityViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityViewComponent", function() { return CityViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/progress-bar/progress-bar.component */ "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/tabs/tabs.component */ "./src/app/ui/widgets/tabs/tabs.component.ts");
/* harmony import */ var _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/tabs/tab/tab.component */ "./src/app/ui/widgets/tabs/tab/tab.component.ts");
/* harmony import */ var _work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./work-tiles/work-tiles.component */ "./src/app/ui/city-view/work-tiles/work-tiles.component.ts");
/* harmony import */ var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widgets/tooltip.directive */ "./src/app/ui/widgets/tooltip.directive.ts");
/* harmony import */ var _product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-requirements/product-requirements.component */ "./src/app/ui/product-requirements/product-requirements.component.ts");
/* harmony import */ var _bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bonuses/bonuses.component */ "./src/app/ui/bonuses/bonuses.component.ts");
/* harmony import */ var _turns_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../turns.pipe */ "./src/app/ui/turns.pipe.ts");

















const _c0 = ["workTiles"];
function CityViewComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("will grow in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r98.city.turnsToGrow), " turns");
} }
function CityViewComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("will shrink in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, 0 - ctx_r99.city.turnsToGrow), " turns");
} }
function CityViewComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "growth stalled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityViewComponent_app_progress_bar_43_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r113.city.turnsToProductionEnd), " turns ");
} }
const _c1 = function (a0) { return { building: a0 }; };
function CityViewComponent_app_progress_bar_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-progress-bar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CityViewComponent_app_progress_bar_43_span_4_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r101.city.product.productDefinition))("progress", ctx_r101.city.totalProduction)("nextProgress", ctx_r101.city.totalProduction + ctx_r101.city.perTurn.production)("total", ctx_r101.city.product == null ? null : ctx_r101.city.product.productDefinition.productionCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r101.city.product == null ? null : ctx_r101.city.product.productDefinition.name) || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r101.city.product);
} }
const _c2 = function (a0) { return { unit: a0 }; };
function CityViewComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const unit_r114 = ctx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r115.produceUnit(unit_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r114 = ctx.$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r102.city.disabledUnits.has(unit_r114));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r109)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, unit_r114));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unit_r114.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r102.city.getTurnsToProduce(unit_r114), " turns ");
} }
function CityViewComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_48_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119); const building_r117 = ctx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r118.produceBuilding(building_r117); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r117 = ctx.$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r103.city.disabledBuildings.has(building_r117));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, building_r117));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", building_r117.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r103.city.getTurnsToProduce(building_r117), " turns ");
} }
const _c3 = function (a0) { return { idleProduct: a0 }; };
function CityViewComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_50_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const idleProduct_r120 = ctx.$implicit; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r121.workOnIdleProduct(idleProduct_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idleProduct_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r111)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, idleProduct_r120));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idleProduct_r120.name, " ");
} }
function CityViewComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, building_r123));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", building_r123.name, " ");
} }
function CityViewComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-product-requirements", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-bonuses", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r124 = ctx.building;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](building_r124.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", building_r124)("city", ctx_r108.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bonuses", building_r124.bonuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cost: ", building_r124.productionCost, "");
} }
function CityViewComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-product-requirements", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r125 = ctx.unit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](unit_r125.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", unit_r125)("city", ctx_r110.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cost: ", unit_r125.productionCost, "");
} }
function CityViewComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-bonuses", 40);
} if (rf & 2) {
    const idleProduct_r126 = ctx.idleProduct;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idleProduct_r126.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bonuses", idleProduct_r126.bonuses);
} }
class CityViewComponent {
    constructor(cdr, camera, mapUi) {
        this.cdr = cdr;
        this.camera = camera;
        this.mapUi = mapUi;
        this.quit$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.mapUi.hoverCity(this.city.citySimple);
    }
    set city(city) {
        this._city = city;
        this.camera.moveToTileWithEasing(this.city.tile);
        const [x, y] = this.camera.canvasToScreen(this.city.tile.x, this.city.tile.y);
        this.camera.scaleToWithEasing(130, x, y);
        this.mapUi.clickedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.quit$)).subscribe((tile) => {
            if (!this.city.tiles.has(tile)) {
                this.quit();
            }
        });
    }
    produceBuilding(building) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.city.produceBuilding(building);
            this.cdr.markForCheck();
        });
    }
    produceUnit(unit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.city.produceUnit(unit);
            this.cdr.markForCheck();
        });
    }
    workOnIdleProduct(idleProduct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.city.workOnIdleProduct(idleProduct);
            this.cdr.markForCheck();
        });
    }
    optimizeYields() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.city.optimizeYields();
            this.workTilesComponent.updateWorkedTilesArea();
            this.cdr.markForCheck();
        });
    }
    get city() {
        return this._city;
    }
    quit() {
        this.mapUi.selectCity(null);
        this.mapUi.unhoverCity();
        this.quit$.next();
    }
}
CityViewComponent.ɵfac = function CityViewComponent_Factory(t) { return new (t || CityViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"])); };
CityViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CityViewComponent, selectors: [["app-city-view"]], viewQuery: function CityViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workTilesComponent = _t.first);
    } }, inputs: { city: "city" }, decls: 68, vars: 27, consts: [[1, "panel", "panel-bottom-right-corner", "left"], [1, "size-and-growth", "margin"], [1, "size"], [1, "growth-bar", 3, "progress", "nextProgress", "total"], ["class", "turns", 4, "ngIf"], [1, "margin-h"], [1, "yield", "growth-color"], [1, "label"], [1, "value"], [1, "yield", "production-color"], [1, "yield", "culture-color"], [1, "yield", "public-works-color"], [1, "margin-h", "margin-top", 3, "click"], [1, "separator"], [1, "culture-bar", "margin", 3, "progress", "nextProgress", "total"], [1, "turns"], ["class", "production-bar margin", 3, "appTooltip", "tooltipContext", "progress", "nextProgress", "total", 4, "ngIf"], [1, "grow-tabs"], ["tabTitle", "recruit", 1, "no-padding"], ["class", "product", 3, "disabled", "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], ["tabTitle", "construct", 1, "no-padding"], ["tabTitle", "work on", 1, "no-padding"], ["class", "product", 3, "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], [1, "city-name"], [1, "panel"], [1, "btn-primary", 3, "click"], [1, "panel", "panel-bottom-left-corner", "right"], [1, "margin"], ["class", "building", 3, "appTooltip", "tooltipContext", 4, "ngFor", "ngForOf"], [3, "city", "workedTiles"], ["workTiles", ""], ["buildingTooltipTmpl", ""], ["unitTooltipTmpl", ""], ["idleProductTooltipTmpl", ""], [1, "production-bar", "margin", 3, "appTooltip", "tooltipContext", "progress", "nextProgress", "total"], [1, "name"], [1, "product", 3, "appTooltip", "tooltipContext", "click"], [1, "turns", "small"], [1, "building", 3, "appTooltip", "tooltipContext"], [3, "product", "city"], [3, "bonuses"]], template: function CityViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CityViewComponent_span_5_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CityViewComponent_span_6_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CityViewComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Yields");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Public works");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_Template_button_click_31_listener() { return ctx.optimizeYields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Optimize yields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Expansion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "app-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "turns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CityViewComponent_app_progress_bar_43_Template, 5, 9, "app-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "app-tabs", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "app-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CityViewComponent_div_46_Template, 5, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "app-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CityViewComponent_div_48_Template, 5, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "app-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CityViewComponent_div_50_Template, 2, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_Template_button_click_54_listener() { return ctx.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Buildings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CityViewComponent_div_59_Template, 2, 5, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "app-work-tiles", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, CityViewComponent_ng_template_62_Template, 6, 5, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CityViewComponent_ng_template_64_Template, 5, 4, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CityViewComponent_ng_template_66_Template, 3, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.city.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.city.totalFood)("nextProgress", ctx.city.totalFood + ctx.city.perTurn.food)("total", ctx.city.foodToGrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.city.perTurn.food > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.city.perTurn.food < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.city.perTurn.food === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx.city.yields.food, " - ", ctx.city.foodConsumed, " = ", ctx.city.perTurn.food, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.city.perTurn.production);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.city.perTurn.culture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.city.perTurn.publicWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.city.totalCulture)("nextProgress", ctx.city.totalCulture + ctx.city.perTurn.culture)("total", ctx.city.cultureToExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" borders will expand in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 25, ctx.city.turnsToExpand), " turns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.city.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.availableUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.availableBuildings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.availableIdleProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.city.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.buildings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("city", ctx.city)("workedTiles", ctx.city.workedTiles);
    } }, directives: [_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"], _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["TabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_11__["WorkTilesComponent"], _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__["TooltipDirective"], _product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_13__["ProductRequirementsComponent"], _bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_14__["BonusesComponent"]], pipes: [_turns_pipe__WEBPACK_IMPORTED_MODULE_15__["TurnsPipe"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-areas: \"left city-name city-name city-name right\";\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  --margin: 15px;\n  justify-self: flex-start;\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%] {\n  margin: var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin-h[_ngcontent-%COMP%] {\n  margin: 0 var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin-top[_ngcontent-%COMP%] {\n  margin-top: var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 3px;\n  background-color: var(--color-primary-4);\n  margin: 15px 0;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%] {\n  grid-area: left;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%] {\n  min-height: 30px;\n  height: 30px;\n  flex: 1;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.growth-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--growth-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.production-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--production-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.culture-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--culture-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .size-and-growth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .size-and-growth[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:not(.disabled) {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:not(.disabled):hover {\n  background-color: var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product.disabled[_ngcontent-%COMP%] {\n  color: var(--color-secondary-text);\n  background-color: var(--color-primary-4);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .turns[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]   .city-name[_ngcontent-%COMP%] {\n  grid-area: city-name;\n  justify-self: center;\n  align-self: flex-start;\n  text-align: center;\n  margin-top: 50px;\n}\n[_nghost-%COMP%]   .city-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 8px 100px;\n  border-radius: 30px;\n}\n[_nghost-%COMP%]   .right[_ngcontent-%COMP%] {\n  grid-area: right;\n  justify-self: flex-end;\n}\n[_nghost-%COMP%]   .right[_ngcontent-%COMP%]   .building[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border-top: 1px solid var(--color-primary-3);\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXR5LXZpZXcvY2l0eS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXR5LXZpZXcvY2l0eS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsK0RBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBRENFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNFLFNBQUE7QUNFTjtBREFJO0VBQ0UscUJBQUE7QUNFTjtBREFJO0VBQ0UsdUJBQUE7QUNFTjtBREFJO0VBQ0UseUJBQUE7QUNFTjtBREFJO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQ0VOO0FERUU7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNDTjtBREFNO0VBQ0UseUNBQUE7QUNFUjtBREFNO0VBQ0UsNkNBQUE7QUNFUjtBREFNO0VBQ0UsMENBQUE7QUNFUjtBRENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURBTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQU47QURDTTtFQUNFLCtDQUFBO0FDQ1I7QURDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0FDQVI7QURDUTtFQUNFLHdDQUFBO0FDQ1Y7QURFTTtFQUNFLGtDQUFBO0VBQ0Esd0NBQUE7QUNBUjtBREVNO0VBQ0UsaUJBQUE7QUNBUjtBREtFO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRk47QURNRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNKSjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3VpL2NpdHktdmlldy9jaXR5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsZWZ0IGNpdHktbmFtZSBjaXR5LW5hbWUgY2l0eS1uYW1lIHJpZ2h0XCI7XG4gID4gZGl2IHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICAtLW1hcmdpbjogMTVweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLm1hcmdpbiB7XG4gICAgICBtYXJnaW46IHZhcigtLW1hcmdpbik7XG4gICAgfVxuICAgIC5tYXJnaW4taCB7XG4gICAgICBtYXJnaW46IDAgdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgLm1hcmdpbi10b3Age1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgLnNlcGFyYXRvciB7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG4gIH1cblxuICAubGVmdCB7XG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgIGFwcC1wcm9ncmVzcy1iYXIge1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAmLmdyb3d0aC1iYXIge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICYucHJvZHVjdGlvbi1iYXIge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG4gICAgICB9XG4gICAgICAmLmN1bHR1cmUtYmFyIHtcbiAgICAgICAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWN1bHR1cmUtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2l6ZS1hbmQtZ3Jvd3RoIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnNpemUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAueWllbGQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0IHtcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgICB9XG4gICAgICAudHVybnMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2l0eS1uYW1lIHtcbiAgICBncmlkLWFyZWE6IGNpdHktbmFtZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGgyIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0IHtcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG5cbiAgICAuYnVpbGRpbmcge1xuICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxlZnQgY2l0eS1uYW1lIGNpdHktbmFtZSBjaXR5LW5hbWUgcmlnaHRcIjtcbn1cbjpob3N0ID4gZGl2IHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbjpob3N0IC5wYW5lbCB7XG4gIC0tbWFyZ2luOiAxNXB4O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5wYW5lbCBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5wYW5lbCAubWFyZ2luIHtcbiAgbWFyZ2luOiB2YXIoLS1tYXJnaW4pO1xufVxuOmhvc3QgLnBhbmVsIC5tYXJnaW4taCB7XG4gIG1hcmdpbjogMCB2YXIoLS1tYXJnaW4pO1xufVxuOmhvc3QgLnBhbmVsIC5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luKTtcbn1cbjpob3N0IC5wYW5lbCAuc2VwYXJhdG9yIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuOmhvc3QgLmxlZnQge1xuICBncmlkLWFyZWE6IGxlZnQ7XG59XG46aG9zdCAubGVmdCBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmxlZnQgYXBwLXByb2dyZXNzLWJhci5ncm93dGgtYmFyIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWdyb3d0aC1jb2xvcik7XG59XG46aG9zdCAubGVmdCBhcHAtcHJvZ3Jlc3MtYmFyLnByb2R1Y3Rpb24tYmFyIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLXByb2R1Y3Rpb24tY29sb3IpO1xufVxuOmhvc3QgLmxlZnQgYXBwLXByb2dyZXNzLWJhci5jdWx0dXJlLWJhciB7XG4gIC0tcHJvZ3Jlc3MtYmFyLWNvbG9yOiB2YXIoLS1jdWx0dXJlLWNvbG9yKTtcbn1cbjpob3N0IC5sZWZ0IC5zaXplLWFuZC1ncm93dGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxlZnQgLnNpemUtYW5kLWdyb3d0aCAuc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuOmhvc3QgLmxlZnQgLnlpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbjpob3N0IC5sZWZ0IC55aWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59XG46aG9zdCAubGVmdCAueWllbGQgLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0IHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59XG46aG9zdCAubGVmdCAucHJvZHVjdDpub3QoLmRpc2FibGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0Om5vdCguZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0LmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0IC50dXJucyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuOmhvc3QgLmNpdHktbmFtZSB7XG4gIGdyaWQtYXJlYTogY2l0eS1uYW1lO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOmhvc3QgLmNpdHktbmFtZSBoMiB7XG4gIHBhZGRpbmc6IDhweCAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbjpob3N0IC5yaWdodCB7XG4gIGdyaWQtYXJlYTogcmlnaHQ7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG46aG9zdCAucmlnaHQgLmJ1aWxkaW5nIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CityViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-city-view",
                templateUrl: "./city-view.component.html",
                styleUrls: ["./city-view.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"] }]; }, { workTilesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["workTiles"]
        }], city: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/city-view/work-tiles/work-tiles.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/city-view/work-tiles/work-tiles.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTilesComponent", function() { return WorkTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function WorkTilesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const tile_r97 = ctx.$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r96.getTransform(tile_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("worked", ctx_r96.city.workedTiles.has(tile_r97));
} }
class WorkTilesComponent {
    constructor(cdr, domSanitizer, camera, mapUi) {
        this.cdr = cdr;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.mapUi = mapUi;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.mapUi.clickedTile$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((tile) => this.toggle(tile));
        this.camera.transform$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => this.cdr.markForCheck());
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    toggle(tile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.workedTiles.has(tile)) {
                yield this.city.unworkTile(tile);
            }
            else {
                yield this.city.workTile(tile);
            }
            if (!this.ngUnsubscribe.isStopped) {
                this.updateWorkedTilesArea();
                this.cdr.markForCheck();
            }
        });
    }
    updateWorkedTilesArea() {
        this.mapUi.cityWorkedTilesArea.setTiles(Array.from(this.city.workedTiles));
        this.mapUi.cityNotWorkedTilesArea.setTiles(this.city.getNotWorkedTiles());
    }
    getTransform(tile) {
        const [x, y] = [tile.x + 0.5, tile.y + 0.1];
        const [screenX, screenY] = this.camera.gameToScreen(x, y);
        const scale = this.camera.transform.scale / 100;
        return this.domSanitizer.bypassSecurityTrustStyle(`translate(${screenX}px, ${screenY}px) scale(${scale})`);
    }
}
WorkTilesComponent.ɵfac = function WorkTilesComponent_Factory(t) { return new (t || WorkTilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"])); };
WorkTilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkTilesComponent, selectors: [["app-work-tiles"]], inputs: { city: "city", workedTiles: "workedTiles" }, decls: 1, vars: 1, consts: [["class", "tile", 3, "worked", "transform", 4, "ngFor", "ngForOf"], [1, "tile"]], template: function WorkTilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkTilesComponent_div_0_Template, 1, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.tiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n[_nghost-%COMP%]   .tile[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  margin-left: -13px;\n  border-radius: 50%;\n  border: 1px solid black;\n  background-color: rgba(0, 0, 0, 0.3);\n  transform-origin: top;\n  z-index: -1;\n  will-change: transform;\n}\n[_nghost-%COMP%]   .tile.worked[_ngcontent-%COMP%] {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUNFLHVCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgLnRpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgJi53b3JrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuOmhvc3QgLnRpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHotaW5kZXg6IC0xO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuOmhvc3QgLnRpbGUud29ya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkTilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-work-tiles",
                templateUrl: "./work-tiles.component.html",
                styleUrls: ["./work-tiles.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"] }]; }, { city: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workedTiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/debug/debug.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/debug/debug.component.ts ***!
  \*********************************************/
/*! exports provided: DebugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugComponent", function() { return DebugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");




class DebugComponent {
    constructor(game) {
        this.game = game;
    }
    ngOnInit() { }
    revealWorld() {
        this.game.state.trackedPlayer.revealWorld();
    }
}
DebugComponent.ɵfac = function DebugComponent_Factory(t) { return new (t || DebugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"])); };
DebugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DebugComponent, selectors: [["app-debug"]], decls: 4, vars: 0, consts: [[3, "click"]], template: function DebugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reveal map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebugComponent_Template_button_click_2_listener() { return ctx.revealWorld(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reveal world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2RlYnVnL2RlYnVnLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebugComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-debug",
                templateUrl: "./debug.component.html",
                styleUrls: ["./debug.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/editor/city-editor/city-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui/editor/city-editor/city-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: CityEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityEditorComponent", function() { return CityEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/game */ "./src/app/core/game.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");







function CityEditorComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityEditorComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.destroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CityEditorComponent {
    constructor(game, mapUi) {
        this.game = game;
        this.mapUi = mapUi;
        this.city = null;
    }
    ngOnInit() {
        const shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => v));
        const hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => !v));
        shown.subscribe(() => {
            this.mapUi.enableSelectingTile(true);
            this.mapUi.selectedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden)).subscribe((tile) => {
                if (!tile) {
                    return;
                }
                // if (tile.city) {
                //   this.city = tile.city;
                // } else {
                //   this.spawn(tile);
                // }
            });
        });
        hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
    }
    spawn(tile) {
        // this.city = this.game.citiesManager.spawn(tile, this.game.players[0]);
    }
    destroy() {
        // if (this.city) {
        //   this.game.citiesManager.destroy(this.city);
        //   this.city = null;
        // }
    }
}
CityEditorComponent.ɵfac = function CityEditorComponent_Factory(t) { return new (t || CityEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_game__WEBPACK_IMPORTED_MODULE_2__["Game"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"])); };
CityEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityEditorComponent, selectors: [["app-city-editor"]], inputs: { isVisible$: "isVisible$" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function CityEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CityEditorComponent_button_0_Template, 2, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci9jaXR5LWVkaXRvci9jaXR5LWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-city-editor",
                templateUrl: "./city-editor.component.html",
                styleUrls: ["./city-editor.component.scss"],
            }]
    }], function () { return [{ type: src_app_core_game__WEBPACK_IMPORTED_MODULE_2__["Game"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"] }]; }, { isVisible$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/editor/constants.ts":
/*!****************************************!*\
  !*** ./src/app/ui/editor/constants.ts ***!
  \****************************************/
/*! exports provided: SEA_LEVEL_OPTIONS, LAND_FORM_OPTIONS, CLIMATE_OPTIONS, FOREST_OPTIONS, WETLANDS_OPTIONS, IMPROVEMENT_OPTIONS, ROAD_OPTIONS, RIVER_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEA_LEVEL_OPTIONS", function() { return SEA_LEVEL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAND_FORM_OPTIONS", function() { return LAND_FORM_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_OPTIONS", function() { return CLIMATE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOREST_OPTIONS", function() { return FOREST_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETLANDS_OPTIONS", function() { return WETLANDS_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_OPTIONS", function() { return IMPROVEMENT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROAD_OPTIONS", function() { return ROAD_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIVER_OPTIONS", function() { return RIVER_OPTIONS; });
/* harmony import */ var src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");


const SEA_LEVEL_OPTIONS = [
    { label: "none", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none },
    { label: "shallow", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].shallow },
    { label: "deep", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].deep },
];
const LAND_FORM_OPTIONS = [
    { label: "plains", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].plains },
    { label: "hills", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].hills },
    { label: "mountains", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].mountains },
];
const CLIMATE_OPTIONS = [
    { label: "tropical", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].tropical },
    { label: "savanna", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].savanna },
    { label: "desert", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].desert },
    { label: "continental", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].continental },
    { label: "oceanic", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].oceanic },
    { label: "tundra", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].tundra },
    { label: "arctic", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].arctic },
];
const FOREST_OPTIONS = [
    { label: "no forest", value: false },
    { label: "forest", value: true },
];
const WETLANDS_OPTIONS = [
    { label: "no wetlands", value: false },
    { label: "wetlands", value: true },
];
const IMPROVEMENT_OPTIONS = [
    { label: "no improvement", value: null },
    { label: "farm", value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm },
    { label: "mine", value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine },
    { label: "sawmill", value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill },
];
const ROAD_OPTIONS = [
    { label: "no road", value: null },
    { label: "road", value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road },
];
const RIVER_OPTIONS = [
    { label: "NW", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW },
    { label: "NE", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE },
    { label: "E", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E },
    { label: "SE", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE },
    { label: "SW", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW },
    { label: "W", value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W },
];


/***/ }),

/***/ "./src/app/ui/editor/editor.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/editor/editor.component.ts ***!
  \***********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/tabs/tabs.component */ "./src/app/ui/widgets/tabs/tabs.component.ts");
/* harmony import */ var _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/tabs/tab/tab.component */ "./src/app/ui/widgets/tabs/tab/tab.component.ts");
/* harmony import */ var _tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile-editor/tile-editor.component */ "./src/app/ui/editor/tile-editor/tile-editor.component.ts");
/* harmony import */ var _tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tile-painting/tile-painting.component */ "./src/app/ui/editor/tile-painting/tile-painting.component.ts");
/* harmony import */ var _unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit-editor/unit-editor.component */ "./src/app/ui/editor/unit-editor/unit-editor.component.ts");
/* harmony import */ var _city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./city-editor/city-editor.component */ "./src/app/ui/editor/city-editor/city-editor.component.ts");
/* harmony import */ var _players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./players-editor/players-editor.component */ "./src/app/ui/editor/players-editor/players-editor.component.ts");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");












class EditorComponent {
    constructor(uiState, mapUi) {
        this.uiState = uiState;
        this.mapUi = mapUi;
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.mapUi.editorArea.clear();
        this.mapUi.enableSelectingTile(false);
    }
    close() {
        this.uiState.editorEnabled$.next(false);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_2__["MapUi"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 19, vars: 4, consts: [["tabTitle", "Tile"], ["tileTab", ""], [3, "isVisible$"], ["tabTitle", "Tile painting"], ["tilePaintingTab", ""], ["tabTitle", "units"], ["unitTab", ""], ["tabTitle", "cities"], ["cityTab", ""], ["tabTitle", "players"], ["playersTab", ""], [3, "click"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-tab", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tile-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-tab", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tile-painting", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-tab", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-unit-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-tab", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-city-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-tab", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-players-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_17_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r28.isVisible$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r29.isVisible$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r30.isVisible$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r31.isVisible$);
    } }, directives: [_widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"], _tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_5__["TileEditorComponent"], _tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_6__["TilePaintingComponent"], _unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_7__["UnitEditorComponent"], _city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_8__["CityEditorComponent"], _players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_9__["PlayersEditorComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 25%;\n  display: flex;\n  border-radius: 0;\n  border-width: 3px 0 0 0;\n}\n[_nghost-%COMP%]   app-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsT0FBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItd2lkdGg6IDNweCAwIDAgMDtcbiAgYXBwLXRhYnMge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHggMCAwIDA7XG59XG46aG9zdCBhcHAtdGFicyB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-editor",
                templateUrl: "./editor.component.html",
                styleUrls: ["./editor.component.scss"],
            }]
    }], function () { return [{ type: _ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_2__["MapUi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/editor/players-editor/players-editor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui/editor/players-editor/players-editor.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlayersEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersEditorComponent", function() { return PlayersEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");






function PlayersEditorComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tracked");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayersEditorComponent_li_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r179); const player_r177 = ctx.$implicit; const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r178.track(player_r177); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Track");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r177 = ctx.$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tracked", player_r177.id === ctx_r176.trackedPlayerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Player ", player_r177.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", player_r177.cssColor);
} }
class PlayersEditorComponent {
    constructor(cdr, game) {
        this.cdr = cdr;
        this.game = game;
    }
    ngOnInit() { }
    get players() {
        return this.game.state.players;
    }
    get trackedPlayerId() {
        var _a;
        return (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id;
    }
    track(player) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.setTrackedPlayer(player.id));
            this.cdr.markForCheck();
        });
    }
}
PlayersEditorComponent.ɵfac = function PlayersEditorComponent_Factory(t) { return new (t || PlayersEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"])); };
PlayersEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayersEditorComponent, selectors: [["app-players-editor"]], decls: 2, vars: 1, consts: [[3, "tracked", 4, "ngFor", "ngForOf"], [1, "color-box"], [1, "tracked-text"], [1, "track-btn", 3, "click"]], template: function PlayersEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlayersEditorComponent_li_1_Template, 8, 5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.players);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: ["[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   li.tracked[_ngcontent-%COMP%]   .track-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(.tracked)   .tracked-text[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  width: 30px;\n  min-width: 30px;\n  border-radius: 4px;\n  height: 30px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   .tracked-text[_ngcontent-%COMP%] {\n  color: var(--growth-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvcGxheWVycy1lZGl0b3IvcGxheWVycy1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2VkaXRvci9wbGF5ZXJzLWVkaXRvci9wbGF5ZXJzLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FERU07RUFDRSxhQUFBO0FDQVI7QURJTTtFQUNFLGFBQUE7QUNGUjtBREtJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNITjtBREtJO0VBQ0UsMEJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci9wbGF5ZXJzLWVkaXRvci9wbGF5ZXJzLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgICYudHJhY2tlZCB7XG4gICAgICAudHJhY2stYnRuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpub3QoLnRyYWNrZWQpIHtcbiAgICAgIC50cmFja2VkLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29sb3ItYm94IHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAudHJhY2tlZC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncm93dGgtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46aG9zdCBsaSA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG46aG9zdCBsaS50cmFja2VkIC50cmFjay1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgbGk6bm90KC50cmFja2VkKSAudHJhY2tlZC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IGxpIC5jb2xvci1ib3gge1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzBweDtcbn1cbjpob3N0IGxpIC50cmFja2VkLXRleHQge1xuICBjb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayersEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-players-editor",
                templateUrl: "./players-editor.component.html",
                styleUrls: ["./players-editor.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/editor/tile-editor/tile-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui/editor/tile-editor/tile-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: TileEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileEditorComponent", function() { return TileEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/ui/editor/constants.ts");
/* harmony import */ var src_app_map_generators_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/map-generators/utils */ "./src/app/map-generators/utils.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/hex-math */ "./src/app/shared/hex-math.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/radio/radio.component */ "./src/app/ui/widgets/radio/radio.component.ts");
/* harmony import */ var _widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/multiselect/multiselect.component */ "./src/app/ui/widgets/multiselect/multiselect.component.ts");












function TileEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sea level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r41.tile.seaLevel = $event; return ctx_r41.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Land form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r43.tile.landForm = $event; return ctx_r43.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Climate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r44.tile.climate = $event; return ctx_r44.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.updateForest($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wetlands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.updateWetlands($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "River");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-multiselect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_multiselect_changed_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.updateRiver($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Improvement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.updateImprovement($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Road");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.updateRoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.SEA_LEVEL_OPTIONS)("value", ctx_r38.tile.seaLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.LAND_FORM_OPTIONS)("value", ctx_r38.tile.landForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.CLIMATE_OPTIONS)("value", ctx_r38.tile.climate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.FOREST_OPTIONS)("value", ctx_r38.tile.forest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.WETLANDS_OPTIONS)("value", ctx_r38.tile.wetlands);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.RIVER_OPTIONS)("value", ctx_r38.tile.riverParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.IMPROVEMENT_OPTIONS)("value", ctx_r38.tile.improvement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r38.ROAD_OPTIONS)("value", ctx_r38.tile.road);
} }
function TileEditorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Select the tile to edit.\n");
} }
class TileEditorComponent {
    constructor(game, mapUi) {
        this.game = game;
        this.mapUi = mapUi;
        this.tile = null;
        this.SEA_LEVEL_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["SEA_LEVEL_OPTIONS"];
        this.LAND_FORM_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["LAND_FORM_OPTIONS"];
        this.CLIMATE_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["CLIMATE_OPTIONS"];
        this.FOREST_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["FOREST_OPTIONS"];
        this.RIVER_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["RIVER_OPTIONS"];
        this.WETLANDS_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["WETLANDS_OPTIONS"];
        this.IMPROVEMENT_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["IMPROVEMENT_OPTIONS"];
        this.ROAD_OPTIONS = _constants__WEBPACK_IMPORTED_MODULE_2__["ROAD_OPTIONS"];
    }
    ngOnInit() {
        const shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => v));
        const hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => !v));
        shown.subscribe(() => {
            this.mapUi.enableSelectingTile(true);
            this.mapUi.selectedTile$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden))
                .subscribe((tile) => (this.tile = tile));
        });
        hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
    }
    update() {
        if (this.tile) {
            this.game.state.updateTile(this.tile);
        }
    }
    updateForest(forest) {
        if (this.tile) {
            this.tile.forest = forest && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isForestable"])(this.tile);
            this.update();
        }
    }
    updateWetlands(wetlands) {
        if (this.tile) {
            this.tile.wetlands = wetlands && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["areWetlandsPossible"])(this.tile);
            this.update();
        }
    }
    updateImprovement(improvement) {
        if (this.tile) {
            if (Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isImprovementPossible"])(this.tile, improvement)) {
                this.tile.improvement = improvement;
                this.update();
            }
        }
    }
    updateRoad(road) {
        if (this.tile && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isRoadPossible"])(this.tile)) {
            this.tile.road = road;
            this.update();
            for (const neighbour of this.tile.neighbours) {
                this.game.state.updateTile(neighbour);
            }
        }
    }
    updateRiver(riverParts) {
        if (!this.tile) {
            return;
        }
        this.tile.riverParts = riverParts;
        for (const neighbour of this.tile.neighbours) {
            const dir = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__["getDirectionTo"])(this.tile, neighbour);
            const hasRiver = riverParts.includes(dir);
            const oppositeDir = src_app_map_generators_utils__WEBPACK_IMPORTED_MODULE_3__["OPPOSITE_DIRECTIONS"][dir];
            const neighbourRiverParts = new Set(neighbour.riverParts);
            if (hasRiver) {
                neighbourRiverParts.add(oppositeDir);
            }
            else {
                neighbourRiverParts.delete(oppositeDir);
            }
            neighbour.riverParts = Array.from(neighbourRiverParts);
            this.game.state.updateTile(neighbour);
        }
        this.update();
    }
}
TileEditorComponent.ɵfac = function TileEditorComponent_Factory(t) { return new (t || TileEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"])); };
TileEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileEditorComponent, selectors: [["app-tile-editor"]], inputs: { isVisible$: "isVisible$" }, decls: 3, vars: 2, consts: [["class", "tile", 4, "ngIf", "ngIfElse"], ["selectTilePromptTmpl", ""], [1, "tile"], [3, "options", "value", "changed"]], template: function TileEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TileEditorComponent_div_0_Template, 33, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TileEditorComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tile)("ngIfElse", _r39);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"], _widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_10__["MultiselectComponent"]], styles: ["[_nghost-%COMP%]   .tile[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvdGlsZS1lZGl0b3IvdGlsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2VkaXRvci90aWxlLWVkaXRvci90aWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci90aWxlLWVkaXRvci90aWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgPiAqIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC50aWxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC50aWxlID4gKiB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tile-editor",
                templateUrl: "./tile-editor.component.html",
                styleUrls: ["./tile-editor.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"] }]; }, { isVisible$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/editor/tile-painting/tile-painting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/editor/tile-painting/tile-painting.component.ts ***!
  \********************************************************************/
/*! exports provided: TilePaintingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilePaintingComponent", function() { return TilePaintingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/ui/editor/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/hex-math */ "./src/app/shared/hex-math.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var src_app_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/controls */ "./src/app/controls.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/radio/radio.component */ "./src/app/ui/widgets/radio/radio.component.ts");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");











const IGNORE_OPTION = { label: "ignore", value: undefined };
class TilePaintingComponent {
    constructor(game, controls, mapUi) {
        this.game = game;
        this.controls = controls;
        this.mapUi = mapUi;
        this.SIZE_OPTIONS = [
            { label: "1x1", value: 1 },
            { label: "2x2", value: 2 },
            { label: "3x3", value: 3 },
            { label: "5x5", value: 5 },
            { label: "7x7", value: 7 },
            { label: "10x10", value: 10 },
            { label: "15x15", value: 15 },
        ];
        this.SEA_LEVEL_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["SEA_LEVEL_OPTIONS"]];
        this.LAND_FORM_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["LAND_FORM_OPTIONS"]];
        this.CLIMATE_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["CLIMATE_OPTIONS"]];
        this.FOREST_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["FOREST_OPTIONS"]];
        this.WETLANDS_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["WETLANDS_OPTIONS"]];
        this.IMPROVEMENT_OPTIONS = [IGNORE_OPTION, ..._constants__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_OPTIONS"]];
        this.DEFAULT_PAINT_DATA = {
            size: 1,
            climate: undefined,
            forest: undefined,
            landForm: undefined,
            seaLevel: undefined,
            wetlands: undefined,
            improvement: undefined,
        };
        this.paintData = Object.assign({}, this.DEFAULT_PAINT_DATA);
    }
    ngOnInit() {
        const shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((v) => v));
        const hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((v) => !v));
        shown.subscribe(() => {
            this.controls.mouseButton$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(hidden)).subscribe((button) => {
                if (button === 0) {
                    this.paint();
                }
            });
            this.mapUi.hoveredTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(hidden)).subscribe((tile) => {
                if (tile) {
                    const tiles = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__["getTilesInRange"])(tile, this.paintData.size - 1);
                    this.mapUi.editorArea.clear();
                    this.mapUi.editorArea.addTiles(Array.from(tiles));
                    if (this.controls.mouseButton === 0) {
                        this.paint();
                    }
                }
                else {
                    this.mapUi.editorArea.clear();
                }
            });
        });
        hidden.subscribe(() => this.mapUi.editorArea.clear());
    }
    paint() {
        var _a;
        const pivotTile = this.mapUi.hoveredTile;
        if (!pivotTile) {
            return;
        }
        const tiles = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__["getTilesInRange"])(pivotTile, this.paintData.size - 1);
        for (const tile of tiles) {
            if (this.paintData.seaLevel !== undefined) {
                tile.seaLevel = this.paintData.seaLevel;
            }
            if (this.paintData.landForm !== undefined) {
                tile.landForm = this.paintData.landForm;
            }
            if (this.paintData.climate !== undefined) {
                tile.climate = this.paintData.climate;
            }
            if (this.paintData.forest !== undefined) {
                tile.forest = this.paintData.forest;
            }
            if (this.paintData.wetlands !== undefined) {
                tile.wetlands = this.paintData.wetlands;
            }
            tile.forest = tile.forest && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["isForestable"])(tile);
            tile.wetlands = tile.wetlands && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["areWetlandsPossible"])(tile);
            if (this.paintData.improvement !== undefined) {
                if (Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["isImprovementPossible"])(tile, this.paintData.improvement)) {
                    tile.improvement = this.paintData.improvement;
                }
            }
        }
        (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.updateTiles(Array.from(tiles));
    }
    reset() {
        this.paintData = Object.assign({}, this.DEFAULT_PAINT_DATA);
    }
}
TilePaintingComponent.ɵfac = function TilePaintingComponent_Factory(t) { return new (t || TilePaintingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_controls__WEBPACK_IMPORTED_MODULE_6__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"])); };
TilePaintingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TilePaintingComponent, selectors: [["app-tile-painting"]], inputs: { isVisible$: "isVisible$" }, decls: 30, vars: 14, consts: [[3, "options", "value", "changed"], [3, "click"]], template: function TilePaintingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brush size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_3_listener($event) { return ctx.paintData.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sea level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_7_listener($event) { return ctx.paintData.seaLevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Land form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_11_listener($event) { return ctx.paintData.landForm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Climate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_15_listener($event) { return ctx.paintData.climate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_19_listener($event) { return ctx.paintData.forest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wetlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_23_listener($event) { return ctx.paintData.wetlands = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Improvement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-radio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_27_listener($event) { return ctx.paintData.improvement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TilePaintingComponent_Template_button_click_28_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.SIZE_OPTIONS)("value", ctx.paintData.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.SEA_LEVEL_OPTIONS)("value", ctx.paintData.seaLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.LAND_FORM_OPTIONS)("value", ctx.paintData.landForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.CLIMATE_OPTIONS)("value", ctx.paintData.climate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.FOREST_OPTIONS)("value", ctx.paintData.forest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.WETLANDS_OPTIONS)("value", ctx.paintData.wetlands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.IMPROVEMENT_OPTIONS)("value", ctx.paintData.improvement);
    } }, directives: [_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__["RadioComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TilePaintingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tile-painting",
                templateUrl: "./tile-painting.component.html",
                styleUrls: ["./tile-painting.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"] }, { type: src_app_controls__WEBPACK_IMPORTED_MODULE_6__["Controls"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"] }]; }, { isVisible$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/editor/unit-editor/unit-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui/editor/unit-editor/unit-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: UnitEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitEditorComponent", function() { return UnitEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/units */ "./src/app/data/units.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/toggle/toggle.component */ "./src/app/ui/widgets/toggle/toggle.component.ts");
/* harmony import */ var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/radio/radio.component */ "./src/app/ui/widgets/radio/radio.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");










function UnitEditorComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitEditorComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.destroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UnitEditorComponent {
    constructor(game, mapUi) {
        this.game = game;
        this.mapUi = mapUi;
        this.spawnMode = false;
        this.definition = null;
        this.unit = null;
        this.definitionOptions = [];
    }
    ngOnInit() {
        this.definitionOptions = src_app_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"].map((d) => {
            return { label: d.name, value: d };
        });
        const shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => v));
        const hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((v) => !v));
        shown.subscribe(() => {
            this.mapUi.enableSelectingTile(true);
            this.mapUi.selectedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden)).subscribe((tile) => {
                if (!tile) {
                    return;
                }
                // if (this.spawnMode) {
                //   this.spawn(tile);
                // } else {
                //   this.selectTile(tile);
                // }
            });
        });
        hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
    }
    spawn(tile) {
        if (!this.definition) {
            return;
        }
        // this.game.unitsManager.spawn(
        //   this.definition.id,
        //   tile,
        //   this.game.players[0],
        // );
    }
    destroy() {
        if (this.unit) {
            // this.game.unitsManager.destroy(this.unit);
        }
    }
    selectTile(tile) {
        if (tile.units.length) {
            // this.unit = tile.units[0];
            // this.definition = this.unit.definition;
        }
    }
}
UnitEditorComponent.ɵfac = function UnitEditorComponent_Factory(t) { return new (t || UnitEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_4__["MapUi"])); };
UnitEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitEditorComponent, selectors: [["app-unit-editor"]], inputs: { isVisible$: "isVisible$" }, decls: 4, vars: 4, consts: [[3, "value", "changed"], [3, "options", "value", "changed"], [3, "click", 4, "ngIf"], [3, "click"]], template: function UnitEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function UnitEditorComponent_Template_app_toggle_changed_0_listener($event) { return ctx.spawnMode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spawn mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-radio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function UnitEditorComponent_Template_app_radio_changed_2_listener($event) { return ctx.definition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnitEditorComponent_button_3_Template, 2, 0, "button", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.spawnMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.definitionOptions)("value", ctx.definition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit);
    } }, directives: [_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ToggleComponent"], _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__["RadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci91bml0LWVkaXRvci91bml0LWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-unit-editor",
                templateUrl: "./unit-editor.component.html",
                styleUrls: ["./unit-editor.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_4__["MapUi"] }]; }, { isVisible$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/game-info/game-info.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/game-info/game-info.component.ts ***!
  \*****************************************************/
/*! exports provided: GameInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInfoComponent", function() { return GameInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _debug_debug_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../debug/debug.component */ "./src/app/ui/debug/debug.component.ts");







function GameInfoComponent_app_debug_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-debug");
} }
class GameInfoComponent {
    constructor(game, uiState) {
        this.game = game;
        this.uiState = uiState;
        this.debugModalVisible = false;
    }
    ngOnInit() { }
    openEditor() {
        this.uiState.editorEnabled$.next(true);
    }
    openMenu() {
        this.uiState.menuVisible$.next(true);
    }
}
GameInfoComponent.ɵfac = function GameInfoComponent_Factory(t) { return new (t || GameInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"])); };
GameInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameInfoComponent, selectors: [["app-game-info"]], decls: 11, vars: 4, consts: [[1, "bar"], [3, "click"], [4, "ngIf"]], template: function GameInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_4_listener() { return ctx.debugModalVisible = !ctx.debugModalVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "debug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_6_listener() { return ctx.openEditor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_8_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameInfoComponent_app_debug_10_Template, 1, 0, "app-debug", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("turn: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.game.state.turn$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debugModalVisible);
    } }, directives: [_button_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _debug_debug_component__WEBPACK_IMPORTED_MODULE_5__["DebugComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px 20px;\n}\n[_nghost-%COMP%]   .bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICAuYmFyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbjpob3N0IC5iYXIgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-game-info",
                templateUrl: "./game-info.component.html",
                styleUrls: ["./game-info.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/game-menu/game-menu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/game-menu/game-menu.component.ts ***!
  \*****************************************************/
/*! exports provided: GameMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMenuComponent", function() { return GameMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-menu-view/main-menu-view.component */ "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts");
/* harmony import */ var _new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-game-view/new-game-view.component */ "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts");
/* harmony import */ var _save_view_save_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-view/save-view.component */ "./src/app/ui/game-menu/save-view/save-view.component.ts");
/* harmony import */ var _load_view_load_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-view/load-view.component */ "./src/app/ui/game-menu/load-view/load-view.component.ts");








function GameMenuComponent_app_main_menu_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-menu-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GameMenuComponent_app_main_menu_view_2_Template_app_main_menu_view_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameMenuComponent_app_new_game_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-game-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_new_game_view_3_Template_app_new_game_view_return_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.view = "main-menu-view"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameMenuComponent_app_save_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-save-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_save_view_4_Template_app_save_view_return_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.view = "main-menu-view"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameMenuComponent_app_load_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-load-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_load_view_5_Template_app_load_view_return_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.view = "main-menu-view"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameMenuComponent {
    constructor(uiState) {
        this.uiState = uiState;
        this.view = "main-menu-view";
    }
    ngOnInit() { }
    return() {
        this.uiState.menuVisible$.next(false);
    }
}
GameMenuComponent.ɵfac = function GameMenuComponent_Factory(t) { return new (t || GameMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"])); };
GameMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameMenuComponent, selectors: [["app-game-menu"]], decls: 6, vars: 5, consts: [[1, "panel", "menu"], [3, "ngSwitch"], [3, "change", 4, "ngSwitchCase"], [3, "return", 4, "ngSwitchCase"], [3, "change"], [3, "return"]], template: function GameMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameMenuComponent_app_main_menu_view_2_Template, 1, 0, "app-main-menu-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameMenuComponent_app_new_game_view_3_Template, 1, 0, "app-new-game-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameMenuComponent_app_save_view_4_Template, 1, 0, "app-save-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameMenuComponent_app_load_view_5_Template, 1, 0, "app-load-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "main-menu-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "new-game-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "save-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "load-view");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuViewComponent"], _new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_4__["NewGameViewComponent"], _save_view_save_view_component__WEBPACK_IMPORTED_MODULE_5__["SaveViewComponent"], _load_view_load_view_component__WEBPACK_IMPORTED_MODULE_6__["LoadViewComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvZ2FtZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvZ2FtZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL2dhbWUtbWVudS9nYW1lLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgLm1lbnUge1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3QgLm1lbnUge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-game-menu",
                templateUrl: "./game-menu.component.html",
                styleUrls: ["./game-menu.component.scss"],
            }]
    }], function () { return [{ type: _ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/game-menu/load-view/load-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/game-menu/load-view/load-view.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadViewComponent", function() { return LoadViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../saves-list/saves-list.component */ "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
/* harmony import */ var src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/saving */ "./src/app/api/saving.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/modal/modal.component */ "./src/app/ui/widgets/modal/modal.component.ts");
/* harmony import */ var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/spinner/spinner.component */ "./src/app/ui/widgets/spinner/spinner.component.ts");













function LoadViewComponent_app_modal_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading map");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoadViewComponent {
    constructor(game, uiState, camera) {
        this.game = game;
        this.uiState = uiState;
        this.camera = camera;
        this.return = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveName = "";
        this.waiting = false;
    }
    ngOnInit() { }
    load() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.saveName) {
                return;
            }
            const data = Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__["loadGameData"])(this.saveName);
            if (!data) {
                return null;
            }
            this.waiting = true;
            yield this.game.loadGame(data);
            const city = (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.cities[0];
            if (city) {
                this.camera.moveToTile(city.tile);
            }
            else {
                const unit = (_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.units[0];
                if (unit) {
                    this.camera.moveToTile(unit.tile);
                }
            }
            this.uiState.menuVisible$.next(false);
            this.waiting = false;
        });
    }
    import(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const target = event.target;
            const files = target.files;
            if (!files) {
                return;
            }
            yield Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__["importSave"])(files[0]);
            this.savesListComponent.refresh();
        });
    }
}
LoadViewComponent.ɵfac = function LoadViewComponent_Factory(t) { return new (t || LoadViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_4__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_5__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"])); };
LoadViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadViewComponent, selectors: [["app-load-view"]], viewQuery: function LoadViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.savesListComponent = _t.first);
    } }, outputs: { return: "return" }, decls: 13, vars: 3, consts: [["type", "file", 3, "change"], ["uploader", ""], [3, "selectedSave", "change"], [1, "actions"], [3, "click"], [3, "disabled", "click"], [4, "ngIf"], [1, "center"]], template: function LoadViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoadViewComponent_Template_input_change_0_listener($event) { return ctx.import($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Load the game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-saves-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoadViewComponent_Template_app_saves_list_change_4_listener($event) { return ctx.saveName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_6_listener() { return ctx.return.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r77.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_10_listener() { return ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoadViewComponent_app_modal_12_Template, 5, 0, "app-modal", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedSave", ctx.saveName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.saveName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.waiting);
    } }, directives: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 15px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbG9hZC12aWV3L2xvYWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZ2FtZS1tZW51L2xvYWQtdmlldy9sb2FkLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9nYW1lLW1lbnUvbG9hZC12aWV3L2xvYWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOmhvc3QgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-load-view",
                templateUrl: "./load-view.component.html",
                styleUrls: ["./load-view.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_4__["GameApi"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_5__["UIState"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"] }]; }, { return: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], savesListComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainMenuViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuViewComponent", function() { return MainMenuViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainMenuViewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_ng_container_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.change.next("save-view"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_ng_container_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.return(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class MainMenuViewComponent {
    constructor(game, uiState) {
        this.game = game;
        this.uiState = uiState;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return() {
        this.uiState.menuVisible$.next(false);
    }
}
MainMenuViewComponent.ɵfac = function MainMenuViewComponent_Factory(t) { return new (t || MainMenuViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"])); };
MainMenuViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuViewComponent, selectors: [["app-main-menu-view"]], outputs: { change: "change" }, decls: 6, vars: 3, consts: [[1, "item", 3, "click"], [4, "ngIf"]], template: function MainMenuViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_Template_div_click_0_listener() { return ctx.change.next("new-game-view"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_Template_div_click_2_listener() { return ctx.change.next("load-view"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainMenuViewComponent_ng_container_4_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.game.init$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 20px 200px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbWFpbi1tZW51LXZpZXcvbWFpbi1tZW51LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2dhbWUtbWVudS9tYWluLW1lbnUtdmlldy9tYWluLW1lbnUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDRSx3Q0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L21haW4tbWVudS12aWV3L21haW4tbWVudS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaXRlbSB7XG4gICAgcGFkZGluZzogMjBweCAyMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLml0ZW0ge1xuICBwYWRkaW5nOiAyMHB4IDIwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-main-menu-view",
                templateUrl: "./main-menu-view.component.html",
                styleUrls: ["./main-menu-view.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui/game-menu/new-game-view/new-game-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewGameViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameViewComponent", function() { return NewGameViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/game */ "./src/app/api/game.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/modal/modal.component */ "./src/app/ui/widgets/modal/modal.component.ts");
/* harmony import */ var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/spinner/spinner.component */ "./src/app/ui/widgets/spinner/spinner.component.ts");











function NewGameViewComponent_app_modal_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Generating map");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NewGameViewComponent {
    constructor(game, uiState, camera) {
        this.game = game;
        this.uiState = uiState;
        this.camera = camera;
        this.return = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = 50;
        this.height = 40;
        this.uniformity = 0.5;
        this.seaLevel = 0;
        this.humanPlayersCount = 1;
        this.aiPlayersCount = 5;
        this.seed = null;
        this.waiting = false;
    }
    ngOnInit() { }
    start() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mapOptions = {
                width: this.width,
                height: this.height,
                uniformity: this.uniformity,
                seaLevel: this.seaLevel,
                aiPlayersCount: this.aiPlayersCount,
                humanPlayersCount: this.humanPlayersCount,
                seed: this.seed ? (_a = this.seed) === null || _a === void 0 ? void 0 : _a.toString() : undefined,
            };
            this.waiting = true;
            yield this.game.newGame(mapOptions);
            this.waiting = false;
            const unit = (_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.units[0];
            if (unit) {
                this.camera.moveToTile(unit.tile);
            }
            this.uiState.menuVisible$.next(false);
        });
    }
}
NewGameViewComponent.ɵfac = function NewGameViewComponent_Factory(t) { return new (t || NewGameViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_game__WEBPACK_IMPORTED_MODULE_2__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_3__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"])); };
NewGameViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewGameViewComponent, selectors: [["app-new-game-view"]], outputs: { return: "return" }, decls: 35, vars: 14, consts: [["type", "range", "min", "10", "max", "200", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-0.3", "max", "0.3", "step", "0.05", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "10", "step", "0.05", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "1", "max", "16", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "actions"], [3, "click"], [4, "ngIf"], [1, "center"]], template: function NewGameViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start new game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Width: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_4_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Sea level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_12_listener($event) { return ctx.seaLevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Uniformity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_16_listener($event) { return ctx.uniformity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Human players count: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_20_listener($event) { return ctx.humanPlayersCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " AI players count: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_24_listener($event) { return ctx.aiPlayersCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Seed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_28_listener($event) { return ctx.seed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewGameViewComponent_Template_button_click_30_listener() { return ctx.return.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewGameViewComponent_Template_button_click_32_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NewGameViewComponent_app_modal_34_Template, 5, 0, "app-modal", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.width, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.height, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.seaLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.seaLevel, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.uniformity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.uniformity, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.humanPlayersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.humanPlayersCount, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aiPlayersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.aiPlayersCount, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.seed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.waiting);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _button_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbmV3LWdhbWUtdmlldy9uZXctZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvbmV3LWdhbWUtdmlldy9uZXctZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L25ldy1nYW1lLXZpZXcvbmV3LWdhbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewGameViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-new-game-view",
                templateUrl: "./new-game-view.component.html",
                styleUrls: ["./new-game-view.component.scss"],
            }]
    }], function () { return [{ type: src_app_api_game__WEBPACK_IMPORTED_MODULE_2__["GameApi"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_3__["UIState"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"] }]; }, { return: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/game-menu/save-view/save-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/game-menu/save-view/save-view.component.ts ***!
  \***************************************************************/
/*! exports provided: SaveViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveViewComponent", function() { return SaveViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_saving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/saving */ "./src/app/api/saving.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui-state */ "./src/app/ui/ui-state.ts");
/* harmony import */ var _saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saves-list/saves-list.component */ "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");









class SaveViewComponent {
    constructor(game, uiState) {
        this.game = game;
        this.uiState = uiState;
        this.return = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveName = "";
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.saveName) {
                const data = yield this.game.saveGame();
                Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_2__["saveGameData"])(data, this.saveName);
                this.uiState.menuVisible$.next(false);
            }
        });
    }
}
SaveViewComponent.ɵfac = function SaveViewComponent_Factory(t) { return new (t || SaveViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_4__["UIState"])); };
SaveViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaveViewComponent, selectors: [["app-save-view"]], outputs: { return: "return" }, decls: 11, vars: 3, consts: [[3, "selectedSave", "change"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "actions"], [3, "click"], [3, "disabled", "click"]], template: function SaveViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save the game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-saves-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SaveViewComponent_Template_app_saves_list_change_2_listener($event) { return ctx.saveName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Save name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SaveViewComponent_Template_input_ngModelChange_5_listener($event) { return ctx.saveName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveViewComponent_Template_button_click_7_listener() { return ctx.return.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveViewComponent_Template_button_click_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedSave", ctx.saveName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.saveName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.saveName);
    } }, directives: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_5__["SavesListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _button_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZS12aWV3L3NhdmUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZ2FtZS1tZW51L3NhdmUtdmlldy9zYXZlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L3NhdmUtdmlldy9zYXZlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SaveViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-save-view",
                templateUrl: "./save-view.component.html",
                styleUrls: ["./save-view.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_4__["UIState"] }]; }, { return: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/game-menu/saves-list/saves-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/game-menu/saves-list/saves-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SavesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavesListComponent", function() { return SavesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_saving__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/saving */ "./src/app/api/saving.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button.directive */ "./src/app/ui/button.directive.ts");





function SavesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const save_r72 = ctx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.change.next(save_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const save_r72 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.export(save_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const save_r72 = ctx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.delete(save_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const save_r72 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", save_r72 === ctx_r70.selectedSave);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](save_r72);
} }
function SavesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No saves yet\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SavesListComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.refresh();
    }
    delete(save) {
        Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["deleteSaveGame"])(save);
        this.refresh();
        if (this.selectedSave === save) {
            this.change.next("");
        }
    }
    export(save) {
        Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["exportSave"])(save);
    }
    refresh() {
        this.saves = Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["listSaveGames"])();
    }
}
SavesListComponent.ɵfac = function SavesListComponent_Factory(t) { return new (t || SavesListComponent)(); };
SavesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavesListComponent, selectors: [["app-saves-list"]], inputs: { selectedSave: "selectedSave" }, outputs: { change: "change" }, decls: 2, vars: 2, consts: [["class", "save", 3, "selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "save", 3, "click"], [1, "save-actions"], [3, "click"]], template: function SavesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SavesListComponent_div_0_Template, 8, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavesListComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.saves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.saves.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"]], styles: ["[_nghost-%COMP%]   .save[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .save[_ngcontent-%COMP%]   .save-actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .save[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .save.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZXMtbGlzdC9zYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZXMtbGlzdC9zYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREVNO0VBQ0UsaUJBQUE7QUNBUjtBREdJO0VBQ0Usd0NBQUE7QUNETjtBREdJO0VBQ0Usd0NBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3VpL2dhbWUtbWVudS9zYXZlcy1saXN0L3NhdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5zYXZlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuc2F2ZS1hY3Rpb25zIHtcbiAgICAgID4gKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMik7XG4gICAgfVxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5zYXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuc2F2ZSAuc2F2ZS1hY3Rpb25zID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLnNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLnNhdmUuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-saves-list",
                templateUrl: "./saves-list.component.html",
                styleUrls: ["./saves-list.component.scss"],
            }]
    }], null, { selectedSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/map-ui.ts":
/*!******************************!*\
  !*** ./src/app/ui/map-ui.ts ***!
  \******************************/
/*! exports provided: MapUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapUi", function() { return MapUi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_unit_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/unit-details */ "./src/app/api/unit-details.ts");
/* harmony import */ var _api_city_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/city-details */ "./src/app/api/city-details.ts");
/* harmony import */ var _renderer_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/area */ "./src/app/renderer/area.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
/* harmony import */ var _renderer_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _ui_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-state */ "./src/app/ui/ui-state.ts");











7;
class MapUi {
    constructor(game, camera, uiState) {
        var _a;
        this.game = game;
        this.camera = camera;
        this.uiState = uiState;
        this._hoveredTile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.hoveredTile$ = this._hoveredTile$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this._clickedTile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clickedTile$ = this._clickedTile$.asObservable();
        this._selectedTile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selectedTile$ = this._selectedTile$.asObservable();
        this._highlightedTiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Set());
        this.highlightedTiles$ = this._highlightedTiles$.asObservable();
        this._activePath$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activePath$ = this._activePath$.asObservable();
        this._yieldsVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.yieldsVisible$ = this._yieldsVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this._selectedUnit$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selectedUnit$ = this._selectedUnit$.pipe();
        this.selectingTileEnabled = false;
        this._cityLabelsVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.cityLabelsVisible$ = this._cityLabelsVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.allowMapPanning = true;
        this.clickedTile$.subscribe((tile) => {
            var _a;
            if (this.selectingTileEnabled) {
                this._selectedTile$.next(tile);
            }
            else if (tile.units.length) {
                if (((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.tile) !== tile) {
                    this.selectUnit(tile.units[0]);
                }
            }
            else if (tile === null || tile === void 0 ? void 0 : tile.city) {
                this.selectCity(tile.city);
            }
            else {
                this.selectUnit(null);
                this.setPath(null);
            }
        });
        this.hoveredTile$.subscribe((tile) => {
            if (!this.uiState.selectedCity$.value) {
                if (tile === null || tile === void 0 ? void 0 : tile.city) {
                    this.hoverCity(tile.city);
                }
                else if (this.hoveredCity) {
                    this.unhoverCity();
                }
            }
        });
        (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer$.subscribe((player) => {
            var _a, _b;
            this._selectedUnit$.next(null);
            const tileOfInterest = ((_a = player === null || player === void 0 ? void 0 : player.units[0]) === null || _a === void 0 ? void 0 : _a.tile) || ((_b = player === null || player === void 0 ? void 0 : player.cities[0]) === null || _b === void 0 ? void 0 : _b.tile);
            if (tileOfInterest) {
                this.camera.moveToTile(tileOfInterest);
            }
            this.setPath(null);
        });
        this.game.init$.subscribe(() => {
            this.game.state.citySpawned$.subscribe((city) => {
                if (city.player.id === this.game.state.trackedPlayer.id) {
                    this.selectCity(city);
                }
            });
            this.game.state.turn$.subscribe(() => this.setPath(null));
            const areasContainer = this.camera["renderer"].mapDrawer.areasContainer;
            this.unitRangeArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffffff,
                container: areasContainer,
                backgroundOpacity: 0.15,
                borderShadow: 0.4,
                borderSize: 0.0,
                borderShadowStrength: 2,
                visibleOnWater: true,
            });
            this.cityRangeArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffffff,
                container: areasContainer,
                backgroundOpacity: 0.2,
                borderShadow: 0.3,
                borderSize: 0.1,
                borderShadowStrength: 1.2,
                visibleOnWater: false,
            });
            this.cityBordersOnlyArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffffff,
                container: areasContainer,
                backgroundOpacity: 0,
                borderShadow: 0.3,
                borderSize: 0.1,
                borderShadowStrength: 1.2,
                visibleOnWater: false,
            });
            this.cityWorkedTilesArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffa001,
                container: areasContainer,
                backgroundOpacity: 0.2,
                borderShadow: 0.8,
                borderSize: 0,
                borderShadowStrength: 1,
                visibleOnWater: true,
            });
            this.cityNotWorkedTilesArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffffff,
                container: areasContainer,
                backgroundOpacity: 0.2,
                borderShadow: 0.3,
                borderSize: 0,
                borderShadowStrength: 1.5,
                visibleOnWater: false,
            });
            this.editorArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](this.game.state, {
                color: 0xffffff,
                container: areasContainer,
                backgroundOpacity: 0.25,
                borderShadow: 0.5,
                borderSize: 0.05,
                borderShadowStrength: 1,
                visibleOnWater: true,
            });
        });
        this.game.stop$.subscribe(() => this.clear());
    }
    update() {
        this._yieldsVisible$.next(this.camera.transform.scale > 40);
    }
    get hoveredTile() {
        return this._hoveredTile$.value;
    }
    enableSelectingTile(enable) {
        this.selectingTileEnabled = enable;
        if (!enable) {
            this._selectedTile$.next(null);
        }
    }
    clickTile(tile) {
        this._clickedTile$.next(tile);
    }
    hoverTile(tile) {
        this._hoveredTile$.next(tile);
    }
    setPath(path) {
        this._activePath$.next(path);
    }
    selectCity(city) {
        var _a;
        if (!city) {
            this.uiState.selectedCity$.next(null);
            this._cityLabelsVisible$.next(true);
            this.allowMapPanning = true;
            return;
        }
        if (city.player.id === ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id)) {
            this.game.state.getCityDetails(city.id).then((data) => {
                const cityDetails = new _api_city_details__WEBPACK_IMPORTED_MODULE_5__["CityDetails"](this.game.state, data);
                this.uiState.selectedCity$.next(cityDetails);
                this._cityLabelsVisible$.next(false);
                this.cityRangeArea.setTiles(Array.from(cityDetails.tiles));
                this.allowMapPanning = false;
            });
        }
    }
    hoverCity(city) {
        var _a;
        this.hoveredCity = city;
        if (city.player.id === ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id)) {
            city.getWorkTiles().then((data) => {
                this.cityWorkedTilesArea.setTiles(data.workedTiles);
                this.cityNotWorkedTilesArea.setTiles(data.notWorkedTiles);
                this.cityBordersOnlyArea.setTiles(data.notWorkedTiles.concat(data.workedTiles));
            });
        }
        else {
            city.getRange().then((tiles) => {
                this.cityRangeArea.setTiles(tiles);
            });
        }
    }
    unhoverCity() {
        this.cityWorkedTilesArea.clear();
        this.cityNotWorkedTilesArea.clear();
        this.cityBordersOnlyArea.clear();
        this.cityRangeArea.clear();
        this.hoveredCity = null;
    }
    selectUnit(unit) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ((unit === null || unit === void 0 ? void 0 : unit.id) === ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.id)) {
                return;
            }
            this.clearSelectedUnit(!unit);
            if (!unit) {
                return;
            }
            if (unit.player.id === ((_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.id)) {
                const data = yield this.game.state.getUnitDetails(unit.id);
                if (data) {
                    const unitDetails = new _api_unit_details__WEBPACK_IMPORTED_MODULE_4__["UnitDetails"](this.game.state, data);
                    this._selectedUnit$.next(unitDetails);
                    this.game.state.updateUnit(unitDetails.id);
                    unitDetails
                        .getRange()
                        .then((tiles) => this.unitRangeArea.setTiles(tiles));
                }
                this.setPath(((_c = this._selectedUnit$.value) === null || _c === void 0 ? void 0 : _c.path) || null);
            }
        });
    }
    clearSelectedUnit(clearRange = true) {
        const previousUnit = this.selectedUnit;
        this._selectedUnit$.next(null);
        if (clearRange) {
            this.unitRangeArea.clear();
        }
        if (previousUnit) {
            this.game.state.updateUnit(previousUnit.id);
        }
    }
    get selectedUnit() {
        return this._selectedUnit$.value;
    }
    clear() {
        this.selectingTileEnabled = false;
        this._hoveredTile$.next(null);
        this._selectedTile$.next(null);
        this._highlightedTiles$.next(new Set());
        this.editorArea.clear();
        this.cityRangeArea.clear();
        this.unitRangeArea.clear();
        this.cityBordersOnlyArea.clear();
        this.cityWorkedTilesArea.clear();
        this.cityNotWorkedTilesArea.clear();
    }
}
MapUi.ɵfac = function MapUi_Factory(t) { return new (t || MapUi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_7__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_state__WEBPACK_IMPORTED_MODULE_9__["UIState"])); };
MapUi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapUi, factory: MapUi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapUi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_7__["GameApi"] }, { type: _renderer_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"] }, { type: _ui_state__WEBPACK_IMPORTED_MODULE_9__["UIState"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/minimap/minimap.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/minimap/minimap.component.ts ***!
  \*************************************************/
/*! exports provided: MinimapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimapComponent", function() { return MinimapComponent; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_renderer_minimap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/renderer/minimap */ "./src/app/renderer/minimap.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/renderer/renderer */ "./src/app/renderer/renderer.ts");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");







const _c0 = ["canvas"];
class MinimapComponent {
    constructor(game, renderer, camera) {
        this.game = game;
        this.renderer = renderer;
        this.camera = camera;
        this.app = null;
        this.minimapRenderer = null;
    }
    ngAfterViewInit() {
        this.create();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.minimapRenderer) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.destroy();
    }
    create() {
        if (this.minimapRenderer) {
            this.minimapRenderer.destroy();
        }
        this.minimapRenderer = new src_app_renderer_minimap__WEBPACK_IMPORTED_MODULE_2__["MinimapRenderer"](this.game, this.renderer, this.camera);
        this.minimapRenderer.calculateSize();
        this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            view: this.canvas.nativeElement,
            width: this.minimapRenderer.width,
            height: this.minimapRenderer.height,
            autoStart: false,
        });
        this.minimapRenderer.create(this.app);
    }
    moveViewport(event) {
        if (!this.minimapRenderer) {
            return;
        }
        if (event.buttons === 1) {
            const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
            this.camera.moveTo((event.clientX - canvasRect.x) / this.minimapRenderer.scale, (event.clientY - canvasRect.y) / this.minimapRenderer.scale);
        }
    }
}
MinimapComponent.ɵfac = function MinimapComponent_Factory(t) { return new (t || MinimapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__["GameRenderer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"])); };
MinimapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MinimapComponent, selectors: [["app-minimap"]], viewQuery: function MinimapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 2, vars: 0, consts: [[3, "mousemove", "mousedown"], ["canvas", ""]], template: function MinimapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function MinimapComponent_Template_canvas_mousemove_0_listener($event) { return ctx.moveViewport($event); })("mousedown", function MinimapComponent_Template_canvas_mousedown_0_listener($event) { return ctx.moveViewport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  margin-left: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9taW5pbWFwL21pbmltYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL21pbmltYXAvbWluaW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL21pbmltYXAvbWluaW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgY2FudmFzIHtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgY2FudmFzIHtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinimapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-minimap",
                templateUrl: "./minimap.component.html",
                styleUrls: ["./minimap.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__["GameRenderer"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["canvas"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/next-turn-button/next-turn-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/next-turn-button/next-turn-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: NextTurnButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTurnButtonComponent", function() { return NextTurnButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _next_turn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-turn.service */ "./src/app/ui/next-turn.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/spinner/spinner.component */ "./src/app/ui/widgets/spinner/spinner.component.ts");









function NextTurnButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Wait for other players\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NextTurnButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NextTurnButtonComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.nextTurnService.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r24.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.label, " ");
} }
class NextTurnButtonComponent {
    constructor(cdr, game, nextTurnService) {
        this.cdr = cdr;
        this.game = game;
        this.nextTurnService = nextTurnService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.game.nextTask$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => this.cdr.markForCheck());
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    get cssClass() {
        const nextTask = this.game.nextTask;
        if (!nextTask) {
            return "";
        }
        switch (nextTask.task) {
            case "city":
                return "production-color";
            case "unit":
                return "";
        }
    }
    get label() {
        const nextTask = this.game.nextTask;
        if (!nextTask) {
            return "Next turn";
        }
        switch (nextTask.task) {
            case "city":
                return "Choose production";
            case "unit":
                return "Unit needs orders";
        }
    }
}
NextTurnButtonComponent.ɵfac = function NextTurnButtonComponent_Factory(t) { return new (t || NextTurnButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_next_turn_service__WEBPACK_IMPORTED_MODULE_4__["NextTurnService"])); };
NextTurnButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NextTurnButtonComponent, selectors: [["app-next-turn-button"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["buttonTmpl", ""], [3, "click"]], template: function NextTurnButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NextTurnButtonComponent_button_0_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NextTurnButtonComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.nextTurnService.waiting$))("ngIfElse", _r23);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-bottom: 3px solid var(--color-primary-0);\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  font-size: 22px;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   app-spinner[_ngcontent-%COMP%] {\n  --spinner-size: 20px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9uZXh0LXR1cm4tYnV0dG9uL25leHQtdHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL25leHQtdHVybi1idXR0b24vbmV4dC10dXJuLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9uZXh0LXR1cm4tYnV0dG9uL25leHQtdHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS0wKTtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgYXBwLXNwaW5uZXIge1xuICAgIC0tc3Bpbm5lci1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59XG46aG9zdCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGFwcC1zcGlubmVyIHtcbiAgLS1zcGlubmVyLXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NextTurnButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-next-turn-button",
                templateUrl: "./next-turn-button.component.html",
                styleUrls: ["./next-turn-button.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: _next_turn_service__WEBPACK_IMPORTED_MODULE_4__["NextTurnService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/next-turn.service.ts":
/*!*****************************************!*\
  !*** ./src/app/ui/next-turn.service.ts ***!
  \*****************************************/
/*! exports provided: NextTurnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTurnService", function() { return NextTurnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
/* harmony import */ var _renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/camera */ "./src/app/renderer/camera.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-ui */ "./src/app/ui/map-ui.ts");







class NextTurnService {
    constructor(game, camera, mapUi) {
        this.game = game;
        this.camera = camera;
        this.mapUi = mapUi;
        this._waiting$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.waiting$ = this._waiting$.asObservable();
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._waiting$.value) {
                return;
            }
            const nextTask = this.game.nextTask;
            if (!nextTask) {
                this._waiting$.next(true);
                yield this.game.nextPlayer();
                this._waiting$.next(false);
                return;
            }
            const state = this.game.state;
            switch (nextTask.task) {
                case "city":
                    const city = state.citiesMap.get(nextTask.id);
                    this.mapUi.selectCity(city);
                    break;
                case "unit":
                    const unit = state.unitsMap.get(nextTask.id);
                    this.mapUi.selectUnit(unit);
                    this.camera.moveToTileWithEasing(unit.tile);
                    break;
            }
        });
    }
}
NextTurnService.ɵfac = function NextTurnService_Factory(t) { return new (t || NextTurnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"])); };
NextTurnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NextTurnService, factory: NextTurnService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NextTurnService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_3__["GameApi"] }, { type: _renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/percent-bonus.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/ui/percent-bonus.pipe.ts ***!
  \******************************************/
/*! exports provided: PercentBonusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentBonusPipe", function() { return PercentBonusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PercentBonusPipe {
    transform(value) {
        return (value * 100).toFixed(0) + "%";
    }
}
PercentBonusPipe.ɵfac = function PercentBonusPipe_Factory(t) { return new (t || PercentBonusPipe)(); };
PercentBonusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "percentBonus", type: PercentBonusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentBonusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "percentBonus",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ui/player-yields/player-yields.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/player-yields/player-yields.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerYieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerYieldsComponent", function() { return PlayerYieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/tooltip.directive */ "./src/app/ui/widgets/tooltip.directive.ts");




function PlayerYieldsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From cities: ", ctx_r164.yields.income.publicWorks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Improvements maintainance: ", ctx_r164.yields.costs.publicWorks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Netto per turn: ", ctx_r164.yields.perTurn.publicWorks, "");
} }
class PlayerYieldsComponent {
    constructor(game) {
        this.game = game;
    }
    ngOnInit() { }
    get yields() {
        return this.game.state.trackedPlayer.yields;
    }
}
PlayerYieldsComponent.ɵfac = function PlayerYieldsComponent_Factory(t) { return new (t || PlayerYieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"])); };
PlayerYieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerYieldsComponent, selectors: [["app-player-yields"]], decls: 4, vars: 4, consts: [[1, "public-works-color", 3, "appTooltip"], ["publicWorksTooltipTmpl", ""]], template: function PlayerYieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerYieldsComponent_ng_template_2_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", _r163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Public works: ", ctx.yields.total.publicWorks, " (", ctx.yields.perTurn.publicWorks >= 0 ? "+" : "", "", ctx.yields.perTurn.publicWorks, ")\n");
    } }, directives: [_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9wbGF5ZXIteWllbGRzL3BsYXllci15aWVsZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3BsYXllci15aWVsZHMvcGxheWVyLXlpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvcGxheWVyLXlpZWxkcy9wbGF5ZXIteWllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerYieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-player-yields",
                templateUrl: "./player-yields.component.html",
                styleUrls: ["./player-yields.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/product-requirements/product-requirements.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/product-requirements/product-requirements.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductRequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRequirementsComponent", function() { return ProductRequirementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/buildings */ "./src/app/core/buildings.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["buildingTmpl"];
const _c1 = ["sizeTmpl"];
function ProductRequirementsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { requirement: a0 }; };
function ProductRequirementsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductRequirementsComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const requirement_r159 = ctx.$implicit;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r154.templates.get(requirement_r159.id))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, requirement_r159));
} }
function ProductRequirementsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r161 = ctx.requirement;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r156.getBuildingName(requirement_r161.buildingId));
} }
function ProductRequirementsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r162 = ctx.requirement;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requirement_r162.size);
} }
class ProductRequirementsComponent {
    constructor() {
        this.templates = new Map();
        this.failedRequirements = [];
    }
    ngAfterViewInit() {
        this.templates.set("building", this.buildingRef);
        this.templates.set("size", this.sizeRef);
        for (const r of this.product.weakRequirements) {
            if (!r.check(this.city)) {
                this.failedRequirements.push(r);
            }
        }
    }
    getBuildingName(id) {
        return src_app_core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id).name;
    }
}
ProductRequirementsComponent.ɵfac = function ProductRequirementsComponent_Factory(t) { return new (t || ProductRequirementsComponent)(); };
ProductRequirementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductRequirementsComponent, selectors: [["app-product-requirements"]], viewQuery: function ProductRequirementsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buildingRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sizeRef = _t.first);
    } }, inputs: { product: "product", city: "city" }, decls: 5, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["buildingTmpl", ""], ["sizeTmpl", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ProductRequirementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductRequirementsComponent_ng_container_0_Template, 2, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductRequirementsComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductRequirementsComponent_ng_template_3_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.failedRequirements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  color: var(--color-danger-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9wcm9kdWN0LXJlcXVpcmVtZW50cy9wcm9kdWN0LXJlcXVpcmVtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvcHJvZHVjdC1yZXF1aXJlbWVudHMvcHJvZHVjdC1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvcHJvZHVjdC1yZXF1aXJlbWVudHMvcHJvZHVjdC1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG59XG4iLCI6aG9zdCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRequirementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-product-requirements",
                templateUrl: "./product-requirements.component.html",
                styleUrls: ["./product-requirements.component.scss"],
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], city: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buildingRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["buildingTmpl"]
        }], sizeRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["sizeTmpl"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/turn-counter/turn-counter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/turn-counter/turn-counter.component.ts ***!
  \***********************************************************/
/*! exports provided: TurnCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnCounterComponent", function() { return TurnCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class TurnCounterComponent {
    constructor(game) {
        this.game = game;
        this.isVisible = false;
    }
    ngOnInit() {
        this.game.state.turn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((turn) => turn > 1)).subscribe(() => {
            this.isVisible = true;
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => (this.isVisible = false), 2000);
        });
    }
}
TurnCounterComponent.ɵfac = function TurnCounterComponent_Factory(t) { return new (t || TurnCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"])); };
TurnCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurnCounterComponent, selectors: [["app-turn-counter"]], hostVars: 2, hostBindings: function TurnCounterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-visible", ctx.isVisible);
    } }, decls: 3, vars: 3, consts: [[1, "turn"]], template: function TurnCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("turn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.game.state.turn$), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: 20%;\n  font-size: 30px;\n  left: 0;\n  color: white;\n  opacity: 0;\n  transition: 1s linear;\n  pointer-events: none;\n}\n.is-visible[_nghost-%COMP%] {\n  opacity: 1;\n  transition: 0s;\n}\n[_nghost-%COMP%]   .turn[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto;\n  line-height: 55px;\n  background: linear-gradient(90deg, transparent, rgba(84, 140, 255, 0.5), rgba(84, 140, 255, 0.5), transparent);\n}\n[_nghost-%COMP%]   .turn[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .turn[_ngcontent-%COMP%]:after {\n  height: 2px;\n  content: \" \";\n  display: block;\n  background: linear-gradient(90deg, transparent, #548cff, #548cff, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhHQUFBO0FDRUo7QURLSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhFQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMXMgbGluZWFyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgJi5pcy12aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDBzO1xuICB9XG4gIC50dXJuIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoODQsIDE0MCwgMjU1LCAwLjUpLFxuICAgICAgcmdiYSg4NCwgMTQwLCAyNTUsIDAuNSksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDkwZGVnLFxuICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgcmdiYSg4NCwgMTQwLCAyNTUsIDEpLFxuICAgICAgICByZ2JhKDg0LCAxNDAsIDI1NSwgMSksXG4gICAgICAgIHRyYW5zcGFyZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMXMgbGluZWFyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0LmlzLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwcztcbn1cbjpob3N0IC50dXJuIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoODQsIDE0MCwgMjU1LCAwLjUpLCByZ2JhKDg0LCAxNDAsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQpO1xufVxuOmhvc3QgLnR1cm46YmVmb3JlLCA6aG9zdCAudHVybjphZnRlciB7XG4gIGhlaWdodDogMnB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICM1NDhjZmYsICM1NDhjZmYsIHRyYW5zcGFyZW50KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-turn-counter",
                templateUrl: "./turn-counter.component.html",
                styleUrls: ["./turn-counter.component.scss"],
            }]
    }], function () { return [{ type: src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-visible"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/turns.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/ui/turns.pipe.ts ***!
  \**********************************/
/*! exports provided: TurnsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnsPipe", function() { return TurnsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TurnsPipe {
    transform(value) {
        if (value === null) {
            return "";
        }
        if (value === Infinity) {
            return "∞";
        }
        return value.toString();
    }
}
TurnsPipe.ɵfac = function TurnsPipe_Factory(t) { return new (t || TurnsPipe)(); };
TurnsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "turns", type: TurnsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "turns",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ui/ui-state.ts":
/*!********************************!*\
  !*** ./src/app/ui/ui-state.ts ***!
  \********************************/
/*! exports provided: UIState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIState", function() { return UIState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class UIState {
    constructor() {
        this.editorEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.menuVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.selectedCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
}


/***/ }),

/***/ "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UnitActionRequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitActionRequirementsComponent", function() { return UnitActionRequirementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/unit-actions */ "./src/app/core/unit-actions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UnitActionRequirementsComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Must be on owned tile. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cannot be build on someone else's land. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Already built. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Already built. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cannot be built here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not enough public work points. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UnitActionRequirementsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UnitActionRequirementsComponent_div_0_ng_container_2_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitActionRequirementsComponent_div_0_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnitActionRequirementsComponent_div_0_ng_container_4_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnitActionRequirementsComponent_div_0_ng_container_5_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UnitActionRequirementsComponent_div_0_ng_container_6_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnitActionRequirementsComponent_div_0_ng_container_7_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", requirement_r169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "ownTile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "notForeignTile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sameImprovement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "noRoad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "improvementPossible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "publicWorks");
} }
function UnitActionRequirementsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Will consume ", ctx_r166.publicWorksRequired, " public works points.\n");
} }
function UnitActionRequirementsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Costs per turn: ", ctx_r167.publicWorksPerTurn, " public works points.\n");
} }
function UnitActionRequirementsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Will consume the unit\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UnitActionRequirementsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.failedRequirements = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.failedRequirements = yield this.unit.getFailedActionRequirements(this.action);
            this.cdr.markForCheck();
        });
    }
    get publicWorksRequired() {
        return Object(src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__["getPublicWorksRequired"])(this.action);
    }
    get publicWorksPerTurn() {
        return Object(src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__["getPublicWorksPerTurn"])(this.action);
    }
}
UnitActionRequirementsComponent.ɵfac = function UnitActionRequirementsComponent_Factory(t) { return new (t || UnitActionRequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
UnitActionRequirementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitActionRequirementsComponent, selectors: [["app-unit-action-requirements"]], inputs: { unit: "unit", action: "action" }, decls: 4, vars: 4, consts: [["class", "requirements", 4, "ngFor", "ngForOf"], ["class", "public-works-color", 4, "ngIf"], [4, "ngIf"], [1, "requirements"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "public-works-color"]], template: function UnitActionRequirementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UnitActionRequirementsComponent_div_0_Template, 8, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UnitActionRequirementsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UnitActionRequirementsComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitActionRequirementsComponent_div_3_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.failedRequirements);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.publicWorksRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.publicWorksPerTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action === "foundCity");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: ["[_nghost-%COMP%]   .requirements[_ngcontent-%COMP%] {\n  color: var(--color-danger-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMvdW5pdC1hY3Rpb24tcmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMvdW5pdC1hY3Rpb24tcmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsK0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpL3VuaXQtYWN0aW9uLXJlcXVpcmVtZW50cy91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5yZXF1aXJlbWVudHMge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG4gIH1cbn1cbiIsIjpob3N0IC5yZXF1aXJlbWVudHMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyLXRleHQpO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitActionRequirementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-unit-action-requirements",
                templateUrl: "./unit-action-requirements.component.html",
                styleUrls: ["./unit-action-requirements.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/unit-marker/unit-marker.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/unit-marker/unit-marker.component.ts ***!
  \*********************************************************/
/*! exports provided: UnitMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitMarkerComponent", function() { return UnitMarkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_renderer_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/renderer/constants */ "./src/app/renderer/constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/renderer/camera */ "./src/app/renderer/camera.ts");







class UnitMarkerComponent {
    constructor(cdr, domSanitizer, camera) {
        this.cdr = cdr;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.camera.transform$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => this.cdr.markForCheck());
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    get transform() {
        if (!this.unit) {
            return "";
        }
        const [x, y] = [this.unit.tile.x, this.unit.tile.y];
        const [screenX, screenY] = this.camera.gameToScreen(x, y);
        const scale = this.camera.transform.scale / src_app_renderer_constants__WEBPACK_IMPORTED_MODULE_3__["TILE_SIZE"];
        return this.domSanitizer.bypassSecurityTrustStyle(`translate(${screenX}px, ${screenY}px) scale(${scale})`);
    }
    get haveMoves() {
        return this.unit.actionPointsLeft > 0;
    }
}
UnitMarkerComponent.ɵfac = function UnitMarkerComponent_Factory(t) { return new (t || UnitMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"])); };
UnitMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitMarkerComponent, selectors: [["app-unit-marker"]], hostVars: 4, hostBindings: function UnitMarkerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.transform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("have-moves", ctx.haveMoves);
    } }, inputs: { unit: "unit" }, decls: 1, vars: 0, consts: [[1, "inner"]], template: function UnitMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  transform-origin: top left;\n  will-change: transform;\n  --color: rgb(255, 36, 36, 0.8);\n}\n.have-moves[_nghost-%COMP%] {\n  --color: rgb(101, 234, 75, 0.8);\n}\n[_nghost-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  margin-top: 24px;\n  margin-left: 24px;\n  border-radius: 50%;\n  border: 15px solid;\n  border-color: var(--color) transparent;\n  -webkit-animation: spin 3s linear infinite;\n          animation: spin 3s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LW1hcmtlci91bml0LW1hcmtlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvdW5pdC1tYXJrZXIvdW5pdC1tYXJrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRjtBRFBBO0VBQ0U7SUFDRSx1QkFBQTtFQ0NGO0VEQ0E7SUFDRSx5QkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBRjtBRENFO0VBQ0UsK0JBQUE7QUNDSjtBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdWkvdW5pdC1tYXJrZXIvdW5pdC1tYXJrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC0tY29sb3I6IHJnYigyNTUsIDM2LCAzNiwgMC44KTtcbiAgJi5oYXZlLW1vdmVzIHtcbiAgICAtLWNvbG9yOiByZ2IoMTAxLCAyMzQsIDc1LCAwLjgpO1xuICB9XG4gIC5pbm5lciB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IpIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cbiIsIkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC0tY29sb3I6IHJnYigyNTUsIDM2LCAzNiwgMC44KTtcbn1cbjpob3N0LmhhdmUtbW92ZXMge1xuICAtLWNvbG9yOiByZ2IoMTAxLCAyMzQsIDc1LCAwLjgpO1xufVxuOmhvc3QgLmlubmVyIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDE1cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IpIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-unit-marker",
                templateUrl: "./unit-marker.component.html",
                styleUrls: ["./unit-marker.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"] }]; }, { unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.transform"]
        }], haveMoves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.have-moves"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/unit-panel/unit-panel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/unit-panel/unit-panel.component.ts ***!
  \*******************************************************/
/*! exports provided: UnitPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPanelComponent", function() { return UnitPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/unit-actions */ "./src/app/core/unit-actions.ts");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api */ "./src/app/api/index.ts");
/* harmony import */ var _map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-ui */ "./src/app/ui/map-ui.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button.directive */ "./src/app/ui/button.directive.ts");
/* harmony import */ var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/tooltip.directive */ "./src/app/ui/widgets/tooltip.directive.ts");
/* harmony import */ var _unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../unit-action-requirements/unit-action-requirements.component */ "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts");
/* harmony import */ var _unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../unit-marker/unit-marker.component */ "./src/app/ui/unit-marker/unit-marker.component.ts");













const _c0 = function (a0) { return { action: a0 }; };
function UnitPanelComponent_div_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const action_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.unit.doAction(action_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx_r13.unit.canDoAction(action_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r10)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, action_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.getActionName(action_r14), " ");
} }
function UnitPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.destroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Disband");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.setOrder("skip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Skip move");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.setOrder("sleep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UnitPanelComponent_div_0_button_17_Template, 2, 7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.unit.definition.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Moves: ", ctx_r9.unit.actionPointsLeft, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Power: ", ctx_r9.unit.definition.power, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order: ", ctx_r9.unit.order, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.unit.definition.actions);
} }
function UnitPanelComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-unit-action-requirements", 9);
} if (rf & 2) {
    const action_r21 = ctx.action;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("unit", ctx_r11.unit)("action", action_r21);
} }
function UnitPanelComponent_app_unit_marker_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-unit-marker", 10);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("unit", ctx_r12.unit);
} }
class UnitPanelComponent {
    constructor(cdr, game, mapUi) {
        this.cdr = cdr;
        this.game = game;
        this.mapUi = mapUi;
        this.unit = null;
        this.requirementsTemplates = new Map();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.mapUi.selectedUnit$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((unit) => {
            this.unit = unit;
            this.cdr.markForCheck();
        });
        this.game
            .state.turn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.unit) {
                yield this.unit.refresh();
                this.mapUi.unitRangeArea.setTiles(yield this.unit.getRange());
                this.cdr.markForCheck();
            }
        }));
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    getActionName(action) {
        return src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"][action].name;
    }
    setOrder(order) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield ((_a = this.unit) === null || _a === void 0 ? void 0 : _a.setOrder(order));
            this.cdr.markForCheck();
        });
    }
    destroy() {
        if (this.unit) {
            this.unit.disband();
            this.mapUi.selectUnit(null);
        }
    }
}
UnitPanelComponent.ɵfac = function UnitPanelComponent_Factory(t) { return new (t || UnitPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"])); };
UnitPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitPanelComponent, selectors: [["app-unit-panel"]], decls: 4, vars: 2, consts: [["class", "panel panel-top-right-corner", 4, "ngIf"], ["unitActionsTooltipTmpl", ""], [3, "unit", 4, "ngIf"], [1, "panel", "panel-top-right-corner"], [1, "actions"], [1, "btn-danger", 3, "click"], [3, "click"], [3, "disabled", "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], [3, "appTooltip", "tooltipContext", "click"], [3, "unit", "action"], [3, "unit"]], template: function UnitPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UnitPanelComponent_div_0_Template, 18, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UnitPanelComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitPanelComponent_app_unit_marker_3_Template, 1, 1, "app-unit-marker", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], _unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_10__["UnitActionRequirementsComponent"], _unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_11__["UnitMarkerComponent"]], styles: ["[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  max-width: 400px;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LXBhbmVsL3VuaXQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3VuaXQtcGFuZWwvdW5pdC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBSjtBRENJO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0FDQ047QURBTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3VpL3VuaXQtcGFuZWwvdW5pdC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5hY3Rpb25zIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgLnBhbmVsIC5hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCAucGFuZWwgLmFjdGlvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-unit-panel",
                templateUrl: "./unit-panel.component.html",
                styleUrls: ["./unit-panel.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"] }, { type: _map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/widgets/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/widgets/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "panel"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/widgets/multiselect/multiselect.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/widgets/multiselect/multiselect.component.ts ***!
  \*****************************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MultiselectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiselectComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const option_r55 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.toggleOption(option_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r55 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r54.value.includes(option_r55.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r55.label, "\n");
} }
class MultiselectComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleOption(option) {
        if (this.value.includes(option.value)) {
            const index = this.value.indexOf(option.value);
            const newValue = [...this.value];
            newValue.splice(index, 1);
            this.changed.next(newValue);
        }
        else {
            this.changed.next([...this.value, option.value]);
        }
    }
}
MultiselectComponent.ɵfac = function MultiselectComponent_Factory(t) { return new (t || MultiselectComponent)(); };
MultiselectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiselectComponent, selectors: [["app-multiselect"]], inputs: { options: "options", value: "value" }, outputs: { changed: "changed" }, decls: 1, vars: 1, consts: [["class", "option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]], template: function MultiselectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiselectComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 10px;\n}\n[_nghost-%COMP%]   .option[_ngcontent-%COMP%]:not(.selected):hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .option.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLHdDQUFBO0FDQ047QURDSTtFQUNFLHdDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAub3B0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgJjpub3QoLnNlbGVjdGVkKTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xuICAgIH1cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAub3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbjpob3N0IC5vcHRpb246bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiselectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-multiselect",
                templateUrl: "./multiselect.component.html",
                styleUrls: ["./multiselect.component.scss"],
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/progress-bar/progress-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/widgets/progress-bar/progress-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ProgressBarComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r128.nextProgressPercent, "%");
} }
function ProgressBarComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r129.progressPercent - ctx_r129.nextProgressPercent, "%")("left", ctx_r129.nextProgressPercent, "%");
} }
function ProgressBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarComponent_ng_container_0_div_1_Template, 1, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarComponent_ng_container_0_div_3_Template, 1, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.nextProgress > ctx_r127.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r127.progressPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.nextProgress < ctx_r127.progress);
} }
const _c0 = ["*"];
class ProgressBarComponent {
    get progressPercent() {
        return (this.progress / this.total) * 100;
    }
    get nextProgressPercent() {
        return (this.nextProgress / this.total) * 100;
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { progress: "progress", nextProgress: "nextProgress", total: "total" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "progress next", 3, "width", 4, "ngIf"], [1, "progress"], ["class", "progress negative", 3, "width", "left", 4, "ngIf"], [1, "progress", "next"], [1, "progress", "negative"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressBarComponent_ng_container_0_Template, 5, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_ngcontent-%COMP%]:root {\n  --progress-bar-color: royalblue;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  z-index: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n  text-shadow: 0 0 4px black;\n}\n\n[_nghost-%COMP%]   .progress[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background-color: var(--progress-bar-color);\n}\n\n[_nghost-%COMP%]   .progress.next[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n[_nghost-%COMP%]   .progress.negative[_ngcontent-%COMP%] {\n  background-color: #c22929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3dpZGdldHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDRUo7O0FEREk7RUFDRSxZQUFBO0FDR047O0FEREk7RUFDRSx5QkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLXByb2dyZXNzLWJhci1jb2xvcjogcm95YWxibHVlO1xufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XG4gIC5wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzcy1iYXItY29sb3IpO1xuICAgICYubmV4dCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICYubmVnYXRpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMjkyOTtcbiAgICB9XG4gIH1cbn1cbiIsIjpyb290IHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xufVxuOmhvc3QgLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzLWJhci1jb2xvcik7XG59XG46aG9zdCAucHJvZ3Jlc3MubmV4dCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbjpob3N0IC5wcm9ncmVzcy5uZWdhdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjI5Mjk7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-progress-bar",
                templateUrl: "./progress-bar.component.html",
                styleUrls: ["./progress-bar.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/radio/radio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/widgets/radio/radio.component.ts ***!
  \*****************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const option_r51 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.changed.next(option_r51.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", option_r51.value === ctx_r50.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r51.label, "\n");
} }
class RadioComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["app-radio"]], inputs: { options: "options", value: "value" }, outputs: { changed: "changed" }, decls: 1, vars: 1, consts: [["class", "option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadioComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 10px;\n}\n[_nghost-%COMP%]   .option[_ngcontent-%COMP%]:not(.selected):hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .option.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLHdDQUFBO0FDQ047QURDSTtFQUNFLHdDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAub3B0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgJjpub3QoLnNlbGVjdGVkKTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xuICAgIH1cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAub3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbjpob3N0IC5vcHRpb246bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-radio",
                templateUrl: "./radio.component.html",
                styleUrls: ["./radio.component.scss"],
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/widgets/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 0, vars: 0, template: function SpinnerComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  --spinner-size: 64px;\n  display: inline-block;\n}\n[_nghost-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: var(--spinner-size);\n  height: var(--spinner-size);\n  border-radius: 50%;\n  border: calc(var(--spinner-size) / 6) solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNFSjtBREFFO0VBQ0U7SUFDRSx1QkFBQTtFQ0VKO0VEQUU7SUFDRSx5QkFBQTtFQ0VKO0FBQ0Y7QURSRTtFQUNFO0lBQ0UsdUJBQUE7RUNFSjtFREFFO0lBQ0UseUJBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tc3Bpbm5lci1zaXplOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS1zcGlubmVyLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tc3Bpbm5lci1zaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNwaW5uZXItc2l6ZSkgLyA2KSBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc3Bpbm5lci1zaXplOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IHZhcigtLXNwaW5uZXItc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc3Bpbm5lci1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IGNhbGModmFyKC0tc3Bpbm5lci1zaXplKSAvIDYpIHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/widgets/tabs/index.ts":
/*!******************************************!*\
  !*** ./src/app/ui/widgets/tabs/index.ts ***!
  \******************************************/
/*! exports provided: TabComponent, TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/ui/widgets/tabs/tab/tab.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });

/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ "./src/app/ui/widgets/tabs/tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]; });





/***/ }),

/***/ "./src/app/ui/widgets/tabs/tab/tab.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/widgets/tabs/tab/tab.component.ts ***!
  \******************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TabComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "isVisible"]);
} }
const _c0 = ["*"];
class TabComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isVisible$ = this._isVisible$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    ngOnDestroy() {
        this.hide();
    }
    hide() {
        this._isVisible$.next(false);
    }
    show() {
        this._isVisible$.next(true);
        this.select.next();
    }
    get isVisible() {
        return this._isVisible$.value;
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["app-tab"]], inputs: { tabTitle: "tabTitle" }, outputs: { select: "select" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "content"], [4, "ngIf"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]:not(.no-padding) {\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAmOm5vdCgubm8tcGFkZGluZykge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbjpob3N0Om5vdCgubm8tcGFkZGluZykge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tab",
                templateUrl: "./tab.component.html",
                styleUrls: ["./tab.component.scss"],
            }]
    }], null, { tabTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/widgets/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/ui/widgets/tabs/tab/tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TabsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const tab_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.activateTab(tab_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r35 === ctx_r34.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r35.tabTitle);
} }
const _c0 = ["*"];
class TabsComponent {
    ngAfterContentInit() {
        this.activateTab(this.tabs.first);
    }
    activateTab(tab) {
        if (this.activeTab) {
            this.activeTab.hide();
        }
        this.activeTab = tab;
        this.activeTab.show();
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "tabs"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.grow-tabs[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 1;\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 30px;\n  cursor: pointer;\n  border-bottom: 3px solid var(--color-secondary-1-4);\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-secondary-1-2);\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-color: var(--color-secondary-1-0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FDR047QURGTTtFQUNFLHdDQUFBO0FDSVI7QURGTTtFQUNFLHdDQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJi5ncm93LXRhYnMgLnRhYnMgLnRhYiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIC50YWIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeS0xLTQpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtMik7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdC5ncm93LXRhYnMgLnRhYnMgLnRhYiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbjpob3N0IC50YWJzIC50YWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtNCk7XG59XG46aG9zdCAudGFicyAudGFiOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktMS0yKTtcbn1cbjpob3N0IC50YWJzIC50YWIuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktMS0wKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tabs",
                templateUrl: "./tabs.component.html",
                styleUrls: ["./tabs.component.scss"],
            }]
    }], null, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/toggle/toggle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/widgets/toggle/toggle.component.ts ***!
  \*******************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ToggleComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggle() {
        this.value = !this.value;
        this.changed.next(this.value);
    }
    ngOnInit() { }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["app-toggle"]], hostVars: 2, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_click_HostBindingHandler() { return ctx.toggle(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("enabled", ctx.value);
    } }, inputs: { value: "value" }, outputs: { changed: "changed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.enabled[_nghost-%COMP%] {\n  background-color: royalblue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3dpZGdldHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL3dpZGdldHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJi5lbmFibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdC5lbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-toggle",
                templateUrl: "./toggle.component.html",
                styleUrls: ["./toggle.component.scss"],
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.enabled"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/tooltip.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/widgets/tooltip.directive.ts ***!
  \*************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/ui/widgets/tooltip/tooltip.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");





class TooltipDirective {
    constructor(elementRef, overlay) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.overlayRef = null;
    }
    ngOnDestroy() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
    showTooltip() {
        this.overlayRef = this.overlay.create({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions(this.getPositions()),
        });
        const tooltipPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"]);
        const componentRef = this.overlayRef.attach(tooltipPortal);
        componentRef.instance.templateRef = this.templateRef;
        componentRef.instance.context = this.context;
    }
    hideTooltip() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    getPositions() {
        return [
            {
                originX: "center",
                originY: "top",
                overlayX: "center",
                overlayY: "bottom",
            },
            {
                originX: "center",
                originY: "bottom",
                overlayX: "center",
                overlayY: "top",
            },
        ];
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "appTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.showTooltip(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.hideTooltip(); });
    } }, inputs: { templateRef: ["appTooltip", "templateRef"], context: ["tooltipContext", "context"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTooltip]",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }]; }, { templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["appTooltip"]
        }], context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["tooltipContext"]
        }], showTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter"]
        }], hideTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseleave"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/widgets/tooltip/tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/widgets/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TooltipComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class TooltipComponent {
    constructor() { }
    ngOnInit() { }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["app-tooltip"]], decls: 1, vars: 2, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef)("ngTemplateOutletContext", ctx.context);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-primary-4);\n  border-radius: 8px;\n  color: white;\n  padding: 8px;\n  border: 2px solid var(--color-primary-0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tooltip",
                templateUrl: "./tooltip.component.html",
                styleUrls: ["./tooltip.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tul/Projects/civ/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map