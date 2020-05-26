/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/app/core.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ngtools/webpack/src/index.js!./src/app/core.worker.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src!./src/app/core.worker.ts ***!
  \********************************************************************/
/*! exports provided: tileUpdate, tileBulkUpdate, getCityDetails, cityProduce, cityGetRange, cityGetWorkTiles, cityWorkTile, cityUnworkTile, cityOptimizeYields, getAreaTiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileUpdate", function() { return tileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileBulkUpdate", function() { return tileBulkUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCityDetails", function() { return getCityDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityProduce", function() { return cityProduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityGetRange", function() { return cityGetRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityGetWorkTiles", function() { return cityGetWorkTiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityWorkTile", function() { return cityWorkTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityUnworkTile", function() { return cityUnworkTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityOptimizeYields", function() { return cityOptimizeYields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaTiles", function() { return getAreaTiles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _map_generators_simplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-generators/simplex */ "./src/app/map-generators/simplex.ts");
/* harmony import */ var _core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/game */ "./src/app/core/game.ts");
/* harmony import */ var _core_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/player */ "./src/app/core/player.ts");
/* harmony import */ var _ai_ai_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ai/ai-player */ "./src/app/ai/ai-player.ts");
/* harmony import */ var _core_collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/collector */ "./src/app/core/collector.ts");
/* harmony import */ var _core_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/unit */ "./src/app/core/unit.ts");
/* harmony import */ var _core_pathfinding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/pathfinding */ "./src/app/core/pathfinding.ts");
/* harmony import */ var _core_buildings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/buildings */ "./src/app/core/buildings.ts");
/* harmony import */ var _core_idle_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/idle-product */ "./src/app/core/idle-product.ts");
/* harmony import */ var _core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/serialization/channel */ "./src/app/core/serialization/channel.ts");
/* harmony import */ var _core_serialization_dump__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/serialization/dump */ "./src/app/core/serialization/dump.ts");
/// <reference lib="webworker" />












let game;
const HANDLERS = {
    "game.new": newGameHandler,
    "game.saveDump": saveDumpHandler,
    "game.loadDump": loadDumpHandler,
    "game.nextPlayer": nextPlayerHandler,
    "trackedPlayer.revealWorld": revealWorld,
    "trackedPlayer.set": setTrackedPlayer,
    "unit.getDetails": getUnitDetails,
    "unit.doAction": unitDoAction,
    "unit.setOrder": unitSetOrder,
    "unit.findPath": unitFindPath,
    "unit.disband": unitDisband,
    "unit.moveAlongPath": unitMoveAlongPath,
    "unit.getRange": unitGetRange,
    "unit.getFailedActionRequirements": unitGetFailedActionRequirements,
    "tile.update": tileUpdate,
    "tile.bulkUpdate": tileBulkUpdate,
    "city.getDetails": getCityDetails,
    "city.produce": cityProduce,
    "city.getRange": cityGetRange,
    "city.getWorkTiles": cityGetWorkTiles,
    "city.workTile": cityWorkTile,
    "city.unworkTile": cityUnworkTile,
    "city.optimizeYields": cityOptimizeYields,
    "area.getTiles": getAreaTiles,
};
addEventListener("message", ({ data }) => {
    const handler = HANDLERS[data.command];
    if (!handler) {
        console.error(`No handler for command "${data.command}".`);
        return;
    }
    const result = handler(data.data);
    const changes = _core_collector__WEBPACK_IMPORTED_MODULE_5__["collector"].flush();
    game.trackedPlayer.updateCitiesWithoutProduction();
    game.trackedPlayer.updateUnitsWithoutOrders();
    const nextTask = getNextTask();
    postMessage({ result, changes, nextTask });
});
function getNextTask() {
    const p = game.trackedPlayer;
    if (p.citiesWithoutProduction.length) {
        return {
            task: "city",
            id: p.citiesWithoutProduction[0].id,
        };
    }
    if (p.unitsWithoutOrders.length) {
        return {
            task: "unit",
            id: p.unitsWithoutOrders[0].id,
        };
    }
    return null;
}
function newGameHandler(data) {
    game = new _core_game__WEBPACK_IMPORTED_MODULE_2__["Game"]();
    for (let i = 0; i < data.humanPlayersCount + data.aiPlayersCount; i++) {
        const player = new _core_player__WEBPACK_IMPORTED_MODULE_3__["PlayerCore"](game, _core_player__WEBPACK_IMPORTED_MODULE_3__["PLAYER_COLORS"][i]);
        if (i >= data.humanPlayersCount) {
            player.ai = new _ai_ai_player__WEBPACK_IMPORTED_MODULE_4__["AIPlayer"](player);
        }
        game.addPlayer(player);
    }
    const generator = new _map_generators_simplex__WEBPACK_IMPORTED_MODULE_1__["SimplexMapGenerator"](game.players.length);
    game.map = generator.generate(data.width, data.height, data.seed, data.uniformity, data.seaLevel);
    game.map.precompute();
    for (let i = 0; i < game.players.length; i++) {
        game.unitsManager.spawn("settler", generator.getStartingLocations()[i], game.players[i]);
    }
    game.start();
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["gameToChannel"])(game);
}
function saveDumpHandler() {
    // TODO we might compress the save
    return JSON.stringify(Object(_core_serialization_dump__WEBPACK_IMPORTED_MODULE_11__["dumpGame"])(game));
}
function loadDumpHandler(data) {
    game = Object(_core_serialization_dump__WEBPACK_IMPORTED_MODULE_11__["loadGame"])(JSON.parse(data));
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["gameToChannel"])(game);
}
function nextPlayerHandler() {
    game.nextPlayer();
}
function revealWorld() {
    for (let x = 0; x < game.map.width; x++) {
        game.trackedPlayer.exploreTiles(game.map.tiles[x]);
    }
}
function setTrackedPlayer(playerId) {
    const player = game.players.find((p) => p.id === playerId);
    if (!player) {
        return;
    }
    game.trackedPlayer = player;
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["trackedPlayerToChannel"])(game.trackedPlayer);
}
function getUnitDetails(unitId) {
    const unit = game.unitsManager.unitsMap.get(unitId);
    if (!unit) {
        return null;
    }
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
}
function unitDoAction(data) {
    const unit = game.unitsManager.unitsMap.get(data.unitId);
    if (!unit) {
        return null;
    }
    unit.doAction(data.action);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
}
function unitSetOrder(data) {
    const unit = game.unitsManager.unitsMap.get(data.unitId);
    if (!unit) {
        return null;
    }
    unit.setOrder(data.order);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
}
function unitFindPath(data) {
    const unit = game.unitsManager.unitsMap.get(data.unitId);
    const tile = game.map.tilesMap.get(data.destinationId);
    if (!unit || !tile) {
        return null;
    }
    unit.path = Object(_core_pathfinding__WEBPACK_IMPORTED_MODULE_7__["findPath"])(unit, tile);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
}
function unitDisband(unitId) {
    const unit = game.unitsManager.unitsMap.get(unitId);
    if (!unit) {
        return null;
    }
    game.unitsManager.destroy(unit);
}
function unitMoveAlongPath(unitId) {
    const unit = game.unitsManager.unitsMap.get(unitId);
    if (!unit) {
        return null;
    }
    game.unitsManager.moveAlongPath(unit);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
}
function unitGetRange(unitId) {
    const unit = game.unitsManager.unitsMap.get(unitId);
    if (!unit) {
        return [];
    }
    const tiles = unit.getRange();
    return Array.from(tiles).map((tile) => tile.id);
}
function unitGetFailedActionRequirements(data) {
    const unit = game.unitsManager.unitsMap.get(data.unitId);
    if (!unit) {
        return [];
    }
    return unit.getFailedActionRequirements(data.action);
}
function tileUpdate(tile) {
    const tileCore = game.map.tilesMap.get(tile.id);
    if (!tileCore) {
        return;
    }
    Object.assign(tileCore, tile);
    tileCore.update();
}
function tileBulkUpdate(tiles) {
    for (const tile of tiles) {
        tileUpdate(tile);
    }
}
function getCityDetails(cityId) {
    const city = game.citiesManager.citiesMap.get(cityId);
    if (!city) {
        return;
    }
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
}
function cityProduce(data) {
    const city = game.citiesManager.citiesMap.get(data.cityId);
    if (!city) {
        return;
    }
    if (data.type === "building") {
        city.produceBuilding(_core_buildings__WEBPACK_IMPORTED_MODULE_8__["BUILDINGS_MAP"].get(data.productId));
    }
    else if (data.type === "unit") {
        city.produceUnit(_core_unit__WEBPACK_IMPORTED_MODULE_6__["UNITS_MAP"].get(data.productId));
    }
    else {
        city.workOnIdleProduct(_core_idle_product__WEBPACK_IMPORTED_MODULE_9__["IDLE_PRODUCTS_MAP"].get(data.productId));
    }
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
}
function cityGetRange(cityId) {
    const city = game.citiesManager.citiesMap.get(cityId);
    if (!city) {
        return;
    }
    return Array.from(city.tiles).map((tile) => tile.id);
}
function cityGetWorkTiles(cityId) {
    const city = game.citiesManager.citiesMap.get(cityId);
    if (!city) {
        return {};
    }
    return {
        workedTiles: Array.from(city.workedTiles).map((tile) => tile.id),
        notWorkedTiles: Array.from(city.notWorkedTiles).map((tile) => tile.id),
    };
}
function cityWorkTile(data) {
    const city = game.citiesManager.citiesMap.get(data.cityId);
    const tile = game.map.tilesMap.get(data.tileId);
    if (!city || !tile) {
        return null;
    }
    city.workTile(tile);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
}
function cityUnworkTile(data) {
    const city = game.citiesManager.citiesMap.get(data.cityId);
    const tile = game.map.tilesMap.get(data.tileId);
    if (!city || !tile) {
        return null;
    }
    city.unworkTile(tile);
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
}
function cityOptimizeYields(cityId) {
    const city = game.citiesManager.citiesMap.get(cityId);
    if (!city) {
        return null;
    }
    city.optimizeYields();
    return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
}
function getAreaTiles(areaId) {
    const area = game.areasManager.areasMap.get(areaId);
    if (!area) {
        return [];
    }
    return Array.from(area.tiles).map((tile) => tile.id);
}


