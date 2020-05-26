function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/app/core.worker.ts");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@ngtools/webpack/src/index.js!./src/app/core.worker.ts":
  /*!********************************************************************!*\
    !*** ./node_modules/@ngtools/webpack/src!./src/app/core.worker.ts ***!
    \********************************************************************/

  /*! exports provided: tileUpdate, tileBulkUpdate, getCityDetails, cityProduce, cityGetRange, cityGetWorkTiles, cityWorkTile, cityUnworkTile, cityOptimizeYields, getAreaTiles */

  /***/
  function node_modulesNgtoolsWebpackSrcIndexJsSrcAppCoreWorkerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tileUpdate", function () {
      return tileUpdate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tileBulkUpdate", function () {
      return tileBulkUpdate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCityDetails", function () {
      return getCityDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityProduce", function () {
      return cityProduce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityGetRange", function () {
      return cityGetRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityGetWorkTiles", function () {
      return cityGetWorkTiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityWorkTile", function () {
      return cityWorkTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityUnworkTile", function () {
      return cityUnworkTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityOptimizeYields", function () {
      return cityOptimizeYields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAreaTiles", function () {
      return getAreaTiles;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _map_generators_simplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./map-generators/simplex */
    "./src/app/map-generators/simplex.ts");
    /* harmony import */


    var _core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/game */
    "./src/app/core/game.ts");
    /* harmony import */


    var _core_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/player */
    "./src/app/core/player.ts");
    /* harmony import */


    var _ai_ai_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ai/ai-player */
    "./src/app/ai/ai-player.ts");
    /* harmony import */


    var _core_collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/collector */
    "./src/app/core/collector.ts");
    /* harmony import */


    var _core_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _core_pathfinding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/pathfinding */
    "./src/app/core/pathfinding.ts");
    /* harmony import */


    var _core_buildings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/buildings */
    "./src/app/core/buildings.ts");
    /* harmony import */


    var _core_idle_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/idle-product */
    "./src/app/core/idle-product.ts");
    /* harmony import */


    var _core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/serialization/channel */
    "./src/app/core/serialization/channel.ts");
    /* harmony import */


    var _core_serialization_dump__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/serialization/dump */
    "./src/app/core/serialization/dump.ts"); /// <reference lib="webworker" />


    var game;
    var HANDLERS = {
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
      "area.getTiles": getAreaTiles
    };
    addEventListener("message", function (_ref) {
      var data = _ref.data;
      var handler = HANDLERS[data.command];

      if (!handler) {
        console.error("No handler for command \"".concat(data.command, "\"."));
        return;
      }

      var result = handler(data.data);

      var changes = _core_collector__WEBPACK_IMPORTED_MODULE_5__["collector"].flush();

      game.trackedPlayer.updateCitiesWithoutProduction();
      game.trackedPlayer.updateUnitsWithoutOrders();
      var nextTask = getNextTask();
      postMessage({
        result: result,
        changes: changes,
        nextTask: nextTask
      });
    });

    function getNextTask() {
      var p = game.trackedPlayer;

      if (p.citiesWithoutProduction.length) {
        return {
          task: "city",
          id: p.citiesWithoutProduction[0].id
        };
      }

      if (p.unitsWithoutOrders.length) {
        return {
          task: "unit",
          id: p.unitsWithoutOrders[0].id
        };
      }

      return null;
    }

    function newGameHandler(data) {
      game = new _core_game__WEBPACK_IMPORTED_MODULE_2__["Game"]();

      for (var i = 0; i < data.humanPlayersCount + data.aiPlayersCount; i++) {
        var player = new _core_player__WEBPACK_IMPORTED_MODULE_3__["PlayerCore"](game, _core_player__WEBPACK_IMPORTED_MODULE_3__["PLAYER_COLORS"][i]);

        if (i >= data.humanPlayersCount) {
          player.ai = new _ai_ai_player__WEBPACK_IMPORTED_MODULE_4__["AIPlayer"](player);
        }

        game.addPlayer(player);
      }

      var generator = new _map_generators_simplex__WEBPACK_IMPORTED_MODULE_1__["SimplexMapGenerator"](game.players.length);
      game.map = generator.generate(data.width, data.height, data.seed, data.uniformity, data.seaLevel);
      game.map.precompute();

      for (var _i = 0; _i < game.players.length; _i++) {
        game.unitsManager.spawn("settler", generator.getStartingLocations()[_i], game.players[_i]);
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
      for (var x = 0; x < game.map.width; x++) {
        game.trackedPlayer.exploreTiles(game.map.tiles[x]);
      }
    }

    function setTrackedPlayer(playerId) {
      var player = game.players.find(function (p) {
        return p.id === playerId;
      });

      if (!player) {
        return;
      }

      game.trackedPlayer = player;
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["trackedPlayerToChannel"])(game.trackedPlayer);
    }

    function getUnitDetails(unitId) {
      var unit = game.unitsManager.unitsMap.get(unitId);

      if (!unit) {
        return null;
      }

      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
    }

    function unitDoAction(data) {
      var unit = game.unitsManager.unitsMap.get(data.unitId);

      if (!unit) {
        return null;
      }

      unit.doAction(data.action);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
    }

    function unitSetOrder(data) {
      var unit = game.unitsManager.unitsMap.get(data.unitId);

      if (!unit) {
        return null;
      }

      unit.setOrder(data.order);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
    }

    function unitFindPath(data) {
      var unit = game.unitsManager.unitsMap.get(data.unitId);
      var tile = game.map.tilesMap.get(data.destinationId);

      if (!unit || !tile) {
        return null;
      }

      unit.path = Object(_core_pathfinding__WEBPACK_IMPORTED_MODULE_7__["findPath"])(unit, tile);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
    }

    function unitDisband(unitId) {
      var unit = game.unitsManager.unitsMap.get(unitId);

      if (!unit) {
        return null;
      }

      game.unitsManager.destroy(unit);
    }

    function unitMoveAlongPath(unitId) {
      var unit = game.unitsManager.unitsMap.get(unitId);

      if (!unit) {
        return null;
      }

      game.unitsManager.moveAlongPath(unit);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["unitDetailsToChannel"])(unit);
    }

    function unitGetRange(unitId) {
      var unit = game.unitsManager.unitsMap.get(unitId);

      if (!unit) {
        return [];
      }

      var tiles = unit.getRange();
      return Array.from(tiles).map(function (tile) {
        return tile.id;
      });
    }

    function unitGetFailedActionRequirements(data) {
      var unit = game.unitsManager.unitsMap.get(data.unitId);

      if (!unit) {
        return [];
      }

      return unit.getFailedActionRequirements(data.action);
    }

    function tileUpdate(tile) {
      var tileCore = game.map.tilesMap.get(tile.id);

      if (!tileCore) {
        return;
      }

      Object.assign(tileCore, tile);
      tileCore.update();
    }

    function tileBulkUpdate(tiles) {
      var _iterator = _createForOfIteratorHelper(tiles),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile = _step.value;
          tileUpdate(tile);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    function getCityDetails(cityId) {
      var city = game.citiesManager.citiesMap.get(cityId);

      if (!city) {
        return;
      }

      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
    }

    function cityProduce(data) {
      var city = game.citiesManager.citiesMap.get(data.cityId);

      if (!city) {
        return;
      }

      if (data.type === "building") {
        city.produceBuilding(_core_buildings__WEBPACK_IMPORTED_MODULE_8__["BUILDINGS_MAP"].get(data.productId));
      } else if (data.type === "unit") {
        city.produceUnit(_core_unit__WEBPACK_IMPORTED_MODULE_6__["UNITS_MAP"].get(data.productId));
      } else {
        city.workOnIdleProduct(_core_idle_product__WEBPACK_IMPORTED_MODULE_9__["IDLE_PRODUCTS_MAP"].get(data.productId));
      }

      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
    }

    function cityGetRange(cityId) {
      var city = game.citiesManager.citiesMap.get(cityId);

      if (!city) {
        return;
      }

      return Array.from(city.tiles).map(function (tile) {
        return tile.id;
      });
    }

    function cityGetWorkTiles(cityId) {
      var city = game.citiesManager.citiesMap.get(cityId);

      if (!city) {
        return {};
      }

      return {
        workedTiles: Array.from(city.workedTiles).map(function (tile) {
          return tile.id;
        }),
        notWorkedTiles: Array.from(city.notWorkedTiles).map(function (tile) {
          return tile.id;
        })
      };
    }

    function cityWorkTile(data) {
      var city = game.citiesManager.citiesMap.get(data.cityId);
      var tile = game.map.tilesMap.get(data.tileId);

      if (!city || !tile) {
        return null;
      }

      city.workTile(tile);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
    }

    function cityUnworkTile(data) {
      var city = game.citiesManager.citiesMap.get(data.cityId);
      var tile = game.map.tilesMap.get(data.tileId);

      if (!city || !tile) {
        return null;
      }

      city.unworkTile(tile);
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
    }

    function cityOptimizeYields(cityId) {
      var city = game.citiesManager.citiesMap.get(cityId);

      if (!city) {
        return null;
      }

      city.optimizeYields();
      return Object(_core_serialization_channel__WEBPACK_IMPORTED_MODULE_10__["cityDetailsToChannel"])(city);
    }

    function getAreaTiles(areaId) {
      var area = game.areasManager.areasMap.get(areaId);

      if (!area) {
        return [];
      }

      return Array.from(area.tiles).map(function (tile) {
        return tile.id;
      });
    }
    /***/

  },

  /***/
  "./node_modules/simplex-noise/simplex-noise.js":
  /*!*****************************************************!*\
    !*** ./node_modules/simplex-noise/simplex-noise.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSimplexNoiseSimplexNoiseJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*
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


    (function () {
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
        } else if (randomOrSeed) {
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
        grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
        grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
        noise2D: function noise2D(xin, yin) {
          var permMod12 = this.permMod12;
          var perm = this.perm;
          var grad3 = this.grad3;
          var n0 = 0; // Noise contributions from the three corners

          var n1 = 0;
          var n2 = 0; // Skew the input space to determine which simplex cell we're in

          var s = (xin + yin) * F2; // Hairy factor for 2D

          var i = Math.floor(xin + s);
          var j = Math.floor(yin + s);
          var t = (i + j) * G2;
          var X0 = i - t; // Unskew the cell origin back to (x,y) space

          var Y0 = j - t;
          var x0 = xin - X0; // The x,y distances from the cell origin

          var y0 = yin - Y0; // For the 2D case, the simplex shape is an equilateral triangle.
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

          var y2 = y0 - 1.0 + 2.0 * G2; // Work out the hashed gradient indices of the three simplex corners

          var ii = i & 255;
          var jj = j & 255; // Calculate the contribution from the three corners

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
          } // Add contributions from each corner to get the final noise value.
          // The result is scaled to return values in the interval [-1,1].


          return 70.0 * (n0 + n1 + n2);
        },
        // 3D simplex noise
        noise3D: function noise3D(xin, yin, zin) {
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
          var z0 = zin - Z0; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
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

          } else {
            // x0<y0
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

          } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
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
          var z3 = z0 - 1.0 + 3.0 * G3; // Work out the hashed gradient indices of the four simplex corners

          var ii = i & 255;
          var jj = j & 255;
          var kk = k & 255; // Calculate the contribution from the four corners

          var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
          if (t0 < 0) n0 = 0.0;else {
            var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
          }
          var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
          if (t1 < 0) n1 = 0.0;else {
            var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
          }
          var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
          if (t2 < 0) n2 = 0.0;else {
            var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
          }
          var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
          if (t3 < 0) n3 = 0.0;else {
            var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
          } // Add contributions from each corner to get the final noise value.
          // The result is scaled to stay just inside [-1,1]

          return 32.0 * (n0 + n1 + n2 + n3);
        },
        // 4D simplex noise, better simplex rank ordering method 2012-03-09
        noise4D: function noise4D(x, y, z, w) {
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
          var w0 = w - W0; // For the 4D case, the simplex is a 4D shape I won't even try to describe.
          // To find out which of the 24 possible simplices we're in, we need to
          // determine the magnitude ordering of x0, y0, z0 and w0.
          // Six pair-wise comparisons are performed between each possible pair
          // of the four coordinates, and the results are used to rank the numbers.

          var rankx = 0;
          var ranky = 0;
          var rankz = 0;
          var rankw = 0;
          if (x0 > y0) rankx++;else ranky++;
          if (x0 > z0) rankx++;else rankz++;
          if (x0 > w0) rankx++;else rankw++;
          if (y0 > z0) ranky++;else rankz++;
          if (y0 > w0) ranky++;else rankw++;
          if (z0 > w0) rankz++;else rankw++;
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
          l1 = rankw >= 3 ? 1 : 0; // Rank 2 denotes the second largest coordinate.

          i2 = rankx >= 2 ? 1 : 0;
          j2 = ranky >= 2 ? 1 : 0;
          k2 = rankz >= 2 ? 1 : 0;
          l2 = rankw >= 2 ? 1 : 0; // Rank 1 denotes the second smallest coordinate.

          i3 = rankx >= 1 ? 1 : 0;
          j3 = ranky >= 1 ? 1 : 0;
          k3 = rankz >= 1 ? 1 : 0;
          l3 = rankw >= 1 ? 1 : 0; // The fifth corner has all coordinate offsets = 1, so no need to compute that.

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
          var w4 = w0 - 1.0 + 4.0 * G4; // Work out the hashed gradient indices of the five simplex corners

          var ii = i & 255;
          var jj = j & 255;
          var kk = k & 255;
          var ll = l & 255; // Calculate the contribution from the five corners

          var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
          if (t0 < 0) n0 = 0.0;else {
            var gi0 = perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32 * 4;
            t0 *= t0;
            n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
          }
          var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
          if (t1 < 0) n1 = 0.0;else {
            var gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32 * 4;
            t1 *= t1;
            n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
          }
          var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
          if (t2 < 0) n2 = 0.0;else {
            var gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32 * 4;
            t2 *= t2;
            n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
          }
          var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
          if (t3 < 0) n3 = 0.0;else {
            var gi3 = perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32 * 4;
            t3 *= t3;
            n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
          }
          var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
          if (t4 < 0) n4 = 0.0;else {
            var gi4 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32 * 4;
            t4 *= t4;
            n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
          } // Sum up and scale the result to cover the range [-1,1]

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
        return function () {
          var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32

          s0 = s1;
          s1 = s2;
          return s2 = t - (c = t | 0);
        };
      }

      function masher() {
        var n = 0xefc8249d;
        return function (data) {
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
      } // amd


      if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return SimplexNoise;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // common js

      if (true) exports.SimplexNoise = SimplexNoise; // browser
      else {} // nodejs

      if (true) {
        module.exports = SimplexNoise;
      }
    })();
    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/ai/ai-player.ts":
  /*!*********************************!*\
    !*** ./src/app/ai/ai-player.ts ***!
    \*********************************/

  /*! exports provided: AIPlayer */

  /***/
  function srcAppAiAiPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AIPlayer", function () {
      return AIPlayer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_idle_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/idle-product */
    "./src/app/core/idle-product.ts");
    /* harmony import */


    var _core_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _core_pathfinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/pathfinding */
    "./src/app/core/pathfinding.ts");

    var AIPlayer = /*#__PURE__*/function () {
      function AIPlayer(player) {
        _classCallCheck(this, AIPlayer);

        this.player = player;
      }

      _createClass(AIPlayer, [{
        key: "nextTurn",
        value: function nextTurn() {
          var _iterator2 = _createForOfIteratorHelper(this.player.unitsWithoutOrders),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var unit = _step2.value;

              if (unit.order) {
                continue;
              }

              if (unit.definition.actions.includes("foundCity")) {
                this.processSettler(unit);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = _createForOfIteratorHelper(this.player.citiesWithoutProduction),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var city = _step3.value;
              city.updateProductsList();

              if (!city.product) {
                this.produceNext(city);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "processSettler",
        value: function processSettler(unit) {
          var destination = unit.getPathDestination();

          if (!destination || destination.areaOf) {
            var bestCityLocation = this.findCityLocation(unit.tile);

            if (!bestCityLocation) {
              unit.order = "sleep";
              return;
            }

            if (unit.tile === bestCityLocation) {
              unit.doAction("foundCity");
            } else {
              unit.path = Object(_core_pathfinding__WEBPACK_IMPORTED_MODULE_3__["findPath"])(unit, bestCityLocation);
            }
          }

          if (unit.path) {
            this.player.game.unitsManager.moveAlongPath(unit);
          }
        }
      }, {
        key: "produceNext",
        value: function produceNext(city) {
          var settler = _core_unit__WEBPACK_IMPORTED_MODULE_2__["UNITS_MAP"].get("settler");

          if (Math.random() > 0.7 && city.canProduce(settler)) {
            var newCityLocation = this.findCityLocation(city.tile);

            if (newCityLocation) {
              city.produceUnit(settler);
              return;
            }
          }

          var buildings = city.availableBuildings.filter(function (b) {
            return !city.disabledBuildings.has(b);
          });

          if (buildings.length) {
            city.produceBuilding(buildings[0]);
          } else {
            city.workOnIdleProduct(_core_idle_product__WEBPACK_IMPORTED_MODULE_1__["IDLE_PRODUCTS_MAP"].get("culture"));
          }
        }
      }, {
        key: "findCityLocation",
        value: function findCityLocation(startTile) {
          var tiles = startTile.getTilesInRange(5);
          var bestSweetSpotValue = 0;
          var bestTile = null;

          var _iterator4 = _createForOfIteratorHelper(tiles),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var tile = _step4.value;

              if (startTile.passableArea !== tile.passableArea) {
                continue;
              }

              if (tile.sweetSpotValue > bestSweetSpotValue) {
                bestSweetSpotValue = tile.sweetSpotValue;
                bestTile = tile;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return bestTile;
        }
      }]);

      return AIPlayer;
    }();
    /***/

  },

  /***/
  "./src/app/core/area.ts":
  /*!******************************!*\
    !*** ./src/app/core/area.ts ***!
    \******************************/

  /*! exports provided: AreaCore */

  /***/
  function srcAppCoreAreaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaCore", function () {
      return AreaCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var AreaCore = /*#__PURE__*/function () {
      function AreaCore() {
        _classCallCheck(this, AreaCore);

        this.id = 0;
        this.tiles = new Set();
      }

      _createClass(AreaCore, [{
        key: "add",
        value: function add(tile) {
          this.tiles.add(tile);

          _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].addAreaTiles(this.id, [tile]);
        }
      }, {
        key: "addBulk",
        value: function addBulk(tiles) {
          var _iterator5 = _createForOfIteratorHelper(tiles),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var tile = _step5.value;
              this.tiles.add(tile);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].addAreaTiles(this.id, tiles);
        }
      }, {
        key: "remove",
        value: function remove(tile) {
          this.tiles["delete"](tile);

          _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].removeAreaTiles(this.id, [tile]);
        }
      }, {
        key: "removeBulk",
        value: function removeBulk(tiles) {
          var _iterator6 = _createForOfIteratorHelper(tiles),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var tile = _step6.value;
              this.tiles["delete"](tile);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_1__["collector"].removeAreaTiles(this.id, tiles);
        }
      }]);

      return AreaCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/areas-manager.ts":
  /*!***************************************!*\
    !*** ./src/app/core/areas-manager.ts ***!
    \***************************************/

  /*! exports provided: AreasManager */

  /***/
  function srcAppCoreAreasManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasManager", function () {
      return AreasManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./area */
    "./src/app/core/area.ts");

    var AreasManager = /*#__PURE__*/function () {
      function AreasManager() {
        _classCallCheck(this, AreasManager);

        this.areas = [];
        this.areasMap = new Map();
        this.lastId = 0;
      }

      _createClass(AreasManager, [{
        key: "make",
        value: function make() {
          var area = new _area__WEBPACK_IMPORTED_MODULE_1__["AreaCore"]();
          area.id = this.lastId++;
          this.areas.push(area);
          this.areasMap.set(area.id, area);
          return area;
        }
      }, {
        key: "destroy",
        value: function destroy(area) {
          this.areasMap["delete"](area.id);
          var index = this.areas.indexOf(area);

          if (index !== -1) {
            this.areas.splice(index, 1);
          }
        }
      }]);

      return AreasManager;
    }();
    /***/

  },

  /***/
  "./src/app/core/buildings.ts":
  /*!***********************************!*\
    !*** ./src/app/core/buildings.ts ***!
    \***********************************/

  /*! exports provided: BUILDINGS_MAP */

  /***/
  function srcAppCoreBuildingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BUILDINGS_MAP", function () {
      return BUILDINGS_MAP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data/buildings */
    "./src/app/data/buildings.ts");

    var BUILDINGS_MAP = new Map();

    var _iterator7 = _createForOfIteratorHelper(_data_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS"]),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var definition = _step7.value;
        BUILDINGS_MAP.set(definition.id, definition);
      }
      /***/

    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  },

  /***/
  "./src/app/core/cities-manager.ts":
  /*!****************************************!*\
    !*** ./src/app/core/cities-manager.ts ***!
    \****************************************/

  /*! exports provided: CitiesManager */

  /***/
  function srcAppCoreCitiesManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesManager", function () {
      return CitiesManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./city */
    "./src/app/core/city.ts");
    /* harmony import */


    var _tile_improvements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var CitiesManager = /*#__PURE__*/function () {
      function CitiesManager() {
        _classCallCheck(this, CitiesManager);

        this.cities = [];
        this.citiesMap = new Map();
        this.lastId = 0;
      }

      _createClass(CitiesManager, [{
        key: "spawn",
        value: function spawn(tile, player) {
          var isNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (tile.city) {
            return null;
          }

          if (tile.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains || tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
            return null;
          }

          var city = new _city__WEBPACK_IMPORTED_MODULE_1__["CityCore"](tile, player);
          city.id = this.lastId++;
          city.size = 1;
          city.name = "City ".concat(city.id);
          city.tile = tile;
          this.cities.push(city);
          this.citiesMap.set(city.id, city);

          var _iterator8 = _createForOfIteratorHelper(tile.neighbours),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var neighbour = _step8.value;
              city.addTile(neighbour);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          player.addCity(city);
          tile.city = city;
          tile.forest = false;
          tile.wetlands = false;
          tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileRoad"].road;
          tile.update();

          var _iterator9 = _createForOfIteratorHelper(tile.getTilesInRange(3)),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var t = _step9.value;
              t.sweetSpotValue = 0;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (isNew) {
            city.optimizeYields();
          }

          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(city);

          return city;
        }
      }, {
        key: "destroy",
        value: function destroy(city) {
          // TODO rewrite to sets for better performance?
          var index = this.cities.indexOf(city);

          if (index !== -1) {
            this.cities.splice(index, 1);
          }

          this.citiesMap["delete"](city.id);
          index = city.player.cities.indexOf(city);

          if (index !== -1) {
            city.player.cities.splice(index, 1);
          }

          city.tile.city = null;

          var _iterator10 = _createForOfIteratorHelper(city.tiles),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var tile = _step10.value;
              city.removeTile(tile);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].citiesDestroyed.add(city.id);
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          var _iterator11 = _createForOfIteratorHelper(this.cities),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var city = _step11.value;
              city.nextTurn();
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }]);

      return CitiesManager;
    }();
    /***/

  },

  /***/
  "./src/app/core/city.ts":
  /*!******************************!*\
    !*** ./src/app/core/city.ts ***!
    \******************************/

  /*! exports provided: CityCore */

  /***/
  function srcAppCoreCityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityCore", function () {
      return CityCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./yields */
    "./src/app/core/yields.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _data_buildings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/buildings */
    "./src/app/data/buildings.ts");
    /* harmony import */


    var _data_idle_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data/idle-products */
    "./src/app/data/idle-products.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var CityCore = /*#__PURE__*/function () {
      function CityCore(tile, player) {
        _classCallCheck(this, CityCore);

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

      _createClass(CityCore, [{
        key: "nextTurn",
        value: function nextTurn() {
          this.changedSize = false;
          this.progressExpansion();
          this.progressProduction();
          this.progressGrowth();
          this.updateYields();

          if (this.player === this.player.game.trackedPlayer || this.changedSize) {
            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);
          }
        }
      }, {
        key: "progressProduction",
        value: function progressProduction() {
          if (!this.product) {
            return;
          }

          this.totalProduction += this.yields.production;

          if (this.totalProduction >= this.product.productDefinition.productionCost) {
            if (this.product.type === "unit") {
              this.player.game.unitsManager.spawn(this.product.productDefinition.id, this.tile, this.player);
            } else if (this.product.type === "building") {
              this.buildings.push(this.product.productDefinition);
              this.buildingsIds.add(this.product.productDefinition.id);
            }

            this.totalProduction = 0;
            this.product = null;
          }
        }
      }, {
        key: "progressGrowth",
        value: function progressGrowth() {
          this.totalFood += this.yields.food - this.foodConsumed;

          if (this.totalFood >= this.foodToGrow) {
            this.size++;
            this.changedSize = true;
            var bestWorkableTile = this.pickBestTileToWork(this.notWorkedTiles);

            if (bestWorkableTile) {
              this.workTile(bestWorkableTile);
            }

            this.totalFood -= this.foodToGrow;
          } else if (this.totalFood < 0) {
            if (this.size > 1) {
              this.size--;
              this.changedSize = true;
              this.totalFood += this.foodToGrow;
            } else {
              this.totalFood = 0;
            }
          }

          this.foodToGrow = 15 * Math.pow(1.2, this.size);
        }
      }, {
        key: "progressExpansion",
        value: function progressExpansion() {
          this.totalCulture += this.perTurn.culture;

          if (this.totalCulture >= this.cultureToExpand) {
            this.totalCulture -= this.cultureToExpand;
            this.cultureToExpand = 5 * Math.pow(1.2, this.tiles.size);
            var tile = this.pickBestTileToExpand(this.tile, this.getTilesAvailableForExpansion());

            if (tile) {
              this.addTile(tile);
              tile.sweetSpotValue = 0;
            }
          }
        }
      }, {
        key: "produceUnit",
        value: function produceUnit(unit) {
          this.startProducing({
            type: "unit",
            productDefinition: unit
          });
        }
      }, {
        key: "produceBuilding",
        value: function produceBuilding(building) {
          if (this.canConstruct(building)) {
            this.startProducing({
              type: "building",
              productDefinition: building
            });
          }
        }
      }, {
        key: "workOnIdleProduct",
        value: function workOnIdleProduct(idleProduct) {
          this.startProducing({
            type: "idleProduct",
            productDefinition: idleProduct
          });
          this.updateYields();
          this.player.updateYields();
        }
      }, {
        key: "cancelProduction",
        value: function cancelProduction() {
          if (this.product) {
            var type = this.product.type;
            this.product = null;

            if (type === "idleProduct") {
              this.updateYields();
              this.player.updateYields();
            }
          }
        }
      }, {
        key: "startProducing",
        value: function startProducing(product) {
          if (!this.canProduce(product.productDefinition)) {
            return;
          }

          this.cancelProduction();
          this.product = product;
          this.totalProduction = 0;

          _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);
        }
      }, {
        key: "getTurnsToProduce",
        value: function getTurnsToProduce(unit) {
          return Math.ceil(unit.productionCost / this.yields.production);
        }
      }, {
        key: "updateYields",
        value: function updateYields() {
          var _a;

          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.tileYields);
          this.tileYields.food = 2;
          this.tileYields.production = 1;

          var _iterator12 = _createForOfIteratorHelper(this.workedTiles),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var tile = _step12.value;
              Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.tileYields, tile.yields);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          this.tileYields.production += this.freeTileWorkers;
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.yields, this.tileYields);

          var _iterator13 = _createForOfIteratorHelper(this.buildings),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var building = _step13.value;
              this.applyBonuses(building.bonuses);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          if (((_a = this.product) === null || _a === void 0 ? void 0 : _a.type) === "idleProduct") {
            var idleProduct = this.product.productDefinition;
            this.applyBonuses(idleProduct.bonuses);
          }

          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["roundYields"])(this.yields);
          this.foodConsumed = this.size;
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.perTurn, this.yields);
          this.perTurn.food -= this.foodConsumed;
        }
      }, {
        key: "applyBonuses",
        value: function applyBonuses(bonuses) {
          var _a, _b, _c, _d, _e, _f, _g, _h;

          this.yields.food += ((_a = bonuses.yieldValue) === null || _a === void 0 ? void 0 : _a.food) || 0;
          this.yields.production += ((_b = bonuses.yieldValue) === null || _b === void 0 ? void 0 : _b.production) || 0;
          this.yields.culture += ((_c = bonuses.yieldValue) === null || _c === void 0 ? void 0 : _c.culture) || 0;
          this.yields.publicWorks += ((_d = bonuses.yieldValue) === null || _d === void 0 ? void 0 : _d.publicWorks) || 0;

          if ((_e = bonuses.yieldFactor) === null || _e === void 0 ? void 0 : _e.food) {
            this.yields.food += this.tileYields.food * bonuses.yieldFactor.food;
          }

          if ((_f = bonuses.yieldFactor) === null || _f === void 0 ? void 0 : _f.production) {
            this.yields.production += this.tileYields.production * bonuses.yieldFactor.production;
          }

          if ((_g = bonuses.yieldFactor) === null || _g === void 0 ? void 0 : _g.culture) {
            this.yields.culture += this.tileYields.culture * bonuses.yieldFactor.culture;
          }

          if ((_h = bonuses.yieldFactor) === null || _h === void 0 ? void 0 : _h.publicWorks) {
            this.yields.publicWorks += this.tileYields.publicWorks * bonuses.yieldFactor.publicWorks;
          }

          if (bonuses.transferProductionToFood) {
            this.yields.food += this.yields.production * bonuses.transferProductionToFood;
          }

          if (bonuses.transferProductionToCulture) {
            this.yields.culture += this.yields.production * bonuses.transferProductionToCulture;
          }

          if (bonuses.transferProductionToPublicWorks) {
            this.yields.publicWorks += this.yields.production * bonuses.transferProductionToPublicWorks;
          }
        }
      }, {
        key: "addTile",
        value: function addTile(tile) {
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
      }, {
        key: "removeTile",
        value: function removeTile(tile) {
          if (this.tiles.has(tile)) {
            this.tiles["delete"](tile);
            tile.areaOf = null;
            this.player.area.remove(tile);

            _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].tiles.add(tile);
          }
        }
      }, {
        key: "workTile",
        value: function workTile(tile) {
          var updateYields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (this.freeTileWorkers && this.tiles.has(tile)) {
            this.workedTiles.add(tile);
            this.notWorkedTiles["delete"](tile);

            if (updateYields) {
              this.updateYields();
            }
          }
        }
      }, {
        key: "unworkTile",
        value: function unworkTile(tile) {
          var updateYields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.workedTiles["delete"](tile);
          this.notWorkedTiles.add(tile);

          if (updateYields) {
            this.updateYields();
          }
        }
      }, {
        key: "getTilesAvailableForExpansion",
        value: function getTilesAvailableForExpansion() {
          var availableTiles = new Set();

          var _iterator14 = _createForOfIteratorHelper(this.tiles),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var tile = _step14.value;

              var _iterator15 = _createForOfIteratorHelper(tile.neighbours),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var neighbour = _step15.value;

                  if (!neighbour.areaOf) {
                    availableTiles.add(neighbour);
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return availableTiles;
        }
      }, {
        key: "pickBestTileToWork",
        value: function pickBestTileToWork(tiles) {
          var bestTile = null;
          var bestYields = 0;

          var _iterator16 = _createForOfIteratorHelper(tiles),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var tile = _step16.value;
              var yields = tile.totalYields;

              if (yields > bestYields) {
                bestYields = yields;
                bestTile = tile;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return bestTile;
        }
      }, {
        key: "pickBestTileToExpand",
        value: function pickBestTileToExpand(cityTile, tiles) {
          var bestTile = null;
          var bestScore = -Infinity;

          var _iterator17 = _createForOfIteratorHelper(tiles),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var tile = _step17.value;
              var score = tile.totalYields - cityTile.getDistanceTo(tile) / 2;

              if (score > bestScore) {
                bestScore = score;
                bestTile = tile;
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          return bestTile;
        }
      }, {
        key: "optimizeYields",
        value: function optimizeYields() {
          this.workedTiles.clear();
          this.notWorkedTiles = new Set(this.tiles);

          while (this.freeTileWorkers && this.notWorkedTiles.size) {
            var tile = this.pickBestTileToWork(this.notWorkedTiles);

            if (!tile) {
              break;
            }

            this.workTile(tile, false);
          }

          this.updateYields();
        }
      }, {
        key: "canConstruct",
        value: function canConstruct(building) {
          return !this.buildings.includes(building);
        }
      }, {
        key: "canProduce",
        value: function canProduce(product) {
          var _iterator18 = _createForOfIteratorHelper(product.requirements),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var r = _step18.value;

              if (!r.check(this)) {
                return false;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          var _iterator19 = _createForOfIteratorHelper(product.weakRequirements),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _r = _step19.value;

              if (!_r.check(this)) {
                return false;
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return true;
        }
      }, {
        key: "getAvailableProducts",
        value: function getAvailableProducts(products, city) {
          var results = [];

          var _iterator20 = _createForOfIteratorHelper(products),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var p = _step20.value;
              var ok = true;

              var _iterator21 = _createForOfIteratorHelper(p.requirements),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var r = _step21.value;

                  if (!r.check(city)) {
                    ok = false;
                    break;
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              if (ok) {
                results.push(p);
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          return results;
        }
      }, {
        key: "getDisabledProducts",
        value: function getDisabledProducts(products, city) {
          var results = new Set();

          var _iterator22 = _createForOfIteratorHelper(products),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var p = _step22.value;

              var _iterator23 = _createForOfIteratorHelper(p.weakRequirements),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var r = _step23.value;

                  if (!r.check(city)) {
                    results.add(p);
                  }
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }

          return results;
        }
      }, {
        key: "updateProductsList",
        value: function updateProductsList() {
          var _this = this;

          this.availableUnits = this.getAvailableProducts(_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"], this);
          this.disabledUnits = this.getDisabledProducts(this.availableUnits, this);

          var notBuildBuildings = _data_buildings__WEBPACK_IMPORTED_MODULE_3__["BUILDINGS"].filter(function (b) {
            var _a;

            return ((_a = _this.product) === null || _a === void 0 ? void 0 : _a.productDefinition) !== b && !_this.buildings.includes(b);
          });

          this.availableBuildings = this.getAvailableProducts(notBuildBuildings, this);
          this.disabledBuildings = this.getDisabledProducts(this.availableBuildings, this);
          this.availableIdleProducts = _data_idle_products__WEBPACK_IMPORTED_MODULE_4__["IDLE_PRODUCTS"];
        }
      }, {
        key: "changeOwner",
        value: function changeOwner(newOwner) {
          if (this.player === newOwner) {
            return;
          }

          var oldOwner = this.player;
          this.player = newOwner;
          var cityTiles = Array.from(this.tiles);
          var index = oldOwner.cities.indexOf(this);

          if (index !== -1) {
            oldOwner.cities.splice(index, 1);
            oldOwner.area.removeBulk(cityTiles);
          }

          newOwner.cities.push(this);
          newOwner.area.addBulk(cityTiles);
          newOwner.updateYields();
          oldOwner.updateYields(); // TODO explored area should be bigger then city tiles. Change this once fog of war is implement (probably a city should store it's visible tiles)

          newOwner.exploreTiles(this.tiles);

          _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].cities.add(this);

          var _iterator24 = _createForOfIteratorHelper(this.tiles),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var tile = _step24.value;

              _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].tiles.add(tile);
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        }
      }, {
        key: "turnsToGrow",
        get: function get() {
          if (this.perTurn.food >= 0) {
            var remainingFood = this.foodToGrow - this.totalFood;
            return Math.ceil(remainingFood / this.perTurn.food);
          } else {
            return Math.ceil(this.totalFood / this.perTurn.food) - 1;
          }
        }
      }, {
        key: "turnsToProductionEnd",
        get: function get() {
          if (!this.product) {
            return null;
          }

          var remainingProduction = this.product.productDefinition.productionCost - this.totalProduction;
          return Math.ceil(remainingProduction / this.yields.production);
        }
      }, {
        key: "turnsToExpand",
        get: function get() {
          var remainingCulture = this.cultureToExpand - this.totalCulture;
          return Math.ceil(remainingCulture / this.perTurn.culture);
        }
      }, {
        key: "freeTileWorkers",
        get: function get() {
          return this.size - this.workedTiles.size;
        }
      }]);

      return CityCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/collector.ts":
  /*!***********************************!*\
    !*** ./src/app/core/collector.ts ***!
    \***********************************/

  /*! exports provided: collector */

  /***/
  function srcAppCoreCollectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collector", function () {
      return collector;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _serialization_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./serialization/channel */
    "./src/app/core/serialization/channel.ts");

    var Collector = /*#__PURE__*/function () {
      function Collector() {
        _classCallCheck(this, Collector);

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

      _createClass(Collector, [{
        key: "flush",
        value: function flush() {
          var changes = [];

          var _iterator25 = _createForOfIteratorHelper(this.units),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var unit = _step25.value;
              changes.push({
                type: "unit.updated",
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["unitToChannel"])(unit)
              });
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          var _iterator26 = _createForOfIteratorHelper(this.unitsDestroyed),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var id = _step26.value;
              changes.push({
                type: "unit.destroyed",
                data: id
              });
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          var _iterator27 = _createForOfIteratorHelper(this.cities),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var city = _step27.value;
              changes.push({
                type: "city.updated",
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["cityToChannel"])(city)
              });
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          var _iterator28 = _createForOfIteratorHelper(this.citiesDestroyed),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _id = _step28.value;
              changes.push({
                type: "city.destroyed",
                data: _id
              });
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }

          if (this.tiles.size) {
            changes.push({
              type: "tiles.updated",
              data: Array.from(this.tiles).map(function (tile) {
                return Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["tileToChannel"])(tile);
              })
            });
          }

          var _iterator29 = _createForOfIteratorHelper(this.areaTilesAdded.entries()),
              _step29;

          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _step29$value = _slicedToArray(_step29.value, 2),
                  _id2 = _step29$value[0],
                  tiles = _step29$value[1];

              changes.push({
                type: "area.tilesAdded",
                data: {
                  id: _id2,
                  tiles: tiles.map(function (t) {
                    return t.id;
                  })
                }
              });
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }

          var _iterator30 = _createForOfIteratorHelper(this.areaTilesRemoved.entries()),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _step30$value = _slicedToArray(_step30.value, 2),
                  _id3 = _step30$value[0],
                  _tiles = _step30$value[1];

              changes.push({
                type: "area.tilesRemoved",
                data: {
                  id: _id3,
                  tiles: _tiles.map(function (t) {
                    return t.id;
                  })
                }
              });
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }

          if (this.turn) {
            changes.push({
              type: "game.turn",
              data: this.turn
            });
          }

          if (this.trackedPlayer) {
            changes.push({
              type: "trackedPlayer.set",
              data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_1__["trackedPlayerToChannel"])(this.trackedPlayer)
            });
          }

          if (this.trackedPlayerYields) {
            changes.push({
              type: "trackedPlayer.yields",
              data: this.trackedPlayerYields
            });
          }

          if (this.tilesExplored.size) {
            changes.push({
              type: "trackedPlayer.tilesExplored",
              data: Array.from(this.tilesExplored)
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
      }, {
        key: "addAreaTiles",
        value: function addAreaTiles(areaId, tiles) {
          if (!this.areaTilesAdded.has(areaId)) {
            this.areaTilesAdded.set(areaId, tiles);
          } else {
            var _this$areaTilesAdded$;

            (_this$areaTilesAdded$ = this.areaTilesAdded.get(areaId)).push.apply(_this$areaTilesAdded$, _toConsumableArray(tiles));
          }
        }
      }, {
        key: "removeAreaTiles",
        value: function removeAreaTiles(areaId, tiles) {
          if (!this.areaTilesRemoved.has(areaId)) {
            this.areaTilesRemoved.set(areaId, tiles);
          } else {
            var _this$areaTilesRemove;

            (_this$areaTilesRemove = this.areaTilesRemoved.get(areaId)).push.apply(_this$areaTilesRemove, _toConsumableArray(tiles));
          }
        }
      }]);

      return Collector;
    }();

    var collector = new Collector();
    /***/
  },

  /***/
  "./src/app/core/debug.ts":
  /*!*******************************!*\
    !*** ./src/app/core/debug.ts ***!
    \*******************************/

  /*! exports provided: Debug */

  /***/
  function srcAppCoreDebugTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Debug", function () {
      return Debug;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Debug = function Debug() {
      _classCallCheck(this, Debug);

      this.revealMap = false;
    };
    /***/

  },

  /***/
  "./src/app/core/game.ts":
  /*!******************************!*\
    !*** ./src/app/core/game.ts ***!
    \******************************/

  /*! exports provided: Game */

  /***/
  function srcAppCoreGameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game", function () {
      return Game;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _unit_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./unit-manager */
    "./src/app/core/unit-manager.ts");
    /* harmony import */


    var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./debug */
    "./src/app/core/debug.ts");
    /* harmony import */


    var _cities_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cities-manager */
    "./src/app/core/cities-manager.ts");
    /* harmony import */


    var _areas_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./areas-manager */
    "./src/app/core/areas-manager.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var Game = /*#__PURE__*/function () {
      function Game() {
        _classCallCheck(this, Game);

        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_2__["Debug"]();
        this.players = [];
        this.activePlayerIndex = -1;
        this.humanPlayer = null;
        this.turn = 1;
        this.areasManager = new _areas_manager__WEBPACK_IMPORTED_MODULE_4__["AreasManager"]();
        this.unitsManager = new _unit_manager__WEBPACK_IMPORTED_MODULE_1__["UnitsManager"](this);
        this.citiesManager = new _cities_manager__WEBPACK_IMPORTED_MODULE_3__["CitiesManager"]();
      }

      _createClass(Game, [{
        key: "start",
        value: function start() {
          this.activePlayerIndex = -1;
          this.nextPlayer();
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(player) {
          player.id = this.players.length;
          this.players.push(player);

          if (!this.trackedPlayer) {
            this.trackedPlayer = player;
          }
        }
      }, {
        key: "nextPlayer",
        value: function nextPlayer() {
          this.activePlayerIndex++;

          if (this.activePlayerIndex >= this.players.length) {
            this.nextTurn();
            this.activePlayerIndex = 0;
          }

          if (this.activePlayer.ai) {
            this.activePlayer.ai.nextTurn();
            this.nextPlayer();
          } else {
            if (this.trackedPlayer !== this.activePlayer) {
              this.trackedPlayer = this.activePlayer;
              _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].trackedPlayer = this.trackedPlayer;
            }
          }
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          this.unitsManager.nextTurn();
          this.citiesManager.nextTurn();

          var _iterator31 = _createForOfIteratorHelper(this.players),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var player = _step31.value;
              player.nextTurn();
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }

          this.turn++;
          _collector__WEBPACK_IMPORTED_MODULE_5__["collector"].turn = this.turn;
        }
      }, {
        key: "activePlayer",
        get: function get() {
          return this.players[this.activePlayerIndex];
        }
      }]);

      return Game;
    }();
    /***/

  },

  /***/
  "./src/app/core/idle-product.ts":
  /*!**************************************!*\
    !*** ./src/app/core/idle-product.ts ***!
    \**************************************/

  /*! exports provided: IDLE_PRODUCTS_MAP */

  /***/
  function srcAppCoreIdleProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDLE_PRODUCTS_MAP", function () {
      return IDLE_PRODUCTS_MAP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_idle_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data/idle-products */
    "./src/app/data/idle-products.ts");

    var IDLE_PRODUCTS_MAP = new Map();

    var _iterator32 = _createForOfIteratorHelper(_data_idle_products__WEBPACK_IMPORTED_MODULE_1__["IDLE_PRODUCTS"]),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var definition = _step32.value;
        IDLE_PRODUCTS_MAP.set(definition.id, definition);
      }
      /***/

    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  },

  /***/
  "./src/app/core/pathfinding.ts":
  /*!*************************************!*\
    !*** ./src/app/core/pathfinding.ts ***!
    \*************************************/

  /*! exports provided: findPath */

  /***/
  function srcAppCorePathfindingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findPath", function () {
      return findPath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function findPath(unit, end) {
      var startTime = performance.now();
      var start = unit.tile;

      if (start === end) {
        return null;
      }

      if (start.passableArea !== end.passableArea) {
        return null;
      }

      var visitedTiles = new Set();
      var tilesToVisit = new Map();
      var cameFrom = new Map();
      var costsSoFar = new Map();
      var turnCost = 1 / unit.definition.actionPoints;
      tilesToVisit.set(start, 0);
      costsSoFar.set(start, 0);
      cameFrom.set(start, [0, unit.definition.actionPoints, null]);

      while (tilesToVisit.size) {
        var nextTile = void 0;
        var minEstimatedCost = Infinity;

        var _iterator33 = _createForOfIteratorHelper(tilesToVisit.entries()),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var _step33$value = _slicedToArray(_step33.value, 2),
                tile = _step33$value[0],
                estimatedCost = _step33$value[1];

            if (estimatedCost < minEstimatedCost) {
              minEstimatedCost = estimatedCost;
              nextTile = tile;
            }
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }

        var _cameFrom$get = cameFrom.get(nextTile),
            _cameFrom$get2 = _toArray(_cameFrom$get),
            turn = _cameFrom$get2[0],
            actionPointsLeft = _cameFrom$get2[1],
            _ = _cameFrom$get2.slice(2);

        if (!actionPointsLeft) {
          actionPointsLeft = unit.definition.actionPoints;
          turn++;
        }

        visitedTiles.add(nextTile);
        tilesToVisit["delete"](nextTile);

        if (nextTile === end) {
          var _endTime = performance.now();

          console.debug("pathfinding took ".concat(Math.round(_endTime - startTime), "ms"));
          return reconstructPath(cameFrom, end);
        }

        var _iterator34 = _createForOfIteratorHelper(nextTile.neighbours),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var neighbour = _step34.value;

            if (!visitedTiles.has(neighbour)) {
              var isExplored = unit.player.exploredTiles.has(neighbour);
              var moveCost = isExplored ? nextTile.neighboursCosts.get(neighbour) : 1;

              if (moveCost === Infinity) {
                continue;
              }

              var newActionPointsLeft = Math.max(0, actionPointsLeft - moveCost);
              moveCost *= turnCost;

              if (!newActionPointsLeft) {
                moveCost = 1; // ??
              }

              var costSoFar = costsSoFar.get(nextTile) + moveCost;

              if (!costsSoFar.has(neighbour) || costSoFar < costsSoFar.get(neighbour)) {
                costsSoFar.set(neighbour, costSoFar);
                tilesToVisit.set(neighbour, costSoFar + getEuclideanDistance(neighbour, end) * turnCost);
                cameFrom.set(neighbour, [turn, newActionPointsLeft, nextTile]);
              }
            }
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }
      }

      var endTime = performance.now();
      console.debug("pathfinding took ".concat(Math.round(endTime - startTime), "ms"));
      return null;
    }

    function getEuclideanDistance(start, end) {
      return Math.sqrt((start.x - end.x) * (start.x - end.x) + (start.y - end.y) * (start.y - end.y));
    }

    function reconstructPath(cameFrom, target) {
      var lastTile = target;
      var lastTurn = null;
      var turnPath = [target];
      var path = [turnPath];

      while (true) {
        var _cameFrom$get3 = cameFrom.get(lastTile),
            _cameFrom$get4 = _slicedToArray(_cameFrom$get3, 3),
            turn = _cameFrom$get4[0],
            _ = _cameFrom$get4[1],
            tile = _cameFrom$get4[2];

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
    /***/

  },

  /***/
  "./src/app/core/player.ts":
  /*!********************************!*\
    !*** ./src/app/core/player.ts ***!
    \********************************/

  /*! exports provided: PLAYER_COLORS, PlayerCore */

  /***/
  function srcAppCorePlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLAYER_COLORS", function () {
      return PLAYER_COLORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerCore", function () {
      return PlayerCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./yields */
    "./src/app/core/yields.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var PLAYER_COLORS = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0x999999, 0xdddddd, 0xfbacac, 0xe6b873, 0x39862b, 0x2e716e, 0x7457bb, 0xab57bb, 0x79583c, 0xb6bbe6, 0xb6bce6];

    var PlayerCore = /*#__PURE__*/function () {
      function PlayerCore(game, color) {
        _classCallCheck(this, PlayerCore);

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
          perTurn: Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"])
        };
        this.area = this.game.areasManager.make();
        this.ai = null;
      }

      _createClass(PlayerCore, [{
        key: "exploreTiles",
        value: function exploreTiles(tiles) {
          var _iterator35 = _createForOfIteratorHelper(tiles),
              _step35;

          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var tile = _step35.value;

              if (!this.exploredTiles.has(tile)) {
                this.exploredTiles.add(tile);

                if (this.id === this.game.trackedPlayer.id) {
                  _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].tilesExplored.add(tile.id);
                }
              }
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        }
      }, {
        key: "updateYields",
        value: function updateYields() {
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.income);
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.costs);
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["zeroYields"])(this.yields.perTurn);

          var _iterator36 = _createForOfIteratorHelper(this.cities),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var city = _step36.value;

              var _iterator37 = _createForOfIteratorHelper(city.tiles),
                  _step37;

              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var tile = _step37.value;

                  if (!tile.city) {
                    if (tile.improvement !== null) {
                      this.yields.costs.publicWorks++;
                    }

                    if (tile.road !== null) {
                      this.yields.costs.publicWorks++;
                    }
                  }
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }

              Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.yields.income, city.yields);
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["copyYields"])(this.yields.perTurn, this.yields.income);
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["subtractYields"])(this.yields.perTurn, this.yields.costs);

          if (this === this.game.trackedPlayer) {
            _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].trackedPlayerYields = this.yields;
          }
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          this.updateYields();
          Object(_yields__WEBPACK_IMPORTED_MODULE_1__["addYields"])(this.yields.total, this.yields.perTurn);
          this.yields.total.publicWorks = Math.max(0, this.yields.total.publicWorks);
          this.updateCitiesWithoutProduction();
          this.updateUnitsWithoutOrders();
        }
      }, {
        key: "updateCitiesWithoutProduction",
        value: function updateCitiesWithoutProduction() {
          this.citiesWithoutProduction = this.cities.filter(function (c) {
            return !c.product;
          });
        }
      }, {
        key: "updateUnitsWithoutOrders",
        value: function updateUnitsWithoutOrders() {
          this.unitsWithoutOrders = this.units.filter(function (c) {
            return !c.order && c.actionPointsLeft;
          });
        }
      }, {
        key: "addCity",
        value: function addCity(city) {
          this.cities.push(city);
        }
      }]);

      return PlayerCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/product.ts":
  /*!*********************************!*\
    !*** ./src/app/core/product.ts ***!
    \*********************************/

  /*! exports provided: ProductRequirement, BuildingRequirement, SizeRequirement */

  /***/
  function srcAppCoreProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRequirement", function () {
      return ProductRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingRequirement", function () {
      return BuildingRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeRequirement", function () {
      return SizeRequirement;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductRequirement = function ProductRequirement() {
      _classCallCheck(this, ProductRequirement);
    };

    var BuildingRequirement = /*#__PURE__*/function (_ProductRequirement) {
      _inherits(BuildingRequirement, _ProductRequirement);

      var _super = _createSuper(BuildingRequirement);

      function BuildingRequirement(buildingId) {
        var _this2;

        _classCallCheck(this, BuildingRequirement);

        _this2 = _super.call(this);
        _this2.buildingId = buildingId;
        _this2.id = "building";
        return _this2;
      }

      _createClass(BuildingRequirement, [{
        key: "check",
        value: function check(city) {
          return city.buildingsIds.has(this.buildingId);
        }
      }]);

      return BuildingRequirement;
    }(ProductRequirement);

    var SizeRequirement = /*#__PURE__*/function (_ProductRequirement2) {
      _inherits(SizeRequirement, _ProductRequirement2);

      var _super2 = _createSuper(SizeRequirement);

      function SizeRequirement(size) {
        var _this3;

        _classCallCheck(this, SizeRequirement);

        _this3 = _super2.call(this);
        _this3.size = size;
        _this3.id = "size";
        return _this3;
      }

      _createClass(SizeRequirement, [{
        key: "check",
        value: function check(city) {
          return city.size >= this.size;
        }
      }]);

      return SizeRequirement;
    }(ProductRequirement);
    /***/

  },

  /***/
  "./src/app/core/serialization/channel.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/serialization/channel.ts ***!
    \***********************************************/

  /*! exports provided: gameToChannel, mapToChannel, tileToChannel, cityToChannel, cityDetailsToChannel, playerToChannel, trackedPlayerToChannel, unitToChannel, unitDetailsToChannel */

  /***/
  function srcAppCoreSerializationChannelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gameToChannel", function () {
      return gameToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mapToChannel", function () {
      return mapToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tileToChannel", function () {
      return tileToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityToChannel", function () {
      return cityToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cityDetailsToChannel", function () {
      return cityDetailsToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerToChannel", function () {
      return playerToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackedPlayerToChannel", function () {
      return trackedPlayerToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unitToChannel", function () {
      return unitToChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unitDetailsToChannel", function () {
      return unitDetailsToChannel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function gameToChannel(game) {
      return {
        turn: game.turn,
        map: mapToChannel(game.map),
        players: game.players.map(function (p) {
          return playerToChannel(p);
        }),
        trackedPlayer: trackedPlayerToChannel(game.trackedPlayer),
        units: game.unitsManager.units.map(function (u) {
          return unitToChannel(u);
        }),
        cities: game.citiesManager.cities.map(function (c) {
          return cityToChannel(c);
        })
      };
    }

    function mapToChannel(map) {
      var tiles = [];

      for (var x = 0; x < map.width; x++) {
        var row = [];
        tiles.push(row);

        for (var y = 0; y < map.height; y++) {
          row.push(tileToChannel(map.tiles[x][y]));
        }
      }

      return {
        width: map.width,
        height: map.height,
        tiles: tiles
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
        unitsIds: tile.units.map(function (u) {
          return u.id;
        }),
        cityId: tile.city ? tile.city.id : null
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
        productionRequired: city.product ? city.product.productDefinition.productionCost : null,
        turnsToProductionEnd: city.turnsToProductionEnd,
        productName: city.product ? city.product.productDefinition.name : null
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
        availableBuildings: city.availableBuildings.map(function (b) {
          return b.id;
        }),
        availableIdleProducts: city.availableIdleProducts.map(function (p) {
          return p.id;
        }),
        availableUnits: city.availableUnits.map(function (u) {
          return u.id;
        }),
        buildingsIds: Array.from(city.buildingsIds),
        cultureToExpand: city.cultureToExpand,
        disabledBuildings: Array.from(city.disabledBuildings).map(function (b) {
          return b.id;
        }),
        disabledIdleProducts: Array.from(city.disabledIdleProducts).map(function (p) {
          return p.id;
        }),
        disabledUnits: Array.from(city.disabledUnits).map(function (u) {
          return u.id;
        }),
        foodConsumed: city.foodConsumed,
        perTurn: city.perTurn,
        productId: ((_a = city.product) === null || _a === void 0 ? void 0 : _a.productDefinition.id) || null,
        productType: ((_b = city.product) === null || _b === void 0 ? void 0 : _b.type) || null,
        tileYields: city.tileYields,
        tiles: Array.from(city.tiles).map(function (t) {
          return t.id;
        }),
        totalCulture: city.totalCulture,
        workedTiles: Array.from(city.workedTiles).map(function (t) {
          return t.id;
        }),
        yields: city.yields
      };
    }

    function playerToChannel(player) {
      return {
        id: player.id,
        color: player.color,
        areaId: player.area.id
      };
    }

    function trackedPlayerToChannel(player) {
      return {
        id: player.id,
        color: player.color,
        exploredTiles: Array.from(player.exploredTiles).map(function (t) {
          return t.id;
        }),
        units: player.units.map(function (u) {
          return u.id;
        }),
        cities: player.cities.map(function (c) {
          return c.id;
        }),
        yields: player.yields
      };
    }

    function unitToChannel(unit) {
      return {
        id: unit.id,
        tileId: unit.tile.id,
        definitionId: unit.definition.id,
        playerId: unit.player.id
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
        path: ((_a = unit.path) === null || _a === void 0 ? void 0 : _a.map(function (row) {
          return row.map(function (tile) {
            return tile.id;
          });
        })) || null
      };
    }
    /***/

  },

  /***/
  "./src/app/core/serialization/dump.ts":
  /*!********************************************!*\
    !*** ./src/app/core/serialization/dump.ts ***!
    \********************************************/

  /*! exports provided: dumpGame, loadGame */

  /***/
  function srcAppCoreSerializationDumpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dumpGame", function () {
      return dumpGame;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadGame", function () {
      return loadGame;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game */
    "./src/app/core/game.ts");
    /* harmony import */


    var _buildings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../buildings */
    "./src/app/core/buildings.ts");
    /* harmony import */


    var _idle_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../idle-product */
    "./src/app/core/idle-product.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../player */
    "./src/app/core/player.ts");
    /* harmony import */


    var src_app_ai_ai_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/ai/ai-player */
    "./src/app/ai/ai-player.ts");
    /* harmony import */


    var _tiles_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../tiles-map */
    "./src/app/core/tiles-map.ts");

    function dumpGame(game) {
      return {
        turn: game.turn,
        trackedPlayerId: game.trackedPlayer.id,
        activePlayerIndex: game.activePlayerIndex,
        map: dumpMap(game.map),
        players: game.players.map(function (p) {
          return dumpPlayer(p);
        }),
        units: game.unitsManager.units.map(function (u) {
          return dumpUnit(u);
        }),
        cities: game.citiesManager.cities.map(function (c) {
          return dumpCity(c);
        })
      };
    }

    function loadGame(data) {
      var game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"]();
      game.turn = data.turn; // First deserialize map as other entities depend on it.

      game.map = loadMap(data.map); // Then players as unit deserialization needs them.

      var _iterator38 = _createForOfIteratorHelper(data.players),
          _step38;

      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var playerData = _step38.value;
          var player = loadPlayer(game, playerData);
          game.addPlayer(player);
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }

      game.activePlayerIndex = data.activePlayerIndex;

      var _iterator39 = _createForOfIteratorHelper(data.units),
          _step39;

      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
          var unit = _step39.value;
          loadUnit(game, unit);
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }

      var _iterator40 = _createForOfIteratorHelper(data.cities),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var city = _step40.value;
          loadCity(game, city);
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }

      var _iterator41 = _createForOfIteratorHelper(game.players),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var _player = _step41.value;

          _player.updateCitiesWithoutProduction();

          _player.updateUnitsWithoutOrders();

          _player.updateYields();
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }

      return game;
    }

    function dumpMap(map) {
      return {
        width: map.width,
        height: map.height,
        tiles: dumpTiles(map)
      };
    }

    function dumpTiles(map) {
      // Store only changes from the last tile to keep save size minimal
      var result = [];
      var lastTile = {};

      for (var x = 0; x < map.width; x++) {
        for (var y = 0; y < map.height; y++) {
          var tile = map.tiles[x][y];
          var diff = {};

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
          } // The rivers tends to not repeat in subsequent tiles so instead of using diff let's just ignore empty rivers.


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
      var map = new _tiles_map__WEBPACK_IMPORTED_MODULE_6__["TilesMapCore"](mapData.width, mapData.height);
      var lastTile = map.tiles[0][0];
      var index = 0;

      for (var x = 0; x < mapData.width; x++) {
        for (var y = 0; y < mapData.height; y++) {
          var tileData = mapData.tiles[index];
          var tile = map.tiles[x][y];
          tile.climate = tileData.climate !== undefined ? tileData.climate : lastTile.climate;
          tile.seaLevel = tileData.seaLevel !== undefined ? tileData.seaLevel : lastTile.seaLevel;
          tile.landForm = tileData.landForm !== undefined ? tileData.landForm : lastTile.landForm;
          tile.improvement = tileData.improvement !== undefined ? tileData.improvement : lastTile.improvement;
          tile.road = tileData.road !== undefined ? tileData.road : lastTile.road;
          tile.riverParts = tileData.riverParts || [];
          tile.forest = tileData.forest !== undefined ? tileData.forest : lastTile.forest;
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
        exploredTiles: Array.from(player.exploredTiles).map(function (t) {
          return t.id;
        }),
        yieldsTotal: player.yields.total
      };
    }

    function loadPlayer(game, data) {
      var player = new _player__WEBPACK_IMPORTED_MODULE_4__["PlayerCore"](game, data.color || 0);

      if (data.ai) {
        player.ai = new src_app_ai_ai_player__WEBPACK_IMPORTED_MODULE_5__["AIPlayer"](player);
      }

      var _iterator42 = _createForOfIteratorHelper(data.exploredTiles),
          _step42;

      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var tileId = _step42.value;
          player.exploredTiles.add(game.map.tilesMap.get(tileId));
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }

      player.yields.total = data.yieldsTotal;
      player.updateYields();
      return player;
    }

    function loadCity(game, cityData) {
      var tile = game.map.tilesMap.get(cityData.tile);
      var player = game.players[cityData.player];
      var city = game.citiesManager.spawn(tile, player, false);

      if (!city) {
        return;
      }

      city.name = cityData.name;
      city.size = cityData.size;
      city.totalFood = cityData.totalFood;
      city.totalProduction = cityData.totalProduction;
      city.totalCulture = cityData.totalCulture;

      var _iterator43 = _createForOfIteratorHelper(cityData.tiles),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var tileIndex = _step43.value;
          city.addTile(game.map.tilesMap.get(tileIndex));
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }

      var _iterator44 = _createForOfIteratorHelper(cityData.workedTiles),
          _step44;

      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var _tileIndex = _step44.value;
          city.workTile(game.map.tilesMap.get(_tileIndex));
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }

      if (cityData.product) {
        var productDefinition;

        if (cityData.product.type === "unit") {
          productDefinition = game.unitsManager.definitions.get(cityData.product.id);
        } else if (cityData.product.type === "building") {
          productDefinition = _buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS_MAP"].get(cityData.product.id);
        } else {
          productDefinition = _idle_product__WEBPACK_IMPORTED_MODULE_3__["IDLE_PRODUCTS_MAP"].get(cityData.product.id);
        }

        city.product = {
          type: cityData.product.type,
          productDefinition: productDefinition
        };
      }

      city.buildings = cityData.buildings.map(function (b) {
        return _buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS_MAP"].get(b);
      });
      city.buildingsIds = new Set(city.buildings.map(function (b) {
        return b.id;
      }));
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
        product: city.product ? {
          type: city.product.type,
          id: city.product.productDefinition.id
        } : null,
        tiles: Array.from(city.tiles).map(function (tile) {
          return tile.id;
        }),
        workedTiles: Array.from(city.workedTiles).map(function (tile) {
          return tile.id;
        }),
        buildings: city.buildings.map(function (b) {
          return b.id;
        })
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
        path: ((_a = unit.path) === null || _a === void 0 ? void 0 : _a.map(function (row) {
          return row.map(function (tile) {
            return tile.id;
          });
        })) || null
      };
    }

    function loadUnit(game, unitData) {
      var _a;

      var tile = game.map.tilesMap.get(unitData.tile);
      var player = game.players[unitData.player];
      var unit = game.unitsManager.spawn(unitData.definition, tile, player);
      unit.actionPointsLeft = unitData.actionPointsLeft;
      unit.order = unitData.order;
      unit.path = ((_a = unitData.path) === null || _a === void 0 ? void 0 : _a.map(function (row) {
        return row.map(function (tileId) {
          return game.map.tilesMap.get(tileId);
        });
      })) || null;
    }
    /***/

  },

  /***/
  "./src/app/core/tile-improvements.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/tile-improvements.ts ***!
    \*******************************************/

  /*! exports provided: TileImprovement, TileRoad, IMPROVEMENT_PUBLIC_WORKS_COSTS, IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN, ROAD_PUBLIC_WORKS_COSTS, ROAD_PUBLIC_WORKS_COSTS_PER_TURN */

  /***/
  function srcAppCoreTileImprovementsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _IMPROVEMENT_PUBLIC_W, _IMPROVEMENT_PUBLIC_W2;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileImprovement", function () {
      return TileImprovement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileRoad", function () {
      return TileRoad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_PUBLIC_WORKS_COSTS", function () {
      return IMPROVEMENT_PUBLIC_WORKS_COSTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN", function () {
      return IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROAD_PUBLIC_WORKS_COSTS", function () {
      return ROAD_PUBLIC_WORKS_COSTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROAD_PUBLIC_WORKS_COSTS_PER_TURN", function () {
      return ROAD_PUBLIC_WORKS_COSTS_PER_TURN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

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

    var IMPROVEMENT_PUBLIC_WORKS_COSTS = (_IMPROVEMENT_PUBLIC_W = {}, _defineProperty(_IMPROVEMENT_PUBLIC_W, TileImprovement.farm, 15), _defineProperty(_IMPROVEMENT_PUBLIC_W, TileImprovement.mine, 15), _defineProperty(_IMPROVEMENT_PUBLIC_W, TileImprovement.sawmill, 15), _IMPROVEMENT_PUBLIC_W);
    var IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN = (_IMPROVEMENT_PUBLIC_W2 = {}, _defineProperty(_IMPROVEMENT_PUBLIC_W2, TileImprovement.farm, 1), _defineProperty(_IMPROVEMENT_PUBLIC_W2, TileImprovement.mine, 1), _defineProperty(_IMPROVEMENT_PUBLIC_W2, TileImprovement.sawmill, 1), _IMPROVEMENT_PUBLIC_W2);

    var ROAD_PUBLIC_WORKS_COSTS = _defineProperty({}, TileRoad.road, 15);

    var ROAD_PUBLIC_WORKS_COSTS_PER_TURN = _defineProperty({}, TileRoad.road, 1);
    /***/

  },

  /***/
  "./src/app/core/tile.ts":
  /*!******************************!*\
    !*** ./src/app/core/tile.ts ***!
    \******************************/

  /*! exports provided: TileCore */

  /***/
  function srcAppCoreTileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _BASE_CLIMATE_YIELDS, _BASE_LAND_FORM_YIELD;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileCore", function () {
      return TileCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _yields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./yields */
    "./src/app/core/yields.ts");
    /* harmony import */


    var _tile_improvements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var BASE_CLIMATE_YIELDS = (_BASE_CLIMATE_YIELDS = {}, _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].arctic, Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"])), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].continental, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: 1,
      production: 1
    })), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].desert, Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"])), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].oceanic, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: 2,
      production: 1
    })), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].savanna, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: 1,
      production: 1
    })), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].tropical, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: 1
    })), _defineProperty(_BASE_CLIMATE_YIELDS, _shared__WEBPACK_IMPORTED_MODULE_3__["Climate"].tundra, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      production: 1
    })), _BASE_CLIMATE_YIELDS);
    var BASE_LAND_FORM_YIELDS = (_BASE_LAND_FORM_YIELD = {}, _defineProperty(_BASE_LAND_FORM_YIELD, _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].plains, Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"])), _defineProperty(_BASE_LAND_FORM_YIELD, _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].hills, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: -1
    })), _defineProperty(_BASE_LAND_FORM_YIELD, _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains, Object.assign(Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]), {
      food: -Infinity,
      production: -5
    })), _BASE_LAND_FORM_YIELD);

    var TileCore = /*#__PURE__*/function () {
      function TileCore(id, x, y) {
        _classCallCheck(this, TileCore);

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
        this.yields = Object.assign({}, _yields__WEBPACK_IMPORTED_MODULE_1__["EMPTY_YIELDS"]); // cached data

        this.neighbours = [];
        this.fullNeighbours = []; // keeps neighbours in all directions, null if map border, can be indexed with TileDirection

        this.neighboursCosts = new Map();
        this.sweetSpotValue = 0; // used by ai to find good city location

        this.passableArea = 0; // used by pathfinding to quickly decide if a path between two tiles exists
      }

      _createClass(TileCore, [{
        key: "computeMovementCosts",
        value: function computeMovementCosts() {
          var _iterator45 = _createForOfIteratorHelper(this.neighbours),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var neighbour = _step45.value;
              var dir = this.getDirectionTo(neighbour);
              var cost = 1;

              if (neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
                cost = Infinity;
              } else if (neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains) {
                cost = Infinity;
              } else if (neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].hills) {
                cost = 2;
              } else {
                if (this.riverParts.includes(dir)) {
                  cost = 3;
                } else if (this.riverParts.length && neighbour.riverParts.length) {
                  cost = 0.5;
                }
              }

              if (neighbour.road === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileRoad"].road) {
                cost /= 3;
              }

              this.neighboursCosts.set(neighbour, cost);
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      }, {
        key: "getDirectionTo",
        value: function getDirectionTo(tile) {
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
      }, {
        key: "getDistanceTo",
        value: function getDistanceTo(tile) {
          // This is imprecise but good enough for now.
          return Math.abs(this.x - tile.x) + Math.abs(this.y - tile.y);
        }
      }, {
        key: "computeYields",
        value: function computeYields() {
          if (this.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].deep) {
            this.yields.food = 0;
            this.yields.production = 0;
          } else if (this.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].shallow) {
            this.yields.food = 1;
            this.yields.production = 0;
          } else {
            var climateYields = BASE_CLIMATE_YIELDS[this.climate];
            var landFormYields = BASE_LAND_FORM_YIELDS[this.landForm];
            this.yields.food = climateYields.food + landFormYields.food;
            this.yields.production = climateYields.production + landFormYields.production;

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
            } else if (this.improvement === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileImprovement"].mine) {
              this.yields.production++;
            } else if (this.improvement === _tile_improvements__WEBPACK_IMPORTED_MODULE_2__["TileImprovement"].sawmill) {
              this.yields.production++;
            }

            this.yields.food = Math.max(0, this.yields.food);
            this.yields.production = Math.max(0, this.yields.production);
          }
        }
      }, {
        key: "getTilesInRange",
        value: function getTilesInRange(range) {
          var result = new Set([this]);

          for (var i = 0; i < range; i++) {
            var neighbours = new Set();

            var _iterator46 = _createForOfIteratorHelper(result),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var tile = _step46.value;

                var _iterator48 = _createForOfIteratorHelper(tile.neighbours),
                    _step48;

                try {
                  for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                    var neighbour = _step48.value;
                    neighbours.add(neighbour);
                  }
                } catch (err) {
                  _iterator48.e(err);
                } finally {
                  _iterator48.f();
                }
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }

            var _iterator47 = _createForOfIteratorHelper(neighbours),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _tile = _step47.value;
                result.add(_tile);
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
          }

          return result;
        }
      }, {
        key: "computeSweetSpotValue",
        value: function computeSweetSpotValue() {
          this.sweetSpotValue = 0;

          if (this.areaOf || this.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains || this.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none) {
            return;
          }

          var tiles = this.getTilesInRange(3);

          var _iterator49 = _createForOfIteratorHelper(tiles),
              _step49;

          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var tile = _step49.value;
              this.sweetSpotValue += tile.yields.food;
              this.sweetSpotValue += tile.yields.production;
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.computeYields();
          this.computeMovementCosts();

          var _iterator50 = _createForOfIteratorHelper(this.neighbours),
              _step50;

          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var neighbour = _step50.value;
              // TODO this loop can be optimized by computing only the cost from neighbour to this tile.
              neighbour.computeMovementCosts();
            }
          } catch (err) {
            _iterator50.e(err);
          } finally {
            _iterator50.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(this);
        }
      }, {
        key: "totalYields",
        get: function get() {
          return this.yields.food + this.yields.production;
        }
      }]);

      return TileCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/tiles-map.ts":
  /*!***********************************!*\
    !*** ./src/app/core/tiles-map.ts ***!
    \***********************************/

  /*! exports provided: TilesMapCore */

  /***/
  function srcAppCoreTilesMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TilesMapCore", function () {
      return TilesMapCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tile */
    "./src/app/core/tile.ts");
    /* harmony import */


    var _shared_hex_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/hex-math */
    "./src/app/shared/hex-math.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var TilesMapCore = /*#__PURE__*/function () {
      function TilesMapCore(width, height) {
        _classCallCheck(this, TilesMapCore);

        this.width = width;
        this.height = height;
        this.tiles = [];
        this.tilesMap = new Map();

        for (var x = 0; x < width; x++) {
          var row = [];
          this.tiles.push(row);

          for (var y = 0; y < height; y++) {
            var tile = new _tile__WEBPACK_IMPORTED_MODULE_1__["TileCore"](x * width + y, x, y);
            row.push(tile);
            this.tilesMap.set(tile.id, tile);
          }
        }

        for (var _x = 0; _x < width; _x++) {
          for (var _y = 0; _y < height; _y++) {
            this.tiles[_x][_y].neighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_2__["getTileNeighbours"])(this.tiles, _x, _y);
            this.tiles[_x][_y].fullNeighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_2__["getTileFullNeighbours"])(this.tiles, _x, _y);
          }
        }
      }

      _createClass(TilesMapCore, [{
        key: "precompute",
        value: function precompute() {
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              var tile = this.tiles[x][y];
              tile.computeYields();
              tile.computeMovementCosts();
              tile.computeSweetSpotValue();
            }
          }

          this.precomputePassableAreas();
        }
      }, {
        key: "precomputePassableAreas",
        value: function precomputePassableAreas() {
          var visited = new Set();
          var areaId = 1;

          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              var tile = this.tiles[x][y];

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
      }, {
        key: "computePassableArea",
        value: function computePassableArea(startTile, areaId, visited) {
          // Cannot use recursion here because it fails with too many recursion levels on bigger maps. Using queue instead.
          var queue = [startTile];
          visited.add(startTile);

          while (queue.length) {
            var tile = queue.shift();
            tile.passableArea = areaId;

            var _iterator51 = _createForOfIteratorHelper(tile.neighbours),
                _step51;

            try {
              for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                var neighbour = _step51.value;

                if (visited.has(neighbour)) {
                  continue;
                }

                var isMountains = neighbour.landForm === _shared__WEBPACK_IMPORTED_MODULE_3__["LandForm"].mountains;
                var areBothLand = tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none && neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none;
                var areBothWater = tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none && neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_3__["SeaLevel"].none;

                if (!isMountains && (areBothLand || areBothWater)) {
                  visited.add(neighbour);
                  queue.push(neighbour);
                }
              }
            } catch (err) {
              _iterator51.e(err);
            } finally {
              _iterator51.f();
            }
          }
        }
      }, {
        key: "get",
        value: function get(x, y) {
          if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return null;
          }

          return this.tiles[x][y];
        }
      }]);

      return TilesMapCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/unit-actions.ts":
  /*!**************************************!*\
    !*** ./src/app/core/unit-actions.ts ***!
    \**************************************/

  /*! exports provided: getPublicWorksRequired, getPublicWorksPerTurn, ActionRequirement, OwnTileRequirement, NotForeignTileRequirement, ImprovementNotYetBuiltRequirement, IsImprovementPossibleRequirement, NoRoadRequirement, isRoadPossibleRequirement, PublicWorksPointsRequirement, ACTIONS */

  /***/
  function srcAppCoreUnitActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPublicWorksRequired", function () {
      return getPublicWorksRequired;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPublicWorksPerTurn", function () {
      return getPublicWorksPerTurn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionRequirement", function () {
      return ActionRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnTileRequirement", function () {
      return OwnTileRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotForeignTileRequirement", function () {
      return NotForeignTileRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImprovementNotYetBuiltRequirement", function () {
      return ImprovementNotYetBuiltRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsImprovementPossibleRequirement", function () {
      return IsImprovementPossibleRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoRoadRequirement", function () {
      return NoRoadRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isRoadPossibleRequirement", function () {
      return isRoadPossibleRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicWorksPointsRequirement", function () {
      return PublicWorksPointsRequirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTIONS", function () {
      return ACTIONS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var ACTION_TO_IMPROVEMENT = {
      buildFarm: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm,
      buildMine: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine,
      buildSawmill: _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill
    };

    function getPublicWorksRequired(action) {
      if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
      }

      var improvement = ACTION_TO_IMPROVEMENT[action];

      if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
      }

      return 0;
    }

    function getPublicWorksPerTurn(action) {
      if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
      }

      var improvement = ACTION_TO_IMPROVEMENT[action];

      if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
      }

      return 0;
    }

    var ActionRequirement = function ActionRequirement() {
      _classCallCheck(this, ActionRequirement);

      this.id = this.constructor["id"];
    };

    var OwnTileRequirement = /*#__PURE__*/function (_ActionRequirement) {
      _inherits(OwnTileRequirement, _ActionRequirement);

      var _super3 = _createSuper(OwnTileRequirement);

      function OwnTileRequirement() {
        var _this4;

        _classCallCheck(this, OwnTileRequirement);

        _this4 = _super3.apply(this, arguments);
        _this4.id = "ownTile";
        return _this4;
      }

      _createClass(OwnTileRequirement, [{
        key: "check",
        value: function check(unit) {
          var _a;

          return ((_a = unit.tile.areaOf) === null || _a === void 0 ? void 0 : _a.player) === unit.player;
        }
      }]);

      return OwnTileRequirement;
    }(ActionRequirement);

    var NotForeignTileRequirement = /*#__PURE__*/function (_ActionRequirement2) {
      _inherits(NotForeignTileRequirement, _ActionRequirement2);

      var _super4 = _createSuper(NotForeignTileRequirement);

      function NotForeignTileRequirement() {
        var _this5;

        _classCallCheck(this, NotForeignTileRequirement);

        _this5 = _super4.apply(this, arguments);
        _this5.id = "notForeignTile";
        return _this5;
      }

      _createClass(NotForeignTileRequirement, [{
        key: "check",
        value: function check(unit) {
          var _a;

          return !unit.tile.areaOf || ((_a = unit.tile.areaOf) === null || _a === void 0 ? void 0 : _a.player) === unit.player;
        }
      }]);

      return NotForeignTileRequirement;
    }(ActionRequirement);

    var ImprovementNotYetBuiltRequirement = /*#__PURE__*/function (_ActionRequirement3) {
      _inherits(ImprovementNotYetBuiltRequirement, _ActionRequirement3);

      var _super5 = _createSuper(ImprovementNotYetBuiltRequirement);

      function ImprovementNotYetBuiltRequirement(improvement) {
        var _this6;

        _classCallCheck(this, ImprovementNotYetBuiltRequirement);

        _this6 = _super5.call(this);
        _this6.improvement = improvement;
        _this6.id = "sameImprovement";
        return _this6;
      }

      _createClass(ImprovementNotYetBuiltRequirement, [{
        key: "check",
        value: function check(unit) {
          return unit.tile.improvement !== this.improvement;
        }
      }]);

      return ImprovementNotYetBuiltRequirement;
    }(ActionRequirement);

    var IsImprovementPossibleRequirement = /*#__PURE__*/function (_ActionRequirement4) {
      _inherits(IsImprovementPossibleRequirement, _ActionRequirement4);

      var _super6 = _createSuper(IsImprovementPossibleRequirement);

      function IsImprovementPossibleRequirement(improvement) {
        var _this7;

        _classCallCheck(this, IsImprovementPossibleRequirement);

        _this7 = _super6.call(this);
        _this7.improvement = improvement;
        _this7.id = "improvementPossible";
        return _this7;
      }

      _createClass(IsImprovementPossibleRequirement, [{
        key: "check",
        value: function check(unit) {
          return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["isImprovementPossible"])(unit.tile, this.improvement);
        }
      }]);

      return IsImprovementPossibleRequirement;
    }(ActionRequirement);

    var NoRoadRequirement = /*#__PURE__*/function (_ActionRequirement5) {
      _inherits(NoRoadRequirement, _ActionRequirement5);

      var _super7 = _createSuper(NoRoadRequirement);

      function NoRoadRequirement() {
        var _this8;

        _classCallCheck(this, NoRoadRequirement);

        _this8 = _super7.apply(this, arguments);
        _this8.id = "noRoad";
        return _this8;
      }

      _createClass(NoRoadRequirement, [{
        key: "check",
        value: function check(unit) {
          return unit.tile.road === null;
        }
      }]);

      return NoRoadRequirement;
    }(ActionRequirement);

    var isRoadPossibleRequirement = /*#__PURE__*/function (_ActionRequirement6) {
      _inherits(isRoadPossibleRequirement, _ActionRequirement6);

      var _super8 = _createSuper(isRoadPossibleRequirement);

      function isRoadPossibleRequirement() {
        var _this9;

        _classCallCheck(this, isRoadPossibleRequirement);

        _this9 = _super8.apply(this, arguments);
        _this9.id = "roadPossible";
        return _this9;
      }

      _createClass(isRoadPossibleRequirement, [{
        key: "check",
        value: function check(unit) {
          return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["isRoadPossible"])(unit.tile);
        }
      }]);

      return isRoadPossibleRequirement;
    }(ActionRequirement);

    var PublicWorksPointsRequirement = /*#__PURE__*/function (_ActionRequirement7) {
      _inherits(PublicWorksPointsRequirement, _ActionRequirement7);

      var _super9 = _createSuper(PublicWorksPointsRequirement);

      function PublicWorksPointsRequirement() {
        var _this10;

        _classCallCheck(this, PublicWorksPointsRequirement);

        _this10 = _super9.apply(this, arguments);
        _this10.id = "publicWorks";
        return _this10;
      }

      _createClass(PublicWorksPointsRequirement, [{
        key: "check",
        value: function check(unit, action) {
          return unit.player.yields.total.publicWorks >= getPublicWorksRequired(action);
        }
      }]);

      return PublicWorksPointsRequirement;
    }(ActionRequirement);

    function foundCity(game, unit) {
      var city = game.citiesManager.spawn(unit.tile, unit.player);

      if (city) {
        game.unitsManager.destroy(unit);
      }
    }

    function buildImprovement(game, unit, improvement) {
      unit.actionPointsLeft = 0;
      unit.tile.improvement = improvement;
      unit.tile.update();
      unit.player.updateUnitsWithoutOrders();
      unit.player.yields.total.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
      unit.player.yields.costs.publicWorks += _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
      unit.player.yields.perTurn.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
    }

    function buildRoad(game, unit) {
      unit.actionPointsLeft = 0;
      unit.tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road;
      unit.tile.update();

      var _iterator52 = _createForOfIteratorHelper(unit.tile.neighbours),
          _step52;

      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
          var neighbour = _step52.value;
          neighbour.update();
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }

      unit.player.updateUnitsWithoutOrders();
      unit.player.yields.total.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
      unit.player.yields.costs.publicWorks += _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
      unit.player.yields.perTurn.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road];
    }

    var ACTIONS = {
      foundCity: {
        action: "foundCity",
        name: "Found a city",
        fn: foundCity,
        requirements: [new NotForeignTileRequirement()]
      },
      buildFarm: {
        action: "buildFarm",
        name: "Build a farm",
        fn: function fn(game, unit) {
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm), new PublicWorksPointsRequirement()]
      },
      buildMine: {
        action: "buildMine",
        name: "Build a mine",
        fn: function fn(game, unit) {
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine), new PublicWorksPointsRequirement()]
      },
      buildSawmill: {
        action: "buildSawmill",
        name: "Build a sawmill",
        fn: function fn(game, unit) {
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill), new PublicWorksPointsRequirement()]
      },
      buildRoad: {
        action: "buildRoad",
        name: "Build a road",
        fn: function fn(game, unit) {
          return buildRoad(game, unit);
        },
        requirements: [new NoRoadRequirement(), new isRoadPossibleRequirement(), new PublicWorksPointsRequirement()]
      }
    };
    /***/
  },

  /***/
  "./src/app/core/unit-manager.ts":
  /*!**************************************!*\
    !*** ./src/app/core/unit-manager.ts ***!
    \**************************************/

  /*! exports provided: UnitsManager */

  /***/
  function srcAppCoreUnitManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsManager", function () {
      return UnitsManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var UnitsManager = /*#__PURE__*/function () {
      function UnitsManager(game) {
        _classCallCheck(this, UnitsManager);

        this.game = game;
        this.definitions = new Map();
        this.units = [];
        this.unitsMap = new Map();
        this.lastId = 0;

        var _iterator53 = _createForOfIteratorHelper(_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"]),
            _step53;

        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
            var definition = _step53.value;
            this.definitions.set(definition.id, definition);
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }
      }

      _createClass(UnitsManager, [{
        key: "spawn",
        value: function spawn(id, tile, player) {
          var definition = this.definitions.get(id);

          if (!definition) {
            throw Error("UnitsManager: No unit with id \"".concat(id, "\""));
          }

          var unit = new _unit__WEBPACK_IMPORTED_MODULE_1__["UnitCore"](tile, definition, player);
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
      }, {
        key: "destroy",
        value: function destroy(unit) {
          // TODO rewrite to sets for better performance?
          this.unitsMap["delete"](unit.id);
          var index = this.units.indexOf(unit);

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
      }, {
        key: "move",
        value: function move(unit, tile) {
          if (!unit.actionPointsLeft) {
            return;
          }

          var cost = this.getMovementCost(unit, tile);

          if (cost === Infinity) {
            return;
          }

          if (unit.definition.power) {
            if (tile.units.length && tile.units.find(function (u) {
              return u.player !== unit.player;
            })) {// battle
            } else if (tile.city && tile.city.player !== unit.player) {
              tile.city.changeOwner(unit.player);
            }
          }

          var index = unit.tile.units.indexOf(unit);

          if (index !== -1) {
            unit.tile.units.splice(index, 1);
          }

          tile.units.push(unit);
          unit.tile = tile;
          unit.actionPointsLeft = Math.max(unit.actionPointsLeft - cost, 0);
          unit.player.exploreTiles(tile.getTilesInRange(2));
        }
      }, {
        key: "moveAlongPath",
        value: function moveAlongPath(unit) {
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
      }, {
        key: "getMovementCost",
        value: function getMovementCost(unit, target) {
          return unit.tile.neighboursCosts.get(target) || Infinity;
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          var _iterator54 = _createForOfIteratorHelper(this.units),
              _step54;

          try {
            for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
              var unit = _step54.value;

              if (unit.path) {
                this.moveAlongPath(unit);
              }

              if (unit.order === "skip") {
                unit.setOrder(null);
              }

              unit.actionPointsLeft = unit.definition.actionPoints;
            }
          } catch (err) {
            _iterator54.e(err);
          } finally {
            _iterator54.f();
          }
        }
      }]);

      return UnitsManager;
    }();
    /***/

  },

  /***/
  "./src/app/core/unit.ts":
  /*!******************************!*\
    !*** ./src/app/core/unit.ts ***!
    \******************************/

  /*! exports provided: UNITS_MAP, UnitCore */

  /***/
  function srcAppCoreUnitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNITS_MAP", function () {
      return UNITS_MAP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitCore", function () {
      return UnitCore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _unit_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./unit-actions */
    "./src/app/core/unit-actions.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var UNITS_MAP = new Map();

    var _iterator55 = _createForOfIteratorHelper(_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"]),
        _step55;

    try {
      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
        var definition = _step55.value;
        UNITS_MAP.set(definition.id, definition);
      }
    } catch (err) {
      _iterator55.e(err);
    } finally {
      _iterator55.f();
    }

    var UnitCore = /*#__PURE__*/function () {
      function UnitCore(tile, definition, player) {
        _classCallCheck(this, UnitCore);

        this.tile = tile;
        this.definition = definition;
        this.player = player;
        this.order = null;
        this.actionPointsLeft = definition.actionPoints;
      }

      _createClass(UnitCore, [{
        key: "doAction",
        value: function doAction(action) {
          if (!this.canDoAction(action)) {
            return;
          }

          _unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].fn(this.player.game, this);

          _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].units.add(this);
        }
      }, {
        key: "canDoAction",
        value: function canDoAction(action) {
          if (!this.actionPointsLeft) {
            return false;
          }

          if (!this.definition.actions.includes(action)) {
            return false;
          }

          var _iterator56 = _createForOfIteratorHelper(_unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].requirements),
              _step56;

          try {
            for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
              var r = _step56.value;

              if (!r.check(this, action)) {
                return false;
              }
            }
          } catch (err) {
            _iterator56.e(err);
          } finally {
            _iterator56.f();
          }

          return true;
        }
      }, {
        key: "getFailedActionRequirements",
        value: function getFailedActionRequirements(action) {
          var _this11 = this;

          return _unit_actions__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"][action].requirements.filter(function (r) {
            return !r.check(_this11, action);
          }).map(function (r) {
            return r.id;
          });
        }
      }, {
        key: "setOrder",
        value: function setOrder(order) {
          this.order = order;
          this.player.updateUnitsWithoutOrders();
        }
      }, {
        key: "getPathDestination",
        value: function getPathDestination() {
          if (!this.path) {
            return null;
          }

          var lastPathTurn = this.path[this.path.length - 1];
          return lastPathTurn[lastPathTurn.length - 1];
        }
      }, {
        key: "getRange",
        value: function getRange() {
          var result = new Set();
          var actionPointsLeftAtTile = new Map();

          this._getRange(this.tile, this.actionPointsLeft, result, actionPointsLeftAtTile);

          if (result.size === 1) {
            result["delete"](this.tile);
          }

          return result;
        }
      }, {
        key: "_getRange",
        value: function _getRange() {
          var tile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tile;
          var actionPointsLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.actionPointsLeft;
          var result = arguments.length > 2 ? arguments[2] : undefined;
          var actionPointsLeftAtTile = arguments.length > 3 ? arguments[3] : undefined;
          result.add(tile);

          if (actionPointsLeft <= 0) {
            return result;
          }

          var _iterator57 = _createForOfIteratorHelper(tile.neighbours),
              _step57;

          try {
            for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
              var neighbour = _step57.value;
              var oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);
              var cost = tile.neighboursCosts.get(neighbour);

              if (cost === Infinity) {
                continue;
              }

              var newActionPointsLeft = actionPointsLeft - cost;

              if (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) {
                actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);

                this._getRange(neighbour, newActionPointsLeft, result, actionPointsLeftAtTile);
              }
            }
          } catch (err) {
            _iterator57.e(err);
          } finally {
            _iterator57.f();
          }

          return result;
        }
      }]);

      return UnitCore;
    }();
    /***/

  },

  /***/
  "./src/app/core/yields.ts":
  /*!********************************!*\
    !*** ./src/app/core/yields.ts ***!
    \********************************/

  /*! exports provided: EMPTY_YIELDS, zeroYields, addYields, subtractYields, copyYields, roundYields */

  /***/
  function srcAppCoreYieldsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMPTY_YIELDS", function () {
      return EMPTY_YIELDS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zeroYields", function () {
      return zeroYields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addYields", function () {
      return addYields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subtractYields", function () {
      return subtractYields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyYields", function () {
      return copyYields;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "roundYields", function () {
      return roundYields;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EMPTY_YIELDS = {
      food: 0,
      production: 0,
      culture: 0,
      publicWorks: 0
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
    /***/

  },

  /***/
  "./src/app/data/buildings.ts":
  /*!***********************************!*\
    !*** ./src/app/data/buildings.ts ***!
    \***********************************/

  /*! exports provided: BUILDINGS */

  /***/
  function srcAppDataBuildingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BUILDINGS", function () {
      return BUILDINGS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/product */
    "./src/app/core/product.ts");

    var BUILDINGS = [{
      id: "granary",
      name: "Granary",
      productionCost: 40,
      bonuses: {
        yieldValue: {
          food: 3
        }
      },
      requirements: [],
      weakRequirements: []
    }, {
      id: "well",
      name: "Well",
      productionCost: 20,
      bonuses: {
        yieldValue: {
          food: 1
        }
      },
      requirements: [],
      weakRequirements: []
    }, {
      id: "bigGranary",
      name: "Grand granary",
      productionCost: 100,
      bonuses: {
        yieldFactor: {
          food: 0.2
        }
      },
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("granary")],
      weakRequirements: []
    }, {
      id: "workshop",
      name: "Workshop",
      productionCost: 80,
      bonuses: {
        yieldValue: {
          production: 5
        }
      },
      requirements: [],
      weakRequirements: []
    }, {
      id: "bigWorkshop",
      name: "Grand workshop",
      productionCost: 200,
      bonuses: {
        yieldFactor: {
          production: 0.2
        }
      },
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("workshop")],
      weakRequirements: []
    }, {
      id: "slaveMarket",
      name: "Slave market",
      productionCost: 50,
      bonuses: {
        yieldValue: {
          publicWorks: 2
        }
      },
      requirements: [],
      weakRequirements: []
    }, {
      id: "bigWorkshop",
      name: "Grand workshop",
      productionCost: 200,
      bonuses: {
        yieldFactor: {
          production: 0.2
        }
      },
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("workshop")],
      weakRequirements: []
    }, {
      id: "monument",
      name: "Monument",
      productionCost: 30,
      bonuses: {
        yieldValue: {
          culture: 2
        }
      },
      requirements: [],
      weakRequirements: []
    }, {
      id: "allDoingBuilding",
      name: "All doing building",
      productionCost: 500,
      bonuses: {
        yieldValue: {
          food: 1,
          production: 1
        },
        yieldFactor: {
          food: 0.1,
          production: 0.1
        }
      },
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("bigGranary"), new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("bigWorkshop")],
      weakRequirements: []
    }];
    /***/
  },

  /***/
  "./src/app/data/idle-products.ts":
  /*!***************************************!*\
    !*** ./src/app/data/idle-products.ts ***!
    \***************************************/

  /*! exports provided: IDLE_PRODUCTS */

  /***/
  function srcAppDataIdleProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDLE_PRODUCTS", function () {
      return IDLE_PRODUCTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var IDLE_PRODUCTS = [{
      id: "growth",
      name: "Growth",
      productionCost: Infinity,
      requirements: [],
      weakRequirements: [],
      bonuses: {
        transferProductionToFood: 0.25
      }
    }, {
      id: "culture",
      name: "Culture",
      productionCost: Infinity,
      requirements: [],
      weakRequirements: [],
      bonuses: {
        transferProductionToCulture: 0.25
      }
    }, {
      id: "public-works",
      name: "Public works",
      productionCost: Infinity,
      requirements: [],
      weakRequirements: [],
      bonuses: {
        transferProductionToPublicWorks: 0.25
      }
    }];
    /***/
  },

  /***/
  "./src/app/data/units.ts":
  /*!*******************************!*\
    !*** ./src/app/data/units.ts ***!
    \*******************************/

  /*! exports provided: UNITS_DEFINITIONS */

  /***/
  function srcAppDataUnitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNITS_DEFINITIONS", function () {
      return UNITS_DEFINITIONS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/product */
    "./src/app/core/product.ts");

    var UNITS_DEFINITIONS = [{
      id: "settler",
      name: "Settler",
      type: "civilian",
      actionPoints: 2,
      power: 0,
      actions: ["foundCity"],
      productionCost: 50,
      requirements: [],
      weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["BuildingRequirement"]("granary"), new _core_product__WEBPACK_IMPORTED_MODULE_1__["SizeRequirement"](3)]
    }, {
      id: "worker",
      name: "Worker",
      type: "civilian",
      actionPoints: 2,
      power: 0,
      actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
      productionCost: 20,
      requirements: [],
      weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_1__["SizeRequirement"](2)]
    }, {
      id: "scout",
      name: "Scout",
      type: "military",
      actionPoints: 2,
      power: 2,
      actions: [],
      productionCost: 10,
      requirements: [],
      weakRequirements: []
    }, {
      id: "warrior",
      name: "Warrior",
      type: "military",
      actionPoints: 2,
      power: 5,
      actions: [],
      productionCost: 30,
      requirements: [],
      weakRequirements: []
    }];
    /***/
  },

  /***/
  "./src/app/map-generators/simplex.ts":
  /*!*******************************************!*\
    !*** ./src/app/map-generators/simplex.ts ***!
    \*******************************************/

  /*! exports provided: SimplexMapGenerator */

  /***/
  function srcAppMapGeneratorsSimplexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplexMapGenerator", function () {
      return SimplexMapGenerator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var simplex_noise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! simplex-noise */
    "./node_modules/simplex-noise/simplex-noise.js");
    /* harmony import */


    var simplex_noise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _core_tiles_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/tiles-map */
    "./src/app/core/tiles-map.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/app/map-generators/utils.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _shared_hex_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/hex-math */
    "./src/app/shared/hex-math.ts");

    var SimplexMapGenerator = /*#__PURE__*/function () {
      function SimplexMapGenerator(startingLocationsCount) {
        _classCallCheck(this, SimplexMapGenerator);

        this.startingLocationsCount = startingLocationsCount;
        this.startingLocations = [];
        this.riversSources = [];
        this.metadata = new Map();
      }

      _createClass(SimplexMapGenerator, [{
        key: "getStartingLocations",
        value: function getStartingLocations() {
          return this.startingLocations;
        }
      }, {
        key: "generate",
        value: function generate(width, height) {
          var seed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
          var uniformity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
          var seaLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          this.map = new _core_tiles_map__WEBPACK_IMPORTED_MODULE_2__["TilesMapCore"](width, height);
          this.width = width;
          this.height = height;
          this.seed = seed;
          this.uniformity = uniformity;
          this.seaLevel = seaLevel;

          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              var metadata = {
                height: 0,
                humidity: 0,
                temperature: 0
              };
              this.metadata.set(this.map.tiles[x][y], metadata);
            }
          }

          this.generateHeightmap();
          this.generateTemperature();
          this.generateHumidity();

          for (var _x2 = 0; _x2 < this.width; _x2++) {
            for (var _y2 = 0; _y2 < this.height; _y2++) {
              var tile = this.map.tiles[_x2][_y2];

              var _metadata = this.metadata.get(tile);

              if (_metadata.height > 1.3) {
                tile.landForm = _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].mountains;
              } else if (_metadata.height > 0.25) {
                tile.landForm = _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].hills;
              }

              if (_metadata.temperature < 0.2) {
                if (_metadata.temperature < 0.07) {
                  tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].arctic;
                } else {
                  tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tundra;
                }

                continue;
              }

              if (_metadata.humidity < 0.1) {
                tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].desert;
              } else if (_metadata.humidity < 0.3) {
                tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].savanna;
              } else if (_metadata.humidity < 0.7 && _metadata.temperature < 0.5) {
                tile.climate = _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].continental;
              } else {
                tile.climate = _metadata.temperature > 0.5 ? _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical : _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].oceanic;
              }
            }
          }

          var _iterator58 = _createForOfIteratorHelper(this.getNoisedTiles(new ComplexNoise([[0.015, 1], [0.06, 1], [0.3, 1]], this.seed))),
              _step58;

          try {
            for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
              var _step58$value = _slicedToArray(_step58.value, 3),
                  _tile2 = _step58$value[0],
                  value = _step58$value[1],
                  _ = _step58$value[2];

              var bonus = _tile2.climate === _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical ? 0.3 : 0;

              if (value + bonus > -0.2 && Object(_shared__WEBPACK_IMPORTED_MODULE_4__["isForestable"])(_tile2)) {
                _tile2.forest = true;
              }
            }
          } catch (err) {
            _iterator58.e(err);
          } finally {
            _iterator58.f();
          }

          this.fixShallowWater();
          this.adjustHeightmap();
          this.placeRivers();
          this.placeWetlands();
          this.findStartingPositions();
          return this.map;
        }
      }, {
        key: "generateHeightmap",
        value: function generateHeightmap() {
          var size = Math.max(this.width, this.height);
          var noiseLayersCount = Math.floor(Math.pow(size, 0.4));
          var noiseScales = [];

          for (var i = 0; i < noiseLayersCount; i++) {
            noiseScales.push([Math.pow(0.6, i + 4), 1 + this.uniformity * i]);
          }

          var maxValue = noiseScales.reduce(function (total, scaleAndIntensity) {
            return total + scaleAndIntensity[1];
          }, 0);
          var seaLevel = maxValue * this.seaLevel;
          var coastlineNoise = new ComplexNoise(noiseScales, this.seed);
          var heightmapNoise = new ComplexNoise([[0.015, 1], [0.06, 1], [0.3, 1]], this.seed);

          var _iterator59 = _createForOfIteratorHelper(this.getNoisedTiles(coastlineNoise)),
              _step59;

          try {
            for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
              var _step59$value = _slicedToArray(_step59.value, 3),
                  tile = _step59$value[0],
                  value = _step59$value[1],
                  _ = _step59$value[2];

              var height = 0; // Adjust horizontal edges to be more likely sea.

              var distanceToEdge = Math.min(tile.x, this.width - tile.x);
              var edgeThrehold = this.width * 0.1;

              if (distanceToEdge < edgeThrehold) {
                value -= maxValue / 2 * Math.cos(Math.PI / 2 / edgeThrehold * distanceToEdge);
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
          } catch (err) {
            _iterator59.e(err);
          } finally {
            _iterator59.f();
          }
        }
      }, {
        key: "generateTemperature",
        value: function generateTemperature() {
          var _iterator60 = _createForOfIteratorHelper(this.getNoisedTiles(new ComplexNoise([[0.012, 1], [0.07, 1]], this.seed))),
              _step60;

          try {
            for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
              var _step60$value = _slicedToArray(_step60.value, 3),
                  tile = _step60$value[0],
                  value = _step60$value[1],
                  longitude = _step60$value[2];

              var base = (1 - longitude) / 2;
              var noise = (value + 1) / 2 * (1 - longitude);
              var metadata = this.metadata.get(tile);
              metadata.temperature = Math.max(base, Math.min(1, base + noise));
            }
          } catch (err) {
            _iterator60.e(err);
          } finally {
            _iterator60.f();
          }
        }
      }, {
        key: "generateHumidity",
        value: function generateHumidity() {
          var _iterator61 = _createForOfIteratorHelper(this.getNoisedTiles(new ComplexNoise([[0.025, 1], [0.2, 1]], this.seed))),
              _step61;

          try {
            for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
              var _step61$value = _slicedToArray(_step61.value, 3),
                  tile = _step61$value[0],
                  value = _step61$value[1],
                  longitude = _step61$value[2];

              var x = longitude * 10;
              var base = x < Math.PI * 1.5 ? (Math.cos(x) + 1) / 2 - 0.5 : 0;
              var noise = (value + 1) / 2;
              var metadata = this.metadata.get(tile);
              metadata.humidity = Math.max(0, Math.min(1, base * 0.8 + noise));
            }
          } catch (err) {
            _iterator61.e(err);
          } finally {
            _iterator61.f();
          }
        }
      }, {
        key: "getNoisedTiles",
        value: /*#__PURE__*/regeneratorRuntime.mark(function getNoisedTiles(noise) {
          var x, y, noiseValue, halfHeight, longitude;
          return regeneratorRuntime.wrap(function getNoisedTiles$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  x = 0;

                case 1:
                  if (!(x < this.width)) {
                    _context.next = 15;
                    break;
                  }

                  y = 0;

                case 3:
                  if (!(y < this.height)) {
                    _context.next = 12;
                    break;
                  }

                  noiseValue = noise.at(x, y);
                  halfHeight = Math.floor(this.height / 2);
                  longitude = Math.abs((y - halfHeight) / halfHeight);
                  _context.next = 9;
                  return [this.map.tiles[x][y], noiseValue, longitude];

                case 9:
                  y++;
                  _context.next = 3;
                  break;

                case 12:
                  x++;
                  _context.next = 1;
                  break;

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, getNoisedTiles, this);
        })
      }, {
        key: "fixShallowWater",
        value: function fixShallowWater() {
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              var tile = this.map.tiles[x][y];

              if (tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
                var _iterator62 = _createForOfIteratorHelper(tile.neighbours),
                    _step62;

                try {
                  for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                    var neighbour = _step62.value;

                    if (neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep) {
                      neighbour.seaLevel = _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].shallow;
                    }
                  }
                } catch (err) {
                  _iterator62.e(err);
                } finally {
                  _iterator62.f();
                }
              }
            }
          }
        }
      }, {
        key: "adjustHeightmap",
        value: function adjustHeightmap() {
          // Make heighmap suitable for rivers placement - the deeper into land the higher.
          var currentTiles = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["findCoastline"])(this.map.tiles);
          var nextTiles = new Set();
          var visitedTiles = new Set(currentTiles);
          var offset = 0;

          while (currentTiles.length) {
            offset += 0.7;

            var _iterator63 = _createForOfIteratorHelper(currentTiles),
                _step63;

            try {
              for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                var tile = _step63.value;

                var _iterator64 = _createForOfIteratorHelper(tile.neighbours),
                    _step64;

                try {
                  for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                    var neighbour = _step64.value;

                    if (neighbour.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none && !visitedTiles.has(neighbour)) {
                      visitedTiles.add(neighbour);
                      nextTiles.add(neighbour);
                      this.metadata.get(neighbour).height += offset;
                    }
                  }
                } catch (err) {
                  _iterator64.e(err);
                } finally {
                  _iterator64.f();
                }
              }
            } catch (err) {
              _iterator63.e(err);
            } finally {
              _iterator63.f();
            }

            currentTiles = Array.from(nextTiles);
            nextTiles.clear();
          }
        }
      }, {
        key: "placeRivers",
        value: function placeRivers() {
          var _iterator65 = _createForOfIteratorHelper(this.riversSources),
              _step65;

          try {
            for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
              var tile = _step65.value;

              if (tile.riverParts.length) {
                continue;
              }

              var ok = true;

              var _iterator66 = _createForOfIteratorHelper(tile.neighbours),
                  _step66;

              try {
                for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                  var neighbour = _step66.value;

                  if (neighbour.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
                    ok = false;
                  }
                }
              } catch (err) {
                _iterator66.e(err);
              } finally {
                _iterator66.f();
              }

              if (ok) {
                this.buildRiverPath(tile, Math.round(Math.random() * 5));
              }
            }
          } catch (err) {
            _iterator65.e(err);
          } finally {
            _iterator65.f();
          }
        }
      }, {
        key: "buildRiverPath",
        value: function buildRiverPath(tile, direction) {
          var _this12 = this;

          if (direction === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NONE) {
            return;
          }

          var possibleNeighboursDirections = _utils__WEBPACK_IMPORTED_MODULE_3__["POSSIBLE_BORDER_PATHS"][direction];
          var pairs = possibleNeighboursDirections.map(function (pair) {
            return pair.map(function (dir) {
              if (dir === _shared__WEBPACK_IMPORTED_MODULE_4__["TileDirection"].NONE) {
                return tile;
              }

              return Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__["getTileInDirection"])(_this12.map.tiles, tile, dir);
            });
          }).filter(function (pair) {
            return pair[0] && pair[1] && pair[0].seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none && pair[1].seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none && pair[0].riverParts.length < 4 && // small loops prevention, big loops are still an issue
            pair[1].riverParts.length < 4;
          });

          if (pairs.length === 0) {
            return;
          }

          var pairToPlace;

          if (pairs.length === 1) {
            pairToPlace = pairs[0];
          } else {
            var _pairs = _slicedToArray(pairs, 2),
                pairA = _pairs[0],
                pairB = _pairs[1];

            var heightA = (this.metadata.get(pairA[0]).height + this.metadata.get(pairA[1]).height) / 2;
            var heightB = (this.metadata.get(pairB[0]).height + this.metadata.get(pairB[1]).height) / 2;
            pairToPlace = heightA < heightB ? pairA : pairB;
          }

          if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["placeRiverBetweenTiles"]).apply(void 0, _toConsumableArray(pairToPlace))) {
            this.buildRiverPath(pairToPlace[0], pairToPlace[0].getDirectionTo(pairToPlace[1]));
          }
        }
      }, {
        key: "placeWetlands",
        value: function placeWetlands() {
          var _iterator67 = _createForOfIteratorHelper(this.getNoisedTiles(new ComplexNoise([[0.021, 1], [0.08, 1], [0.2, 1]], this.seed))),
              _step67;

          try {
            for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
              var _step67$value = _slicedToArray(_step67.value, 3),
                  tile = _step67$value[0],
                  value = _step67$value[1],
                  _ = _step67$value[2];

              if (value > 0 && Object(_shared__WEBPACK_IMPORTED_MODULE_4__["areWetlandsPossible"])(tile)) {
                tile.wetlands = true;
              }
            }
          } catch (err) {
            _iterator67.e(err);
          } finally {
            _iterator67.f();
          }
        }
      }, {
        key: "findStartingPositions",
        value: function findStartingPositions() {
          var maxTries = 10000;
          var tries = 0;

          while (tries < maxTries && this.startingLocations.length < this.startingLocationsCount) {
            var x = Math.floor(Math.random() * this.width);
            var y = Math.floor(Math.random() * this.height);
            var tile = this.map.tiles[x][y];

            if (tile.seaLevel === _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none && tile.landForm !== _shared__WEBPACK_IMPORTED_MODULE_4__["LandForm"].mountains && !this.startingLocations.includes(tile)) {
              this.startingLocations.push(tile);
            }

            tries++;
          }
        }
      }]);

      return SimplexMapGenerator;
    }();

    var ComplexNoise = /*#__PURE__*/function () {
      function ComplexNoise(scales, seed) {
        _classCallCheck(this, ComplexNoise);

        this.scales = scales;
        this.noises = scales.map(function () {
          return new simplex_noise__WEBPACK_IMPORTED_MODULE_1__(seed);
        });
      }

      _createClass(ComplexNoise, [{
        key: "at",
        value: function at(x, y) {
          var noiseValue = 0;

          for (var i = 0; i < this.noises.length; i++) {
            var _this$scales$i = _slicedToArray(this.scales[i], 2),
                scale = _this$scales$i[0],
                intensity = _this$scales$i[1];

            noiseValue += this.noises[i].noise2D(x * scale, y * scale) * intensity;
          }

          return noiseValue;
        }
      }]);

      return ComplexNoise;
    }();
    /***/

  },

  /***/
  "./src/app/map-generators/utils.ts":
  /*!*****************************************!*\
    !*** ./src/app/map-generators/utils.ts ***!
    \*****************************************/

  /*! exports provided: findCoastline, placeRiverBetweenTiles, POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE, POSSIBLE_BORDER_PATHS, OPPOSITE_DIRECTIONS */

  /***/
  function srcAppMapGeneratorsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _POSSIBLE_RIVER_DIREC, _POSSIBLE_BORDER_PATH, _OPPOSITE_DIRECTIONS;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findCoastline", function () {
      return findCoastline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "placeRiverBetweenTiles", function () {
      return placeRiverBetweenTiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE", function () {
      return POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POSSIBLE_BORDER_PATHS", function () {
      return POSSIBLE_BORDER_PATHS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPPOSITE_DIRECTIONS", function () {
      return OPPOSITE_DIRECTIONS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    function findCoastline(tiles) {
      var coastline = [];

      for (var x = 0; x < tiles.length; x++) {
        for (var y = 0; y < tiles[x].length; y++) {
          var tile = tiles[x][y];

          if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none) {
            continue;
          }

          if (tile.neighbours.find(function (t) {
            return t.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none;
          })) {
            coastline.push(tile);
          }
        }
      }

      return coastline;
    }

    function placeRiverBetweenTiles(tileA, tileB) {
      var direction = tileA.getDirectionTo(tileB);

      if (tileA.riverParts.includes(direction)) {
        return false;
      }

      tileA.riverParts.push(direction);
      tileB.riverParts.push(OPPOSITE_DIRECTIONS[direction]);
      return true;
    } // first direction is clockwise, second is counterclockwise


    var POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE = (_POSSIBLE_RIVER_DIREC = {}, _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE]), _POSSIBLE_RIVER_DIREC); // flow is clockwise for first tile

    var POSSIBLE_BORDER_PATHS = (_POSSIBLE_BORDER_PATH = {}, _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, [[_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE], [_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE]]), _POSSIBLE_BORDER_PATH);
    var OPPOSITE_DIRECTIONS = (_OPPOSITE_DIRECTIONS = {}, _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE), _OPPOSITE_DIRECTIONS);
    /***/
  },

  /***/
  "./src/app/shared/hex-math.ts":
  /*!************************************!*\
    !*** ./src/app/shared/hex-math.ts ***!
    \************************************/

  /*! exports provided: getTileFullNeighbours, getTileNeighbours, getTileInDirection, getDirectionTo, getTilesInRange */

  /***/
  function srcAppSharedHexMathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileFullNeighbours", function () {
      return getTileFullNeighbours;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileNeighbours", function () {
      return getTileNeighbours;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileInDirection", function () {
      return getTileInDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDirectionTo", function () {
      return getDirectionTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTilesInRange", function () {
      return getTilesInRange;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    function getTileFullNeighbours(tiles, x, y) {
      return [getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W)];
    }

    function getTileNeighbours(tiles, x, y) {
      return getTileFullNeighbours(tiles, x, y).filter(function (t) {
        return !!t;
      });
    }

    function getTileInDirection(tiles, tile, direction) {
      switch (direction) {
        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW:
          if (tile.y % 2 === 0 && tile.x === 0 || tile.y === 0) {
            return null;
          }

          return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];

        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE:
          if (tile.y % 2 && tile.x === tiles.length - 1 || tile.y === 0) {
            return null;
          }

          return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];

        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E:
          if (tile.x === tiles.length - 1) {
            return null;
          }

          return tiles[tile.x + 1][tile.y];

        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE:
          if (tile.y % 2 && tile.x === tiles.length - 1 || tile.y === tiles[tile.x].length - 1) {
            return null;
          }

          return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];

        case _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW:
          if (tile.y % 2 === 0 && tile.x === 0 || tile.y === tiles[tile.x].length - 1) {
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
      if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) && toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW;
      }

      if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) && toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE;
      }

      if (toTile.x === fromtile.x + 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E;
      }

      if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) && toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE;
      }

      if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) && toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW;
      }

      if (toTile.x === fromtile.x - 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W;
      }

      return _shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NONE;
    }

    function getTilesInRange(tile, range) {
      var result = new Set([tile]);

      for (var i = 0; i < range; i++) {
        var neighbours = new Set();

        var _iterator68 = _createForOfIteratorHelper(result),
            _step68;

        try {
          for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
            var _tile3 = _step68.value;

            var _iterator70 = _createForOfIteratorHelper(_tile3.neighbours),
                _step70;

            try {
              for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                var neighbour = _step70.value;
                // TODO fix typing
                neighbours.add(neighbour);
              }
            } catch (err) {
              _iterator70.e(err);
            } finally {
              _iterator70.f();
            }
          }
        } catch (err) {
          _iterator68.e(err);
        } finally {
          _iterator68.f();
        }

        var _iterator69 = _createForOfIteratorHelper(neighbours),
            _step69;

        try {
          for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
            var _tile4 = _step69.value;
            result.add(_tile4);
          }
        } catch (err) {
          _iterator69.e(err);
        } finally {
          _iterator69.f();
        }
      }

      return result;
    }
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: TileDirection, Climate, LandForm, SeaLevel, FORESTABLE_CLIMATES, WETLANDS_CLIMATES, isForestable, areWetlandsPossible, isImprovementPossible, isRoadPossible */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tile_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tile.interface */
    "./src/app/shared/tile.interface.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TileDirection", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["TileDirection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Climate", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["Climate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LandForm", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["LandForm"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SeaLevel", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["FORESTABLE_CLIMATES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["WETLANDS_CLIMATES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isForestable", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isForestable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["areWetlandsPossible"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isImprovementPossible"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isRoadPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_1__["isRoadPossible"];
    });
    /***/

  },

  /***/
  "./src/app/shared/tile.interface.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/tile.interface.ts ***!
    \******************************************/

  /*! exports provided: TileDirection, Climate, LandForm, SeaLevel, FORESTABLE_CLIMATES, WETLANDS_CLIMATES, isForestable, areWetlandsPossible, isImprovementPossible, isRoadPossible */

  /***/
  function srcAppSharedTileInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileDirection", function () {
      return TileDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Climate", function () {
      return Climate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandForm", function () {
      return LandForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeaLevel", function () {
      return SeaLevel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function () {
      return FORESTABLE_CLIMATES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function () {
      return WETLANDS_CLIMATES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isForestable", function () {
      return isForestable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function () {
      return areWetlandsPossible;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function () {
      return isImprovementPossible;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isRoadPossible", function () {
      return isRoadPossible;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/tile-improvements */
    "./src/app/core/tile-improvements.ts");

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

    var FORESTABLE_CLIMATES = new Set([Climate.continental, Climate.oceanic, Climate.tropical, Climate.tundra]);
    var WETLANDS_CLIMATES = new Set([Climate.continental, Climate.oceanic, Climate.tropical]);

    function isForestable(tile) {
      return tile.seaLevel === SeaLevel.none && tile.landForm === LandForm.plains && FORESTABLE_CLIMATES.has(tile.climate);
    }

    function areWetlandsPossible(tile) {
      return !!(tile.seaLevel === SeaLevel.none && tile.landForm === LandForm.plains && tile.riverParts.length && WETLANDS_CLIMATES.has(tile.climate));
    }

    function isImprovementPossible(tile, improvement) {
      if (improvement === null) {
        return true;
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm) {
        return tile.seaLevel === SeaLevel.none && tile.landForm === LandForm.plains && tile.climate !== Climate.arctic && !tile.forest && !tile.wetlands;
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine) {
        return tile.landForm === LandForm.hills;
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill) {
        return tile.forest && !tile.wetlands;
      } else {
        return false;
      }
    }

    function isRoadPossible(tile) {
      return tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains;
    }
    /***/

  }
  /******/

});
//# sourceMappingURL=0-es5.worker.js.map