/***/ }),

/***/ "./node_modules/simplex-noise/simplex-noise.js":
/*!*****************************************************!*\
  !*** ./node_modules/simplex-noise/simplex-noise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return SimplexNoise;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // common js
  if (true) exports.SimplexNoise = SimplexNoise;
  // browser
  else {}
  // nodejs
  if (true) {
    module.exports = SimplexNoise;
  }

})();


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/ai/ai-player.ts":
/*!*********************************!*\
  !*** ./src/app/ai/ai-player.ts ***!
  \*********************************/
/*! exports provided: AIPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIPlayer", function() { return AIPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_idle_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/idle-product */ "./src/app/core/idle-product.ts");
/* harmony import */ var _core_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/unit */ "./src/app/core/unit.ts");
/* harmony import */ var _core_pathfinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/pathfinding */ "./src/app/core/pathfinding.ts");




class AIPlayer {
    constructor(player) {
        this.player = player;
    }
    nextTurn() {
        for (const unit of this.player.unitsWithoutOrders) {
            if (unit.order) {
                continue;
            }
            if (unit.definition.actions.includes("foundCity")) {
                this.processSettler(unit);
            }
        }
        for (const city of this.player.citiesWithoutProduction) {
            city.updateProductsList();
            if (!city.product) {
                this.produceNext(city);
            }
        }
    }
    processSettler(unit) {
        const destination = unit.getPathDestination();
        if (!destination || destination.areaOf) {
            const bestCityLocation = this.findCityLocation(unit.tile);
            if (!bestCityLocation) {
                unit.order = "sleep";
                return;
            }
            if (unit.tile === bestCityLocation) {
                unit.doAction("foundCity");
            }
            else {
                unit.path = Object(_core_pathfinding__WEBPACK_IMPORTED_MODULE_3__["findPath"])(unit, bestCityLocation);
            }
        }
        if (unit.path) {
            this.player.game.unitsManager.moveAlongPath(unit);
        }
    }
    produceNext(city) {
        const settler = _core_unit__WEBPACK_IMPORTED_MODULE_2__["UNITS_MAP"].get("settler");
        if (Math.random() > 0.7 && city.canProduce(settler)) {
            const newCityLocation = this.findCityLocation(city.tile);
            if (newCityLocation) {
                city.produceUnit(settler);
                return;
            }
        }
        const buildings = city.availableBuildings.filter((b) => !city.disabledBuildings.has(b));
        if (buildings.length) {
            city.produceBuilding(buildings[0]);
        }
        else {
            city.workOnIdleProduct(_core_idle_product__WEBPACK_IMPORTED_MODULE_1__["IDLE_PRODUCTS_MAP"].get("culture"));
        }
    }
    findCityLocation(startTile) {
        const tiles = startTile.getTilesInRange(5);
        let bestSweetSpotValue = 0;
        let bestTile = null;
        for (const tile of tiles) {
            if (startTile.passableArea !== tile.passableArea) {
                continue;
            }
            if (tile.sweetSpotValue > bestSweetSpotValue) {
                bestSweetSpotValue = tile.sweetSpotValue;
                bestTile = tile;
            }
        }
        return bestTile;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");


class AreaCore {
    constructor() {
        this.id = 0;
        this.tiles = new Set();
    }
    add(tile) {
        this.tiles.add(tile);
        _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].addAreaTiles(this.id, [tile]);
    }
    addBulk(tiles) {
        for (const tile of tiles) {
            this.tiles.add(tile);
        }
        _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].addAreaTiles(this.id, tiles);
    }
    remove(tile) {
        this.tiles.delete(tile);
        _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].removeAreaTiles(this.id, [tile]);
    }
    removeBulk(tiles) {
        for (const tile of tiles) {
            this.tiles.delete(tile);
        }
        _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].removeAreaTiles(this.id, tiles);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./src/app/core/area.ts");


class AreasManager {
    constructor() {
        this.areas = [];
        this.areasMap = new Map();
        this.lastId = 0;
    }
    make() {
        const area = new _area__WEBPACK_IMPORTED_MODULE_1__["AreaCore"]();
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/buildings */ "./src/app/data/buildings.ts");


const BUILDINGS_MAP = new Map();
for (const definition of _data_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS"]) {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city */ "./src/app/core/city.ts");
/* harmony import */ var _tile_improvements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");





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
        if (tile.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains ||
            tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
            return null;
        }
        const city = new _city__WEBPACK_IMPORTED_MODULE_1__["CityCore"](tile, player);
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
        tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileRoad"].road;
        tile.update();
        for (const t of tile.getTilesInRange(3)) {
            t.sweetSpotValue = 0;
        }
        if (isNew) {
            city.optimizeYields();
        }
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(city);
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
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].citiesDestroyed.add(city.id);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yields */ "./src/app/core/yields.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _data_buildings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/buildings */ "./src/app/data/buildings.ts");
/* harmony import */ var _data_idle_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/idle-products */ "./src/app/data/idle-products.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");






class CityCore {
    constructor(tile, player) {
        this.tile = tile;
        this.player = player;
        this.totalFood = 0;
        this.foodToGrow = 20;
        this.foodConsumed = 1;
        this.totalCulture = 0;
        this.cultureToExpand = 20;
        this.tileYields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]);
        this.yields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]);
        this.perTurn = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]);
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
            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);
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
        _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);
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
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.tileYields);
        this.tileYields.food = 2;
        this.tileYields.production = 1;
        for (const tile of this.workedTiles) {
            Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.tileYields, tile.yields);
        }
        this.tileYields.production += this.freeTileWorkers;
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.yields, this.tileYields);
        for (const building of this.buildings) {
            this.applyBonuses(building.bonuses);
        }
        if (((_a = this.product) === null || _a === void 0 ? void 0 : _a.type) === "idleProduct") {
            const idleProduct = this.product.productDefinition;
            this.applyBonuses(idleProduct.bonuses);
        }
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["roundYields"])(this.yields);
        this.foodConsumed = this.size;
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.perTurn, this.yields);
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
            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].tiles.add(tile);
        }
    }
    removeTile(tile) {
        if (this.tiles.has(tile)) {
            this.tiles.delete(tile);
            tile.areaOf = null;
            this.player.area.remove(tile);
            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].tiles.add(tile);
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
        this.availableUnits = this.getAvailableProducts(_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"], this);
        this.disabledUnits = this.getDisabledProducts(this.availableUnits, this);
        const notBuildBuildings = _data_buildings__WEBPACK_IMPORTED_MODULE_3__["BUILDINGS"].filter((b) => { var _a; return ((_a = this.product) === null || _a === void 0 ? void 0 : _a.productDefinition) !== b && !this.buildings.includes(b); });
        this.availableBuildings = this.getAvailableProducts(notBuildBuildings, this);
        this.disabledBuildings = this.getDisabledProducts(this.availableBuildings, this);
        this.availableIdleProducts = _data_idle_products__WEBPACK_IMPORTED_MODULE_4__["IDLE_PRODUCTS"];
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
        _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);
        for (const tile of this.tiles) {
            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].tiles.add(tile);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _serialization_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialization/channel */ "./src/app/core/serialization/channel.ts");


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
            changes.push({ type: "unit.updated", data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["unitToChannel"])(unit) });
        }
        for (const id of this.unitsDestroyed) {
            changes.push({ type: "unit.destroyed", data: id });
        }
        for (const city of this.cities) {
            changes.push({ type: "city.updated", data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["cityToChannel"])(city) });
        }
        for (const id of this.citiesDestroyed) {
            changes.push({ type: "city.destroyed", data: id });
        }
        if (this.tiles.size) {
            changes.push({
                type: "tiles.updated",
                data: Array.from(this.tiles).map((tile) => Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["tileToChannel"])(tile)),
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
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["trackedPlayerToChannel"])(this.trackedPlayer),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-manager */ "./src/app/core/unit-manager.ts");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./src/app/core/debug.ts");
/* harmony import */ var _cities_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities-manager */ "./src/app/core/cities-manager.ts");
/* harmony import */ var _areas_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areas-manager */ "./src/app/core/areas-manager.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");






class Game {
    constructor() {
        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_2__["Debug"]();
        this.players = [];
        this.activePlayerIndex = -1;
        this.humanPlayer = null;
        this.turn = 1;
        this.areasManager = new _areas_manager__WEBPACK_IMPORTED_MODULE_4__["AreasManager"]();
        this.unitsManager = new _unit_manager__WEBPACK_IMPORTED_MODULE_1__["UnitsManager"](this);
        this.citiesManager = new _cities_manager__WEBPACK_IMPORTED_MODULE_3__["CitiesManager"]();
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
                _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].trackedPlayer = this.trackedPlayer;
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
        _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].turn = this.turn;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_idle_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/idle-products */ "./src/app/data/idle-products.ts");


const IDLE_PRODUCTS_MAP = new Map();
for (const definition of _data_idle_products__WEBPACK_IMPORTED_MODULE_1__["IDLE_PRODUCTS"]) {
    IDLE_PRODUCTS_MAP.set(definition.id, definition);
}


/***/ }),

/***/ "./src/app/core/pathfinding.ts":
/*!*************************************!*\
  !*** ./src/app/core/pathfinding.ts ***!
  \*************************************/
/*! exports provided: findPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function findPath(unit, end) {
    const startTime = performance.now();
    const start = unit.tile;
    if (start === end) {
        return null;
    }
    if (start.passableArea !== end.passableArea) {
        return null;
    }
    const visitedTiles = new Set();
    const tilesToVisit = new Map();
    const cameFrom = new Map();
    const costsSoFar = new Map();
    const turnCost = 1 / unit.definition.actionPoints;
    tilesToVisit.set(start, 0);
    costsSoFar.set(start, 0);
    cameFrom.set(start, [0, unit.definition.actionPoints, null]);
    while (tilesToVisit.size) {
        let nextTile;
        let minEstimatedCost = Infinity;
        for (const [tile, estimatedCost] of tilesToVisit.entries()) {
            if (estimatedCost < minEstimatedCost) {
                minEstimatedCost = estimatedCost;
                nextTile = tile;
            }
        }
        let [turn, actionPointsLeft, ..._] = cameFrom.get(nextTile);
        if (!actionPointsLeft) {
            actionPointsLeft = unit.definition.actionPoints;
            turn++;
        }
        visitedTiles.add(nextTile);
        tilesToVisit.delete(nextTile);
        if (nextTile === end) {
            const endTime = performance.now();
            console.debug(`pathfinding took ${Math.round(endTime - startTime)}ms`);
            return reconstructPath(cameFrom, end);
        }
        for (const neighbour of nextTile.neighbours) {
            if (!visitedTiles.has(neighbour)) {
                const isExplored = unit.player.exploredTiles.has(neighbour);
                let moveCost = isExplored
                    ? nextTile.neighboursCosts.get(neighbour)
                    : 1;
                if (moveCost === Infinity) {
                    continue;
                }
                let newActionPointsLeft = Math.max(0, actionPointsLeft - moveCost);
                moveCost *= turnCost;
                if (!newActionPointsLeft) {
                    moveCost = 1; // ??
                }
                const costSoFar = costsSoFar.get(nextTile) + moveCost;
                if (!costsSoFar.has(neighbour) ||
                    costSoFar < costsSoFar.get(neighbour)) {
                    costsSoFar.set(neighbour, costSoFar);
                    tilesToVisit.set(neighbour, costSoFar + getEuclideanDistance(neighbour, end) * turnCost);
                    cameFrom.set(neighbour, [turn, newActionPointsLeft, nextTile]);
                }
            }
        }
    }
    const endTime = performance.now();
    console.debug(`pathfinding took ${Math.round(endTime - startTime)}ms`);
    return null;
}
function getEuclideanDistance(start, end) {
    return Math.sqrt((start.x - end.x) * (start.x - end.x) +
        (start.y - end.y) * (start.y - end.y));
}
function reconstructPath(cameFrom, target) {
    let lastTile = target;
    let lastTurn = null;
    let turnPath = [target];
    const path = [turnPath];
    while (true) {
        const [turn, _, tile] = cameFrom.get(lastTile);
        if (!tile || !cameFrom.has(tile)) {
            return path;
        }
        if (turn !== lastTurn) {
            lastTurn = turn;
            turnPath = [];
            path.unshift(turnPath);
        }
        turnPath.unshift(tile);
        lastTile = tile;
    }
}


/***/ }),

/***/ "./src/app/core/player.ts":
/*!********************************!*\
  !*** ./src/app/core/player.ts ***!
  \********************************/
/*! exports provided: PLAYER_COLORS, PlayerCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_COLORS", function() { return PLAYER_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCore", function() { return PlayerCore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yields */ "./src/app/core/yields.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");



const PLAYER_COLORS = [
    0xff0000,
    0x00ff00,
    0x0000ff,
    0xffff00,
    0x00ffff,
    0xff00ff,
    0x999999,
    0xdddddd,
    0xfbacac,
    0xe6b873,
    0x39862b,
    0x2e716e,
    0x7457bb,
    0xab57bb,
    0x79583c,
    0xb6bbe6,
    0xb6bce6,
];
class PlayerCore {
    constructor(game, color) {
        this.game = game;
        this.color = color;
        this.exploredTiles = new Set();
        this.visibleTiles = new Set();
        this.units = [];
        this.cities = [];
        this.citiesWithoutProduction = [];
        this.unitsWithoutOrders = [];
        this.yields = {
            costs: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
            income: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
            total: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
            perTurn: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
        };
        this.area = this.game.areasManager.make();
        this.ai = null;
    }
    exploreTiles(tiles) {
        for (const tile of tiles) {
            if (!this.exploredTiles.has(tile)) {
                this.exploredTiles.add(tile);
                if (this.id === this.game.trackedPlayer.id) {
                    _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].tilesExplored.add(tile.id);
                }
            }
        }
    }
    updateYields() {
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.income);
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.costs);
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.perTurn);
        for (const city of this.cities) {
            for (const tile of city.tiles) {
                if (!tile.city) {
                    if (tile.improvement !== null) {
                        this.yields.costs.publicWorks++;
                    }
                    if (tile.road !== null) {
                        this.yields.costs.publicWorks++;
                    }
                }
            }
            Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.yields.income, city.yields);
        }
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.yields.perTurn, this.yields.income);
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["subtractYields"])(this.yields.perTurn, this.yields.costs);
        if (this === this.game.trackedPlayer) {
            _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].trackedPlayerYields = this.yields;
        }
    }
    nextTurn() {
        this.updateYields();
        Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.yields.total, this.yields.perTurn);
        this.yields.total.publicWorks = Math.max(0, this.yields.total.publicWorks);
        this.updateCitiesWithoutProduction();
        this.updateUnitsWithoutOrders();
    }
    updateCitiesWithoutProduction() {
        this.citiesWithoutProduction = this.cities.filter((c) => !c.product);
    }
    updateUnitsWithoutOrders() {
        this.unitsWithoutOrders = this.units.filter((c) => !c.order && c.actionPointsLeft);
    }
    addCity(city) {
        this.cities.push(city);
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/core/serialization/dump.ts":
/*!********************************************!*\
  !*** ./src/app/core/serialization/dump.ts ***!
  \********************************************/
/*! exports provided: dumpGame, loadGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpGame", function() { return dumpGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGame", function() { return loadGame; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/app/core/game.ts");
/* harmony import */ var _buildings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings */ "./src/app/core/buildings.ts");
/* harmony import */ var _idle_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idle-product */ "./src/app/core/idle-product.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player */ "./src/app/core/player.ts");
/* harmony import */ var src_app_ai_ai_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ai/ai-player */ "./src/app/ai/ai-player.ts");
/* harmony import */ var _tiles_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tiles-map */ "./src/app/core/tiles-map.ts");







function dumpGame(game) {
    return {
        turn: game.turn,
        trackedPlayerId: game.trackedPlayer.id,
        activePlayerIndex: game.activePlayerIndex,
        map: dumpMap(game.map),
        players: game.players.map((p) => dumpPlayer(p)),
        units: game.unitsManager.units.map((u) => dumpUnit(u)),
        cities: game.citiesManager.cities.map((c) => dumpCity(c)),
    };
}
function loadGame(data) {
    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"]();
    game.turn = data.turn;
    // First deserialize map as other entities depend on it.
    game.map = loadMap(data.map);
    // Then players as unit deserialization needs them.
    for (const playerData of data.players) {
        const player = loadPlayer(game, playerData);
        game.addPlayer(player);
    }
    game.activePlayerIndex = data.activePlayerIndex;
    for (const unit of data.units) {
        loadUnit(game, unit);
    }
    for (const city of data.cities) {
        loadCity(game, city);
    }
    for (const player of game.players) {
        player.updateCitiesWithoutProduction();
        player.updateUnitsWithoutOrders();
        player.updateYields();
    }
    return game;
}
function dumpMap(map) {
    return {
        width: map.width,
        height: map.height,
        tiles: dumpTiles(map),
    };
}
function dumpTiles(map) {
    // Store only changes from the last tile to keep save size minimal
    const result = [];
    let lastTile = {};
    for (let x = 0; x < map.width; x++) {
        for (let y = 0; y < map.height; y++) {
            const tile = map.tiles[x][y];
            const diff = {};
            if (tile.seaLevel !== lastTile.seaLevel) {
                diff.seaLevel = tile.seaLevel;
            }
            if (tile.climate !== lastTile.climate) {
                diff.climate = tile.climate;
            }
            if (tile.landForm !== lastTile.landForm) {
                diff.landForm = tile.landForm;
            }
            if (tile.forest !== lastTile.forest) {
                diff.forest = tile.forest;
            }
            if (tile.wetlands !== lastTile.wetlands) {
                diff.wetlands = tile.wetlands;
            }
            if (tile.improvement !== lastTile.improvement) {
                diff.improvement = tile.improvement;
            }
            if (tile.road !== lastTile.road) {
                diff.road = tile.road;
            }
            // The rivers tends to not repeat in subsequent tiles so instead of using diff let's just ignore empty rivers.
            if (tile.riverParts.length) {
                diff.riverParts = tile.riverParts;
            }
            result.push(diff);
            lastTile = tile;
        }
    }
    return result;
}
function loadMap(mapData) {
    const map = new _tiles_map__WEBPACK_IMPORTED_MODULE_6__["TilesMapCore"](mapData.width, mapData.height);
    let lastTile = map.tiles[0][0];
    let index = 0;
    for (let x = 0; x < mapData.width; x++) {
        for (let y = 0; y < mapData.height; y++) {
            const tileData = mapData.tiles[index];
            const tile = map.tiles[x][y];
            tile.climate =
                tileData.climate !== undefined ? tileData.climate : lastTile.climate;
            tile.seaLevel =
                tileData.seaLevel !== undefined
                    ? tileData.seaLevel
                    : lastTile.seaLevel;
            tile.landForm =
                tileData.landForm !== undefined
                    ? tileData.landForm
                    : lastTile.landForm;
            tile.improvement =
                tileData.improvement !== undefined
                    ? tileData.improvement
                    : lastTile.improvement;
            tile.road = tileData.road !== undefined ? tileData.road : lastTile.road;
            tile.riverParts = tileData.riverParts || [];
            tile.forest =
                tileData.forest !== undefined ? tileData.forest : lastTile.forest;
            lastTile = tile;
            index++;
        }
    }
    map.precompute();
    return map;
}
function dumpPlayer(player) {
    return {
        id: player.id,
        ai: !!player.ai,
        color: player.color,
        exploredTiles: Array.from(player.exploredTiles).map((t) => t.id),
        yieldsTotal: player.yields.total,
    };
}
function loadPlayer(game, data) {
    const player = new _player__WEBPACK_IMPORTED_MODULE_4__["PlayerCore"](game, data.color || 0);
    if (data.ai) {
        player.ai = new src_app_ai_ai_player__WEBPACK_IMPORTED_MODULE_5__["AIPlayer"](player);
    }
    for (const tileId of data.exploredTiles) {
        player.exploredTiles.add(game.map.tilesMap.get(tileId));
    }
    player.yields.total = data.yieldsTotal;
    player.updateYields();
    return player;
}
function loadCity(game, cityData) {
    const tile = game.map.tilesMap.get(cityData.tile);
    const player = game.players[cityData.player];
    const city = game.citiesManager.spawn(tile, player, false);
    if (!city) {
        return;
    }
    city.name = cityData.name;
    city.size = cityData.size;
    city.totalFood = cityData.totalFood;
    city.totalProduction = cityData.totalProduction;
    city.totalCulture = cityData.totalCulture;
    for (const tileIndex of cityData.tiles) {
        city.addTile(game.map.tilesMap.get(tileIndex));
    }
    for (const tileIndex of cityData.workedTiles) {
        city.workTile(game.map.tilesMap.get(tileIndex));
    }
    if (cityData.product) {
        let productDefinition;
        if (cityData.product.type === "unit") {
            productDefinition = game.unitsManager.definitions.get(cityData.product.id);
        }
        else if (cityData.product.type === "building") {
            productDefinition = _buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS_MAP"].get(cityData.product.id);
        }
        else {
            productDefinition = _idle_product__WEBPACK_IMPORTED_MODULE_3__["IDLE_PRODUCTS_MAP"].get(cityData.product.id);
        }
        city.product = {
            type: cityData.product.type,
            productDefinition,
        };
    }
    city.buildings = cityData.buildings.map((b) => _buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS_MAP"].get(b));
    city.buildingsIds = new Set(city.buildings.map((b) => b.id));
    city.updateYields();
}
function dumpCity(city) {
    return {
        id: city.id,
        name: city.name,
        size: city.size,
        player: city.player.id,
        tile: city.tile.id,
        totalFood: city.totalFood,
        totalProduction: city.totalProduction,
        totalCulture: city.totalCulture,
        product: city.product
            ? {
                type: city.product.type,
                id: city.product.productDefinition.id,
            }
            : null,
        tiles: Array.from(city.tiles).map((tile) => tile.id),
        workedTiles: Array.from(city.workedTiles).map((tile) => tile.id),
        buildings: city.buildings.map((b) => b.id),
    };
}
function dumpUnit(unit) {
    var _a;
    return {
        id: unit.id,
        tile: unit.tile.id,
        definition: unit.definition.id,
        actionPointsLeft: unit.actionPointsLeft,
        player: unit.player.id,
        order: unit.order,
        path: ((_a = unit.path) === null || _a === void 0 ? void 0 : _a.map((row) => row.map((tile) => tile.id))) || null,
    };
}
function loadUnit(game, unitData) {
    var _a;
    const tile = game.map.tilesMap.get(unitData.tile);
    const player = game.players[unitData.player];
    const unit = game.unitsManager.spawn(unitData.definition, tile, player);
    unit.actionPointsLeft = unitData.actionPointsLeft;
    unit.order = unitData.order;
    unit.path =
        ((_a = unitData.path) === null || _a === void 0 ? void 0 : _a.map((row) => row.map((tileId) => game.map.tilesMap.get(tileId)))) || null;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/core/tile.ts":
/*!******************************!*\
  !*** ./src/app/core/tile.ts ***!
  \******************************/
/*! exports provided: TileCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileCore", function() { return TileCore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yields */ "./src/app/core/yields.ts");
/* harmony import */ var _tile_improvements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");





const BASE_CLIMATE_YIELDS = {
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].arctic]: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].continental]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: 1, production: 1 }),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].desert]: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].oceanic]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: 2, production: 1 }),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].savanna]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: 1, production: 1 }),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].tropical]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: 1 }),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].tundra]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { production: 1 }),
};
const BASE_LAND_FORM_YIELDS = {
    [_shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].plains]: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].hills]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: -1 }),
    [_shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains]: Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), { food: -Infinity, production: -5 }),
};
class TileCore {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.climate = _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].continental;
        this.landForm = _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].plains;
        this.seaLevel = _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].deep;
        this.riverParts = [];
        this.forest = false;
        this.wetlands = false;
        this.improvement = null;
        this.road = null;
        this.units = [];
        this.city = null;
        this.areaOf = null;
        this.yields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]);
        // cached data
        this.neighbours = [];
        this.fullNeighbours = []; // keeps neighbours in all directions, null if map border, can be indexed with TileDirection
        this.neighboursCosts = new Map();
        this.sweetSpotValue = 0; // used by ai to find good city location
        this.passableArea = 0; // used by pathfinding to quickly decide if a path between two tiles exists
    }
    computeMovementCosts() {
        for (const neighbour of this.neighbours) {
            const dir = this.getDirectionTo(neighbour);
            let cost = 1;
            if (neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
                cost = Infinity;
            }
            else if (neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains) {
                cost = Infinity;
            }
            else if (neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].hills) {
                cost = 2;
            }
            else {
                if (this.riverParts.includes(dir)) {
                    cost = 3;
                }
                else if (this.riverParts.length && neighbour.riverParts.length) {
                    cost = 0.5;
                }
            }
            if (neighbour.road === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileRoad"].road) {
                cost /= 3;
            }
            this.neighboursCosts.set(neighbour, cost);
        }
    }
    getDirectionTo(tile) {
        if (tile.x === this.x - (this.y % 2 ? 0 : 1) && tile.y === this.y - 1) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].NW;
        }
        if (tile.x === this.x + (this.y % 2 ? 1 : 0) && tile.y === this.y - 1) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].NE;
        }
        if (tile.x === this.x + 1 && tile.y === this.y) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].E;
        }
        if (tile.x === this.x + (this.y % 2 ? 1 : 0) && tile.y === this.y + 1) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].SE;
        }
        if (tile.x === this.x - (this.y % 2 ? 0 : 1) && tile.y === this.y + 1) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].SW;
        }
        if (tile.x === this.x - 1 && tile.y === this.y) {
            return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].W;
        }
        return _shared__WEBPACK_IMPORTED_MODULE_3__["TileDirection"].NONE;
    }
    getDistanceTo(tile) {
        // This is imprecise but good enough for now.
        return Math.abs(this.x - tile.x) + Math.abs(this.y - tile.y);
    }
    computeYields() {
        if (this.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].deep) {
            this.yields.food = 0;
            this.yields.production = 0;
        }
        else if (this.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].shallow) {
            this.yields.food = 1;
            this.yields.production = 0;
        }
        else {
            const climateYields = BASE_CLIMATE_YIELDS[this.climate];
            const landFormYields = BASE_LAND_FORM_YIELDS[this.landForm];
            this.yields.food = climateYields.food + landFormYields.food;
            this.yields.production =
                climateYields.production + landFormYields.production;
            if (this.forest) {
                this.yields.food--;
                this.yields.production++;
            }
            if (this.wetlands) {
                this.yields.food--;
                this.yields.production--;
            }
            if (this.riverParts.length) {
                this.yields.food += this.climate === _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].desert ? 3 : 1;
            }
            if (this.improvement === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileImprovement"].farm) {
                this.yields.food++;
            }
            else if (this.improvement === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileImprovement"].mine) {
                this.yields.production++;
            }
            else if (this.improvement === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileImprovement"].sawmill) {
                this.yields.production++;
            }
            this.yields.food = Math.max(0, this.yields.food);
            this.yields.production = Math.max(0, this.yields.production);
        }
    }
    get totalYields() {
        return this.yields.food + this.yields.production;
    }
    getTilesInRange(range) {
        const result = new Set([this]);
        for (let i = 0; i < range; i++) {
            let neighbours = new Set();
            for (const tile of result) {
                for (const neighbour of tile.neighbours) {
                    neighbours.add(neighbour);
                }
            }
            for (const tile of neighbours) {
                result.add(tile);
            }
        }
        return result;
    }
    computeSweetSpotValue() {
        this.sweetSpotValue = 0;
        if (this.areaOf ||
            this.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains ||
            this.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
            return;
        }
        const tiles = this.getTilesInRange(3);
        for (const tile of tiles) {
            this.sweetSpotValue += tile.yields.food;
            this.sweetSpotValue += tile.yields.production;
        }
    }
    update() {
        this.computeYields();
        this.computeMovementCosts();
        for (const neighbour of this.neighbours) {
            // TODO this loop can be optimized by computing only the cost from neighbour to this tile.
            neighbour.computeMovementCosts();
        }
        _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(this);
    }
}


/***/ }),

/***/ "./src/app/core/tiles-map.ts":
/*!***********************************!*\
  !*** ./src/app/core/tiles-map.ts ***!
  \***********************************/
/*! exports provided: TilesMapCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesMapCore", function() { return TilesMapCore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./src/app/core/tile.ts");
/* harmony import */ var _shared_hex_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hex-math */ "./src/app/shared/hex-math.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");




class TilesMapCore {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
        this.tilesMap = new Map();
        for (let x = 0; x < width; x++) {
            const row = [];
            this.tiles.push(row);
            for (let y = 0; y < height; y++) {
                const tile = new _tile__WEBPACK_IMPORTED_MODULE_1__["TileCore"](x * width + y, x, y);
                row.push(tile);
                this.tilesMap.set(tile.id, tile);
            }
        }
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.tiles[x][y].neighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_2__["getTileNeighbours"])(this.tiles, x, y);
                this.tiles[x][y].fullNeighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_2__["getTileFullNeighbours"])(this.tiles, x, y);
            }
        }
    }
    precompute() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.tiles[x][y];
                tile.computeYields();
                tile.computeMovementCosts();
                tile.computeSweetSpotValue();
            }
        }
        this.precomputePassableAreas();
    }
    precomputePassableAreas() {
        const visited = new Set();
        let areaId = 1;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.tiles[x][y];
                if (visited.has(tile)) {
                    continue;
                }
                if (tile.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains) {
                    continue;
                }
                this.computePassableArea(tile, areaId++, visited);
            }
        }
    }
    computePassableArea(startTile, areaId, visited) {
        // Cannot use recursion here because it fails with too many recursion levels on bigger maps. Using queue instead.
        const queue = [startTile];
        visited.add(startTile);
        while (queue.length) {
            const tile = queue.shift();
            tile.passableArea = areaId;
            for (const neighbour of tile.neighbours) {
                if (visited.has(neighbour)) {
                    continue;
                }
                const isMountains = neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains;
                const areBothLand = tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none &&
                    neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none;
                const areBothWater = tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none &&
                    neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none;
                if (!isMountains && (areBothLand || areBothWater)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
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
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-improvements */ "./src/app/core/tile-improvements.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");



const ACTION_TO_IMPROVEMENT = {
    buildFarm: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm,
    buildMine: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine,
    buildSawmill: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill,
};
function getPublicWorksRequired(action) {
    if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
    }
    const improvement = ACTION_TO_IMPROVEMENT[action];
    if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
    }
    return 0;
}
function getPublicWorksPerTurn(action) {
    if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
    }
    const improvement = ACTION_TO_IMPROVEMENT[action];
    if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
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
        return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["isImprovementPossible"])(unit.tile, this.improvement);
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
        return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["isRoadPossible"])(unit.tile);
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
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
    unit.player.yields.costs.publicWorks +=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
    unit.player.yields.perTurn.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
}
function buildRoad(game, unit) {
    unit.actionPointsLeft = 0;
    unit.tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road;
    unit.tile.update();
    for (const neighbour of unit.tile.neighbours) {
        neighbour.update();
    }
    unit.player.updateUnitsWithoutOrders();
    unit.player.yields.total.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
    unit.player.yields.costs.publicWorks +=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
    unit.player.yields.perTurn.publicWorks -=
        _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
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
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm),
            new PublicWorksPointsRequirement(),
        ],
    },
    buildMine: {
        action: "buildMine",
        name: "Build a mine",
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine),
            new PublicWorksPointsRequirement(),
        ],
    },
    buildSawmill: {
        action: "buildSawmill",
        name: "Build a sawmill",
        fn: (game, unit) => buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill),
        requirements: [
            new OwnTileRequirement(),
            new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill),
            new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/app/core/unit.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");




class UnitsManager {
    constructor(game) {
        this.game = game;
        this.definitions = new Map();
        this.units = [];
        this.unitsMap = new Map();
        this.lastId = 0;
        for (const definition of _data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"]) {
            this.definitions.set(definition.id, definition);
        }
    }
    spawn(id, tile, player) {
        const definition = this.definitions.get(id);
        if (!definition) {
            throw Error(`UnitsManager: No unit with id "${id}"`);
        }
        const unit = new _unit__WEBPACK_IMPORTED_MODULE_1__["UnitCore"](tile, definition, player);
        unit.id = this.lastId++;
        this.units.push(unit);
        this.unitsMap.set(unit.id, unit);
        player.units.push(unit);
        tile.units.push(unit);
        unit.player.exploreTiles(unit.tile.getTilesInRange(2));
        unit.player.unitsWithoutOrders.push(unit);
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].units.add(unit);
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
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].unitsDestroyed.add(unit.id);
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
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].units.add(unit);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-actions */ "./src/app/core/unit-actions.ts");
/* harmony import */ var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/units */ "./src/app/data/units.ts");
/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collector */ "./src/app/core/collector.ts");




const UNITS_MAP = new Map();
for (const definition of _data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"]) {
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
        _unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].fn(this.player.game, this);
        _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].units.add(this);
    }
    canDoAction(action) {
        if (!this.actionPointsLeft) {
            return false;
        }
        if (!this.definition.actions.includes(action)) {
            return false;
        }
        for (const r of _unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].requirements) {
            if (!r.check(this, action)) {
                return false;
            }
        }
        return true;
    }
    getFailedActionRequirements(action) {
        return _unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].requirements
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/product */ "./src/app/core/product.ts");


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
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("granary")],
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
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("workshop")],
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
        requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("workshop")],
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
            new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("bigGranary"),
            new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("bigWorkshop"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/product */ "./src/app/core/product.ts");


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
            new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("granary"),
            new _core_product__WEBPACK_IMPORTED_MODULE_1__["SizeRequirement"](3),
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
        weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["SizeRequirement"](2)],
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

/***/ "./src/app/map-generators/simplex.ts":
/*!*******************************************!*\
  !*** ./src/app/map-generators/simplex.ts ***!
  \*******************************************/
/*! exports provided: SimplexMapGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplexMapGenerator", function() { return SimplexMapGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_tiles_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/tiles-map */ "./src/app/core/tiles-map.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/app/map-generators/utils.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_hex_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hex-math */ "./src/app/shared/hex-math.ts");






class SimplexMapGenerator {
    constructor(startingLocationsCount) {
        this.startingLocationsCount = startingLocationsCount;
        this.startingLocations = [];
        this.riversSources = [];
        this.metadata = new Map();
    }
    getStartingLocations() {
        return this.startingLocations;
    }
    generate(width, height, seed = undefined, uniformity = 0.5, seaLevel = 0) {
        this.map = new _core_tiles_map__WEBPACK_IMPORTED_MODULE_2__["TilesMapCore"](width, height);
        this.width = width;
        this.height = height;
        this.seed = seed;
        this.uniformity = uniformity;
        this.seaLevel = seaLevel;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const metadata = {
                    height: 0,
                    humidity: 0,
                    temperature: 0,
                };
                this.metadata.set(this.map.tiles[x][y], metadata);
            }
        }
        this.generateHeightmap();
        this.generateTemperature();
        this.generateHumidity();
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.map.tiles[x][y];
                const metadata = this.metadata.get(tile);
                if (metadata.height > 1.3) {
                    tile.landForm = _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].mountains;
                }
                else if (metadata.height > 0.25) {
                    tile.landForm = _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].hills;
                }
                if (metadata.temperature < 0.2) {
                    if (metadata.temperature < 0.07) {
                        tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].arctic;
                    }
                    else {
                        tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tundra;
                    }
                    continue;
                }
                if (metadata.humidity < 0.1) {
                    tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].desert;
                }
                else if (metadata.humidity < 0.3) {
                    tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].savanna;
                }
                else if (metadata.humidity < 0.7 && metadata.temperature < 0.5) {
                    tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].continental;
                }
                else {
                    tile.climate =
                        metadata.temperature > 0.5 ? _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical : _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].oceanic;
                }
            }
        }
        for (const [tile, value, _] of this.getNoisedTiles(new ComplexNoise([
            [0.015, 1],
            [0.06, 1],
            [0.3, 1],
        ], this.seed))) {
            const bonus = tile.climate === _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical ? 0.3 : 0;
            if (value + bonus > -0.2 && Object(_shared__WEBPACK_IMPORTED_MODULE_4__["isForestable"])(tile)) {
                tile.forest = true;
            }
        }
        this.fixShallowWater();
        this.adjustHeightmap();
        this.placeRivers();
        this.placeWetlands();
        this.findStartingPositions();
        return this.map;
    }
    generateHeightmap() {
        const size = Math.max(this.width, this.height);
        const noiseLayersCount = Math.floor(Math.pow(size, 0.4));
        const noiseScales = [];
        for (let i = 0; i < noiseLayersCount; i++) {
            noiseScales.push([Math.pow(0.6, i + 4), 1 + this.uniformity * i]);
        }
        const maxValue = noiseScales.reduce((total, scaleAndIntensity) => total + scaleAndIntensity[1], 0);
        const seaLevel = maxValue * this.seaLevel;
        const coastlineNoise = new ComplexNoise(noiseScales, this.seed);
        const heightmapNoise = new ComplexNoise([
            [0.015, 1],
            [0.06, 1],
            [0.3, 1],
        ], this.seed);
        for (let [tile, value, _] of this.getNoisedTiles(coastlineNoise)) {
            let height = 0;
            // Adjust horizontal edges to be more likely sea.
            const distanceToEdge = Math.min(tile.x, this.width - tile.x);
            const edgeThrehold = this.width * 0.1;
            if (distanceToEdge < edgeThrehold) {
                value -=
                    (maxValue / 2) *
                        Math.cos((Math.PI / 2 / edgeThrehold) * distanceToEdge);
            }
            if (value > seaLevel) {
                height = value;
                tile.seaLevel = _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none;
                if (value > 0.05 && Math.random() > 0.97) {
                    this.riversSources.push(tile);
                }
                height = heightmapNoise.at(tile.x, tile.y);
            }
            this.metadata.get(tile).height = height;
        }
    }
    generateTemperature() {
        for (const [tile, value, longitude] of this.getNoisedTiles(new ComplexNoise([
            [0.012, 1],
            [0.07, 1],
        ], this.seed))) {
            const base = (1 - longitude) / 2;
            const noise = ((value + 1) / 2) * (1 - longitude);
            const metadata = this.metadata.get(tile);
            metadata.temperature = Math.max(base, Math.min(1, base + noise));
        }
    }
    generateHumidity() {
        for (const [tile, value, longitude] of this.getNoisedTiles(new ComplexNoise([
            [0.025, 1],
            [0.2, 1],
        ], this.seed))) {
            const x = longitude * 10;
            const base = x < Math.PI * 1.5 ? (Math.cos(x) + 1) / 2 - 0.5 : 0;
            const noise = (value + 1) / 2;
            const metadata = this.metadata.get(tile);
            metadata.humidity = Math.max(0, Math.min(1, base * 0.8 + noise));
        }
    }
    *getNoisedTiles(noise) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const noiseValue = noise.at(x, y);
                const halfHeight = Math.floor(this.height / 2);
                const longitude = Math.abs((y - halfHeight) / halfHeight);
                yield [this.map.tiles[x][y], noiseValue, longitude];
            }
        }
    }
    fixShallowWater() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const tile = this.map.tiles[x][y];
                if (tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
                    for (const neighbour of tile.neighbours) {
                        if (neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep) {
                            neighbour.seaLevel = _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].shallow;
                        }
                    }
                }
            }
        }
    }
    adjustHeightmap() {
        // Make heighmap suitable for rivers placement - the deeper into land the higher.
        let currentTiles = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["findCoastline"])(this.map.tiles);
        const nextTiles = new Set();
        const visitedTiles = new Set(currentTiles);
        let offset = 0;
        while (currentTiles.length) {
            offset += 0.7;
            for (const tile of currentTiles) {
                for (const neighbour of tile.neighbours) {
                    if (neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none &&
                        !visitedTiles.has(neighbour)) {
                        visitedTiles.add(neighbour);
                        nextTiles.add(neighbour);
                        this.metadata.get(neighbour).height += offset;
                    }
                }
            }
            currentTiles = Array.from(nextTiles);
            nextTiles.clear();
        }
    }
    placeRivers() {
        for (const tile of this.riversSources) {
            if (tile.riverParts.length) {
                continue;
            }
            let ok = true;
            for (const neighbour of tile.neighbours) {
                if (neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
                    ok = false;
                }
            }
            if (ok) {
                this.buildRiverPath(tile, Math.round(Math.random() * 5));
            }
        }
    }
    buildRiverPath(tile, direction) {
        if (direction === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NONE) {
            return;
        }
        const possibleNeighboursDirections = _utils__WEBPACK_IMPORTED_MODULE_3__["POSSIBLE_BORDER_PATHS"][direction];
        const pairs = possibleNeighboursDirections
            .map((pair) => {
            return pair.map((dir) => {
                if (dir === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NONE) {
                    return tile;
                }
                return Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__["getTileInDirection"])(this.map.tiles, tile, dir);
            });
        })
            .filter((pair) => pair[0] &&
            pair[1] &&
            pair[0].seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none &&
            pair[1].seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none &&
            pair[0].riverParts.length < 4 && // small loops prevention, big loops are still an issue
            pair[1].riverParts.length < 4);
        if (pairs.length === 0) {
            return;
        }
        let pairToPlace;
        if (pairs.length === 1) {
            pairToPlace = pairs[0];
        }
        else {
            const [pairA, pairB] = pairs;
            const heightA = (this.metadata.get(pairA[0]).height +
                this.metadata.get(pairA[1]).height) /
                2;
            const heightB = (this.metadata.get(pairB[0]).height +
                this.metadata.get(pairB[1]).height) /
                2;
            pairToPlace = heightA < heightB ? pairA : pairB;
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["placeRiverBetweenTiles"])(...pairToPlace)) {
            this.buildRiverPath(pairToPlace[0], pairToPlace[0].getDirectionTo(pairToPlace[1]));
        }
    }
    placeWetlands() {
        for (const [tile, value, _] of this.getNoisedTiles(new ComplexNoise([
            [0.021, 1],
            [0.08, 1],
            [0.2, 1],
        ], this.seed))) {
            if (value > 0 && Object(_shared__WEBPACK_IMPORTED_MODULE_4__["areWetlandsPossible"])(tile)) {
                tile.wetlands = true;
            }
        }
    }
    findStartingPositions() {
        const maxTries = 10000;
        let tries = 0;
        while (tries < maxTries &&
            this.startingLocations.length < this.startingLocationsCount) {
            const x = Math.floor(Math.random() * this.width);
            const y = Math.floor(Math.random() * this.height);
            const tile = this.map.tiles[x][y];
            if (tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none &&
                tile.landForm !== _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].mountains &&
                !this.startingLocations.includes(tile)) {
                this.startingLocations.push(tile);
            }
            tries++;
        }
    }
}
class ComplexNoise {
    constructor(scales, seed) {
        this.scales = scales;
        this.noises = scales.map(() => new simplex_noise__WEBPACK_IMPORTED_MODULE_1__(seed));
    }
    at(x, y) {
        let noiseValue = 0;
        for (let i = 0; i < this.noises.length; i++) {
            const [scale, intensity] = this.scales[i];
            noiseValue += this.noises[i].noise2D(x * scale, y * scale) * intensity;
        }
        return noiseValue;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");


function findCoastline(tiles) {
    const coastline = [];
    for (let x = 0; x < tiles.length; x++) {
        for (let y = 0; y < tiles[x].length; y++) {
            const tile = tiles[x][y];
            if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none) {
                continue;
            }
            if (tile.neighbours.find((t) => t.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none)) {
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
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE]: [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE],
};
// flow is clockwise for first tile
const POSSIBLE_BORDER_PATHS = {
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW],
    ],
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE]: [
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE],
        [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE],
    ],
};
const OPPOSITE_DIRECTIONS = {
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E,
    [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE]: _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE,
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");


function getTileFullNeighbours(tiles, x, y) {
    return [
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW),
        getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W),
    ];
}
function getTileNeighbours(tiles, x, y) {
    return getTileFullNeighbours(tiles, x, y).filter((t) => !!t);
}
function getTileInDirection(tiles, tile, direction) {
    switch (direction) {
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW:
            if ((tile.y % 2 === 0 && tile.x === 0) || tile.y === 0) {
                return null;
            }
            return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE:
            if ((tile.y % 2 && tile.x === tiles.length - 1) || tile.y === 0) {
                return null;
            }
            return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E:
            if (tile.x === tiles.length - 1) {
                return null;
            }
            return tiles[tile.x + 1][tile.y];
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE:
            if ((tile.y % 2 && tile.x === tiles.length - 1) ||
                tile.y === tiles[tile.x].length - 1) {
                return null;
            }
            return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW:
            if ((tile.y % 2 === 0 && tile.x === 0) ||
                tile.y === tiles[tile.x].length - 1) {
                return null;
            }
            return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y + 1];
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W:
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
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW;
    }
    if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) &&
        toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE;
    }
    if (toTile.x === fromtile.x + 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E;
    }
    if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) &&
        toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE;
    }
    if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) &&
        toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW;
    }
    if (toTile.x === fromtile.x - 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W;
    }
    return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tile_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile.interface */ "./src/app/shared/tile.interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileDirection", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["TileDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Climate", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["Climate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandForm", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["LandForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeaLevel", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["FORESTABLE_CLIMATES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["WETLANDS_CLIMATES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isForestable", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isForestable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["areWetlandsPossible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isImprovementPossible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRoadPossible", function() { return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isRoadPossible"]; });





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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tile-improvements */ "./src/app/core/tile-improvements.ts");


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
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm) {
        return (tile.seaLevel === SeaLevel.none &&
            tile.landForm === LandForm.plains &&
            tile.climate !== Climate.arctic &&
            !tile.forest &&
            !tile.wetlands);
    }
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine) {
        return tile.landForm === LandForm.hills;
    }
    else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill) {
        return tile.forest && !tile.wetlands;
    }
    else {
        return false;
    }
}
function isRoadPossible(tile) {
    return (tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains);
}


/***/ })

/******/ });
//# sourceMappingURL=0-es2015.worker.js.map