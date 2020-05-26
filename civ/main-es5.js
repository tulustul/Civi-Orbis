function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts":
  /*!***********************************************************************************!*\
    !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWorkerPluginDistLoaderJsName0SrcAppCoreWorkerTs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "0-es5.worker.js";
    /***/
  },

  /***/
  "./src/app/api/change-handlers.ts":
  /*!****************************************!*\
    !*** ./src/app/api/change-handlers.ts ***!
    \****************************************/

  /*! exports provided: initChangeHandlers */

  /***/
  function srcAppApiChangeHandlersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initChangeHandlers", function () {
      return initChangeHandlers;
    });
    /* harmony import */


    var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./unit */
    "./src/app/api/unit.ts");
    /* harmony import */


    var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./city */
    "./src/app/api/city.ts");
    /* harmony import */


    var _tracked_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tracked-player */
    "./src/app/api/tracked-player.ts");
    /* harmony import */


    var _internal_changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./internal/changes */
    "./src/app/api/internal/changes.ts");

    var HANDLERS = {
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
      "trackedPlayer.tilesExplored": onTilesExplored
    };

    function initChangeHandlers() {
      Object(_internal_changes__WEBPACK_IMPORTED_MODULE_3__["setChangesHandlers"])(HANDLERS);
    }

    function onUnitUpdate(state, unitChanneled) {
      var unit = state.unitsMap.get(unitChanneled.id);

      if (unit) {
        unit.update(state, unitChanneled);
        state["_unitUpdated$"].next(unit);
      } else {
        var newUnit = new _unit__WEBPACK_IMPORTED_MODULE_0__["Unit"](state, unitChanneled);
        state.units.push(newUnit);
        state["_unitSpawned$"].next(newUnit);
      }
    }

    function onUnitDestroyed(state, id) {
      var unit = state.unitsMap.get(id);

      if (unit) {
        unit.destroy(state);
        state["_unitDestroyed$"].next(unit);
      }
    }

    function onCityUpdate(state, cityChanneled) {
      var city = state.citiesMap.get(cityChanneled.id);

      if (city) {
        city.update(cityChanneled);
        state["_cityUpdated$"].next(city);
      } else {
        var newCity = new _city__WEBPACK_IMPORTED_MODULE_1__["City"](state, cityChanneled);
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
      var area = state.areasMap.get(data.id);

      if (!area) {
        return;
      }

      area.addTiles(state.map.getTilesFromIds(data.tiles));
    }

    function onAreaTilesRemoved(state, data) {
      var area = state.areasMap.get(data.id);

      if (!area) {
        return;
      }

      area.removeTiles(state.map.getTilesFromIds(data.tiles));
    }

    function onPlayerYieldsUpdate(state, yields) {
      state.trackedPlayer.yields = yields;
    }

    function onTilesExplored(state, tilesIds) {
      var tiles = tilesIds.map(function (id) {
        return state.map.tilesMap.get(id);
      });
      state.trackedPlayer.exploreTiles(tiles);
      state["_tilesExplored$"].next(tiles);
    }

    function onTrackedPlayerSet(state, trackedPlayer) {
      state.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_2__["TrackedPlayer"](state, trackedPlayer);
      state["_trackedPlayer$"].next(state.trackedPlayer);
    }

    function onTilesUpdate(state, tilesChanneled) {
      var tiles = [];

      var _iterator = _createForOfIteratorHelper(tilesChanneled),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tileChanneled = _step.value;
          var tile = state.map.tilesMap.get(tileChanneled.id);
          Object.assign(tile, tileChanneled);

          if (tileChanneled.areaOf !== null) {
            tile.areaOf = state.citiesMap.get(tileChanneled.areaOf);
          }

          if (tileChanneled.cityId !== null) {
            tile.city = state.citiesMap.get(tileChanneled.cityId);
          }

          tiles.push(tile);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      state["_tilesUpdated$"].next(tiles);
    }
    /***/

  },

  /***/
  "./src/app/api/city-details.ts":
  /*!*************************************!*\
    !*** ./src/app/api/city-details.ts ***!
    \*************************************/

  /*! exports provided: CityDetails */

  /***/
  function srcAppApiCityDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityDetails", function () {
      return CityDetails;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/buildings */
    "./src/app/core/buildings.ts");
    /* harmony import */


    var _core_idle_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/idle-product */
    "./src/app/core/idle-product.ts");
    /* harmony import */


    var _core_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");

    var CityDetails = /*#__PURE__*/function () {
      function CityDetails(game, city) {
        _classCallCheck(this, CityDetails);

        this.game = game;
        this.id = city.id;
        this.update(city);
        this.citySimple = game.citiesMap.get(city.id);
      }

      _createClass(CityDetails, [{
        key: "update",
        value: function update(city) {
          var _this = this;

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
            var defition;

            if (city.productType === "building") {
              defition = _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(city.productId);
            } else if (city.productType === "unit") {
              defition = _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(city.productId);
            } else {
              defition = _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(city.productId);
            }

            this.product = {
              type: city.productType,
              productDefinition: defition
            };
          }

          this.foodConsumed = city.foodConsumed;
          this.totalCulture = city.totalCulture;
          this.cultureToExpand = city.cultureToExpand;
          this.tileYields = city.tileYields;
          this.yields = city.yields;
          this.perTurn = city.perTurn;
          this.buildings = city.buildingsIds.map(function (id) {
            return _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id);
          });
          this.buildingsIds = new Set(city.buildingsIds);
          this.tiles = new Set(city.tiles.map(function (id) {
            return _this.game.map.tilesMap.get(id);
          }));
          this.workedTiles = new Set(city.workedTiles.map(function (id) {
            return _this.game.map.tilesMap.get(id);
          }));
          this.availableBuildings = city.availableBuildings.map(function (id) {
            return _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id);
          });
          this.availableIdleProducts = city.availableIdleProducts.map(function (id) {
            return _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(id);
          });
          this.availableUnits = city.availableUnits.map(function (id) {
            return _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(id);
          });
          this.disabledBuildings = new Set(city.disabledBuildings.map(function (id) {
            return _core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id);
          }));
          this.disabledUnits = new Set(city.disabledUnits.map(function (id) {
            return _core_unit__WEBPACK_IMPORTED_MODULE_3__["UNITS_MAP"].get(id);
          }));
          this.disabledIdleProducts = new Set(city.disabledIdleProducts.map(function (id) {
            return _core_idle_product__WEBPACK_IMPORTED_MODULE_2__["IDLE_PRODUCTS_MAP"].get(id);
          }));
        }
      }, {
        key: "getTurnsToProduce",
        value: function getTurnsToProduce(product) {
          return Math.ceil(product.productionCost / this.yields.production);
        }
      }, {
        key: "workTile",
        value: function workTile(tile) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.workTile", {
                      cityId: this.id,
                      tileId: tile.id
                    });

                  case 2:
                    cityData = _context.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "unworkTile",
        value: function unworkTile(tile) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.unworkTile", {
                      cityId: this.id,
                      tileId: tile.id
                    });

                  case 2:
                    cityData = _context2.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "produceBuilding",
        value: function produceBuilding(building) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                      cityId: this.id,
                      type: "building",
                      productId: building.id
                    });

                  case 2:
                    cityData = _context3.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "produceUnit",
        value: function produceUnit(unit) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                      cityId: this.id,
                      type: "unit",
                      productId: unit.id
                    });

                  case 2:
                    cityData = _context4.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "workOnIdleProduct",
        value: function workOnIdleProduct(idleProduct) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.produce", {
                      cityId: this.id,
                      type: "idleProduct",
                      productId: idleProduct.id
                    });

                  case 2:
                    cityData = _context5.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "optimizeYields",
        value: function optimizeYields() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var cityData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_4__["makeCommand"])("city.optimizeYields", this.id);

                  case 2:
                    cityData = _context6.sent;
                    this.update(cityData);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getNotWorkedTiles",
        value: function getNotWorkedTiles() {
          var notWorkedTiles = [];

          var _iterator2 = _createForOfIteratorHelper(this.tiles),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var tile = _step2.value;

              if (!this.workedTiles.has(tile)) {
                notWorkedTiles.push(tile);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return notWorkedTiles;
        }
      }, {
        key: "turnsToExpand",
        get: function get() {
          var remainingCulture = this.cultureToExpand - this.totalCulture;
          return Math.ceil(remainingCulture / this.perTurn.culture);
        }
      }]);

      return CityDetails;
    }();
    /***/

  },

  /***/
  "./src/app/api/city.ts":
  /*!*****************************!*\
    !*** ./src/app/api/city.ts ***!
    \*****************************/

  /*! exports provided: City */

  /***/
  function srcAppApiCityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "City", function () {
      return City;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");

    var City = /*#__PURE__*/function () {
      function City(game, city) {
        _classCallCheck(this, City);

        this.game = game;
        this.id = city.id;
        this.tile = game.map.tilesMap.get(city.tileId);
        this.tile.city = this;
        this.update(city);
        game.citiesMap.set(this.id, this);
      }

      _createClass(City, [{
        key: "update",
        value: function update(city) {
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
      }, {
        key: "getRange",
        value: function getRange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this2 = this;

            var ids;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_1__["makeCommand"])("city.getRange", this.id);

                  case 2:
                    ids = _context7.sent;
                    return _context7.abrupt("return", ids.map(function (id) {
                      return _this2.game.map.tilesMap.get(id);
                    }));

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getWorkTiles",
        value: function getWorkTiles() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this3 = this;

            var data;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_1__["makeCommand"])("city.getWorkTiles", this.id);

                  case 2:
                    data = _context8.sent;
                    return _context8.abrupt("return", {
                      workedTiles: data.workedTiles.map(function (id) {
                        return _this3.game.map.tilesMap.get(id);
                      }),
                      notWorkedTiles: data.notWorkedTiles.map(function (id) {
                        return _this3.game.map.tilesMap.get(id);
                      })
                    });

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return City;
    }();
    /***/

  },

  /***/
  "./src/app/api/game.ts":
  /*!*****************************!*\
    !*** ./src/app/api/game.ts ***!
    \*****************************/

  /*! exports provided: GameApi, gameApi */

  /***/
  function srcAppApiGameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameApi", function () {
      return GameApi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gameApi", function () {
      return gameApi;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./state */
    "./src/app/api/state.ts");

    var GameApi = /*#__PURE__*/function () {
      function GameApi() {
        _classCallCheck(this, GameApi);

        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.state$ = this._state$.asObservable();
        this.init$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) {
          return !!state;
        }));
        this.stop$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) {
          return !state;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1));
        this._nextTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.nextTask$ = this._nextTask$.asObservable();
      }

      _createClass(GameApi, [{
        key: "newGame",
        value: function newGame(mapGeneratorOptions) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var gameChanneled;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (this.state) {
                      this._state$.next(null);
                    }

                    _context9.next = 3;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.new", mapGeneratorOptions);

                  case 3:
                    gameChanneled = _context9.sent;

                    this._state$.next(new _state__WEBPACK_IMPORTED_MODULE_4__["GameState"](gameChanneled));

                    return _context9.abrupt("return", this._state$.value);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "loadGame",
        value: function loadGame(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var gameChanneled;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.state) {
                      this._state$.next(null);
                    }

                    _context10.next = 3;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.loadDump", data);

                  case 3:
                    gameChanneled = _context10.sent;

                    this._state$.next(new _state__WEBPACK_IMPORTED_MODULE_4__["GameState"](gameChanneled));

                    return _context10.abrupt("return", this._state$.value);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "saveGame",
        value: function saveGame() {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.saveDump");
        }
      }, {
        key: "nextPlayer",
        value: function nextPlayer() {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_3__["makeCommand"])("game.nextPlayer");
        }
      }, {
        key: "state",
        get: function get() {
          return this._state$.value;
        }
      }, {
        key: "nextTask",
        get: function get() {
          return this._nextTask$.value;
        }
      }]);

      return GameApi;
    }();

    var gameApi = new GameApi();
    /***/
  },

  /***/
  "./src/app/api/index.ts":
  /*!******************************!*\
    !*** ./src/app/api/index.ts ***!
    \******************************/

  /*! exports provided: GameApi, gameApi */

  /***/
  function srcAppApiIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _internal_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./internal/listener */
    "./src/app/api/internal/listener.ts");
    /* harmony import */


    var _change_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./change-handlers */
    "./src/app/api/change-handlers.ts");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game */
    "./src/app/api/game.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameApi", function () {
      return _game__WEBPACK_IMPORTED_MODULE_2__["GameApi"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "gameApi", function () {
      return _game__WEBPACK_IMPORTED_MODULE_2__["gameApi"];
    });

    Object(_internal_listener__WEBPACK_IMPORTED_MODULE_0__["initWorkerListeners"])();
    Object(_change_handlers__WEBPACK_IMPORTED_MODULE_1__["initChangeHandlers"])();
    /***/
  },

  /***/
  "./src/app/api/internal/changes.ts":
  /*!*****************************************!*\
    !*** ./src/app/api/internal/changes.ts ***!
    \*****************************************/

  /*! exports provided: changeHandlers, setChangesHandlers */

  /***/
  function srcAppApiInternalChangesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changeHandlers", function () {
      return changeHandlers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setChangesHandlers", function () {
      return setChangesHandlers;
    });

    var changeHandlers = new Map();

    function setChangesHandlers(handlers) {
      for (var _i = 0, _Object$entries = Object.entries(handlers); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            changeType = _Object$entries$_i[0],
            handler = _Object$entries$_i[1];

        changeHandlers.set(changeType, handler);
      }
    }
    /***/

  },

  /***/
  "./src/app/api/internal/commander.ts":
  /*!*******************************************!*\
    !*** ./src/app/api/internal/commander.ts ***!
    \*******************************************/

  /*! exports provided: makeCommand */

  /***/
  function srcAppApiInternalCommanderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "makeCommand", function () {
      return makeCommand;
    });
    /* harmony import */


    var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./worker */
    "./src/app/api/internal/worker.ts");

    function makeCommand(command) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        _worker__WEBPACK_IMPORTED_MODULE_0__["awaitingExecutors"].push(resolve);

        _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].postMessage({
          command: command,
          data: data
        });
      });
    }
    /***/

  },

  /***/
  "./src/app/api/internal/listener.ts":
  /*!******************************************!*\
    !*** ./src/app/api/internal/listener.ts ***!
    \******************************************/

  /*! exports provided: initWorkerListeners */

  /***/
  function srcAppApiInternalListenerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initWorkerListeners", function () {
      return initWorkerListeners;
    });
    /* harmony import */


    var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./worker */
    "./src/app/api/internal/worker.ts");
    /* harmony import */


    var _changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./changes */
    "./src/app/api/internal/changes.ts");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game */
    "./src/app/api/game.ts");

    function initWorkerListeners() {
      _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].addEventListener("error", onError, false);

      _worker__WEBPACK_IMPORTED_MODULE_0__["worker"].addEventListener("message", onMessage, false);
    }

    function onMessage(event) {
      var executor = _worker__WEBPACK_IMPORTED_MODULE_0__["awaitingExecutors"].shift();

      if (!executor) {
        console.error("No awaiting executors but message received.");
        return;
      }

      if (event.data.changes.length && !_game__WEBPACK_IMPORTED_MODULE_2__["gameApi"].state) {
        console.error("Received change events but state is not instantiated yet.");
      } else {
        var _iterator3 = _createForOfIteratorHelper(event.data.changes),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var change = _step3.value;
            console.debug("change received: ".concat(change.type));

            var handler = _changes__WEBPACK_IMPORTED_MODULE_1__["changeHandlers"].get(change.type);

            if (!handler) {
              console.error("No handler for change with type \"".concat(change.type, "\""));
              continue;
            }

            handler(_game__WEBPACK_IMPORTED_MODULE_2__["gameApi"].state, change.data);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      executor(event.data.result);

      _game__WEBPACK_IMPORTED_MODULE_2__["gameApi"]["_nextTask$"].next(event.data.nextTask);
    }

    function onError(error) {
      console.error("Webworker error: ".concat(error.message));
    }
    /***/

  },

  /***/
  "./src/app/api/internal/worker.ts":
  /*!****************************************!*\
    !*** ./src/app/api/internal/worker.ts ***!
    \****************************************/

  /*! exports provided: worker, awaitingExecutors */

  /***/
  function srcAppApiInternalWorkerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (__webpack__worker__0) {
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "worker", function () {
        return worker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "awaitingExecutors", function () {
        return awaitingExecutors;
      });

      var worker = new Worker(__webpack__worker__0);
      var awaitingExecutors = [];
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./node_modules/worker-plugin/dist/loader.js?name=0!../../core.worker */
    "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/core.worker.ts"));
    /***/
  },

  /***/
  "./src/app/api/map.ts":
  /*!****************************!*\
    !*** ./src/app/api/map.ts ***!
    \****************************/

  /*! exports provided: TilesMap */

  /***/
  function srcAppApiMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TilesMap", function () {
      return TilesMap;
    });
    /* harmony import */


    var _shared_hex_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/hex-math */
    "./src/app/shared/hex-math.ts");

    var TilesMap = /*#__PURE__*/function () {
      function TilesMap(map) {
        _classCallCheck(this, TilesMap);

        this.width = 0;
        this.height = 0;
        this.tiles = [];
        this.tilesMap = new Map();
        this.width = map.width;
        this.height = map.height;
        this.tiles = map.tiles;

        for (var x = 0; x < this.width; x++) {
          for (var y = 0; y < this.height; y++) {
            var tile = this.tiles[x][y];
            this.tilesMap.set(tile.id, tile);
            tile.neighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_0__["getTileNeighbours"])(this.tiles, x, y);
            tile.fullNeighbours = Object(_shared_hex_math__WEBPACK_IMPORTED_MODULE_0__["getTileFullNeighbours"])(this.tiles, x, y);
            tile.units = [];
          }
        }
      }

      _createClass(TilesMap, [{
        key: "preprocess",
        value: function preprocess(game) {
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              var tile = this.tiles[x][y];

              if (tile.areaOf !== null) {
                tile.areaOf = game.citiesMap.get(tile.areaOf);
              }
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
      }, {
        key: "getTilesFromIds",
        value: function getTilesFromIds(ids) {
          var _this4 = this;

          return ids.map(function (id) {
            return _this4.tilesMap.get(id);
          });
        }
      }]);

      return TilesMap;
    }();
    /***/

  },

  /***/
  "./src/app/api/player.ts":
  /*!*******************************!*\
    !*** ./src/app/api/player.ts ***!
    \*******************************/

  /*! exports provided: Player */

  /***/
  function srcAppApiPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });

    var Player = function Player(player) {
      _classCallCheck(this, Player);

      this.id = player.id;
      this.color = player.color;
      this.cssColor = "#" + this.color.toString(16).padStart(6, "0");
      this.vec4Color = [parseInt(this.cssColor[1] + this.cssColor[2], 16) / 255, parseInt(this.cssColor[3] + this.cssColor[4], 16) / 255, parseInt(this.cssColor[5] + this.cssColor[6], 16) / 255, 1];
      this.areaId = player.areaId;
    };
    /***/

  },

  /***/
  "./src/app/api/saving.ts":
  /*!*******************************!*\
    !*** ./src/app/api/saving.ts ***!
    \*******************************/

  /*! exports provided: saveGameData, loadGameData, deleteSaveGame, listSaveGames, exportSave, importSave */

  /***/
  function srcAppApiSavingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveGameData", function () {
      return saveGameData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadGameData", function () {
      return loadGameData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteSaveGame", function () {
      return deleteSaveGame;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listSaveGames", function () {
      return listSaveGames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "exportSave", function () {
      return exportSave;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "importSave", function () {
      return importSave;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var savesKeyPrefix = "saves:";
    var listKey = "savesList";

    function saveGameData(data, saveName) {
      storeData(saveName, data);
    }

    function loadGameData(saveName) {
      var data = getSave(saveName);

      if (!data) {
        console.error("No save with name ".concat(saveName));
        return null;
      }

      return data;
    }

    function deleteSaveGame(saveName) {
      var saveGames = listSaveGames();

      if (!saveGames.includes(saveName)) {
        console.error("No save with name ".concat(saveName));
        return;
      }

      localStorage.removeItem("".concat(savesKeyPrefix).concat(saveName));
      var index = saveGames.indexOf(saveName);
      saveGames.splice(index, 1);
      saveList(saveGames);
    }

    function listSaveGames() {
      var data = localStorage.getItem(listKey);

      if (!data) {
        return [];
      }

      return JSON.parse(data) || [];
    }

    function exportSave(saveName) {
      var data = getSave(saveName);

      if (!data) {
        return;
      }

      var blob = new Blob([data], {
        type: "text/plain"
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "".concat(saveName, ".json");
      a.click();
    }

    function importSave(file) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var extension, filename, originalName, name, saves, i, data;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                extension = ".json";
                filename = file.name;

                if (filename.endsWith(extension)) {
                  _context11.next = 4;
                  break;
                }

                return _context11.abrupt("return");

              case 4:
                originalName = filename.slice(0, -extension.length);
                name = originalName;
                saves = listSaveGames();
                i = 1;

                while (saves.includes(name)) {
                  name = "".concat(originalName, "_").concat(i++);
                }

                _context11.next = 11;
                return readFile(file);

              case 11:
                data = _context11.sent;
                storeData(name, data);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
    } // private functions below


    function readFile(file) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();
                  reader.readAsText(file);

                  reader.onload = function () {
                    if (reader.result) {
                      resolve(reader.result);
                    } else {
                      reject();
                    }
                  };
                }));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));
    }

    function storeData(saveName, data) {
      localStorage.setItem("".concat(savesKeyPrefix).concat(saveName), data);
      var saveGames = listSaveGames();

      if (!saveGames.includes(saveName)) {
        saveGames.push(saveName);
      }

      saveList(saveGames);
    }

    function getSave(saveName) {
      return localStorage.getItem("".concat(savesKeyPrefix).concat(saveName));
    }

    function saveList(saveGames) {
      localStorage.setItem(listKey, JSON.stringify(saveGames));
    }
    /***/

  },

  /***/
  "./src/app/api/state.ts":
  /*!******************************!*\
    !*** ./src/app/api/state.ts ***!
    \******************************/

  /*! exports provided: GameState */

  /***/
  function srcAppApiStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameState", function () {
      return GameState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./map */
    "./src/app/api/map.ts");
    /* harmony import */


    var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./unit */
    "./src/app/api/unit.ts");
    /* harmony import */


    var _city__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./city */
    "./src/app/api/city.ts");
    /* harmony import */


    var _tracked_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tracked-player */
    "./src/app/api/tracked-player.ts");
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./player */
    "./src/app/api/player.ts");

    var GameState = /*#__PURE__*/function () {
      function GameState(game) {
        _classCallCheck(this, GameState);

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

        var _iterator4 = _createForOfIteratorHelper(this.players),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var player = _step4.value;
            this.playersMap.set(player.id, player);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        this.units = this.restoreUnits(game);
        this.cities = this.restoreCities(game);
        this.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_4__["TrackedPlayer"](this, game.trackedPlayer);
        this.map.preprocess(this);
      }

      _createClass(GameState, [{
        key: "restorePlayers",
        value: function restorePlayers(game) {
          return game.players.map(function (player) {
            return new _player__WEBPACK_IMPORTED_MODULE_7__["Player"](player);
          });
        }
      }, {
        key: "restoreUnits",
        value: function restoreUnits(game) {
          var _this5 = this;

          return game.units.map(function (unit) {
            return new _unit__WEBPACK_IMPORTED_MODULE_2__["Unit"](_this5, unit);
          });
        }
      }, {
        key: "restoreCities",
        value: function restoreCities(game) {
          var _this6 = this;

          return game.cities.map(function (city) {
            return new _city__WEBPACK_IMPORTED_MODULE_3__["City"](_this6, city);
          });
        }
      }, {
        key: "setTrackedPlayer",
        value: function setTrackedPlayer(playerId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var data;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("trackedPlayer.set", playerId);

                  case 2:
                    data = _context13.sent;
                    this.trackedPlayer = new _tracked_player__WEBPACK_IMPORTED_MODULE_4__["TrackedPlayer"](this, data);

                    this._trackedPlayer$.next(this.trackedPlayer);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "getUnitDetails",
        value: function getUnitDetails(unitId) {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("unit.getDetails", unitId);
        }
      }, {
        key: "updateTile",
        value: function updateTile(tile) {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("tile.update", this.serializeTileToUpdate(tile));
        }
      }, {
        key: "serializeTileToUpdate",
        value: function serializeTileToUpdate(tile) {
          return {
            id: tile.id,
            climate: tile.climate,
            landForm: tile.landForm,
            seaLevel: tile.seaLevel,
            riverParts: tile.riverParts,
            forest: tile.forest,
            wetlands: tile.wetlands,
            improvement: tile.improvement,
            road: tile.road
          };
        }
      }, {
        key: "updateTiles",
        value: function updateTiles(tiles) {
          var _this7 = this;

          var data = tiles.map(function (t) {
            return _this7.serializeTileToUpdate(t);
          });
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("tile.bulkUpdate", data);
        }
      }, {
        key: "getCityDetails",
        value: function getCityDetails(cityId) {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("city.getDetails", cityId);
        }
      }, {
        key: "getAreaTiles",
        value: function getAreaTiles(areaId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this8 = this;

            var tileIds;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_5__["makeCommand"])("area.getTiles", areaId);

                  case 2:
                    tileIds = _context14.sent;
                    return _context14.abrupt("return", tileIds.map(function (id) {
                      return _this8.map.tilesMap.get(id);
                    }));

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "updateUnit",
        value: function updateUnit(unitId) {
          this._unitUpdated$.next(this.unitsMap.get(unitId));
        }
      }]);

      return GameState;
    }();
    /***/

  },

  /***/
  "./src/app/api/tracked-player.ts":
  /*!***************************************!*\
    !*** ./src/app/api/tracked-player.ts ***!
    \***************************************/

  /*! exports provided: TrackedPlayer */

  /***/
  function srcAppApiTrackedPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackedPlayer", function () {
      return TrackedPlayer;
    });
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");

    var TrackedPlayer = /*#__PURE__*/function () {
      function TrackedPlayer(game, player) {
        _classCallCheck(this, TrackedPlayer);

        this.exploredTiles = new Set();
        this.units = [];
        this.cities = [];
        this.id = player.id;
        this.color = player.color;
        this.exploredTiles = new Set(player.exploredTiles.map(function (id) {
          return game.map.tilesMap.get(id);
        }));
        this.units = player.units.map(function (id) {
          return game.unitsMap.get(id);
        });
        this.cities = player.cities.map(function (id) {
          return game.citiesMap.get(id);
        });
        this.yields = player.yields;
      }

      _createClass(TrackedPlayer, [{
        key: "exploreTiles",
        value: function exploreTiles(tiles) {
          var _iterator5 = _createForOfIteratorHelper(tiles),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var tile = _step5.value;
              this.exploredTiles.add(tile);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }, {
        key: "revealWorld",
        value: function revealWorld() {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_0__["makeCommand"])("trackedPlayer.revealWorld");
        }
      }]);

      return TrackedPlayer;
    }();
    /***/

  },

  /***/
  "./src/app/api/unit-details.ts":
  /*!*************************************!*\
    !*** ./src/app/api/unit-details.ts ***!
    \*************************************/

  /*! exports provided: UnitDetails */

  /***/
  function srcAppApiUnitDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitDetails", function () {
      return UnitDetails;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _internal_commander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./internal/commander */
    "./src/app/api/internal/commander.ts");

    var UnitDetails = /*#__PURE__*/function () {
      function UnitDetails(game, unit) {
        _classCallCheck(this, UnitDetails);

        this.game = game;
        this.path = null;
        this.id = unit.id;
        this.definition = _core_unit__WEBPACK_IMPORTED_MODULE_1__["UNITS_MAP"].get(unit.definitionId);
        this.update(unit);
      }

      _createClass(UnitDetails, [{
        key: "update",
        value: function update(unit) {
          var _this9 = this;

          this.tile = this.game.map.tilesMap.get(unit.tileId);
          this.player = this.game.playersMap.get(unit.playerId);
          this.actionPointsLeft = unit.actionPointsLeft;
          this.order = unit.order;
          this.path = null;

          if (unit.path) {
            this.path = unit.path.map(function (turn) {
              return turn.map(function (id) {
                return _this9.game.map.tilesMap.get(id);
              });
            });
          }
        }
      }, {
        key: "doAction",
        value: function doAction(action) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var data;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.doAction", {
                      unitId: this.id,
                      action: action
                    });

                  case 2:
                    data = _context15.sent;
                    this.update(data);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "canDoAction",
        value: function canDoAction(action) {
          return true;
        }
      }, {
        key: "setOrder",
        value: function setOrder(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var data;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.setOrder", {
                      unitId: this.id,
                      order: order
                    });

                  case 2:
                    data = _context16.sent;
                    this.update(data);

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "disband",
        value: function disband() {
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.disband", this.id);
        }
      }, {
        key: "findPath",
        value: function findPath(destination) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var data;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.findPath", {
                      unitId: this.id,
                      destinationId: destination.id
                    });

                  case 2:
                    data = _context17.sent;
                    this.update(data);

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "moveAlongPath",
        value: function moveAlongPath() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var data;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.moveAlongPath", this.id);

                  case 2:
                    data = _context18.sent;
                    this.update(data);

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "getRange",
        value: function getRange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this10 = this;

            var ids;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getRange", this.id);

                  case 2:
                    ids = _context19.sent;
                    return _context19.abrupt("return", ids.map(function (tileId) {
                      return _this10.game.map.tilesMap.get(tileId);
                    }));

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "getFailedActionRequirements",
        value: function getFailedActionRequirements(action) {
          // Returns failed requirements.
          return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getFailedActionRequirements", {
            unitId: this.id,
            action: action
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var data;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return Object(_internal_commander__WEBPACK_IMPORTED_MODULE_2__["makeCommand"])("unit.getDetails", this.id);

                  case 2:
                    data = _context20.sent;
                    this.update(data);

                  case 4:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return UnitDetails;
    }();
    /***/

  },

  /***/
  "./src/app/api/unit.ts":
  /*!*****************************!*\
    !*** ./src/app/api/unit.ts ***!
    \*****************************/

  /*! exports provided: Unit */

  /***/
  function srcAppApiUnitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Unit", function () {
      return Unit;
    });
    /* harmony import */


    var _core_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../core/unit */
    "./src/app/core/unit.ts");

    var Unit = /*#__PURE__*/function () {
      function Unit(game, unit) {
        _classCallCheck(this, Unit);

        this.id = unit.id;
        this.tile = game.map.tilesMap.get(unit.tileId);
        this.player = game.playersMap.get(unit.playerId);
        this.definition = _core_unit__WEBPACK_IMPORTED_MODULE_0__["UNITS_MAP"].get(unit.definitionId);
        this.tile.units.push(this);
        game.unitsMap.set(this.id, this);
      }

      _createClass(Unit, [{
        key: "update",
        value: function update(game, unit) {
          var index = this.tile.units.indexOf(this);

          if (index !== -1) {
            this.tile.units.splice(index, 1);
          }

          this.tile = game.map.tilesMap.get(unit.tileId);
          this.tile.units.push(this);
        }
      }, {
        key: "destroy",
        value: function destroy(game) {
          var index = this.tile.units.indexOf(this);

          if (index !== -1) {
            this.tile.units.splice(index, 1);
          }

          game.unitsMap["delete"](this.id);
        }
      }]);

      return Unit;
    }();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ui/ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _ui_map_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui/map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game-canvas/game-canvas.component */
    "./src/app/game-canvas/game-canvas.component.ts");
    /* harmony import */


    var _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui/game-menu/game-menu.component */
    "./src/app/ui/game-menu/game-menu.component.ts");
    /* harmony import */


    var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui/editor/editor.component */
    "./src/app/ui/editor/editor.component.ts");
    /* harmony import */


    var _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui/turn-counter/turn-counter.component */
    "./src/app/ui/turn-counter/turn-counter.component.ts");
    /* harmony import */


    var _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui/unit-panel/unit-panel.component */
    "./src/app/ui/unit-panel/unit-panel.component.ts");
    /* harmony import */


    var _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ui/game-info/game-info.component */
    "./src/app/ui/game-info/game-info.component.ts");
    /* harmony import */


    var _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ui/player-yields/player-yields.component */
    "./src/app/ui/player-yields/player-yields.component.ts");
    /* harmony import */


    var _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ui/next-turn-button/next-turn-button.component */
    "./src/app/ui/next-turn-button/next-turn-button.component.ts");
    /* harmony import */


    var _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ui/minimap/minimap.component */
    "./src/app/ui/minimap/minimap.component.ts");
    /* harmony import */


    var _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui/cities-layer/cities-layer.component */
    "./src/app/ui/cities-layer/cities-layer.component.ts");
    /* harmony import */


    var _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui/city-view/city-view.component */
    "./src/app/ui/city-view/city-view.component.ts");

    function AppComponent_app_game_menu_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-menu");
      }
    }

    function AppComponent_ng_container_3_app_editor_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-editor", 3);
      }
    }

    function AppComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_3_app_editor_1_Template, 1, 0, "app-editor", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.uiState.editorEnabled$))("ngIfElse", _r2);
      }
    }

    function AppComponent_ng_template_5_app_cities_layer_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cities-layer");
      }
    }

    function AppComponent_ng_template_5_app_city_view_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-city-view", 8);
      }

      if (rf & 2) {
        var city_r7 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", city_r7);
      }
    }

    function AppComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r3.mapUi.cityLabelsVisible$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r3.uiState.selectedCity$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx_r3.uiState.selectedCity$));
      }
    }

    var AppComponent = function AppComponent(game, uiState, mapUi) {
      _classCallCheck(this, AppComponent);

      this.game = game;
      this.uiState = uiState;
      this.mapUi = mapUi;
      this.title = "civ";
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 6,
      consts: [[4, "ngIf"], ["gameUiTmpl", ""], ["class", "panel", 4, "ngIf", "ngIfElse"], [1, "panel"], [3, "city", 4, "ngIf"], [1, "panel", "panel-bottom-left-corner"], [1, "panel", "panel-bottom-right-corner"], [1, "panel", "panel-top-left-corner"], [3, "city"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_game_menu_0_Template, 1, 0, "app-game-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 3, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 13, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.uiState.menuVisible$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.game.state$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"], _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__["GameMenuComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"], _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_8__["TurnCounterComponent"], _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_9__["UnitPanelComponent"], _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_11__["PlayerYieldsComponent"], _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_12__["NextTurnButtonComponent"], _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_13__["MinimapComponent"], _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_14__["CitiesLayerComponent"], _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_15__["CityViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .panel.panel-top-left-corner[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0FDQUo7QURDSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FDQ047QURFRTtFQUNFLHdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJi5wYW5lbC10b3AtbGVmdC1jb3JuZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiOmhvc3QgY2FudmFzIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgLnBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgLnBhbmVsLnBhbmVsLXRvcC1sZWZ0LWNvcm5lciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG46aG9zdCAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]
        }, {
          type: _ui_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]
        }, {
          type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game-canvas/game-canvas.component */
    "./src/app/game-canvas/game-canvas.component.ts");
    /* harmony import */


    var _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui/unit-panel/unit-panel.component */
    "./src/app/ui/unit-panel/unit-panel.component.ts");
    /* harmony import */


    var _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui/next-turn-button/next-turn-button.component */
    "./src/app/ui/next-turn-button/next-turn-button.component.ts");
    /* harmony import */


    var _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui/game-info/game-info.component */
    "./src/app/ui/game-info/game-info.component.ts");
    /* harmony import */


    var _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui/debug/debug.component */
    "./src/app/ui/debug/debug.component.ts");
    /* harmony import */


    var _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ui/turn-counter/turn-counter.component */
    "./src/app/ui/turn-counter/turn-counter.component.ts");
    /* harmony import */


    var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ui/editor/editor.component */
    "./src/app/ui/editor/editor.component.ts");
    /* harmony import */


    var _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ui/ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ui/widgets/tabs */
    "./src/app/ui/widgets/tabs/index.ts");
    /* harmony import */


    var _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui/editor/tile-editor/tile-editor.component */
    "./src/app/ui/editor/tile-editor/tile-editor.component.ts");
    /* harmony import */


    var _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui/widgets/radio/radio.component */
    "./src/app/ui/widgets/radio/radio.component.ts");
    /* harmony import */


    var _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ui/widgets/multiselect/multiselect.component */
    "./src/app/ui/widgets/multiselect/multiselect.component.ts");
    /* harmony import */


    var _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./ui/widgets/toggle/toggle.component */
    "./src/app/ui/widgets/toggle/toggle.component.ts");
    /* harmony import */


    var _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ui/editor/tile-painting/tile-painting.component */
    "./src/app/ui/editor/tile-painting/tile-painting.component.ts");
    /* harmony import */


    var _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ui/game-menu/game-menu.component */
    "./src/app/ui/game-menu/game-menu.component.ts");
    /* harmony import */


    var _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ui/game-menu/saves-list/saves-list.component */
    "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
    /* harmony import */


    var _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ui/game-menu/save-view/save-view.component */
    "./src/app/ui/game-menu/save-view/save-view.component.ts");
    /* harmony import */


    var _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ui/game-menu/load-view/load-view.component */
    "./src/app/ui/game-menu/load-view/load-view.component.ts");
    /* harmony import */


    var _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ui/game-menu/main-menu-view/main-menu-view.component */
    "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts");
    /* harmony import */


    var _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ui/game-menu/new-game-view/new-game-view.component */
    "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts");
    /* harmony import */


    var _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ui/editor/unit-editor/unit-editor.component */
    "./src/app/ui/editor/unit-editor/unit-editor.component.ts");
    /* harmony import */


    var _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./ui/editor/city-editor/city-editor.component */
    "./src/app/ui/editor/city-editor/city-editor.component.ts");
    /* harmony import */


    var _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./ui/cities-layer/cities-layer.component */
    "./src/app/ui/cities-layer/cities-layer.component.ts");
    /* harmony import */


    var _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ui/cities-layer/city-info/city-info.component */
    "./src/app/ui/cities-layer/city-info/city-info.component.ts");
    /* harmony import */


    var _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ui/city-view/city-view.component */
    "./src/app/ui/city-view/city-view.component.ts");
    /* harmony import */


    var _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ui/turns.pipe */
    "./src/app/ui/turns.pipe.ts");
    /* harmony import */


    var _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./ui/city-view/work-tiles/work-tiles.component */
    "./src/app/ui/city-view/work-tiles/work-tiles.component.ts");
    /* harmony import */


    var _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./ui/widgets/progress-bar/progress-bar.component */
    "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./ui/button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./ui/minimap/minimap.component */
    "./src/app/ui/minimap/minimap.component.ts");
    /* harmony import */


    var _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./ui/widgets/tooltip.directive */
    "./src/app/ui/widgets/tooltip.directive.ts");
    /* harmony import */


    var _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./ui/widgets/tooltip/tooltip.component */
    "./src/app/ui/widgets/tooltip/tooltip.component.ts");
    /* harmony import */


    var _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./ui/bonuses/bonuses.component */
    "./src/app/ui/bonuses/bonuses.component.ts");
    /* harmony import */


    var _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./ui/percent-bonus.pipe */
    "./src/app/ui/percent-bonus.pipe.ts");
    /* harmony import */


    var _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./ui/product-requirements/product-requirements.component */
    "./src/app/ui/product-requirements/product-requirements.component.ts");
    /* harmony import */


    var _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./ui/player-yields/player-yields.component */
    "./src/app/ui/player-yields/player-yields.component.ts");
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./controls */
    "./src/app/controls.ts");
    /* harmony import */


    var _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./ui/next-turn.service */
    "./src/app/ui/next-turn.service.ts");
    /* harmony import */


    var _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./renderer/renderer */
    "./src/app/renderer/renderer.ts");
    /* harmony import */


    var _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./ui/map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./ui/unit-action-requirements/unit-action-requirements.component */
    "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts");
    /* harmony import */


    var _api_game__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./api/game */
    "./src/app/api/game.ts");
    /* harmony import */


    var _core_game__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./core/game */
    "./src/app/core/game.ts");
    /* harmony import */


    var _renderer_camera__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./ui/editor/players-editor/players-editor.component */
    "./src/app/ui/editor/players-editor/players-editor.component.ts");
    /* harmony import */


    var _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./ui/widgets/spinner/spinner.component */
    "./src/app/ui/widgets/spinner/spinner.component.ts");
    /* harmony import */


    var _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./ui/widgets/modal/modal.component */
    "./src/app/ui/widgets/modal/modal.component.ts");
    /* harmony import */


    var _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./ui/unit-marker/unit-marker.component */
    "./src/app/ui/unit-marker/unit-marker.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_core_game__WEBPACK_IMPORTED_MODULE_47__["Game"], {
        provide: _api_game__WEBPACK_IMPORTED_MODULE_46__["GameApi"],
        useValue: _api_game__WEBPACK_IMPORTED_MODULE_46__["gameApi"]
      }, _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__["UIState"], _controls__WEBPACK_IMPORTED_MODULE_41__["Controls"], _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__["NextTurnService"], _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__["GameRenderer"], _renderer_camera__WEBPACK_IMPORTED_MODULE_48__["Camera"], _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__["MapUi"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"], _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__["UnitPanelComponent"], _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__["NextTurnButtonComponent"], _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__["GameInfoComponent"], _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__["DebugComponent"], _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__["TurnCounterComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"], _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabComponent"], _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__["TileEditorComponent"], _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__["RadioComponent"], _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"], _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__["ToggleComponent"], _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__["TilePaintingComponent"], _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__["GameMenuComponent"], _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__["SavesListComponent"], _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__["SaveViewComponent"], _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__["LoadViewComponent"], _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__["MainMenuViewComponent"], _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__["NewGameViewComponent"], _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__["UnitEditorComponent"], _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__["CityEditorComponent"], _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__["CitiesLayerComponent"], _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__["CityInfoComponent"], _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__["CityViewComponent"], _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__["TurnsPipe"], _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__["WorkTilesComponent"], _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__["ProgressBarComponent"], _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__["ButtonDirective"], _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__["MinimapComponent"], _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__["TooltipDirective"], _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"], _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__["BonusesComponent"], _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__["PercentBonusPipe"], _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__["ProductRequirementsComponent"], _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__["PlayerYieldsComponent"], _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__["UnitActionRequirementsComponent"], _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__["PlayersEditorComponent"], _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__["SpinnerComponent"], _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__["ModalComponent"], _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__["UnitMarkerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _game_canvas_game_canvas_component__WEBPACK_IMPORTED_MODULE_5__["GameCanvasComponent"], _ui_unit_panel_unit_panel_component__WEBPACK_IMPORTED_MODULE_6__["UnitPanelComponent"], _ui_next_turn_button_next_turn_button_component__WEBPACK_IMPORTED_MODULE_7__["NextTurnButtonComponent"], _ui_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_8__["GameInfoComponent"], _ui_debug_debug_component__WEBPACK_IMPORTED_MODULE_9__["DebugComponent"], _ui_turn_counter_turn_counter_component__WEBPACK_IMPORTED_MODULE_10__["TurnCounterComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"], _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_13__["TabComponent"], _ui_editor_tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_14__["TileEditorComponent"], _ui_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_15__["RadioComponent"], _ui_widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"], _ui_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__["ToggleComponent"], _ui_editor_tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_18__["TilePaintingComponent"], _ui_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_19__["GameMenuComponent"], _ui_game_menu_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_20__["SavesListComponent"], _ui_game_menu_save_view_save_view_component__WEBPACK_IMPORTED_MODULE_21__["SaveViewComponent"], _ui_game_menu_load_view_load_view_component__WEBPACK_IMPORTED_MODULE_22__["LoadViewComponent"], _ui_game_menu_main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_23__["MainMenuViewComponent"], _ui_game_menu_new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_24__["NewGameViewComponent"], _ui_editor_unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_25__["UnitEditorComponent"], _ui_editor_city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_26__["CityEditorComponent"], _ui_cities_layer_cities_layer_component__WEBPACK_IMPORTED_MODULE_27__["CitiesLayerComponent"], _ui_cities_layer_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_28__["CityInfoComponent"], _ui_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_29__["CityViewComponent"], _ui_turns_pipe__WEBPACK_IMPORTED_MODULE_30__["TurnsPipe"], _ui_city_view_work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_31__["WorkTilesComponent"], _ui_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_32__["ProgressBarComponent"], _ui_button_directive__WEBPACK_IMPORTED_MODULE_33__["ButtonDirective"], _ui_minimap_minimap_component__WEBPACK_IMPORTED_MODULE_34__["MinimapComponent"], _ui_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_35__["TooltipDirective"], _ui_widgets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"], _ui_bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_37__["BonusesComponent"], _ui_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_38__["PercentBonusPipe"], _ui_product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_39__["ProductRequirementsComponent"], _ui_player_yields_player_yields_component__WEBPACK_IMPORTED_MODULE_40__["PlayerYieldsComponent"], _ui_unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_45__["UnitActionRequirementsComponent"], _ui_editor_players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_49__["PlayersEditorComponent"], _ui_widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_50__["SpinnerComponent"], _ui_widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_51__["ModalComponent"], _ui_unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_52__["UnitMarkerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]],
          providers: [_core_game__WEBPACK_IMPORTED_MODULE_47__["Game"], {
            provide: _api_game__WEBPACK_IMPORTED_MODULE_46__["GameApi"],
            useValue: _api_game__WEBPACK_IMPORTED_MODULE_46__["gameApi"]
          }, _ui_ui_state__WEBPACK_IMPORTED_MODULE_12__["UIState"], _controls__WEBPACK_IMPORTED_MODULE_41__["Controls"], _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_42__["NextTurnService"], _renderer_renderer__WEBPACK_IMPORTED_MODULE_43__["GameRenderer"], _renderer_camera__WEBPACK_IMPORTED_MODULE_48__["Camera"], _ui_map_ui__WEBPACK_IMPORTED_MODULE_44__["MapUi"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/controls.ts":
  /*!*****************************!*\
    !*** ./src/app/controls.ts ***!
    \*****************************/

  /*! exports provided: Controls */

  /***/
  function srcAppControlsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Controls", function () {
      return Controls;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/game */
    "./src/app/api/game.ts");
    /* harmony import */


    var _renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui/next-turn.service */
    "./src/app/ui/next-turn.service.ts");
    /* harmony import */


    var _ui_map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui/map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _ui_ui_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui/ui-state */
    "./src/app/ui/ui-state.ts");

    var Controls = /*#__PURE__*/function () {
      function Controls(game, camera, nextTurnService, mapUi, uiState) {
        _classCallCheck(this, Controls);

        this.game = game;
        this.camera = camera;
        this.nextTurnService = nextTurnService;
        this.mapUi = mapUi;
        this.uiState = uiState;
        this.isMousePressed = false;
        this._mouseButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.mouseButton$ = this._mouseButton$.asObservable();
      }

      _createClass(Controls, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this11 = this;

          this.isMousePressed = true;

          this._mouseButton$.next(event.button);

          event.preventDefault();
          event.stopPropagation();

          if (this.mapUi.selectedUnit && this.mouseButton === 2) {
            var tile = this.getTileFromMouseEvent(event);

            if (tile) {
              this.mapUi.selectedUnit.findPath(tile).then(function () {
                if (_this11.mapUi.selectedUnit) {
                  _this11.mapUi.setPath(_this11.mapUi.selectedUnit.path);
                }
              });
            }
          }

          return false;
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          var hoveredTile = this.mapUi.hoveredTile;

          if (hoveredTile) {
            this.mapUi.clickTile(hoveredTile);
          }

          return false;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(event) {
          var _this12 = this;

          var _this$camera$screenTo = this.camera.screenToGame(event.clientX, event.clientY),
              _this$camera$screenTo2 = _slicedToArray(_this$camera$screenTo, 2),
              x = _this$camera$screenTo2[0],
              y = _this$camera$screenTo2[1];

          var selectedUnit = this.mapUi.selectedUnit;

          if (selectedUnit && this.mouseButton === 2) {
            var tile = this.game.state.map.get(x, y);

            if (tile) {
              selectedUnit.moveAlongPath().then(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          this.mapUi.setPath(selectedUnit.path); // to refresh the ui

                          this.mapUi["_selectedUnit$"].next(selectedUnit);
                          _context21.t0 = this.mapUi.unitRangeArea;
                          _context21.next = 5;
                          return selectedUnit.getRange();

                        case 5:
                          _context21.t1 = _context21.sent;

                          _context21.t0.setTiles.call(_context21.t0, _context21.t1);

                        case 7:
                        case "end":
                          return _context21.stop();
                      }
                    }
                  }, _callee21, this);
                }));
              });
            }
          }

          this.isMousePressed = false;

          this._mouseButton$.next(null);
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(event) {
          var _this13 = this;

          var tile = this.getTileFromMouseEvent(event);

          if (tile !== this.mapUi.hoveredTile) {
            this.mapUi.hoverTile(tile);

            if (tile && this.mapUi.selectedUnit && this.mouseButton === 2) {
              this.mapUi.selectedUnit.findPath(tile).then(function () {
                if (_this13.mapUi.selectedUnit) {
                  _this13.mapUi.setPath(_this13.mapUi.selectedUnit.path);
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
      }, {
        key: "onWheel",
        value: function onWheel(event) {
          this.camera.scaleByWithEasing(1 + (event.deltaY > 0 ? -0.3 : 0.3), event.clientX, event.clientY, 300);
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          if (event.key === "Enter") {
            this.nextTurnService.next();
          } else if (event.key === "Escape") {
            this.uiState.menuVisible$.next(true);
          }
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp(event) {}
      }, {
        key: "getTileFromMouseEvent",
        value: function getTileFromMouseEvent(event) {
          var _this$camera$screenTo3 = this.camera.screenToGame(event.clientX, event.clientY),
              _this$camera$screenTo4 = _slicedToArray(_this$camera$screenTo3, 2),
              x = _this$camera$screenTo4[0],
              y = _this$camera$screenTo4[1];

          return this.game.state.map.get(x, y);
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {// this.mapUi.setPath(this.activeUnit?.path || null);
        }
      }, {
        key: "mouseButton",
        get: function get() {
          return this._mouseButton$.value;
        }
      }]);

      return Controls;
    }();

    Controls.ɵfac = function Controls_Factory(t) {
      return new (t || Controls)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_game__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__["NextTurnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_ui_state__WEBPACK_IMPORTED_MODULE_7__["UIState"]));
    };

    Controls.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Controls,
      factory: Controls.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Controls, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _api_game__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: _renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _ui_next_turn_service__WEBPACK_IMPORTED_MODULE_5__["NextTurnService"]
        }, {
          type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]
        }, {
          type: _ui_ui_state__WEBPACK_IMPORTED_MODULE_7__["UIState"]
        }];
      }, null);
    })();
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


    var _collector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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

          _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].addAreaTiles(this.id, [tile]);
        }
      }, {
        key: "addBulk",
        value: function addBulk(tiles) {
          var _iterator6 = _createForOfIteratorHelper(tiles),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var tile = _step6.value;
              this.tiles.add(tile);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].addAreaTiles(this.id, tiles);
        }
      }, {
        key: "remove",
        value: function remove(tile) {
          this.tiles["delete"](tile);

          _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].removeAreaTiles(this.id, [tile]);
        }
      }, {
        key: "removeBulk",
        value: function removeBulk(tiles) {
          var _iterator7 = _createForOfIteratorHelper(tiles),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var tile = _step7.value;
              this.tiles["delete"](tile);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_0__["collector"].removeAreaTiles(this.id, tiles);
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


    var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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
          var area = new _area__WEBPACK_IMPORTED_MODULE_0__["AreaCore"]();
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


    var _data_buildings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../data/buildings */
    "./src/app/data/buildings.ts");

    var BUILDINGS_MAP = new Map();

    var _iterator8 = _createForOfIteratorHelper(_data_buildings__WEBPACK_IMPORTED_MODULE_0__["BUILDINGS"]),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var definition = _step8.value;
        BUILDINGS_MAP.set(definition.id, definition);
      }
      /***/

    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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


    var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./city */
    "./src/app/core/city.ts");
    /* harmony import */


    var _tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

          if (tile.landForm === _shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains || tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            return null;
          }

          var city = new _city__WEBPACK_IMPORTED_MODULE_0__["CityCore"](tile, player);
          city.id = this.lastId++;
          city.size = 1;
          city.name = "City ".concat(city.id);
          city.tile = tile;
          this.cities.push(city);
          this.citiesMap.set(city.id, city);

          var _iterator9 = _createForOfIteratorHelper(tile.neighbours),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var neighbour = _step9.value;
              city.addTile(neighbour);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          player.addCity(city);
          tile.city = city;
          tile.forest = false;
          tile.wetlands = false;
          tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileRoad"].road;
          tile.update();

          var _iterator10 = _createForOfIteratorHelper(tile.getTilesInRange(3)),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var t = _step10.value;
              t.sweetSpotValue = 0;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          if (isNew) {
            city.optimizeYields();
          }

          _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].cities.add(city);

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

          var _iterator11 = _createForOfIteratorHelper(city.tiles),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var tile = _step11.value;
              city.removeTile(tile);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          _collector__WEBPACK_IMPORTED_MODULE_3__["collector"].citiesDestroyed.add(city.id);
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          var _iterator12 = _createForOfIteratorHelper(this.cities),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var city = _step12.value;
              city.nextTurn();
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
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


    var _yields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./yields */
    "./src/app/core/yields.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _data_buildings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/buildings */
    "./src/app/data/buildings.ts");
    /* harmony import */


    var _data_idle_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/idle-products */
    "./src/app/data/idle-products.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      _createClass(CityCore, [{
        key: "nextTurn",
        value: function nextTurn() {
          this.changedSize = false;
          this.progressExpansion();
          this.progressProduction();
          this.progressGrowth();
          this.updateYields();

          if (this.player === this.player.game.trackedPlayer || this.changedSize) {
            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);
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

          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);
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

          Object(_yields__WEBPACK_IMPORTED_MODULE_0__["zeroYields"])(this.tileYields);
          this.tileYields.food = 2;
          this.tileYields.production = 1;

          var _iterator13 = _createForOfIteratorHelper(this.workedTiles),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var tile = _step13.value;
              Object(_yields__WEBPACK_IMPORTED_MODULE_0__["addYields"])(this.tileYields, tile.yields);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          this.tileYields.production += this.freeTileWorkers;
          Object(_yields__WEBPACK_IMPORTED_MODULE_0__["copyYields"])(this.yields, this.tileYields);

          var _iterator14 = _createForOfIteratorHelper(this.buildings),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var building = _step14.value;
              this.applyBonuses(building.bonuses);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          if (((_a = this.product) === null || _a === void 0 ? void 0 : _a.type) === "idleProduct") {
            var idleProduct = this.product.productDefinition;
            this.applyBonuses(idleProduct.bonuses);
          }

          Object(_yields__WEBPACK_IMPORTED_MODULE_0__["roundYields"])(this.yields);
          this.foodConsumed = this.size;
          Object(_yields__WEBPACK_IMPORTED_MODULE_0__["copyYields"])(this.perTurn, this.yields);
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

            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
          }
        }
      }, {
        key: "removeTile",
        value: function removeTile(tile) {
          if (this.tiles.has(tile)) {
            this.tiles["delete"](tile);
            tile.areaOf = null;
            this.player.area.remove(tile);

            _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
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

          var _iterator15 = _createForOfIteratorHelper(this.tiles),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var tile = _step15.value;

              var _iterator16 = _createForOfIteratorHelper(tile.neighbours),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var neighbour = _step16.value;

                  if (!neighbour.areaOf) {
                    availableTiles.add(neighbour);
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return availableTiles;
        }
      }, {
        key: "pickBestTileToWork",
        value: function pickBestTileToWork(tiles) {
          var bestTile = null;
          var bestYields = 0;

          var _iterator17 = _createForOfIteratorHelper(tiles),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var tile = _step17.value;
              var yields = tile.totalYields;

              if (yields > bestYields) {
                bestYields = yields;
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
        key: "pickBestTileToExpand",
        value: function pickBestTileToExpand(cityTile, tiles) {
          var bestTile = null;
          var bestScore = -Infinity;

          var _iterator18 = _createForOfIteratorHelper(tiles),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var tile = _step18.value;
              var score = tile.totalYields - cityTile.getDistanceTo(tile) / 2;

              if (score > bestScore) {
                bestScore = score;
                bestTile = tile;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
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
          var _iterator19 = _createForOfIteratorHelper(product.requirements),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var r = _step19.value;

              if (!r.check(this)) {
                return false;
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          var _iterator20 = _createForOfIteratorHelper(product.weakRequirements),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _r = _step20.value;

              if (!_r.check(this)) {
                return false;
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          return true;
        }
      }, {
        key: "getAvailableProducts",
        value: function getAvailableProducts(products, city) {
          var results = [];

          var _iterator21 = _createForOfIteratorHelper(products),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var p = _step21.value;
              var ok = true;

              var _iterator22 = _createForOfIteratorHelper(p.requirements),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var r = _step22.value;

                  if (!r.check(city)) {
                    ok = false;
                    break;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              if (ok) {
                results.push(p);
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          return results;
        }
      }, {
        key: "getDisabledProducts",
        value: function getDisabledProducts(products, city) {
          var results = new Set();

          var _iterator23 = _createForOfIteratorHelper(products),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var p = _step23.value;

              var _iterator24 = _createForOfIteratorHelper(p.weakRequirements),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var r = _step24.value;

                  if (!r.check(city)) {
                    results.add(p);
                  }
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          return results;
        }
      }, {
        key: "updateProductsList",
        value: function updateProductsList() {
          var _this14 = this;

          this.availableUnits = this.getAvailableProducts(_data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"], this);
          this.disabledUnits = this.getDisabledProducts(this.availableUnits, this);

          var notBuildBuildings = _data_buildings__WEBPACK_IMPORTED_MODULE_2__["BUILDINGS"].filter(function (b) {
            var _a;

            return ((_a = _this14.product) === null || _a === void 0 ? void 0 : _a.productDefinition) !== b && !_this14.buildings.includes(b);
          });

          this.availableBuildings = this.getAvailableProducts(notBuildBuildings, this);
          this.disabledBuildings = this.getDisabledProducts(this.availableBuildings, this);
          this.availableIdleProducts = _data_idle_products__WEBPACK_IMPORTED_MODULE_3__["IDLE_PRODUCTS"];
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

          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].cities.add(this);

          var _iterator25 = _createForOfIteratorHelper(this.tiles),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var tile = _step25.value;

              _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].tiles.add(tile);
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
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


    var _serialization_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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

          var _iterator26 = _createForOfIteratorHelper(this.units),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var unit = _step26.value;
              changes.push({
                type: "unit.updated",
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["unitToChannel"])(unit)
              });
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          var _iterator27 = _createForOfIteratorHelper(this.unitsDestroyed),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var id = _step27.value;
              changes.push({
                type: "unit.destroyed",
                data: id
              });
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          var _iterator28 = _createForOfIteratorHelper(this.cities),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var city = _step28.value;
              changes.push({
                type: "city.updated",
                data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["cityToChannel"])(city)
              });
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }

          var _iterator29 = _createForOfIteratorHelper(this.citiesDestroyed),
              _step29;

          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _id = _step29.value;
              changes.push({
                type: "city.destroyed",
                data: _id
              });
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }

          if (this.tiles.size) {
            changes.push({
              type: "tiles.updated",
              data: Array.from(this.tiles).map(function (tile) {
                return Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["tileToChannel"])(tile);
              })
            });
          }

          var _iterator30 = _createForOfIteratorHelper(this.areaTilesAdded.entries()),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _step30$value = _slicedToArray(_step30.value, 2),
                  _id2 = _step30$value[0],
                  tiles = _step30$value[1];

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
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }

          var _iterator31 = _createForOfIteratorHelper(this.areaTilesRemoved.entries()),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _step31$value = _slicedToArray(_step31.value, 2),
                  _id3 = _step31$value[0],
                  _tiles = _step31$value[1];

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
            _iterator31.e(err);
          } finally {
            _iterator31.f();
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
              data: Object(_serialization_channel__WEBPACK_IMPORTED_MODULE_0__["trackedPlayerToChannel"])(this.trackedPlayer)
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


    var _unit_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./unit-manager */
    "./src/app/core/unit-manager.ts");
    /* harmony import */


    var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./debug */
    "./src/app/core/debug.ts");
    /* harmony import */


    var _cities_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cities-manager */
    "./src/app/core/cities-manager.ts");
    /* harmony import */


    var _areas_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./areas-manager */
    "./src/app/core/areas-manager.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var Game = /*#__PURE__*/function () {
      function Game() {
        _classCallCheck(this, Game);

        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"]();
        this.players = [];
        this.activePlayerIndex = -1;
        this.humanPlayer = null;
        this.turn = 1;
        this.areasManager = new _areas_manager__WEBPACK_IMPORTED_MODULE_3__["AreasManager"]();
        this.unitsManager = new _unit_manager__WEBPACK_IMPORTED_MODULE_0__["UnitsManager"](this);
        this.citiesManager = new _cities_manager__WEBPACK_IMPORTED_MODULE_2__["CitiesManager"]();
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
              _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].trackedPlayer = this.trackedPlayer;
            }
          }
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          this.unitsManager.nextTurn();
          this.citiesManager.nextTurn();

          var _iterator32 = _createForOfIteratorHelper(this.players),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var player = _step32.value;
              player.nextTurn();
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          this.turn++;
          _collector__WEBPACK_IMPORTED_MODULE_4__["collector"].turn = this.turn;
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


    var _data_idle_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../data/idle-products */
    "./src/app/data/idle-products.ts");

    var IDLE_PRODUCTS_MAP = new Map();

    var _iterator33 = _createForOfIteratorHelper(_data_idle_products__WEBPACK_IMPORTED_MODULE_0__["IDLE_PRODUCTS"]),
        _step33;

    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var definition = _step33.value;
        IDLE_PRODUCTS_MAP.set(definition.id, definition);
      }
      /***/

    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
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

    var ProductRequirement = function ProductRequirement() {
      _classCallCheck(this, ProductRequirement);
    };

    var BuildingRequirement = /*#__PURE__*/function (_ProductRequirement) {
      _inherits(BuildingRequirement, _ProductRequirement);

      var _super = _createSuper(BuildingRequirement);

      function BuildingRequirement(buildingId) {
        var _this15;

        _classCallCheck(this, BuildingRequirement);

        _this15 = _super.call(this);
        _this15.buildingId = buildingId;
        _this15.id = "building";
        return _this15;
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
        var _this16;

        _classCallCheck(this, SizeRequirement);

        _this16 = _super2.call(this);
        _this16.size = size;
        _this16.id = "size";
        return _this16;
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


    var _tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var ACTION_TO_IMPROVEMENT = {
      buildFarm: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm,
      buildMine: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine,
      buildSawmill: _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill
    };

    function getPublicWorksRequired(action) {
      if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
      }

      var improvement = ACTION_TO_IMPROVEMENT[action];

      if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
      }

      return 0;
    }

    function getPublicWorksPerTurn(action) {
      if (action === "buildRoad") {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
      }

      var improvement = ACTION_TO_IMPROVEMENT[action];

      if (improvement !== undefined) {
        return _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
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
        var _this17;

        _classCallCheck(this, OwnTileRequirement);

        _this17 = _super3.apply(this, arguments);
        _this17.id = "ownTile";
        return _this17;
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
        var _this18;

        _classCallCheck(this, NotForeignTileRequirement);

        _this18 = _super4.apply(this, arguments);
        _this18.id = "notForeignTile";
        return _this18;
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
        var _this19;

        _classCallCheck(this, ImprovementNotYetBuiltRequirement);

        _this19 = _super5.call(this);
        _this19.improvement = improvement;
        _this19.id = "sameImprovement";
        return _this19;
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
        var _this20;

        _classCallCheck(this, IsImprovementPossibleRequirement);

        _this20 = _super6.call(this);
        _this20.improvement = improvement;
        _this20.id = "improvementPossible";
        return _this20;
      }

      _createClass(IsImprovementPossibleRequirement, [{
        key: "check",
        value: function check(unit) {
          return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["isImprovementPossible"])(unit.tile, this.improvement);
        }
      }]);

      return IsImprovementPossibleRequirement;
    }(ActionRequirement);

    var NoRoadRequirement = /*#__PURE__*/function (_ActionRequirement5) {
      _inherits(NoRoadRequirement, _ActionRequirement5);

      var _super7 = _createSuper(NoRoadRequirement);

      function NoRoadRequirement() {
        var _this21;

        _classCallCheck(this, NoRoadRequirement);

        _this21 = _super7.apply(this, arguments);
        _this21.id = "noRoad";
        return _this21;
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
        var _this22;

        _classCallCheck(this, isRoadPossibleRequirement);

        _this22 = _super8.apply(this, arguments);
        _this22.id = "roadPossible";
        return _this22;
      }

      _createClass(isRoadPossibleRequirement, [{
        key: "check",
        value: function check(unit) {
          return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["isRoadPossible"])(unit.tile);
        }
      }]);

      return isRoadPossibleRequirement;
    }(ActionRequirement);

    var PublicWorksPointsRequirement = /*#__PURE__*/function (_ActionRequirement7) {
      _inherits(PublicWorksPointsRequirement, _ActionRequirement7);

      var _super9 = _createSuper(PublicWorksPointsRequirement);

      function PublicWorksPointsRequirement() {
        var _this23;

        _classCallCheck(this, PublicWorksPointsRequirement);

        _this23 = _super9.apply(this, arguments);
        _this23.id = "publicWorks";
        return _this23;
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
      unit.player.yields.total.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS"][improvement];
      unit.player.yields.costs.publicWorks += _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
      unit.player.yields.perTurn.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN"][improvement];
    }

    function buildRoad(game, unit) {
      unit.actionPointsLeft = 0;
      unit.tile.road = _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road;
      unit.tile.update();

      var _iterator34 = _createForOfIteratorHelper(unit.tile.neighbours),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var neighbour = _step34.value;
          neighbour.update();
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }

      unit.player.updateUnitsWithoutOrders();
      unit.player.yields.total.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
      unit.player.yields.costs.publicWorks += _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
      unit.player.yields.perTurn.publicWorks -= _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["ROAD_PUBLIC_WORKS_COSTS_PER_TURN"][_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road];
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
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm), new PublicWorksPointsRequirement()]
      },
      buildMine: {
        action: "buildMine",
        name: "Build a mine",
        fn: function fn(game, unit) {
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine), new PublicWorksPointsRequirement()]
      },
      buildSawmill: {
        action: "buildSawmill",
        name: "Build a sawmill",
        fn: function fn(game, unit) {
          return buildImprovement(game, unit, _tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill);
        },
        requirements: [new OwnTileRequirement(), new ImprovementNotYetBuiltRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill), new IsImprovementPossibleRequirement(_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill), new PublicWorksPointsRequirement()]
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


    var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./unit */
    "./src/app/core/unit.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

        var _iterator35 = _createForOfIteratorHelper(_data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"]),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var definition = _step35.value;
            this.definitions.set(definition.id, definition);
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }
      }

      _createClass(UnitsManager, [{
        key: "spawn",
        value: function spawn(id, tile, player) {
          var definition = this.definitions.get(id);

          if (!definition) {
            throw Error("UnitsManager: No unit with id \"".concat(id, "\""));
          }

          var unit = new _unit__WEBPACK_IMPORTED_MODULE_0__["UnitCore"](tile, definition, player);
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

          _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].unitsDestroyed.add(unit.id);
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
      }, {
        key: "getMovementCost",
        value: function getMovementCost(unit, target) {
          return unit.tile.neighboursCosts.get(target) || Infinity;
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          var _iterator36 = _createForOfIteratorHelper(this.units),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var unit = _step36.value;

              if (unit.path) {
                this.moveAlongPath(unit);
              }

              if (unit.order === "skip") {
                unit.setOrder(null);
              }

              unit.actionPointsLeft = unit.definition.actionPoints;
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
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


    var _unit_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./unit-actions */
    "./src/app/core/unit-actions.ts");
    /* harmony import */


    var _data_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var _collector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./collector */
    "./src/app/core/collector.ts");

    var UNITS_MAP = new Map();

    var _iterator37 = _createForOfIteratorHelper(_data_units__WEBPACK_IMPORTED_MODULE_1__["UNITS_DEFINITIONS"]),
        _step37;

    try {
      for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
        var definition = _step37.value;
        UNITS_MAP.set(definition.id, definition);
      }
    } catch (err) {
      _iterator37.e(err);
    } finally {
      _iterator37.f();
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

          _unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].fn(this.player.game, this);

          _collector__WEBPACK_IMPORTED_MODULE_2__["collector"].units.add(this);
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

          var _iterator38 = _createForOfIteratorHelper(_unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].requirements),
              _step38;

          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
              var r = _step38.value;

              if (!r.check(this, action)) {
                return false;
              }
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }

          return true;
        }
      }, {
        key: "getFailedActionRequirements",
        value: function getFailedActionRequirements(action) {
          var _this24 = this;

          return _unit_actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][action].requirements.filter(function (r) {
            return !r.check(_this24, action);
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

          var _iterator39 = _createForOfIteratorHelper(tile.neighbours),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var neighbour = _step39.value;
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
            _iterator39.e(err);
          } finally {
            _iterator39.f();
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


    var _core_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("granary")],
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
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("workshop")],
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
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("workshop")],
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
      requirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("bigGranary"), new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("bigWorkshop")],
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


    var _core_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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
      weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["BuildingRequirement"]("granary"), new _core_product__WEBPACK_IMPORTED_MODULE_0__["SizeRequirement"](3)]
    }, {
      id: "worker",
      name: "Worker",
      type: "civilian",
      actionPoints: 2,
      power: 0,
      actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
      productionCost: 20,
      requirements: [],
      weakRequirements: [new _core_product__WEBPACK_IMPORTED_MODULE_0__["SizeRequirement"](2)]
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
  "./src/app/game-canvas/game-canvas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/game-canvas/game-canvas.component.ts ***!
    \******************************************************/

  /*! exports provided: GameCanvasComponent */

  /***/
  function srcAppGameCanvasGameCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameCanvasComponent", function () {
      return GameCanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../controls */
    "./src/app/controls.ts");
    /* harmony import */


    var _renderer_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../renderer/renderer */
    "./src/app/renderer/renderer.ts");

    var _c0 = ["canvas"];

    var GameCanvasComponent = /*#__PURE__*/function () {
      function GameCanvasComponent(controls, renderer) {
        _classCallCheck(this, GameCanvasComponent);

        this.controls = controls;
        this.renderer = renderer;
      }

      _createClass(GameCanvasComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setCanvas(this.canvas.nativeElement);
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(event) {
          event.preventDefault();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.renderer.resize(window.innerWidth, window.innerHeight);
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          this.controls.onKeyDown(event);
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp(event) {
          this.controls.onKeyUp(event);
        }
      }]);

      return GameCanvasComponent;
    }();

    GameCanvasComponent.ɵfac = function GameCanvasComponent_Factory(t) {
      return new (t || GameCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controls__WEBPACK_IMPORTED_MODULE_1__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_renderer_renderer__WEBPACK_IMPORTED_MODULE_2__["GameRenderer"]));
    };

    GameCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameCanvasComponent,
      selectors: [["app-game-canvas"]],
      viewQuery: function GameCanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      hostBindings: function GameCanvasComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GameCanvasComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown", function GameCanvasComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup", function GameCanvasComponent_keyup_HostBindingHandler($event) {
            return ctx.onKeyUp($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 0,
      consts: [[3, "click", "mousedown", "mouseup", "mousemove", "wheel", "contextmenu"], ["canvas", ""]],
      template: function GameCanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameCanvasComponent_Template_canvas_click_0_listener($event) {
            return ctx.controls.onClick($event);
          })("mousedown", function GameCanvasComponent_Template_canvas_mousedown_0_listener($event) {
            return ctx.controls.onMouseDown($event);
          })("mouseup", function GameCanvasComponent_Template_canvas_mouseup_0_listener($event) {
            return ctx.controls.onMouseUp($event);
          })("mousemove", function GameCanvasComponent_Template_canvas_mousemove_0_listener($event) {
            return ctx.controls.onMouseMove($event);
          })("wheel", function GameCanvasComponent_Template_canvas_wheel_0_listener($event) {
            return ctx.controls.onWheel($event);
          })("contextmenu", function GameCanvasComponent_Template_canvas_contextmenu_0_listener($event) {
            return ctx.onContextMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  background-color: black;\n  z-index: -10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC9nYW1lLWNhbnZhcy9nYW1lLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS1jYW52YXMvZ2FtZS1jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FudmFzL2dhbWUtY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjYW52YXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IC0xMDsgLy8gYWxsb3cgdWkgdG8gY292ZXIgdGhlIGNhbnZhc1xuICB9XG59XG4iLCI6aG9zdCBjYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgei1pbmRleDogLTEwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-game-canvas",
          templateUrl: "./game-canvas.component.html",
          styleUrls: ["./game-canvas.component.scss"]
        }]
      }], function () {
        return [{
          type: _controls__WEBPACK_IMPORTED_MODULE_1__["Controls"]
        }, {
          type: _renderer_renderer__WEBPACK_IMPORTED_MODULE_2__["GameRenderer"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["canvas"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:resize", ["$event"]]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:keydown", ["$event"]]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:keyup", ["$event"]]
        }]
      });
    })();
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


    var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    function findCoastline(tiles) {
      var coastline = [];

      for (var x = 0; x < tiles.length; x++) {
        for (var y = 0; y < tiles[x].length; y++) {
          var tile = tiles[x][y];

          if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"].none) {
            continue;
          }

          if (tile.neighbours.find(function (t) {
            return t.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"].none;
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


    var POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE = (_POSSIBLE_RIVER_DIREC = {}, _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW]), _defineProperty(_POSSIBLE_RIVER_DIREC, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE]), _POSSIBLE_RIVER_DIREC); // flow is clockwise for first tile

    var POSSIBLE_BORDER_PATHS = (_POSSIBLE_BORDER_PATH = {}, _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW]]), _defineProperty(_POSSIBLE_BORDER_PATH, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, [[_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE], [_shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE]]), _POSSIBLE_BORDER_PATH);
    var OPPOSITE_DIRECTIONS = (_OPPOSITE_DIRECTIONS = {}, _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E), _defineProperty(_OPPOSITE_DIRECTIONS, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE, _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE), _OPPOSITE_DIRECTIONS);
    /***/
  },

  /***/
  "./src/app/renderer/animation.ts":
  /*!***************************************!*\
    !*** ./src/app/renderer/animation.ts ***!
    \***************************************/

  /*! exports provided: Animation, AnimationEaseOutQuad, AnimationEaseOutCubic */

  /***/
  function srcAppRendererAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Animation", function () {
      return Animation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationEaseOutQuad", function () {
      return AnimationEaseOutQuad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationEaseOutCubic", function () {
      return AnimationEaseOutCubic;
    });

    var Animation = /*#__PURE__*/function () {
      function Animation(start, end, duration) {
        _classCallCheck(this, Animation);

        this.start = start;
        this.end = end;
        this.duration = duration;
        this.progress = 0;
        this.diff = end - start;
      }

      _createClass(Animation, [{
        key: "step",
        value: function step(stepTime) {
          if (this.progress >= this.duration) {
            return null;
          }

          this.progress += stepTime;
          var eased = this.ease(this.progress / this.duration);
          return this.start + this.diff * Math.min(eased, 1);
        }
      }]);

      return Animation;
    }();

    var AnimationEaseOutQuad = /*#__PURE__*/function (_Animation) {
      _inherits(AnimationEaseOutQuad, _Animation);

      var _super10 = _createSuper(AnimationEaseOutQuad);

      function AnimationEaseOutQuad() {
        _classCallCheck(this, AnimationEaseOutQuad);

        return _super10.apply(this, arguments);
      }

      _createClass(AnimationEaseOutQuad, [{
        key: "ease",
        value: function ease(t) {
          return t * (2 - t);
        }
      }]);

      return AnimationEaseOutQuad;
    }(Animation);

    var AnimationEaseOutCubic = /*#__PURE__*/function (_Animation2) {
      _inherits(AnimationEaseOutCubic, _Animation2);

      var _super11 = _createSuper(AnimationEaseOutCubic);

      function AnimationEaseOutCubic() {
        _classCallCheck(this, AnimationEaseOutCubic);

        return _super11.apply(this, arguments);
      }

      _createClass(AnimationEaseOutCubic, [{
        key: "ease",
        value: function ease(t) {
          return --t * t * t + 1;
        }
      }]);

      return AnimationEaseOutCubic;
    }(Animation);
    /***/

  },

  /***/
  "./src/app/renderer/area.ts":
  /*!**********************************!*\
    !*** ./src/app/renderer/area.ts ***!
    \**********************************/

  /*! exports provided: Area */

  /***/
  function srcAppRendererAreaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Area", function () {
      return Area;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/renderer/utils.ts");

    var VS_BORDER_PROGRAM = "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute float aUvs;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvarying float vUvs;\n\nvoid main() {\n  vUvs = aUvs;\n  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n}";
    var FRAG_BORDER_PROGRAM = "\nprecision mediump float;\n\nvarying float vUvs;\n\nuniform vec4 color;\nuniform float borderSize;\nuniform float borderShadow;\nuniform float borderShadowStrength;\n\nvoid main() {\n  vec4 c = color;\n  float a = 1.0;\n  if (vUvs < borderSize) {\n    a = 0.0;\n  } else if (vUvs < (1.0 - borderSize)) {\n    a = (vUvs - (1.0 - borderShadow)) * borderShadowStrength;\n  }\n\n  gl_FragColor = vec4(c.r * a, c.g * a, c.b * a, a);\n}";
    var VS_BACKGROUND_PROGRAM = "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main() {\n  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n}";
    var FRAG_BACKGROUND_PROGRAM = "\nprecision mediump float;\n\nuniform vec4 color;\nuniform float opacity;\n\nvoid main() {\n  float a = 0.5;\n  gl_FragColor = vec4(color.r * opacity, color.g * opacity, color.b * opacity, opacity);\n}";
    var TRIANGLES = [[0.5, 0.5, 0, 0.25, 0.5, 0], [0.5, 0.5, 0.5, 0, 1, 0.25], [0.5, 0.5, 1, 0.25, 1, 0.75], [0.5, 0.5, 1, 0.75, 0.5, 1], [0.5, 0.5, 0.5, 1, 0, 0.75], [0.5, 0.5, 0, 0.75, 0, 0.25]];
    var LEFT_SIDE_TRIANGLES = [[0.5, 0.5, 0, 0.5, 0, 0.25], [0.5, 0.5, 0.25, 0.125, 0.5, 0], [0.5, 0.5, 0.75, 0.125, 1, 0.25], [0.5, 0.5, 1, 0.5, 1, 0.75], [0.5, 0.5, 0.75, 0.875, 0.5, 1], [0.5, 0.5, 0.25, 0.875, 0, 0.75]];
    var RIGHT_SIDE_TRIANGLES = [[0.5, 0.5, 0.5, 0, 0.75, 0.125], [0.5, 0.5, 1, 0.25, 1, 0.5], [0.5, 0.5, 1, 0.75, 0.75, 0.875], [0.5, 0.5, 0.5, 1, 0.25, 0.875], [0.5, 0.5, 0, 0.75, 0, 0.5], [0.5, 0.5, 0, 0.25, 0.25, 0.125]];
    var borderGeometries = new Map();
    var borderProgram = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Program"].from(VS_BORDER_PROGRAM, FRAG_BORDER_PROGRAM);
    var backgroundProgram = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Program"].from(VS_BACKGROUND_PROGRAM, FRAG_BACKGROUND_PROGRAM);

    function makeBorderGeometry(borders) {
      var vertices = [];
      var uvs = [];

      for (var i = 0; i < 6; i++) {
        if (borders[i] === "1") {
          vertices.push.apply(vertices, _toConsumableArray(TRIANGLES[i]));
          uvs.push.apply(uvs, [0, 1, 1]);
          var leftNeighbour = i - 1;

          if (leftNeighbour < 0) {
            leftNeighbour += 6;
          }

          if (borders[leftNeighbour] === "0") {
            vertices.push.apply(vertices, _toConsumableArray(LEFT_SIDE_TRIANGLES[i]));
            uvs.push.apply(uvs, [0, 0, 1]);
          }

          var rightNeighbour = i + 1;

          if (rightNeighbour > 5) {
            rightNeighbour -= 6;
          }

          if (borders[rightNeighbour] === "0") {
            vertices.push.apply(vertices, _toConsumableArray(RIGHT_SIDE_TRIANGLES[i]));
            uvs.push.apply(uvs, [0, 1, 0]);
          }
        }
      }

      return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]().addAttribute("aVertexPosition", vertices, 2).addAttribute("aUvs", uvs, 1);
    }

    var Area = /*#__PURE__*/function () {
      function Area(state, options) {
        _classCallCheck(this, Area);

        this.options = options;
        this.tiles = new Set();
        this.borders = new Map();
        this.drawer = new AreaDrawer(this, state, options);
      }

      _createClass(Area, [{
        key: "destroy",
        value: function destroy() {
          this.drawer.clear();
        }
      }, {
        key: "setTiles",
        value: function setTiles(tiles) {
          this.clear();
          this.tiles = new Set(tiles);
          this.computeAllBorders();

          var _iterator40 = _createForOfIteratorHelper(this.borders),
              _step40;

          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
              var _step40$value = _slicedToArray(_step40.value, 2),
                  _tile = _step40$value[0],
                  borders = _step40$value[1];

              this.drawer.drawTileBorders(_tile, borders);
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }

          if (this.options.backgroundOpacity > 0) {
            var _iterator41 = _createForOfIteratorHelper(this.tiles),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var tile = _step41.value;
                this.drawer.drawTileBackground(tile);
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }
        }
      }, {
        key: "addTiles",
        value: function addTiles(tiles) {
          var _iterator42 = _createForOfIteratorHelper(tiles),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var tile = _step42.value;
              this.tiles.add(tile);
              this.drawer.drawTileBackground(tile);
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }

          this.computeBordersForTiles(tiles);
        }
      }, {
        key: "removeTiles",
        value: function removeTiles(tiles) {
          this.drawer.removeTiles(tiles);

          var _iterator43 = _createForOfIteratorHelper(tiles),
              _step43;

          try {
            for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
              var tile = _step43.value;
              this.tiles["delete"](tile);
            }
          } catch (err) {
            _iterator43.e(err);
          } finally {
            _iterator43.f();
          }

          this.computeBordersForTiles(tiles);
        }
      }, {
        key: "computeBordersForTiles",
        value: function computeBordersForTiles(tiles) {
          var visited = new Set();

          var _iterator44 = _createForOfIteratorHelper(tiles),
              _step44;

          try {
            for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
              var tile = _step44.value;

              if (visited.has(tile)) {
                continue;
              }

              visited.add(tile);
              this.computeTileBorders(tile);
              this.drawer.updateTileBorders(tile);

              var _iterator45 = _createForOfIteratorHelper(tile.neighbours),
                  _step45;

              try {
                for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                  var neighbour = _step45.value;

                  if (!this.tiles.has(neighbour) || visited.has(neighbour)) {
                    continue;
                  }

                  this.computeTileBorders(neighbour);
                  this.drawer.updateTileBorders(neighbour);
                }
              } catch (err) {
                _iterator45.e(err);
              } finally {
                _iterator45.f();
              }
            }
          } catch (err) {
            _iterator44.e(err);
          } finally {
            _iterator44.f();
          }
        }
      }, {
        key: "computeAllBorders",
        value: function computeAllBorders() {
          this.borders.clear();

          var _iterator46 = _createForOfIteratorHelper(this.tiles),
              _step46;

          try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
              var tile = _step46.value;
              this.computeTileBorders(tile);
            }
          } catch (err) {
            _iterator46.e(err);
          } finally {
            _iterator46.f();
          }
        }
      }, {
        key: "computeTileBorders",
        value: function computeTileBorders(tile) {
          var _this25 = this;

          var borders = tile.fullNeighbours.map(function (n) {
            return n && _this25.tiles.has(n) ? "0" : "1";
          }).join("");

          if (borders === "000000") {
            this.borders["delete"](tile);
          } else {
            this.borders.set(tile, borders);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.borders.clear();
          this.tiles = new Set();
          this.drawer.clear();
        }
      }]);

      return Area;
    }();

    var AreaDrawer = /*#__PURE__*/function () {
      function AreaDrawer(area, state, options) {
        _classCallCheck(this, AreaDrawer);

        this.area = area;
        this.state = state;
        this.options = options;
        this.bordersMap = new Map();
        this.backgroundMap = new Map();
        var cssColor = "#" + options.color.toString(16).padStart(6, "0");
        this.vec4Color = [parseInt(cssColor[1] + cssColor[2], 16) / 255, parseInt(cssColor[3] + cssColor[4], 16) / 255, parseInt(cssColor[5] + cssColor[6], 16) / 255, 1];
        this.borderShader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Shader"](borderProgram, {
          color: this.vec4Color,
          borderSize: this.options.borderSize,
          borderShadow: this.options.borderShadow,
          borderShadowStrength: this.options.borderShadowStrength
        });
        this.backgroundShader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Shader"](backgroundProgram, {
          color: this.vec4Color,
          opacity: this.options.backgroundOpacity
        });
      }

      _createClass(AreaDrawer, [{
        key: "removeTiles",
        value: function removeTiles(tiles) {
          var _iterator47 = _createForOfIteratorHelper(tiles),
              _step47;

          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var tile = _step47.value;
              var mesh = this.backgroundMap.get(tile);

              if (mesh) {
                mesh.destroy();
                this.backgroundMap["delete"](tile);
              }
            }
          } catch (err) {
            _iterator47.e(err);
          } finally {
            _iterator47.f();
          }
        }
      }, {
        key: "drawTileBackground",
        value: function drawTileBackground(tile) {
          if (tile.seaLevel !== src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none && !this.options.visibleOnWater) {
            return;
          }

          var mesh = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Mesh"](_utils__WEBPACK_IMPORTED_MODULE_2__["HEX_GEOMETRY"], this.backgroundShader);
          mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
          mesh.position.y = tile.y * 0.75;
          this.options.container.addChild(mesh, tile);
          this.backgroundMap.set(tile, mesh);

          if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
            mesh.visible = false;
          }
        }
      }, {
        key: "updateTileBorders",
        value: function updateTileBorders(tile) {
          var mesh = this.bordersMap.get(tile);

          if (mesh) {
            mesh.destroy();
          }

          if (!this.area.tiles.has(tile)) {
            return;
          }

          var borders = this.area.borders.get(tile);

          if (borders) {
            this.drawTileBorders(tile, borders);
          } else {
            this.bordersMap["delete"](tile);
          }
        }
      }, {
        key: "drawTileBorders",
        value: function drawTileBorders(tile, borders) {
          var geometry = borderGeometries.get(borders);

          if (!geometry) {
            geometry = makeBorderGeometry(borders);
            borderGeometries.set(borders, geometry);
          }

          var mesh = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, this.borderShader);
          mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
          mesh.position.y = tile.y * 0.75;
          this.options.container.addChild(mesh, tile);
          this.bordersMap.set(tile, mesh);

          if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
            mesh.visible = false;
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          var _iterator48 = _createForOfIteratorHelper(this.bordersMap.values()),
              _step48;

          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
              var obj = _step48.value;
              obj.destroy();
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }

          this.bordersMap.clear();

          var _iterator49 = _createForOfIteratorHelper(this.backgroundMap.values()),
              _step49;

          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var _obj = _step49.value;

              _obj.destroy();
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }

          this.backgroundMap.clear();
        }
      }]);

      return AreaDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/camera.ts":
  /*!************************************!*\
    !*** ./src/app/renderer/camera.ts ***!
    \************************************/

  /*! exports provided: Camera */

  /***/
  function srcAppRendererCameraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/renderer/utils.ts");
    /* harmony import */


    var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation */
    "./src/app/renderer/animation.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/renderer/constants.ts");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api */
    "./src/app/api/index.ts");

    var Camera = /*#__PURE__*/function () {
      function Camera(game) {
        _classCallCheck(this, Camera);

        this.game = game;
        this.MAX_ZOOM = _constants__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]; // tile graphics width in pixels

        this.MIN_ZOOM = 7;
        this.transform = {
          x: 0,
          y: 0,
          scale: 130
        };
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
          yEnd: 0
        };
      }

      _createClass(Camera, [{
        key: "setRenderer",
        value: function setRenderer(renderer) {
          var _this26 = this;

          this.renderer = renderer;
          renderer.tick$.subscribe(function () {
            if (_this26.transformChanged) {
              _this26._transform$.next(_this26.transform);

              _this26.transformChanged = false;
            }
          });
        }
      }, {
        key: "moveBy",
        value: function moveBy(x, y) {
          this.transform.x -= x / this.transform.scale;
          this.transform.y -= y / this.transform.scale;
          this.transformChanged = true;
        }
      }, {
        key: "moveTo",
        value: function moveTo(x, y) {
          this.transform.x = x;
          this.transform.y = y;
          this.transformChanged = true;
        }
      }, {
        key: "moveToTileWithEasing",
        value: function moveToTileWithEasing(tile) {
          var t = this.transform;

          var _Object = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTileCoords"])(tile),
              _Object2 = _slicedToArray(_Object, 2),
              x = _Object2[0],
              y = _Object2[1];

          this.moveXAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.x, x, 600);
          this.moveYAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.y, y, 600);
        }
      }, {
        key: "scaleToWithEasing",
        value: function scaleToWithEasing(newScale, screenPivotX, screenPivotY) {
          var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
          var t = this.transform;
          this.scalePivotX = screenPivotX;
          this.scalePivotY = screenPivotY;
          this.scaleAnimation = new _animation__WEBPACK_IMPORTED_MODULE_3__["AnimationEaseOutCubic"](t.scale, newScale, duration);
        }
      }, {
        key: "scaleByWithEasing",
        value: function scaleByWithEasing(scaleFactor, screenPivotX, screenPivotY) {
          var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;

          var _a;

          var t = this.transform;
          var currentScale = ((_a = this.scaleAnimation) === null || _a === void 0 ? void 0 : _a.end) || t.scale;
          var newScale = currentScale * scaleFactor;
          this.scaleToWithEasing(newScale, screenPivotX, screenPivotY, duration);
        }
      }, {
        key: "scaleTo",
        value: function scaleTo(scale, screenPivotX, screenPivotY) {
          var t = this.transform;

          var _this$screenToCanvas = this.screenToCanvas(screenPivotX, screenPivotY),
              _this$screenToCanvas2 = _slicedToArray(_this$screenToCanvas, 2),
              x1 = _this$screenToCanvas2[0],
              y1 = _this$screenToCanvas2[1];

          t.scale = Math.max(this.MIN_ZOOM, Math.min(this.MAX_ZOOM, scale));

          var _this$screenToCanvas3 = this.screenToCanvas(screenPivotX, screenPivotY),
              _this$screenToCanvas4 = _slicedToArray(_this$screenToCanvas3, 2),
              x2 = _this$screenToCanvas4[0],
              y2 = _this$screenToCanvas4[1];

          t.x += x1 - x2;
          t.y += y1 - y2;
          this.transformChanged = true;
        }
      }, {
        key: "moveToTile",
        value: function moveToTile(tile) {
          var _Object3 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTileCoords"])(tile),
              _Object4 = _slicedToArray(_Object3, 2),
              x = _Object4[0],
              y = _Object4[1];

          this.moveTo(x, y);
        }
      }, {
        key: "screenToCanvas",
        value: function screenToCanvas(screenX, screenY) {
          var t = this.transform;
          return [(screenX - this.canvas.width / 2) / t.scale + t.x, (screenY - this.canvas.height / 2) / t.scale + t.y];
        }
      }, {
        key: "screenToGame",
        value: function screenToGame(screenX, screenY) {
          var _this$screenToCanvas5 = this.screenToCanvas(screenX, screenY),
              _this$screenToCanvas6 = _slicedToArray(_this$screenToCanvas5, 2),
              x = _this$screenToCanvas6[0],
              y = _this$screenToCanvas6[1];

          y = Math.floor(y / 0.75);
          x = Math.floor(x - (y % 2 ? 0.5 : 0));
          return [x, y];
        }
      }, {
        key: "canvasToScreen",
        value: function canvasToScreen(canvasX, canvasY) {
          var t = this.transform;
          return [t.scale * (canvasX - t.x) + this.canvas.width / 2, t.scale * (canvasY - t.y) + this.canvas.height / 2];
        }
      }, {
        key: "gameToScreen",
        value: function gameToScreen(gameX, gameY) {
          if (Math.floor(gameY) % 2) {
            gameX += 0.5;
          }

          return this.canvasToScreen(gameX, gameY * 0.75);
        }
      }, {
        key: "update",
        value: function update() {
          var elapsedMS = this.renderer.app.ticker.elapsedMS;

          if (this.scaleAnimation) {
            var newScale = this.scaleAnimation.step(elapsedMS);

            if (newScale === null) {
              this.scaleAnimation = null;
            } else {
              this.scaleTo(newScale, this.scalePivotX, this.scalePivotY);
            }
          }

          if (this.moveXAnimation || this.moveYAnimation) {
            var t = this.transform;
            var _ref = [t.x, t.y],
                x = _ref[0],
                y = _ref[1];

            if (this.moveXAnimation) {
              var newX = this.moveXAnimation.step(elapsedMS);

              if (newX === null) {
                this.moveXAnimation = null;
              } else {
                x = newX;
              }
            }

            if (this.moveYAnimation) {
              var newY = this.moveYAnimation.step(elapsedMS);

              if (newY === null) {
                this.moveYAnimation = null;
              } else {
                y = newY;
              }
            }

            this.moveTo(x, y);
          }

          this.updateBoundingBox();
          this.updateProjectionMatrix();
        }
      }, {
        key: "updateProjectionMatrix",
        value: function updateProjectionMatrix() {
          // const m = this.renderer.app.renderer.globalUniforms.uniforms
          var m = this.renderer.app.renderer.projection.projectionMatrix;
          m.tx = this.transform.x;
          m.ty = this.transform.y;
          m.d = this.transform.scale;
          m.a = this.transform.scale;
        }
      }, {
        key: "updateBoundingBox",
        value: function updateBoundingBox() {
          if (!this.game.state) {
            return;
          }

          var t = this.transform;
          var width = Math.floor(this.renderer.canvas.width / t.scale);
          var height = Math.floor(this.renderer.canvas.height / t.scale);
          var map = this.game.state.map;
          var xStart = Math.floor(t.x - width / 2 - 1);
          var yStart = Math.floor(t.y - height / 2);
          this.tileBoundingBox.xStart = Math.max(0, Math.min(map.width, xStart));
          this.tileBoundingBox.yStart = Math.max(0, Math.min(map.height, yStart));
          this.tileBoundingBox.xEnd = Math.min(map.width, xStart + width + 3);
          this.tileBoundingBox.yEnd = Math.min(map.height, (yStart + height + 2) / 0.75);
        }
      }, {
        key: "canvas",
        get: function get() {
          return this.renderer.canvas;
        }
      }]);

      return Camera;
    }();

    Camera.ɵfac = function Camera_Factory(t) {
      return new (t || Camera)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]));
    };

    Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Camera,
      factory: Camera.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/renderer/constants.ts":
  /*!***************************************!*\
    !*** ./src/app/renderer/constants.ts ***!
    \***************************************/

  /*! exports provided: TILE_SIZE */

  /***/
  function srcAppRendererConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function () {
      return TILE_SIZE;
    });

    var TILE_SIZE = 256;
    /***/
  },

  /***/
  "./src/app/renderer/map.ts":
  /*!*********************************!*\
    !*** ./src/app/renderer/map.ts ***!
    \*********************************/

  /*! exports provided: MapDrawer */

  /***/
  function srcAppRendererMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapDrawer", function () {
      return MapDrawer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _tile_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tile-container */
    "./src/app/renderer/tile-container.ts");
    /* harmony import */


    var _tile_terrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tile/terrain */
    "./src/app/renderer/tile/terrain.ts");
    /* harmony import */


    var _tile_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tile/unit */
    "./src/app/renderer/tile/unit.ts");
    /* harmony import */


    var _tile_yields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tile/yields */
    "./src/app/renderer/tile/yields.ts");
    /* harmony import */


    var _tile_river__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tile/river */
    "./src/app/renderer/tile/river.ts");
    /* harmony import */


    var _tile_city__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tile/city */
    "./src/app/renderer/tile/city.ts");
    /* harmony import */


    var _politics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./politics */
    "./src/app/renderer/politics.ts");

    var MapDrawer = /*#__PURE__*/function () {
      function MapDrawer(game, renderer, camera) {
        var _this27 = this;

        _classCallCheck(this, MapDrawer);

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
        this.game.init$.subscribe(function (state) {
          state.trackedPlayer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this27.game.stop$)).subscribe(function (player) {
            return _this27.limitViewToPlayer(player);
          });
          state.tilesExplored$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this27.game.stop$)).subscribe(function (tiles) {
            return _this27.reveal(tiles);
          });
          state.tilesUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this27.game.stop$)).subscribe(function (tiles) {
            var _iterator50 = _createForOfIteratorHelper(tiles),
                _step50;

            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                var tile = _step50.value;

                _this27.updateTile(tile);
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
          });

          _this27.build(state);
        });
        this.game.stop$.subscribe(function () {
          return _this27.clear();
        }); // Drawers must be created after init$ subscription?. Race condition will occur otherwise.

        this.terrainDrawer = new _tile_terrain__WEBPACK_IMPORTED_MODULE_3__["TerrainDrawer"](this.renderer, this.game, this.terrainContainer, this.waterContainer);
        this.unitsDrawer = new _tile_unit__WEBPACK_IMPORTED_MODULE_4__["UnitsDrawer"](this.game, this.renderer, this.unitsContainer);
        this.yieldsDrawer = new _tile_yields__WEBPACK_IMPORTED_MODULE_5__["YiedsDrawer"](this.game, this.renderer.mapUi, this.yieldsContainer);
        this.riverDrawer = new _tile_river__WEBPACK_IMPORTED_MODULE_6__["RiverDrawer"](this.game, this.riverContainer);
        this.cityDrawer = new _tile_city__WEBPACK_IMPORTED_MODULE_7__["CityDrawer"](this.game, this.renderer, this.cityContainer);
      }

      _createClass(MapDrawer, [{
        key: "hideAllTiles",
        value: function hideAllTiles() {
          var _iterator51 = _createForOfIteratorHelper(this.container.tilesMap.values()),
              _step51;

          try {
            for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
              var objects = _step51.value;

              var _iterator52 = _createForOfIteratorHelper(objects),
                  _step52;

              try {
                for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                  var obj = _step52.value;
                  obj.visible = false;
                }
              } catch (err) {
                _iterator52.e(err);
              } finally {
                _iterator52.f();
              }
            }
          } catch (err) {
            _iterator51.e(err);
          } finally {
            _iterator51.f();
          }
        }
      }, {
        key: "reveal",
        value: function reveal(tiles) {
          var _iterator53 = _createForOfIteratorHelper(tiles),
              _step53;

          try {
            for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
              var tile = _step53.value;
              var displayObjects = this.container.tilesMap.get(tile);

              if (displayObjects) {
                var _iterator54 = _createForOfIteratorHelper(displayObjects),
                    _step54;

                try {
                  for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                    var obj = _step54.value;
                    obj.visible = true;
                  }
                } catch (err) {
                  _iterator54.e(err);
                } finally {
                  _iterator54.f();
                }
              }
            }
          } catch (err) {
            _iterator53.e(err);
          } finally {
            _iterator53.f();
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          if (this.terrainDrawer) {
            this.terrainDrawer.clear();
            this.riverDrawer.clear();
            this.cityDrawer.clear();
            this.unitsDrawer.clear();
            this.yieldsDrawer.clear();
            this.politicsDrawer.clear();
          }
        }
      }, {
        key: "build",
        value: function build(gameState) {
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

          for (var y = 0; y < gameState.map.height; y++) {
            for (var x = 0; x < gameState.map.width; x++) {
              var tile = gameState.map.tiles[x][y];
              this.drawTile(tile);
            }
          }

          if ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer) {
            this.limitViewToPlayer((_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer);
          }
        }
      }, {
        key: "updateTile",
        value: function updateTile(tile) {
          this.clearTile(tile);
          this.drawTile(tile);
        }
      }, {
        key: "drawTile",
        value: function drawTile(tile) {
          this.terrainDrawer.drawTile(tile);
          this.yieldsDrawer.drawTile(tile);
          this.riverDrawer.drawTile(tile);
        }
      }, {
        key: "clearTile",
        value: function clearTile(tile) {
          this.terrainDrawer.clearTile(tile);
          this.yieldsDrawer.clearTile(tile);
          this.riverContainer.clearTile(tile);
        }
      }, {
        key: "limitViewToPlayer",
        value: function limitViewToPlayer(player) {
          this.hideAllTiles();
          this.reveal(player.exploredTiles);
        }
      }]);

      return MapDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/minimap.ts":
  /*!*************************************!*\
    !*** ./src/app/renderer/minimap.ts ***!
    \*************************************/

  /*! exports provided: MinimapRenderer */

  /***/
  function srcAppRendererMinimapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _SEA_COLORS, _CLIMATE_COLORS;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinimapRenderer", function () {
      return MinimapRenderer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/app/renderer/utils.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var SEA_COLORS = (_SEA_COLORS = {}, _defineProperty(_SEA_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep, 0x25619a), _defineProperty(_SEA_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].shallow, 0x4383b5), _defineProperty(_SEA_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none, 0x000000), _SEA_COLORS);
    var CLIMATE_COLORS = (_CLIMATE_COLORS = {}, _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].continental, 0x516733), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].desert, 0xc7bd93), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].oceanic, 0x678123), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].savanna, 0xb4a73f), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tropical, 0x6c9b2b), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].tundra, 0x9cb3b6), _defineProperty(_CLIMATE_COLORS, _shared__WEBPACK_IMPORTED_MODULE_4__["Climate"].arctic, 0xe5e5e5), _CLIMATE_COLORS);
    var maxSize = 300;

    var MinimapRenderer = /*#__PURE__*/function () {
      function MinimapRenderer(game, renderer, camera) {
        var _this28 = this;

        _classCallCheck(this, MinimapRenderer);

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
        this.game.init$.subscribe(function (state) {
          state.trackedPlayer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this28.destroyed$)).subscribe(function (player) {
            _this28.hideAllTiles();

            _this28.reveal(player.exploredTiles);

            _this28.updateMap();
          });
          state.tilesExplored$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this28.destroyed$)).subscribe(function (tiles) {
            _this28.reveal(tiles);

            _this28.updateMap();
          });
          state.tilesUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this28.destroyed$)).subscribe(function (tiles) {
            var _iterator55 = _createForOfIteratorHelper(tiles),
                _step55;

            try {
              for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                var tile = _step55.value;

                _this28.drawTile(tile);
              }
            } catch (err) {
              _iterator55.e(err);
            } finally {
              _iterator55.f();
            }

            _this28.updateMap();
          });
        });
        this.container.addChild(this.mapSprite);
        this.container.addChild(this.cameraGraphics);
      }

      _createClass(MinimapRenderer, [{
        key: "calculateSize",
        value: function calculateSize() {
          if (!this.game.state) {
            return;
          }

          var map = this.game.state.map;

          if (map.width > map.height) {
            this.width = maxSize;
            this.height = maxSize / (map.width / map.height);
            this.scale = maxSize / map.width;
          } else {
            this.width = maxSize / (map.height / map.width);
            this.height = maxSize;
            this.scale = maxSize / map.height;
          }

          this.height *= 0.75;
        }
      }, {
        key: "create",
        value: function create(app) {
          var _this29 = this;

          if (!this.game.state) {
            return;
          }

          this.app = app;
          this.mapTexture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["RenderTexture"].create({
            width: this.width,
            height: this.height
          });
          this.mapSprite.texture = this.mapTexture;
          this.drawMap();
          this.hideAllTiles();
          this.reveal(this.game.state.trackedPlayer.exploredTiles);
          this.app.stage.addChild(this.container);
          this.camera.transform$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (transform) {
            _this29.updateCamera(transform);
          });
          this.updateMap();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.mapTexture.destroy();
          this.mapSprite.destroy();

          var _iterator56 = _createForOfIteratorHelper(this.tilesMap.values()),
              _step56;

          try {
            for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
              var objects = _step56.value;

              var _iterator57 = _createForOfIteratorHelper(objects),
                  _step57;

              try {
                for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                  var obj = _step57.value;
                  obj.destroy();
                }
              } catch (err) {
                _iterator57.e(err);
              } finally {
                _iterator57.f();
              }
            }
          } catch (err) {
            _iterator56.e(err);
          } finally {
            _iterator56.f();
          }

          this.destroyed$.next();
          this.destroyed$.complete();
        }
      }, {
        key: "hideAllTiles",
        value: function hideAllTiles() {
          var _iterator58 = _createForOfIteratorHelper(this.mapScene.children),
              _step58;

          try {
            for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
              var obj = _step58.value;
              obj.visible = false;
            }
          } catch (err) {
            _iterator58.e(err);
          } finally {
            _iterator58.f();
          }
        }
      }, {
        key: "reveal",
        value: function reveal(tiles) {
          var _iterator59 = _createForOfIteratorHelper(tiles),
              _step59;

          try {
            for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
              var tile = _step59.value;
              var displayObjects = this.tilesMap.get(tile);

              if (displayObjects) {
                var _iterator60 = _createForOfIteratorHelper(displayObjects),
                    _step60;

                try {
                  for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                    var obj = _step60.value;
                    obj.visible = true;
                  }
                } catch (err) {
                  _iterator60.e(err);
                } finally {
                  _iterator60.f();
                }
              }
            }
          } catch (err) {
            _iterator59.e(err);
          } finally {
            _iterator59.f();
          }
        }
      }, {
        key: "updateCamera",
        value: function updateCamera(t) {
          var width = this.renderer.canvas.width / t.scale;
          var height = this.renderer.canvas.height / t.scale;
          var xStart = (t.x - width / 2) * this.scale;
          var yStart = (t.y - height / 2) * this.scale;
          this.cameraGraphics.clear();
          this.cameraGraphics.lineStyle(1, 0xffffff);
          this.cameraGraphics.drawRect(xStart, yStart, width * this.scale, height * this.scale);

          if (this.app) {
            this.app.render();
          }
        }
      }, {
        key: "updateMap",
        value: function updateMap() {
          this.app.renderer.render(this.mapScene, this.mapTexture);
          this.app.render();
        }
      }, {
        key: "drawMap",
        value: function drawMap() {
          if (!this.game.state) {
            return;
          }

          for (var y = 0; y < this.game.state.map.height; y++) {
            for (var x = 0; x < this.game.state.map.width; x++) {
              this.drawTile(this.game.state.map.tiles[x][y]);
            }
          }
        }
      }, {
        key: "drawTile",
        value: function drawTile(tile) {
          var color;

          if (tile.seaLevel !== _shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].none) {
            color = SEA_COLORS[tile.seaLevel];
          } else if (tile.areaOf) {
            color = tile.areaOf.player.color;
          } else {
            color = CLIMATE_COLORS[tile.climate];
          }

          var g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
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
      }, {
        key: "renderRivers",
        value: function renderRivers(tile, graphics) {
          if (!tile.riverParts.length) {
            return;
          }

          graphics.lineStyle(0.3, SEA_COLORS[_shared__WEBPACK_IMPORTED_MODULE_4__["SeaLevel"].deep]);

          var _iterator61 = _createForOfIteratorHelper(tile.riverParts),
              _step61;

          try {
            for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
              var river = _step61.value;

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
          } catch (err) {
            _iterator61.e(err);
          } finally {
            _iterator61.f();
          }
        }
      }]);

      return MinimapRenderer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/overlays.ts":
  /*!**************************************!*\
    !*** ./src/app/renderer/overlays.ts ***!
    \**************************************/

  /*! exports provided: OverlaysRenderer */

  /***/
  function srcAppRendererOverlaysTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlaysRenderer", function () {
      return OverlaysRenderer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils */
    "./src/app/renderer/utils.ts");

    var OverlaysRenderer = /*#__PURE__*/function () {
      function OverlaysRenderer(mapUi) {
        var _this30 = this;

        _classCallCheck(this, OverlaysRenderer);

        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.hoveredTileGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.selectedTileGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.highlightedTilesGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.container.addChild(this.hoveredTileGraphics);
        this.container.addChild(this.selectedTileGraphics);
        this.buildHoveredTileGraphics();
        this.buildSelectedTileGraphics();
        mapUi.hoveredTile$.subscribe(function (tile) {
          return _this30.displayAtTile(_this30.hoveredTileGraphics, tile);
        });
        mapUi.selectedTile$.subscribe(function (tile) {
          _this30.displayAtTile(_this30.selectedTileGraphics, tile);
        });
        mapUi.highlightedTiles$.subscribe(function (tiles) {
          _this30.buildHighlightedTiles(tiles);
        });
      }

      _createClass(OverlaysRenderer, [{
        key: "displayAtTile",
        value: function displayAtTile(obj, tile) {
          if (tile) {
            var _Object5 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCoords"])(tile),
                _Object6 = _slicedToArray(_Object5, 2),
                x = _Object6[0],
                y = _Object6[1];

            obj.position.x = x;
            obj.position.y = y;
            obj.visible = true;
          } else {
            obj.visible = false;
          }
        }
      }, {
        key: "buildHoveredTileGraphics",
        value: function buildHoveredTileGraphics() {
          this.hoveredTileGraphics.lineStyle(0.02, 0xffffff, 0.5);
          this.hoveredTileGraphics.beginFill(0xffffff, 0.1);
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawClosedHex"])(this.hoveredTileGraphics);
          this.hoveredTileGraphics.endFill();
        }
      }, {
        key: "buildSelectedTileGraphics",
        value: function buildSelectedTileGraphics() {
          this.selectedTileGraphics.lineStyle(0.05, 0xff0000, 0.5);
          this.selectedTileGraphics.beginFill(0xffffff, 0.1);
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawClosedHex"])(this.selectedTileGraphics);
          this.selectedTileGraphics.endFill();
        }
      }, {
        key: "buildHighlightedTiles",
        value: function buildHighlightedTiles(tiles) {
          this.highlightedTilesGraphics.clear();

          if (!tiles.size) {
            this.container.removeChild(this.highlightedTilesGraphics);
            return;
          }

          var g = this.highlightedTilesGraphics;

          var _iterator62 = _createForOfIteratorHelper(tiles),
              _step62;

          try {
            for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
              var tile = _step62.value;

              var _Object7 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCoords"])(tile),
                  _Object8 = _slicedToArray(_Object7, 2),
                  x = _Object8[0],
                  y = _Object8[1];

              g.beginFill(0xffffff, 0.3);
              Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawHex"])(g, x, y);
              g.endFill();
            }
          } catch (err) {
            _iterator62.e(err);
          } finally {
            _iterator62.f();
          }

          this.container.addChild(g);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.highlightedTilesGraphics.clear();
          this.hoveredTileGraphics.visible = false;
          this.selectedTileGraphics.visible = false;
        }
      }]);

      return OverlaysRenderer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/path.ts":
  /*!**********************************!*\
    !*** ./src/app/renderer/path.ts ***!
    \**********************************/

  /*! exports provided: PathRenderer */

  /***/
  function srcAppRendererPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PathRenderer", function () {
      return PathRenderer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils */
    "./src/app/renderer/utils.ts");

    var PathRenderer = /*#__PURE__*/function () {
      function PathRenderer(game, camera, mapUi) {
        var _this31 = this;

        _classCallCheck(this, PathRenderer);

        this.game = game;
        this.camera = camera;
        this.mapUi = mapUi;
        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this.pathGraphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this.labels = [];
        this.container.addChild(this.pathGraphics);
        mapUi.activePath$.subscribe(function (path) {
          return _this31.buildPath(path);
        });
      }

      _createClass(PathRenderer, [{
        key: "clear",
        value: function clear() {
          this.pathGraphics.clear();

          var _iterator63 = _createForOfIteratorHelper(this.labels),
              _step63;

          try {
            for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
              var label = _step63.value;
              this.container.removeChild(label);
              label.destroy();
            }
          } catch (err) {
            _iterator63.e(err);
          } finally {
            _iterator63.f();
          }

          this.labels = [];
        }
      }, {
        key: "buildPath",
        value: function buildPath(path) {
          this.clear();
          var unit = this.mapUi.selectedUnit;

          if (!path || !path.length || !unit) {
            this.container.visible = false;
            return;
          }

          this.container.visible = true;
          var g = this.pathGraphics;
          g.lineStyle(0.1, 0xff0000);
          g.moveTo.apply(g, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(unit.tile)));

          var _iterator64 = _createForOfIteratorHelper(path),
              _step64;

          try {
            for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
              var _turn = _step64.value;

              var _iterator65 = _createForOfIteratorHelper(_turn),
                  _step65;

              try {
                for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                  var tile = _step65.value;
                  g.lineTo.apply(g, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(tile)));
                }
              } catch (err) {
                _iterator65.e(err);
              } finally {
                _iterator65.f();
              }
            }
          } catch (err) {
            _iterator64.e(err);
          } finally {
            _iterator64.f();
          }

          for (var turn = 0; turn < path.length; turn++) {
            if (path[turn][0]) {
              var scale = this.camera.transform.scale;
              var label = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](turn.toString(), {
                align: "center",
                fill: "white",
                dropShadow: true,
                dropShadowBlur: 5,
                dropShadowDistance: 0,
                fontSize: scale * 0.7
              });
              label.scale.set(1 / scale, 1 / scale);
              this.container.addChild(label);
              this.labels.push(label);
              var metrics = pixi_js__WEBPACK_IMPORTED_MODULE_0__["TextMetrics"].measureText(turn.toString(), label.style);

              var _Object9 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileCenter"])(path[turn][0]),
                  _Object10 = _slicedToArray(_Object9, 2),
                  x = _Object10[0],
                  y = _Object10[1];

              label.position.x = x - metrics.width / 2 / scale;
              label.position.y = y - metrics.height / 2 / scale;
            }
          }
        }
      }]);

      return PathRenderer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/politics.ts":
  /*!**************************************!*\
    !*** ./src/app/renderer/politics.ts ***!
    \**************************************/

  /*! exports provided: PoliticsDrawer */

  /***/
  function srcAppRendererPoliticsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoliticsDrawer", function () {
      return PoliticsDrawer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./area */
    "./src/app/renderer/area.ts");

    var PoliticsDrawer = /*#__PURE__*/function () {
      function PoliticsDrawer(state, renderer) {
        _classCallCheck(this, PoliticsDrawer);

        this.state = state;
        this.renderer = renderer;
        this.areas = [];
        this.makeAreas();
      }

      _createClass(PoliticsDrawer, [{
        key: "makeAreas",
        value: function makeAreas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _iterator66, _step66, player, tiles, area;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _iterator66 = _createForOfIteratorHelper(this.state.players);
                    _context22.prev = 1;

                    _iterator66.s();

                  case 3:
                    if ((_step66 = _iterator66.n()).done) {
                      _context22.next = 14;
                      break;
                    }

                    player = _step66.value;
                    _context22.next = 7;
                    return this.state.getAreaTiles(player.areaId);

                  case 7:
                    tiles = _context22.sent;
                    area = new _area__WEBPACK_IMPORTED_MODULE_1__["Area"](this.state, {
                      color: player.color,
                      container: this.renderer.mapDrawer.areasContainer,
                      backgroundOpacity: 0.5,
                      borderShadow: 0.7,
                      borderSize: 0.08,
                      borderShadowStrength: 1,
                      visibleOnWater: false
                    });
                    this.areas.push(area);
                    area.setTiles(tiles);
                    this.state.areasMap.set(player.areaId, area);

                  case 12:
                    _context22.next = 3;
                    break;

                  case 14:
                    _context22.next = 19;
                    break;

                  case 16:
                    _context22.prev = 16;
                    _context22.t0 = _context22["catch"](1);

                    _iterator66.e(_context22.t0);

                  case 19:
                    _context22.prev = 19;

                    _iterator66.f();

                    return _context22.finish(19);

                  case 22:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[1, 16, 19, 22]]);
          }));
        }
      }, {
        key: "clear",
        value: function clear() {
          var _iterator67 = _createForOfIteratorHelper(this.areas),
              _step67;

          try {
            for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
              var area = _step67.value;
              area.clear();
            }
          } catch (err) {
            _iterator67.e(err);
          } finally {
            _iterator67.f();
          }

          this.areas = [];
        }
      }]);

      return PoliticsDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/renderer.ts":
  /*!**************************************!*\
    !*** ./src/app/renderer/renderer.ts ***!
    \**************************************/

  /*! exports provided: GameRenderer */

  /***/
  function srcAppRendererRendererTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameRenderer", function () {
      return GameRenderer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./overlays */
    "./src/app/renderer/overlays.ts");
    /* harmony import */


    var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./path */
    "./src/app/renderer/path.ts");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/renderer/map.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ui/map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./camera */
    "./src/app/renderer/camera.ts");

    var GameRenderer = /*#__PURE__*/function () {
      function GameRenderer(game, mapUi, camera) {
        var _this32 = this;

        _classCallCheck(this, GameRenderer);

        this.game = game;
        this.mapUi = mapUi;
        this.camera = camera;
        this.loader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Loader"]();
        this.atlas = this.loader.add("assets/atlas.json").load(function () {
          return _this32.onLoad();
        });
        this._tick$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.tick$ = this._tick$.asObservable();
        this.camera.setRenderer(this);
      }

      _createClass(GameRenderer, [{
        key: "setCanvas",
        value: function setCanvas(canvas) {
          var _this33 = this;

          var _ref2 = [window.innerWidth, window.innerHeight],
              width = _ref2[0],
              height = _ref2[1];
          this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            view: canvas,
            width: width,
            height: height
          });
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

          this.app.ticker.add(function () {
            _this33.camera.update();

            _this33.mapUi.update();

            _this33._tick$.next();

            var scale = _this33.camera.transform.scale;

            if (_this33.mapDrawer.politicsDrawer) {
              var backgroundOpacity = Math.min(0.4, Math.max(0, (70 - scale) / 150));
              var borderShadow = Math.max(0.4, Math.min(0.7, (150 - scale) / 100));

              var _iterator68 = _createForOfIteratorHelper(_this33.mapDrawer.politicsDrawer.areas),
                  _step68;

              try {
                for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                  var area = _step68.value;
                  area.drawer.backgroundShader.uniforms.opacity = backgroundOpacity;
                  area.drawer.borderShader.uniforms.borderShadow = borderShadow;
                }
              } catch (err) {
                _iterator68.e(err);
              } finally {
                _iterator68.f();
              }
            }
          });
        }
      }, {
        key: "resize",
        value: function resize(width, height) {
          this.app.renderer.resize(width, height);
        }
      }, {
        key: "onReady",
        value: function onReady() {
          var _this34 = this;

          this.camera.transform$.subscribe(function (t) {
            var x = (-t.x + _this34.canvas.width / 2 / t.scale) * t.scale;
            var y = (-t.y + _this34.canvas.height / 2 / t.scale) * t.scale;

            _this34.app.stage.setTransform(x, y, t.scale, t.scale);
          });
        }
      }, {
        key: "onLoad",
        value: function onLoad() {
          var atlas = this.atlas.resources["assets/atlas.json"];
          atlas.spritesheet.baseTexture.mipmap = pixi_js__WEBPACK_IMPORTED_MODULE_0__["MIPMAP_MODES"].POW2;
          this.textures = atlas.textures;

          if (this.canvas) {
            this.onReady();
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.mapDrawer.clear();
          this.path.clear();
          this.overlays.clear();
        }
      }, {
        key: "isLoaded",
        get: function get() {
          return !!this.textures;
        }
      }]);

      return GameRenderer;
    }();

    GameRenderer.ɵfac = function GameRenderer_Factory(t) {
      return new (t || GameRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"]));
    };

    GameRenderer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GameRenderer,
      factory: GameRenderer.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameRenderer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]
        }, {
          type: _ui_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]
        }, {
          type: _camera__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/renderer/tile-container.ts":
  /*!********************************************!*\
    !*** ./src/app/renderer/tile-container.ts ***!
    \********************************************/

  /*! exports provided: TileWrapperContainer, TileContainer */

  /***/
  function srcAppRendererTileContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileWrapperContainer", function () {
      return TileWrapperContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileContainer", function () {
      return TileContainer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");

    var TileWrapperContainer = /*#__PURE__*/function (_pixi_js__WEBPACK_IMP) {
      _inherits(TileWrapperContainer, _pixi_js__WEBPACK_IMP);

      var _super12 = _createSuper(TileWrapperContainer);

      function TileWrapperContainer() {
        var _this35;

        _classCallCheck(this, TileWrapperContainer);

        _this35 = _super12.apply(this, arguments);
        _this35.tilesMap = new Map();
        return _this35;
      }

      _createClass(TileWrapperContainer, [{
        key: "bindToMap",
        value: function bindToMap(map) {
          for (var x = 0; x < map.width; x++) {
            for (var y = 0; y < map.height; y++) {
              this.tilesMap.set(map.tiles[x][y], []);
            }
          }
        }
      }]);

      return TileWrapperContainer;
    }(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);

    var TileContainer = /*#__PURE__*/function (_pixi_js__WEBPACK_IMP2) {
      _inherits(TileContainer, _pixi_js__WEBPACK_IMP2);

      var _super13 = _createSuper(TileContainer);

      function TileContainer(bBox) {
        var _this36;

        _classCallCheck(this, TileContainer);

        _this36 = _super13.call(this);
        _this36.bBox = bBox;
        _this36.grid = [];
        _this36.childrenMap = new Map(); // TODO can it be rewritten with tile ids? Map<number, ...>

        _this36.tilesMap = new Map(); // needed only for interactivity

        _this36.children = [];
        return _this36;
      }

      _createClass(TileContainer, [{
        key: "addChild",
        value: function addChild(child, tile) {
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
      }, {
        key: "removeChild",
        value: function removeChild(child) {
          if (this.childrenMap.has(child)) {
            // remove from childrenMap
            var tile = this.childrenMap.get(child);
            this.childrenMap["delete"](child); // remove from grid

            var children = this.grid[tile.x][tile.y];
            var index = children.indexOf(child);

            if (index !== -1) {
              children.splice(index, 1);
            } // remove from tilesMap


            children = this.tilesMap.get(tile);
            index = children.indexOf(child);

            if (index !== -1) {
              children.splice(index, 1);
            } // remove from parent


            children = this.parent.tilesMap.get(tile);
            index = children.indexOf(child);

            if (index !== -1) {
              children.splice(index, 1);
            } // remove from children


            index = this.children.indexOf(child);

            if (index !== -1) {
              children.splice(index, 1);
            }
          }
        }
      }, {
        key: "moveChild",
        value: function moveChild(child, tile) {
          this.removeChild(child);
          this.addChild(child, tile);
        }
      }, {
        key: "getChildsFor",
        value: function getChildsFor(tile) {
          return this.tilesMap.get(tile);
        }
      }, {
        key: "clearTile",
        value: function clearTile(tile) {
          var _iterator69 = _createForOfIteratorHelper(this.getChildsFor(tile)),
              _step69;

          try {
            for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
              var obj = _step69.value;
              obj.destroy();
            }
          } catch (err) {
            _iterator69.e(err);
          } finally {
            _iterator69.f();
          }
        }
      }, {
        key: "destroyAllChildren",
        value: function destroyAllChildren() {
          if (!this.map) {
            return;
          }

          for (var x = 0; x < this.map.width; x++) {
            for (var y = 0; y < this.map.height; y++) {
              var _iterator70 = _createForOfIteratorHelper(this.grid[x][y]),
                  _step70;

              try {
                for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                  var child = _step70.value;
                  child.destroy();
                }
              } catch (err) {
                _iterator70.e(err);
              } finally {
                _iterator70.f();
              }
            }
          }
        }
      }, {
        key: "bindToMap",
        value: function bindToMap(map) {
          this.map = map;
          this.grid = new Array(map.width);
          this.tilesMap.clear();

          for (var x = 0; x < map.width; x++) {
            this.grid[x] = new Array(map.height);

            for (var y = 0; y < map.height; y++) {
              this.grid[x][y] = [];
              this.tilesMap.set(map.tiles[x][y], []);
            }
          }
        }
      }, {
        key: "render",
        value: function render(renderer) {
          if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
            return;
          }

          for (var x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
            for (var y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
              var _iterator71 = _createForOfIteratorHelper(this.grid[x][y]),
                  _step71;

              try {
                for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                  var child = _step71.value;
                  child.render(renderer);
                }
              } catch (err) {
                _iterator71.e(err);
              } finally {
                _iterator71.f();
              }
            }
          }

          renderer.batch.flush();
        }
      }, {
        key: "updateTransform",
        value: function updateTransform() {
          if (!this.grid.length) {
            return;
          }

          this._boundsID++;
          this.transform.updateTransform(this.parent.transform); // TODO: check render flags, how to process stuff here

          this.worldAlpha = this.alpha * this.parent.worldAlpha;

          for (var x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
            for (var y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
              var _iterator72 = _createForOfIteratorHelper(this.grid[x][y]),
                  _step72;

              try {
                for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
                  var child = _step72.value;

                  if (child.visible) {
                    child.updateTransform();
                  }
                }
              } catch (err) {
                _iterator72.e(err);
              } finally {
                _iterator72.f();
              }
            }
          }
        }
      }]);

      return TileContainer;
    }(pixi_js__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"]);
    /***/

  },

  /***/
  "./src/app/renderer/tile/city.ts":
  /*!***************************************!*\
    !*** ./src/app/renderer/tile/city.ts ***!
    \***************************************/

  /*! exports provided: CityDrawer */

  /***/
  function srcAppRendererTileCityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityDrawer", function () {
      return CityDrawer;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/renderer/utils.ts");

    var SMALL_CITY_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileVariants"])("villageSmall", 4);
    var BIG_CITY_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTileVariants"])("village", 4);

    var CityDrawer = /*#__PURE__*/function () {
      function CityDrawer(game, renderer, container) {
        var _this37 = this;

        _classCallCheck(this, CityDrawer);

        this.game = game;
        this.renderer = renderer;
        this.container = container;
        this.citiesGraphics = new Map();
        game.init$.subscribe(function (state) {
          state.citySpawned$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (city) {
            return _this37.spawn(city);
          });
          state.cityUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (city) {
            return _this37.update(city);
          });
          state.cityDestroyed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (city) {
            return _this37.destroy(city);
          });
        });
      }

      _createClass(CityDrawer, [{
        key: "build",
        value: function build() {
          if (!this.game.state) {
            return;
          }

          var _iterator73 = _createForOfIteratorHelper(this.game.state.cities),
              _step73;

          try {
            for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
              var city = _step73.value;
              this.spawn(city);
            }
          } catch (err) {
            _iterator73.e(err);
          } finally {
            _iterator73.f();
          }
        }
      }, {
        key: "spawn",
        value: function spawn(city) {
          var variants = city.size >= 10 ? BIG_CITY_TEXTURES : SMALL_CITY_TEXTURES;
          var textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["pickRandom"])(variants);
          var g = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSprite"])(city.tile, this.textures[textureName]);
          this.container.addChild(g, city.tile);
          this.citiesGraphics.set(city, g);

          if (!this.game.state.trackedPlayer.exploredTiles.has(city.tile)) {
            g.visible = false;
          }
        }
      }, {
        key: "destroy",
        value: function destroy(city) {
          var g = this.citiesGraphics.get(city);
          this.citiesGraphics["delete"](city);
          g.destroy();
        }
      }, {
        key: "update",
        value: function update(city) {
          this.destroy(city);
          this.spawn(city);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.container.destroyAllChildren();
          this.citiesGraphics.clear();
        }
      }, {
        key: "textures",
        get: function get() {
          return this.renderer.textures;
        }
      }]);

      return CityDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/tile/river.ts":
  /*!****************************************!*\
    !*** ./src/app/renderer/tile/river.ts ***!
    \****************************************/

  /*! exports provided: RiverDrawer */

  /***/
  function srcAppRendererTileRiverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiverDrawer", function () {
      return RiverDrawer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");

    var RiverDrawer = /*#__PURE__*/function () {
      function RiverDrawer(game, container) {
        _classCallCheck(this, RiverDrawer);

        this.game = game;
        this.container = container;
      }

      _createClass(RiverDrawer, [{
        key: "drawTile",
        value: function drawTile(tile) {
          if (!tile.riverParts.length) {
            return;
          }

          var g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
          g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
          g.position.y = tile.y * 0.75;
          this.container.addChild(g, tile);
          g.lineStyle(0.15, 0x4169e1);

          var _iterator74 = _createForOfIteratorHelper(tile.riverParts),
              _step74;

          try {
            for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
              var river = _step74.value;

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
          } catch (err) {
            _iterator74.e(err);
          } finally {
            _iterator74.f();
          }

          if (!this.game.state.trackedPlayer.exploredTiles.has(tile)) {
            g.visible = false;
          }
        }
      }, {
        key: "clearTile",
        value: function clearTile(tile) {
          this.container.clearTile(tile);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.container.destroyAllChildren();
        }
      }]);

      return RiverDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/tile/terrain.ts":
  /*!******************************************!*\
    !*** ./src/app/renderer/tile/terrain.ts ***!
    \******************************************/

  /*! exports provided: TerrainDrawer */

  /***/
  function srcAppRendererTileTerrainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _SEA_TEXTURES, _src_app_shared__WEBP, _src_app_shared__WEBP2, _src_app_shared__WEBP3, _src_app_shared__WEBP4, _src_app_shared__WEBP5, _src_app_shared__WEBP6, _src_app_shared__WEBP7, _CLIMATE_TEXTURES, _FOREST_TEXTURES;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerrainDrawer", function () {
      return TerrainDrawer;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/app/renderer/utils.ts");
    /* harmony import */


    var src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");

    var SEA_TEXTURES = (_SEA_TEXTURES = {}, _defineProperty(_SEA_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].deep, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexOcean", 4)), _defineProperty(_SEA_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].shallow, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexShallowWater", 4)), _defineProperty(_SEA_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none, []), _SEA_TEXTURES);
    var CLIMATE_TEXTURES = (_CLIMATE_TEXTURES = {}, _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].continental, (_src_app_shared__WEBP = {}, _defineProperty(_src_app_shared__WEBP, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsCold", 4)), _defineProperty(_src_app_shared__WEBP, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsCold", 4)), _defineProperty(_src_app_shared__WEBP, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4)), _src_app_shared__WEBP)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert, (_src_app_shared__WEBP2 = {}, _defineProperty(_src_app_shared__WEBP2, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexSand", 4)), _defineProperty(_src_app_shared__WEBP2, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsDesert", 4)), _defineProperty(_src_app_shared__WEBP2, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainDesert", 4)), _src_app_shared__WEBP2)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].oceanic, (_src_app_shared__WEBP3 = {}, _defineProperty(_src_app_shared__WEBP3, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlains", 4)), _defineProperty(_src_app_shared__WEBP3, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHighlands", 4)), _defineProperty(_src_app_shared__WEBP3, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4)), _src_app_shared__WEBP3)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].savanna, (_src_app_shared__WEBP4 = {}, _defineProperty(_src_app_shared__WEBP4, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexScrublands", 4)), _defineProperty(_src_app_shared__WEBP4, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsSavanna", 4)), _defineProperty(_src_app_shared__WEBP4, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainDesert", 4)), _src_app_shared__WEBP4)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tropical, (_src_app_shared__WEBP5 = {}, _defineProperty(_src_app_shared__WEBP5, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexTropicalPlains", 4)), _defineProperty(_src_app_shared__WEBP5, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHills", 4)), _defineProperty(_src_app_shared__WEBP5, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountain", 4)), _src_app_shared__WEBP5)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tundra, (_src_app_shared__WEBP6 = {}, _defineProperty(_src_app_shared__WEBP6, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsColdSnowTransition", 4)), _defineProperty(_src_app_shared__WEBP6, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsColdSnowTransition", 4)), _defineProperty(_src_app_shared__WEBP6, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainSnow", 4)), _src_app_shared__WEBP6)), _defineProperty(_CLIMATE_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].arctic, (_src_app_shared__WEBP7 = {}, _defineProperty(_src_app_shared__WEBP7, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexPlainsColdSnowCovered", 4)), _defineProperty(_src_app_shared__WEBP7, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].hills, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexHillsColdSnowCovered", 4)), _defineProperty(_src_app_shared__WEBP7, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].mountains, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMountainSnow", 4)), _src_app_shared__WEBP7)), _CLIMATE_TEXTURES);
    var FOREST_TEXTURES = (_FOREST_TEXTURES = {}, _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].continental, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestPine", 4)), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].oceanic, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestBroadleaf", 4)), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tropical, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexJungle", 4)), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].tundra, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexForestPineSnowTransition", 4)), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].savanna, []), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert, []), _defineProperty(_FOREST_TEXTURES, src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].arctic, []), _FOREST_TEXTURES);
    var WETLANDS_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexMarsh", 4);
    var WETLANDS_FOREST_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexSwamp", 4);
    var DESERT_FLOOD_PLAINS_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("hexGrassySand", 4);
    var FARM_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("field", 15);
    var MINE_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("mines", 5);
    var SAWMILL_TEXTURES = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTileVariants"])("forester_hut", 4);

    var TerrainDrawer = /*#__PURE__*/function () {
      function TerrainDrawer(renderer, game, terrainContainer, waterContainer) {
        _classCallCheck(this, TerrainDrawer);

        this.renderer = renderer;
        this.game = game;
        this.terrainContainer = terrainContainer;
        this.waterContainer = waterContainer;
      }

      _createClass(TerrainDrawer, [{
        key: "drawTile",
        value: function drawTile(tile) {
          var variants;

          if (tile.wetlands) {
            if (tile.forest) {
              variants = WETLANDS_FOREST_TEXTURES;
            } else {
              variants = WETLANDS_TEXTURES;
            }
          } else if (tile.forest) {
            variants = FOREST_TEXTURES[tile.climate];
          } else if (tile.seaLevel === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            if (tile.climate === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Climate"].desert && tile.landForm === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LandForm"].plains && tile.riverParts.length) {
              variants = DESERT_FLOOD_PLAINS_TEXTURES;
            } else {
              variants = CLIMATE_TEXTURES[tile.climate][tile.landForm];
            }
          } else {
            variants = SEA_TEXTURES[tile.seaLevel];
          }

          var textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(variants);
          var sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSprite"])(tile, this.textures[textureName]);

          if (tile.seaLevel === src_app_shared__WEBPACK_IMPORTED_MODULE_2__["SeaLevel"].none) {
            this.terrainContainer.addChild(sprite, tile);
          } else {
            this.waterContainer.addChild(sprite, tile);
          }

          var isVisible = this.game.state.trackedPlayer.exploredTiles.has(tile);

          if (!isVisible) {
            sprite.visible = false;
          }

          var road = this.drawRoads(tile);

          if (road && !isVisible) {
            road.visible = false;
          }

          var improvement = this.drawImprovement(tile);

          if (improvement && !isVisible) {
            improvement.visible = false;
          }
        }
      }, {
        key: "drawImprovement",
        value: function drawImprovement(tile) {
          var sprite = null;

          if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].farm) {
            var textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(FARM_TEXTURES);
            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[textureName]);
            this.terrainContainer.addChild(sprite, tile);
          } else if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].mine) {
            var _textureName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(MINE_TEXTURES);

            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[_textureName]);
            this.terrainContainer.addChild(sprite, tile);
          } else if (tile.improvement === src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_1__["TileImprovement"].sawmill) {
            var _textureName2 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])(SAWMILL_TEXTURES);

            sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSpriteCentered"])(tile, this.textures[_textureName2]);
            this.terrainContainer.addChild(sprite, tile);
          }

          return sprite;
        }
      }, {
        key: "drawRoads",
        value: function drawRoads(tile) {
          if (tile.road === null) {
            return null;
          }

          var roadId = tile.fullNeighbours.map(function (n) {
            return !n || n.road === null ? "0" : "1";
          }).join("");
          var textureName = "hexRoad-".concat(roadId, "-00.png");
          var sprite = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["drawTileSprite"])(tile, this.textures[textureName]);
          this.terrainContainer.addChild(sprite, tile);
          return sprite;
        }
      }, {
        key: "clearTile",
        value: function clearTile(tile) {
          this.waterContainer.clearTile(tile);
          this.terrainContainer.clearTile(tile);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.waterContainer.destroyAllChildren();
          this.terrainContainer.destroyAllChildren();
        }
      }, {
        key: "textures",
        get: function get() {
          return this.renderer.textures;
        }
      }]);

      return TerrainDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/tile/unit.ts":
  /*!***************************************!*\
    !*** ./src/app/renderer/tile/unit.ts ***!
    \***************************************/

  /*! exports provided: UnitsDrawer */

  /***/
  function srcAppRendererTileUnitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsDrawer", function () {
      return UnitsDrawer;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils */
    "./src/app/renderer/utils.ts");

    var UnitsDrawer = /*#__PURE__*/function () {
      function UnitsDrawer(game, renderer, container) {
        var _this38 = this;

        _classCallCheck(this, UnitsDrawer);

        this.game = game;
        this.renderer = renderer;
        this.container = container;
        this.unitGraphics = new Map();
        game.init$.subscribe(function (state) {
          state.unitSpawned$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (unit) {
            return _this38.spawn(unit);
          });
          state.unitUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (unit) {
            return _this38.update(unit);
          });
          state.unitDestroyed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(game.stop$)).subscribe(function (unit) {
            return _this38.destroy(unit);
          });
        });
      }

      _createClass(UnitsDrawer, [{
        key: "build",
        value: function build() {
          if (!this.game.state) {
            return;
          }

          var _iterator75 = _createForOfIteratorHelper(this.game.state.units),
              _step75;

          try {
            for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
              var unit = _step75.value;
              this.spawn(unit);
            }
          } catch (err) {
            _iterator75.e(err);
          } finally {
            _iterator75.f();
          }
        }
      }, {
        key: "spawn",
        value: function spawn(unit) {
          var _this39 = this;

          var backgroundTextureName = "unitBackground-".concat(unit.definition.type, ".png");
          var backgroundTexture = this.textures[backgroundTextureName];
          var unitTextureName = "unit-".concat(unit.definition.id, ".png");
          var unitTexture = this.textures[unitTextureName];
          var objects = [];
          var backgroundSprite = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSpriteCentered"])(unit.tile, backgroundTexture); // TODO don't need set position here as layoutTile will do it.

          this.container.addChild(backgroundSprite, unit.tile);
          objects.push(backgroundSprite);
          backgroundSprite.tint = unit.player.color;
          var unitSprite = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawTileSpriteCentered"])(unit.tile, unitTexture);
          this.container.addChild(unitSprite, unit.tile);
          objects.push(unitSprite);
          this.unitGraphics.set(unit, objects);
          this.layoutTile(unit.tile);
          backgroundSprite.interactive = true;
          backgroundSprite.on("pointerdown", function (event) {
            if (event.data.button === 0) {
              _this39.renderer.mapUi.selectUnit(unit);
            }
          });
        }
      }, {
        key: "destroy",
        value: function destroy(unit) {
          var objs = this.unitGraphics.get(unit);

          if (!objs) {
            return;
          }

          this.unitGraphics["delete"](unit);

          var _iterator76 = _createForOfIteratorHelper(objs),
              _step76;

          try {
            for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
              var obj = _step76.value;
              obj.destroy();
            }
          } catch (err) {
            _iterator76.e(err);
          } finally {
            _iterator76.f();
          }
        }
      }, {
        key: "update",
        value: function update(unit) {
          var objs = this.unitGraphics.get(unit);

          if (!objs) {
            return;
          }

          var oldTile = this.container.childrenMap.get(objs[0]);

          if (oldTile && oldTile.units.length) {
            this.layoutTile(oldTile);
          }

          this.layoutTile(unit.tile);
        }
      }, {
        key: "layoutTile",
        value: function layoutTile(tile) {
          var _a;

          var isVisible = this.game.state.trackedPlayer.exploredTiles.has(tile);
          var x = 1 / (tile.units.length + 1) - 0.5;
          var xOffset = 1 / (tile.units.length + 1);

          var _iterator77 = _createForOfIteratorHelper(tile.units),
              _step77;

          try {
            for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
              var unit = _step77.value;
              var sprites = this.unitGraphics.get(unit);

              if (!sprites) {
                // the sprites may not be created yet.
                continue;
              }

              var _iterator78 = _createForOfIteratorHelper(sprites),
                  _step78;

              try {
                for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
                  var sprite = _step78.value;
                  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["putSpriteAtTileCentered"])(unit.tile, sprite);
                  sprite.position.x += x;

                  if (unit.id === ((_a = this.renderer.mapUi.selectedUnit) === null || _a === void 0 ? void 0 : _a.id) && tile.units.length > 1) {
                    sprite.position.y -= 0.1;
                  }

                  this.container.moveChild(sprite, unit.tile);
                  sprite.visible = isVisible;
                }
              } catch (err) {
                _iterator78.e(err);
              } finally {
                _iterator78.f();
              }

              x += xOffset;
            }
          } catch (err) {
            _iterator77.e(err);
          } finally {
            _iterator77.f();
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.container.destroyAllChildren();
          this.unitGraphics.clear();
        }
      }, {
        key: "textures",
        get: function get() {
          return this.renderer.textures;
        }
      }]);

      return UnitsDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/tile/yields.ts":
  /*!*****************************************!*\
    !*** ./src/app/renderer/tile/yields.ts ***!
    \*****************************************/

  /*! exports provided: YiedsDrawer */

  /***/
  function srcAppRendererTileYieldsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YiedsDrawer", function () {
      return YiedsDrawer;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");

    var YiedsDrawer = /*#__PURE__*/function () {
      function YiedsDrawer(game, mapUi, container) {
        var _this40 = this;

        _classCallCheck(this, YiedsDrawer);

        this.game = game;
        this.mapUi = mapUi;
        this.container = container;
        this.mapUi.yieldsVisible$.subscribe(function (visible) {
          return _this40.container.visible = visible;
        });
      }

      _createClass(YiedsDrawer, [{
        key: "clearTile",
        value: function clearTile(tile) {
          this.container.clearTile(tile);
        }
      }, {
        key: "drawTile",
        value: function drawTile(tile) {
          var g = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
          g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
          g.position.y = tile.y * 0.75;
          this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
          this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);
          this.container.addChild(g, tile);

          if (!this.game.state.trackedPlayer.exploredTiles.has(tile)) {
            g.visible = false;
          }
        }
      }, {
        key: "drawYield",
        value: function drawYield(g, y, quantity, color) {
          g.beginFill(color);

          for (var i = 0; i < quantity; i++) {
            var x = 0.5 - quantity / 2 * 0.1 + 0.1 * i;
            g.drawRect(x, y, 0.05, 0.05);
          }

          g.endFill();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.container.destroyAllChildren();
        }
      }]);

      return YiedsDrawer;
    }();
    /***/

  },

  /***/
  "./src/app/renderer/utils.ts":
  /*!***********************************!*\
    !*** ./src/app/renderer/utils.ts ***!
    \***********************************/

  /*! exports provided: HEX_GEOMETRY, getTileCenter, getTileCoords, drawHex, drawClosedHex, clearContainer, getTileVariants, drawTileSprite, drawTileSpriteCentered, putContainerAtTile, putSpriteAtTileCentered, pickRandom */

  /***/
  function srcAppRendererUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HEX_GEOMETRY", function () {
      return HEX_GEOMETRY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileCenter", function () {
      return getTileCenter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileCoords", function () {
      return getTileCoords;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawHex", function () {
      return drawHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawClosedHex", function () {
      return drawClosedHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearContainer", function () {
      return clearContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTileVariants", function () {
      return getTileVariants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawTileSprite", function () {
      return drawTileSprite;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawTileSpriteCentered", function () {
      return drawTileSpriteCentered;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "putContainerAtTile", function () {
      return putContainerAtTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "putSpriteAtTileCentered", function () {
      return putSpriteAtTileCentered;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pickRandom", function () {
      return pickRandom;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants */
    "./src/app/renderer/constants.ts"); // prettier-ignore


    var HEX_GEOMETRY = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]().addAttribute("aVertexPosition", [0, 0.25, 0.5, 0, 1, 0.25, 0, 0.25, 1, 0.25, 1, 0.75, 0, 0.25, 1, 0.75, 0, 0.75, 0, 0.75, 1, 0.75, 0.5, 1], 2);

    function getTileCenter(tile) {
      return [0.5 + tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75 + 0.5];
    }

    function getTileCoords(tile) {
      return [tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75];
    }

    function drawHex(graphics) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
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
      var result = [];

      for (var i = 0; i < variants; i++) {
        result.push("".concat(tileName).concat(i.toString().padStart(2, "0"), ".png"));
      }

      return result;
    }

    function drawTileSprite(tile, texture) {
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.scale.set(1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], 1 / _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
      putContainerAtTile(tile, sprite);
      return sprite;
    }

    function drawTileSpriteCentered(tile, texture) {
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
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


    var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    function getTileFullNeighbours(tiles, x, y) {
      return [getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW), getTileInDirection(tiles, tiles[x][y], _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W)];
    }

    function getTileNeighbours(tiles, x, y) {
      return getTileFullNeighbours(tiles, x, y).filter(function (t) {
        return !!t;
      });
    }

    function getTileInDirection(tiles, tile, direction) {
      switch (direction) {
        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW:
          if (tile.y % 2 === 0 && tile.x === 0 || tile.y === 0) {
            return null;
          }

          return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];

        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE:
          if (tile.y % 2 && tile.x === tiles.length - 1 || tile.y === 0) {
            return null;
          }

          return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];

        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E:
          if (tile.x === tiles.length - 1) {
            return null;
          }

          return tiles[tile.x + 1][tile.y];

        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE:
          if (tile.y % 2 && tile.x === tiles.length - 1 || tile.y === tiles[tile.x].length - 1) {
            return null;
          }

          return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];

        case _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW:
          if (tile.y % 2 === 0 && tile.x === 0 || tile.y === tiles[tile.x].length - 1) {
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
      if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) && toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NW;
      }

      if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) && toTile.y === fromtile.y - 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NE;
      }

      if (toTile.x === fromtile.x + 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].E;
      }

      if (toTile.x === fromtile.x + (fromtile.y % 2 ? 1 : 0) && toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SE;
      }

      if (toTile.x === fromtile.x - (fromtile.y % 2 ? 0 : 1) && toTile.y === fromtile.y + 1) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].SW;
      }

      if (toTile.x === fromtile.x - 1 && toTile.y === fromtile.y) {
        return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].W;
      }

      return _shared__WEBPACK_IMPORTED_MODULE_0__["TileDirection"].NONE;
    }

    function getTilesInRange(tile, range) {
      var result = new Set([tile]);

      for (var i = 0; i < range; i++) {
        var neighbours = new Set();

        var _iterator79 = _createForOfIteratorHelper(result),
            _step79;

        try {
          for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
            var _tile2 = _step79.value;

            var _iterator81 = _createForOfIteratorHelper(_tile2.neighbours),
                _step81;

            try {
              for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
                var neighbour = _step81.value;
                // TODO fix typing
                neighbours.add(neighbour);
              }
            } catch (err) {
              _iterator81.e(err);
            } finally {
              _iterator81.f();
            }
          }
        } catch (err) {
          _iterator79.e(err);
        } finally {
          _iterator79.f();
        }

        var _iterator80 = _createForOfIteratorHelper(neighbours),
            _step80;

        try {
          for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
            var _tile3 = _step80.value;
            result.add(_tile3);
          }
        } catch (err) {
          _iterator80.e(err);
        } finally {
          _iterator80.f();
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


    var _tile_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tile.interface */
    "./src/app/shared/tile.interface.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TileDirection", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["TileDirection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Climate", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["Climate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LandForm", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["LandForm"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SeaLevel", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["SeaLevel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FORESTABLE_CLIMATES", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["FORESTABLE_CLIMATES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WETLANDS_CLIMATES", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["WETLANDS_CLIMATES"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isForestable", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isForestable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "areWetlandsPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["areWetlandsPossible"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isImprovementPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isImprovementPossible"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isRoadPossible", function () {
      return _tile_interface__WEBPACK_IMPORTED_MODULE_0__["isRoadPossible"];
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


    var _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm) {
        return tile.seaLevel === SeaLevel.none && tile.landForm === LandForm.plains && tile.climate !== Climate.arctic && !tile.forest && !tile.wetlands;
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine) {
        return tile.landForm === LandForm.hills;
      } else if (improvement === _core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill) {
        return tile.forest && !tile.wetlands;
      } else {
        return false;
      }
    }

    function isRoadPossible(tile) {
      return tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains;
    }
    /***/

  },

  /***/
  "./src/app/ui/bonuses/bonuses.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui/bonuses/bonuses.component.ts ***!
    \*************************************************/

  /*! exports provided: BonusesComponent */

  /***/
  function srcAppUiBonusesBonusesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonusesComponent", function () {
      return BonusesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../percent-bonus.pipe */
    "./src/app/ui/percent-bonus.pipe.ts");

    function BonusesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var food_r143 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", food_r143, " food\n");
      }
    }

    function BonusesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var production_r144 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", production_r144, " production\n");
      }
    }

    function BonusesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var culture_r145 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", culture_r145, " culture\n");
      }
    }

    function BonusesComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicWorks_r146 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", publicWorks_r146, " public works\n");
      }
    }

    function BonusesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var food_r147 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, food_r147), " food\n");
      }
    }

    function BonusesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var production_r148 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, production_r148), " production\n");
      }
    }

    function BonusesComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var culture_r149 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, culture_r149), " culture\n");
      }
    }

    function BonusesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var publicWorks_r150 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, publicWorks_r150), " public works\n");
      }
    }

    function BonusesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r151 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r151), " production transfered into food\n");
      }
    }

    function BonusesComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r152 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r152), " production transfered into culture\n");
      }
    }

    function BonusesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percentBonus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r153 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, transfer_r153), " production transfered into public works\n");
      }
    }

    var BonusesComponent = /*#__PURE__*/function () {
      function BonusesComponent() {
        _classCallCheck(this, BonusesComponent);
      }

      _createClass(BonusesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BonusesComponent;
    }();

    BonusesComponent.ɵfac = function BonusesComponent_Factory(t) {
      return new (t || BonusesComponent)();
    };

    BonusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BonusesComponent,
      selectors: [["app-bonuses"]],
      inputs: {
        bonuses: "bonuses"
      },
      decls: 11,
      vars: 11,
      consts: [["class", "growth-color", 4, "ngIf"], ["class", "production-color", 4, "ngIf"], ["class", "culture-color", 4, "ngIf"], ["class", "public-works-color", 4, "ngIf"], [1, "growth-color"], [1, "production-color"], [1, "culture-color"], [1, "public-works-color"]],
      template: function BonusesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_percent_bonus_pipe__WEBPACK_IMPORTED_MODULE_2__["PercentBonusPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2JvbnVzZXMvYm9udXNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonusesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-bonuses",
          templateUrl: "./bonuses.component.html",
          styleUrls: ["./bonuses.component.scss"]
        }]
      }], function () {
        return [];
      }, {
        bonuses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/button.directive.ts":
  /*!****************************************!*\
    !*** ./src/app/ui/button.directive.ts ***!
    \****************************************/

  /*! exports provided: ButtonDirective */

  /***/
  function srcAppUiButtonDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return ButtonDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonDirective = /*#__PURE__*/function () {
      function ButtonDirective(elementRef) {
        _classCallCheck(this, ButtonDirective);

        this.elementRef = elementRef;
      }

      _createClass(ButtonDirective, [{
        key: "onClick",
        value: function onClick() {
          // Prevents clicking focused button when pressing "enter" for next turn.
          this.elementRef.nativeElement.blur();
        }
      }]);

      return ButtonDirective;
    }();

    ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
      return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ButtonDirective,
      selectors: [["button"]],
      hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "button"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/cities-layer/cities-layer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui/cities-layer/cities-layer.component.ts ***!
    \***********************************************************/

  /*! exports provided: CitiesLayerComponent */

  /***/
  function srcAppUiCitiesLayerCitiesLayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesLayerComponent", function () {
      return CitiesLayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./city-info/city-info.component */
    "./src/app/ui/cities-layer/city-info/city-info.component.ts");
    /* harmony import */


    var src_app_renderer_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/renderer/utils */
    "./src/app/renderer/utils.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CitiesLayerComponent_app_city_info_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-city-info", 1);
      }

      if (rf & 2) {
        var city_r95 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", city_r95);
      }
    }

    var CitiesLayerComponent = /*#__PURE__*/function () {
      function CitiesLayerComponent(cdr, elementRef, game, camera) {
        _classCallCheck(this, CitiesLayerComponent);

        this.cdr = cdr;
        this.elementRef = elementRef;
        this.game = game;
        this.camera = camera;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CitiesLayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          if (!this.game.state) {
            return;
          }

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.game.state.citySpawned$, this.game.state.cityDestroyed$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            _this41.updateCities();
          });
          this.game.stop$.subscribe(function () {
            _this41.cities = [];

            _this41.cdr.markForCheck();
          });
          this.updateCities();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this42 = this;

          this.camera.transform$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            return _this42.updateTransforms();
          });
        }
      }, {
        key: "updateTransforms",
        value: function updateTransforms() {
          var el = this.elementRef.nativeElement;
          var scale = this.camera.transform.scale;
          var box = this.camera.tileBoundingBox;
          var opacity = 1;

          if (scale < 30) {
            opacity = Math.max(0, 1 - (30 - scale) / 8);
          }

          el.style.opacity = opacity.toString();

          if (opacity === 0) {
            return;
          }

          var _iterator82 = _createForOfIteratorHelper(this.citiesComponents),
              _step82;

          try {
            for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
              var cityComponent = _step82.value;
              var tile = cityComponent.city.tile;
              var cityEl = cityComponent.elementRef.nativeElement;

              if (tile.x >= box.xStart && tile.x <= box.xEnd && tile.y >= box.yStart && tile.y <= box.yEnd) {
                cityEl.style.display = "flex";
              } else {
                cityEl.style.display = "none";
                continue;
              }

              var cityScale = Math.pow(scale / 70, 0.4);

              var _Object11 = Object(src_app_renderer_utils__WEBPACK_IMPORTED_MODULE_4__["getTileCoords"])(cityComponent.city.tile),
                  _Object12 = _slicedToArray(_Object11, 2),
                  x = _Object12[0],
                  y = _Object12[1];

              var _this$camera$canvasTo = this.camera.canvasToScreen(x + 0.5, y + 0.8);

              var _this$camera$canvasTo2 = _slicedToArray(_this$camera$canvasTo, 2);

              x = _this$camera$canvasTo2[0];
              y = _this$camera$canvasTo2[1];
              cityEl.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(cityScale, ")");
            }
          } catch (err) {
            _iterator82.e(err);
          } finally {
            _iterator82.f();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "updateCities",
        value: function updateCities() {
          var _this43 = this;

          var player = this.game.state.trackedPlayer;
          this.cities = this.game.state.cities.filter(function (city) {
            return player.exploredTiles.has(city.tile);
          });
          this.cdr.markForCheck();
          setTimeout(function () {
            return _this43.updateTransforms();
          });
        }
      }, {
        key: "trackByCityId",
        value: function trackByCityId(index, city) {
          return city.id;
        }
      }]);

      return CitiesLayerComponent;
    }();

    CitiesLayerComponent.ɵfac = function CitiesLayerComponent_Factory(t) {
      return new (t || CitiesLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"]));
    };

    CitiesLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CitiesLayerComponent,
      selectors: [["app-cities-layer"]],
      viewQuery: function CitiesLayerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.citiesComponents = _t);
        }
      },
      decls: 1,
      vars: 2,
      consts: [[3, "city", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "city"]],
      template: function CitiesLayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CitiesLayerComponent_app_city_info_0_Template, 1, 1, "app-city-info", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities)("ngForTrackBy", ctx.trackByCityId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  will-change: opacity;\n}\n.hidden[_nghost-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0aWVzLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAmLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuOmhvc3QuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-cities-layer",
          templateUrl: "./cities-layer.component.html",
          styleUrls: ["./cities-layer.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }];
      }, {
        citiesComponents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_3__["CityInfoComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/cities-layer/city-info/city-info.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ui/cities-layer/city-info/city-info.component.ts ***!
    \******************************************************************/

  /*! exports provided: CityInfoComponent */

  /***/
  function srcAppUiCitiesLayerCityInfoCityInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityInfoComponent", function () {
      return CityInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var src_app_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/controls */
    "./src/app/controls.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../widgets/progress-bar/progress-bar.component */
    "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _turns_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../turns.pipe */
    "./src/app/ui/turns.pipe.ts");

    function CityInfoComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    function CityInfoComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r93.city.name);
      }
    }

    var CityInfoComponent = /*#__PURE__*/function () {
      function CityInfoComponent(cdr, elementRef, game, controls, mapUi) {
        _classCallCheck(this, CityInfoComponent);

        this.cdr = cdr;
        this.elementRef = elementRef;
        this.game = game;
        this.controls = controls;
        this.mapUi = mapUi;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CityInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          var el = this.elementRef.nativeElement;
          var thisCity = this.game.state.cityUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (c) {
            return c.id === _this44.city.id;
          }));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.game.state.turn$, thisCity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            el.style.setProperty("--player-color", _this44.city.player.cssColor);

            _this44.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "selectCity",
        value: function selectCity() {
          this.mapUi.selectCity(this.city);
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(event) {
          event.preventDefault();
        }
      }, {
        key: "city",
        set: function set(city) {
          this._city = city;
        },
        get: function get() {
          return this._city;
        }
      }, {
        key: "areDetailsVisible",
        get: function get() {
          return this.city.player.id === this.game.state.trackedPlayer.id;
        }
      }]);

      return CityInfoComponent;
    }();

    CityInfoComponent.ɵfac = function CityInfoComponent_Factory(t) {
      return new (t || CityInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_controls__WEBPACK_IMPORTED_MODULE_4__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]));
    };

    CityInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CityInfoComponent,
      selectors: [["app-city-info"]],
      inputs: {
        city: "city"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "info", 3, "click", "mousedown", "mouseup", "mousemove", "wheel", "contextmenu"], [1, "size"], [4, "ngIf", "ngIfElse"], ["simpleViewTmpl", ""], [1, "growth", 3, "progress", "nextProgress", "total"], [1, "turns"], [1, "production", 3, "progress", "nextProgress", "total"], [1, "simple-view"]],
      template: function CityInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityInfoComponent_Template_div_click_0_listener() {
            return ctx.selectCity();
          })("click", function CityInfoComponent_Template_div_click_0_listener($event) {
            return ctx.controls.onClick($event);
          })("mousedown", function CityInfoComponent_Template_div_mousedown_0_listener($event) {
            return ctx.controls.onMouseDown($event);
          })("mouseup", function CityInfoComponent_Template_div_mouseup_0_listener($event) {
            return ctx.controls.onMouseUp($event);
          })("mousemove", function CityInfoComponent_Template_div_mousemove_0_listener($event) {
            return ctx.controls.onMouseMove($event);
          })("wheel", function CityInfoComponent_Template_div_wheel_0_listener($event) {
            return ctx.controls.onWheel($event);
          })("contextmenu", function CityInfoComponent_Template_div_contextmenu_0_listener($event) {
            return ctx.onContextMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CityInfoComponent_div_3_Template, 13, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CityInfoComponent_ng_template_4_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.size);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areDetailsVisible)("ngIfElse", _r92);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["ProgressBarComponent"]],
      pipes: [_turns_pipe__WEBPACK_IMPORTED_MODULE_8__["TurnsPipe"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  margin-left: -150px;\n  transform-origin: top;\n  will-change: transform;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  color: white;\n  box-shadow: 0 0 4px 0 black;\n  display: flex;\n  pointer-events: all;\n  overflow: hidden;\n  cursor: pointer;\n  text-shadow: 0px 0px 5px black;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 26px;\n  padding: 0 5px;\n  min-width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--player-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%] {\n  height: 20px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%]   .turns[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar.growth[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--growth-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   app-progress-bar.production[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--production-color);\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .simple-view[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0eS1pbmZvL2NpdHktaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvY2l0aWVzLWxheWVyL2NpdHktaW5mby9jaXR5LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEREk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FDR047QURESTtFQUNFLFlBQUE7QUNHTjtBREZNO0VBQ0UsaUJBQUE7QUNJUjtBREZNO0VBQ0UseUNBQUE7QUNJUjtBREZNO0VBQ0UsNkNBQUE7QUNJUjtBRERJO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC91aS9jaXRpZXMtbGF5ZXIvY2l0eS1pbmZvL2NpdHktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC5pbmZvIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDAgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcbiAgICAuc2l6ZSB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xuICAgIH1cbiAgICBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIC50dXJucyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgJi5ncm93dGgge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICYucHJvZHVjdGlvbiB7XG4gICAgICAgIC0tcHJvZ3Jlc3MtYmFyLWNvbG9yOiB2YXIoLS1wcm9kdWN0aW9uLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNpbXBsZS12aWV3IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuOmhvc3QgLmluZm8ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XG59XG46aG9zdCAuaW5mbyAuc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XG59XG46aG9zdCAuaW5mbyBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLmluZm8gYXBwLXByb2dyZXNzLWJhciAudHVybnMge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbjpob3N0IC5pbmZvIGFwcC1wcm9ncmVzcy1iYXIuZ3Jvd3RoIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWdyb3d0aC1jb2xvcik7XG59XG46aG9zdCAuaW5mbyBhcHAtcHJvZ3Jlc3MtYmFyLnByb2R1Y3Rpb24ge1xuICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG59XG46aG9zdCAuaW5mbyAuc2ltcGxlLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-city-info",
          templateUrl: "./city-info.component.html",
          styleUrls: ["./city-info.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: src_app_controls__WEBPACK_IMPORTED_MODULE_4__["Controls"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]
        }];
      }, {
        city: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/city-view/city-view.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/city-view/city-view.component.ts ***!
    \*****************************************************/

  /*! exports provided: CityViewComponent */

  /***/
  function srcAppUiCityViewCityViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityViewComponent", function () {
      return CityViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../widgets/progress-bar/progress-bar.component */
    "./src/app/ui/widgets/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../widgets/tabs/tabs.component */
    "./src/app/ui/widgets/tabs/tabs.component.ts");
    /* harmony import */


    var _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../widgets/tabs/tab/tab.component */
    "./src/app/ui/widgets/tabs/tab/tab.component.ts");
    /* harmony import */


    var _work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./work-tiles/work-tiles.component */
    "./src/app/ui/city-view/work-tiles/work-tiles.component.ts");
    /* harmony import */


    var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../widgets/tooltip.directive */
    "./src/app/ui/widgets/tooltip.directive.ts");
    /* harmony import */


    var _product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../product-requirements/product-requirements.component */
    "./src/app/ui/product-requirements/product-requirements.component.ts");
    /* harmony import */


    var _bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../bonuses/bonuses.component */
    "./src/app/ui/bonuses/bonuses.component.ts");
    /* harmony import */


    var _turns_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../turns.pipe */
    "./src/app/ui/turns.pipe.ts");

    var _c0 = ["workTiles"];

    function CityViewComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("will grow in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r98.city.turnsToGrow), " turns");
      }
    }

    function CityViewComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("will shrink in ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, 0 - ctx_r99.city.turnsToGrow), " turns");
      }
    }

    function CityViewComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "growth stalled");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CityViewComponent_app_progress_bar_43_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "turns");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r113.city.turnsToProductionEnd), " turns ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        building: a0
      };
    };

    function CityViewComponent_app_progress_bar_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-progress-bar", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CityViewComponent_app_progress_bar_43_span_4_Template, 3, 3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r101.city.product.productDefinition))("progress", ctx_r101.city.totalProduction)("nextProgress", ctx_r101.city.totalProduction + ctx_r101.city.perTurn.production)("total", ctx_r101.city.product == null ? null : ctx_r101.city.product.productDefinition.productionCost);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r101.city.product == null ? null : ctx_r101.city.product.productDefinition.name) || "-", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r101.city.product);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        unit: a0
      };
    };

    function CityViewComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_46_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116);

          var unit_r114 = ctx.$implicit;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r115.produceUnit(unit_r114);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var unit_r114 = ctx.$implicit;

        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r102.city.disabledUnits.has(unit_r114));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r109)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, unit_r114));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unit_r114.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r102.city.getTurnsToProduce(unit_r114), " turns ");
      }
    }

    function CityViewComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_48_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119);

          var building_r117 = ctx.$implicit;

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r118.produceBuilding(building_r117);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var building_r117 = ctx.$implicit;

        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r103.city.disabledBuildings.has(building_r117));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, building_r117));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", building_r117.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r103.city.getTurnsToProduce(building_r117), " turns ");
      }
    }

    var _c3 = function _c3(a0) {
      return {
        idleProduct: a0
      };
    };

    function CityViewComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_div_50_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);

          var idleProduct_r120 = ctx.$implicit;

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r121.workOnIdleProduct(idleProduct_r120);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idleProduct_r120 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r111)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, idleProduct_r120));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idleProduct_r120.name, " ");
      }
    }

    function CityViewComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var building_r123 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r107)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, building_r123));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", building_r123.name, " ");
      }
    }

    function CityViewComponent_ng_template_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-product-requirements", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-bonuses", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var building_r124 = ctx.building;

        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](building_r124.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", building_r124)("city", ctx_r108.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bonuses", building_r124.bonuses);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cost: ", building_r124.productionCost, "");
      }
    }

    function CityViewComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-product-requirements", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var unit_r125 = ctx.unit;

        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](unit_r125.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", unit_r125)("city", ctx_r110.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cost: ", unit_r125.productionCost, "");
      }
    }

    function CityViewComponent_ng_template_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-bonuses", 40);
      }

      if (rf & 2) {
        var idleProduct_r126 = ctx.idleProduct;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idleProduct_r126.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bonuses", idleProduct_r126.bonuses);
      }
    }

    var CityViewComponent = /*#__PURE__*/function () {
      function CityViewComponent(cdr, camera, mapUi) {
        _classCallCheck(this, CityViewComponent);

        this.cdr = cdr;
        this.camera = camera;
        this.mapUi = mapUi;
        this.quit$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CityViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mapUi.hoverCity(this.city.citySimple);
        }
      }, {
        key: "produceBuilding",
        value: function produceBuilding(building) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.city.produceBuilding(building);

                  case 2:
                    this.cdr.markForCheck();

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "produceUnit",
        value: function produceUnit(unit) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.city.produceUnit(unit);

                  case 2:
                    this.cdr.markForCheck();

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "workOnIdleProduct",
        value: function workOnIdleProduct(idleProduct) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.city.workOnIdleProduct(idleProduct);

                  case 2:
                    this.cdr.markForCheck();

                  case 3:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "optimizeYields",
        value: function optimizeYields() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.city.optimizeYields();

                  case 2:
                    this.workTilesComponent.updateWorkedTilesArea();
                    this.cdr.markForCheck();

                  case 4:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "quit",
        value: function quit() {
          this.mapUi.selectCity(null);
          this.mapUi.unhoverCity();
          this.quit$.next();
        }
      }, {
        key: "city",
        set: function set(city) {
          var _this45 = this;

          this._city = city;
          this.camera.moveToTileWithEasing(this.city.tile);

          var _this$camera$canvasTo3 = this.camera.canvasToScreen(this.city.tile.x, this.city.tile.y),
              _this$camera$canvasTo4 = _slicedToArray(_this$camera$canvasTo3, 2),
              x = _this$camera$canvasTo4[0],
              y = _this$camera$canvasTo4[1];

          this.camera.scaleToWithEasing(130, x, y);
          this.mapUi.clickedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.quit$)).subscribe(function (tile) {
            if (!_this45.city.tiles.has(tile)) {
              _this45.quit();
            }
          });
        },
        get: function get() {
          return this._city;
        }
      }]);

      return CityViewComponent;
    }();

    CityViewComponent.ɵfac = function CityViewComponent_Factory(t) {
      return new (t || CityViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]));
    };

    CityViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CityViewComponent,
      selectors: [["app-city-view"]],
      viewQuery: function CityViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workTilesComponent = _t.first);
        }
      },
      inputs: {
        city: "city"
      },
      decls: 68,
      vars: 27,
      consts: [[1, "panel", "panel-bottom-right-corner", "left"], [1, "size-and-growth", "margin"], [1, "size"], [1, "growth-bar", 3, "progress", "nextProgress", "total"], ["class", "turns", 4, "ngIf"], [1, "margin-h"], [1, "yield", "growth-color"], [1, "label"], [1, "value"], [1, "yield", "production-color"], [1, "yield", "culture-color"], [1, "yield", "public-works-color"], [1, "margin-h", "margin-top", 3, "click"], [1, "separator"], [1, "culture-bar", "margin", 3, "progress", "nextProgress", "total"], [1, "turns"], ["class", "production-bar margin", 3, "appTooltip", "tooltipContext", "progress", "nextProgress", "total", 4, "ngIf"], [1, "grow-tabs"], ["tabTitle", "recruit", 1, "no-padding"], ["class", "product", 3, "disabled", "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], ["tabTitle", "construct", 1, "no-padding"], ["tabTitle", "work on", 1, "no-padding"], ["class", "product", 3, "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], [1, "city-name"], [1, "panel"], [1, "btn-primary", 3, "click"], [1, "panel", "panel-bottom-left-corner", "right"], [1, "margin"], ["class", "building", 3, "appTooltip", "tooltipContext", 4, "ngFor", "ngForOf"], [3, "city", "workedTiles"], ["workTiles", ""], ["buildingTooltipTmpl", ""], ["unitTooltipTmpl", ""], ["idleProductTooltipTmpl", ""], [1, "production-bar", "margin", 3, "appTooltip", "tooltipContext", "progress", "nextProgress", "total"], [1, "name"], [1, "product", 3, "appTooltip", "tooltipContext", "click"], [1, "turns", "small"], [1, "building", 3, "appTooltip", "tooltipContext"], [3, "product", "city"], [3, "bonuses"]],
      template: function CityViewComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_Template_button_click_31_listener() {
            return ctx.optimizeYields();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityViewComponent_Template_button_click_54_listener() {
            return ctx.quit();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"], _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["TabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _work_tiles_work_tiles_component__WEBPACK_IMPORTED_MODULE_11__["WorkTilesComponent"], _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__["TooltipDirective"], _product_requirements_product_requirements_component__WEBPACK_IMPORTED_MODULE_13__["ProductRequirementsComponent"], _bonuses_bonuses_component__WEBPACK_IMPORTED_MODULE_14__["BonusesComponent"]],
      pipes: [_turns_pipe__WEBPACK_IMPORTED_MODULE_15__["TurnsPipe"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-areas: \"left city-name city-name city-name right\";\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  --margin: 15px;\n  justify-self: flex-start;\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%] {\n  margin: var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin-h[_ngcontent-%COMP%] {\n  margin: 0 var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .margin-top[_ngcontent-%COMP%] {\n  margin-top: var(--margin);\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 3px;\n  background-color: var(--color-primary-4);\n  margin: 15px 0;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%] {\n  grid-area: left;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%] {\n  min-height: 30px;\n  height: 30px;\n  flex: 1;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.growth-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--growth-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.production-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--production-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   app-progress-bar.culture-bar[_ngcontent-%COMP%] {\n  --progress-bar-color: var(--culture-color);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .size-and-growth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .size-and-growth[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .yield[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:not(.disabled) {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:not(.disabled):hover {\n  background-color: var(--color-primary-3);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product.disabled[_ngcontent-%COMP%] {\n  color: var(--color-secondary-text);\n  background-color: var(--color-primary-4);\n}\n[_nghost-%COMP%]   .left[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .turns[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n[_nghost-%COMP%]   .city-name[_ngcontent-%COMP%] {\n  grid-area: city-name;\n  justify-self: center;\n  align-self: flex-start;\n  text-align: center;\n  margin-top: 50px;\n}\n[_nghost-%COMP%]   .city-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 8px 100px;\n  border-radius: 30px;\n}\n[_nghost-%COMP%]   .right[_ngcontent-%COMP%] {\n  grid-area: right;\n  justify-self: flex-end;\n}\n[_nghost-%COMP%]   .right[_ngcontent-%COMP%]   .building[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border-top: 1px solid var(--color-primary-3);\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXR5LXZpZXcvY2l0eS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXR5LXZpZXcvY2l0eS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsK0RBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBRENFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNFLFNBQUE7QUNFTjtBREFJO0VBQ0UscUJBQUE7QUNFTjtBREFJO0VBQ0UsdUJBQUE7QUNFTjtBREFJO0VBQ0UseUJBQUE7QUNFTjtBREFJO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQ0VOO0FERUU7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNDTjtBREFNO0VBQ0UseUNBQUE7QUNFUjtBREFNO0VBQ0UsNkNBQUE7QUNFUjtBREFNO0VBQ0UsMENBQUE7QUNFUjtBRENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURBTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQU47QURDTTtFQUNFLCtDQUFBO0FDQ1I7QURDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0FDQVI7QURDUTtFQUNFLHdDQUFBO0FDQ1Y7QURFTTtFQUNFLGtDQUFBO0VBQ0Esd0NBQUE7QUNBUjtBREVNO0VBQ0UsaUJBQUE7QUNBUjtBREtFO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRk47QURNRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNKSjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3VpL2NpdHktdmlldy9jaXR5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsZWZ0IGNpdHktbmFtZSBjaXR5LW5hbWUgY2l0eS1uYW1lIHJpZ2h0XCI7XG4gID4gZGl2IHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICAtLW1hcmdpbjogMTVweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLm1hcmdpbiB7XG4gICAgICBtYXJnaW46IHZhcigtLW1hcmdpbik7XG4gICAgfVxuICAgIC5tYXJnaW4taCB7XG4gICAgICBtYXJnaW46IDAgdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgLm1hcmdpbi10b3Age1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgLnNlcGFyYXRvciB7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG4gIH1cblxuICAubGVmdCB7XG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgIGFwcC1wcm9ncmVzcy1iYXIge1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAmLmdyb3d0aC1iYXIge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICYucHJvZHVjdGlvbi1iYXIge1xuICAgICAgICAtLXByb2dyZXNzLWJhci1jb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG4gICAgICB9XG4gICAgICAmLmN1bHR1cmUtYmFyIHtcbiAgICAgICAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWN1bHR1cmUtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2l6ZS1hbmQtZ3Jvd3RoIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnNpemUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAueWllbGQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0IHtcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgICB9XG4gICAgICAudHVybnMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2l0eS1uYW1lIHtcbiAgICBncmlkLWFyZWE6IGNpdHktbmFtZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGgyIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0IHtcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG5cbiAgICAuYnVpbGRpbmcge1xuICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxlZnQgY2l0eS1uYW1lIGNpdHktbmFtZSBjaXR5LW5hbWUgcmlnaHRcIjtcbn1cbjpob3N0ID4gZGl2IHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbjpob3N0IC5wYW5lbCB7XG4gIC0tbWFyZ2luOiAxNXB4O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5wYW5lbCBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5wYW5lbCAubWFyZ2luIHtcbiAgbWFyZ2luOiB2YXIoLS1tYXJnaW4pO1xufVxuOmhvc3QgLnBhbmVsIC5tYXJnaW4taCB7XG4gIG1hcmdpbjogMCB2YXIoLS1tYXJnaW4pO1xufVxuOmhvc3QgLnBhbmVsIC5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luKTtcbn1cbjpob3N0IC5wYW5lbCAuc2VwYXJhdG9yIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuOmhvc3QgLmxlZnQge1xuICBncmlkLWFyZWE6IGxlZnQ7XG59XG46aG9zdCAubGVmdCBhcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmxlZnQgYXBwLXByb2dyZXNzLWJhci5ncm93dGgtYmFyIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLWdyb3d0aC1jb2xvcik7XG59XG46aG9zdCAubGVmdCBhcHAtcHJvZ3Jlc3MtYmFyLnByb2R1Y3Rpb24tYmFyIHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHZhcigtLXByb2R1Y3Rpb24tY29sb3IpO1xufVxuOmhvc3QgLmxlZnQgYXBwLXByb2dyZXNzLWJhci5jdWx0dXJlLWJhciB7XG4gIC0tcHJvZ3Jlc3MtYmFyLWNvbG9yOiB2YXIoLS1jdWx0dXJlLWNvbG9yKTtcbn1cbjpob3N0IC5sZWZ0IC5zaXplLWFuZC1ncm93dGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxlZnQgLnNpemUtYW5kLWdyb3d0aCAuc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuOmhvc3QgLmxlZnQgLnlpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbjpob3N0IC5sZWZ0IC55aWVsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59XG46aG9zdCAubGVmdCAueWllbGQgLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0IHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59XG46aG9zdCAubGVmdCAucHJvZHVjdDpub3QoLmRpc2FibGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0Om5vdCguZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0LmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbn1cbjpob3N0IC5sZWZ0IC5wcm9kdWN0IC50dXJucyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuOmhvc3QgLmNpdHktbmFtZSB7XG4gIGdyaWQtYXJlYTogY2l0eS1uYW1lO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOmhvc3QgLmNpdHktbmFtZSBoMiB7XG4gIHBhZGRpbmc6IDhweCAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbjpob3N0IC5yaWdodCB7XG4gIGdyaWQtYXJlYTogcmlnaHQ7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG46aG9zdCAucmlnaHQgLmJ1aWxkaW5nIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CityViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-city-view",
          templateUrl: "./city-view.component.html",
          styleUrls: ["./city-view.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]
        }];
      }, {
        workTilesComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["workTiles"]
        }],
        city: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/city-view/work-tiles/work-tiles.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/city-view/work-tiles/work-tiles.component.ts ***!
    \*****************************************************************/

  /*! exports provided: WorkTilesComponent */

  /***/
  function srcAppUiCityViewWorkTilesWorkTilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkTilesComponent", function () {
      return WorkTilesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WorkTilesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
      }

      if (rf & 2) {
        var tile_r97 = ctx.$implicit;

        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r96.getTransform(tile_r97));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("worked", ctx_r96.city.workedTiles.has(tile_r97));
      }
    }

    var WorkTilesComponent = /*#__PURE__*/function () {
      function WorkTilesComponent(cdr, domSanitizer, camera, mapUi) {
        _classCallCheck(this, WorkTilesComponent);

        this.cdr = cdr;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.mapUi = mapUi;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(WorkTilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.mapUi.clickedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (tile) {
            return _this46.toggle(tile);
          });
          this.camera.transform$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            return _this46.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "toggle",
        value: function toggle(tile) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    if (!this.workedTiles.has(tile)) {
                      _context27.next = 5;
                      break;
                    }

                    _context27.next = 3;
                    return this.city.unworkTile(tile);

                  case 3:
                    _context27.next = 7;
                    break;

                  case 5:
                    _context27.next = 7;
                    return this.city.workTile(tile);

                  case 7:
                    if (!this.ngUnsubscribe.isStopped) {
                      this.updateWorkedTilesArea();
                      this.cdr.markForCheck();
                    }

                  case 8:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "updateWorkedTilesArea",
        value: function updateWorkedTilesArea() {
          this.mapUi.cityWorkedTilesArea.setTiles(Array.from(this.city.workedTiles));
          this.mapUi.cityNotWorkedTilesArea.setTiles(this.city.getNotWorkedTiles());
        }
      }, {
        key: "getTransform",
        value: function getTransform(tile) {
          var _ref3 = [tile.x + 0.5, tile.y + 0.1],
              x = _ref3[0],
              y = _ref3[1];

          var _this$camera$gameToSc = this.camera.gameToScreen(x, y),
              _this$camera$gameToSc2 = _slicedToArray(_this$camera$gameToSc, 2),
              screenX = _this$camera$gameToSc2[0],
              screenY = _this$camera$gameToSc2[1];

          var scale = this.camera.transform.scale / 100;
          return this.domSanitizer.bypassSecurityTrustStyle("translate(".concat(screenX, "px, ").concat(screenY, "px) scale(").concat(scale, ")"));
        }
      }]);

      return WorkTilesComponent;
    }();

    WorkTilesComponent.ɵfac = function WorkTilesComponent_Factory(t) {
      return new (t || WorkTilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]));
    };

    WorkTilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WorkTilesComponent,
      selectors: [["app-work-tiles"]],
      inputs: {
        city: "city",
        workedTiles: "workedTiles"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "tile", 3, "worked", "transform", 4, "ngFor", "ngForOf"], [1, "tile"]],
      template: function WorkTilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkTilesComponent_div_0_Template, 1, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.city.tiles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n[_nghost-%COMP%]   .tile[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  margin-left: -13px;\n  border-radius: 50%;\n  border: 1px solid black;\n  background-color: rgba(0, 0, 0, 0.3);\n  transform-origin: top;\n  z-index: -1;\n  will-change: transform;\n}\n[_nghost-%COMP%]   .tile.worked[_ngcontent-%COMP%] {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUNFLHVCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC91aS9jaXR5LXZpZXcvd29yay10aWxlcy93b3JrLXRpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgLnRpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgJi53b3JrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuOmhvc3QgLnRpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHotaW5kZXg6IC0xO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuOmhvc3QgLnRpbGUud29ya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkTilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-work-tiles",
          templateUrl: "./work-tiles.component.html",
          styleUrls: ["./work-tiles.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]
        }];
      }, {
        city: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        workedTiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/debug/debug.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/ui/debug/debug.component.ts ***!
    \*********************************************/

  /*! exports provided: DebugComponent */

  /***/
  function srcAppUiDebugDebugComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DebugComponent", function () {
      return DebugComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");

    var DebugComponent = /*#__PURE__*/function () {
      function DebugComponent(game) {
        _classCallCheck(this, DebugComponent);

        this.game = game;
      }

      _createClass(DebugComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "revealWorld",
        value: function revealWorld() {
          this.game.state.trackedPlayer.revealWorld();
        }
      }]);

      return DebugComponent;
    }();

    DebugComponent.ɵfac = function DebugComponent_Factory(t) {
      return new (t || DebugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]));
    };

    DebugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DebugComponent,
      selectors: [["app-debug"]],
      decls: 4,
      vars: 0,
      consts: [[3, "click"]],
      template: function DebugComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reveal map ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebugComponent_Template_button_click_2_listener() {
            return ctx.revealWorld();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reveal world");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2RlYnVnL2RlYnVnLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebugComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-debug",
          templateUrl: "./debug.component.html",
          styleUrls: ["./debug.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/city-editor/city-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui/editor/city-editor/city-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: CityEditorComponent */

  /***/
  function srcAppUiEditorCityEditorCityEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityEditorComponent", function () {
      return CityEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/game */
    "./src/app/core/game.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    function CityEditorComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityEditorComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.destroy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CityEditorComponent = /*#__PURE__*/function () {
      function CityEditorComponent(game, mapUi) {
        _classCallCheck(this, CityEditorComponent);

        this.game = game;
        this.mapUi = mapUi;
        this.city = null;
      }

      _createClass(CityEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          var shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return v;
          }));
          var hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return !v;
          }));
          shown.subscribe(function () {
            _this47.mapUi.enableSelectingTile(true);

            _this47.mapUi.selectedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden)).subscribe(function (tile) {
              if (!tile) {
                return;
              } // if (tile.city) {
              //   this.city = tile.city;
              // } else {
              //   this.spawn(tile);
              // }

            });
          });
          hidden.subscribe(function () {
            return _this47.mapUi.enableSelectingTile(false);
          });
        }
      }, {
        key: "spawn",
        value: function spawn(tile) {// this.city = this.game.citiesManager.spawn(tile, this.game.players[0]);
        }
      }, {
        key: "destroy",
        value: function destroy() {// if (this.city) {
          //   this.game.citiesManager.destroy(this.city);
          //   this.city = null;
          // }
        }
      }]);

      return CityEditorComponent;
    }();

    CityEditorComponent.ɵfac = function CityEditorComponent_Factory(t) {
      return new (t || CityEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_game__WEBPACK_IMPORTED_MODULE_2__["Game"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"]));
    };

    CityEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CityEditorComponent,
      selectors: [["app-city-editor"]],
      inputs: {
        isVisible$: "isVisible$"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "click", 4, "ngIf"], [3, "click"]],
      template: function CityEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CityEditorComponent_button_0_Template, 2, 0, "button", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci9jaXR5LWVkaXRvci9jaXR5LWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-city-editor",
          templateUrl: "./city-editor.component.html",
          styleUrls: ["./city-editor.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_core_game__WEBPACK_IMPORTED_MODULE_2__["Game"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_3__["MapUi"]
        }];
      }, {
        isVisible$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/constants.ts":
  /*!****************************************!*\
    !*** ./src/app/ui/editor/constants.ts ***!
    \****************************************/

  /*! exports provided: SEA_LEVEL_OPTIONS, LAND_FORM_OPTIONS, CLIMATE_OPTIONS, FOREST_OPTIONS, WETLANDS_OPTIONS, IMPROVEMENT_OPTIONS, ROAD_OPTIONS, RIVER_OPTIONS */

  /***/
  function srcAppUiEditorConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEA_LEVEL_OPTIONS", function () {
      return SEA_LEVEL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAND_FORM_OPTIONS", function () {
      return LAND_FORM_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLIMATE_OPTIONS", function () {
      return CLIMATE_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOREST_OPTIONS", function () {
      return FOREST_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WETLANDS_OPTIONS", function () {
      return WETLANDS_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMPROVEMENT_OPTIONS", function () {
      return IMPROVEMENT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROAD_OPTIONS", function () {
      return ROAD_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIVER_OPTIONS", function () {
      return RIVER_OPTIONS;
    });
    /* harmony import */


    var src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/core/tile-improvements */
    "./src/app/core/tile-improvements.ts");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");

    var SEA_LEVEL_OPTIONS = [{
      label: "none",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].none
    }, {
      label: "shallow",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].shallow
    }, {
      label: "deep",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SeaLevel"].deep
    }];
    var LAND_FORM_OPTIONS = [{
      label: "plains",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].plains
    }, {
      label: "hills",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].hills
    }, {
      label: "mountains",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["LandForm"].mountains
    }];
    var CLIMATE_OPTIONS = [{
      label: "tropical",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].tropical
    }, {
      label: "savanna",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].savanna
    }, {
      label: "desert",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].desert
    }, {
      label: "continental",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].continental
    }, {
      label: "oceanic",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].oceanic
    }, {
      label: "tundra",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].tundra
    }, {
      label: "arctic",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["Climate"].arctic
    }];
    var FOREST_OPTIONS = [{
      label: "no forest",
      value: false
    }, {
      label: "forest",
      value: true
    }];
    var WETLANDS_OPTIONS = [{
      label: "no wetlands",
      value: false
    }, {
      label: "wetlands",
      value: true
    }];
    var IMPROVEMENT_OPTIONS = [{
      label: "no improvement",
      value: null
    }, {
      label: "farm",
      value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].farm
    }, {
      label: "mine",
      value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].mine
    }, {
      label: "sawmill",
      value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileImprovement"].sawmill
    }];
    var ROAD_OPTIONS = [{
      label: "no road",
      value: null
    }, {
      label: "road",
      value: src_app_core_tile_improvements__WEBPACK_IMPORTED_MODULE_0__["TileRoad"].road
    }];
    var RIVER_OPTIONS = [{
      label: "NW",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NW
    }, {
      label: "NE",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].NE
    }, {
      label: "E",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].E
    }, {
      label: "SE",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SE
    }, {
      label: "SW",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].SW
    }, {
      label: "W",
      value: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["TileDirection"].W
    }];
    /***/
  },

  /***/
  "./src/app/ui/editor/editor.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/editor/editor.component.ts ***!
    \***********************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppUiEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../widgets/tabs/tabs.component */
    "./src/app/ui/widgets/tabs/tabs.component.ts");
    /* harmony import */


    var _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../widgets/tabs/tab/tab.component */
    "./src/app/ui/widgets/tabs/tab/tab.component.ts");
    /* harmony import */


    var _tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tile-editor/tile-editor.component */
    "./src/app/ui/editor/tile-editor/tile-editor.component.ts");
    /* harmony import */


    var _tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tile-painting/tile-painting.component */
    "./src/app/ui/editor/tile-painting/tile-painting.component.ts");
    /* harmony import */


    var _unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./unit-editor/unit-editor.component */
    "./src/app/ui/editor/unit-editor/unit-editor.component.ts");
    /* harmony import */


    var _city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./city-editor/city-editor.component */
    "./src/app/ui/editor/city-editor/city-editor.component.ts");
    /* harmony import */


    var _players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./players-editor/players-editor.component */
    "./src/app/ui/editor/players-editor/players-editor.component.ts");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");

    var EditorComponent = /*#__PURE__*/function () {
      function EditorComponent(uiState, mapUi) {
        _classCallCheck(this, EditorComponent);

        this.uiState = uiState;
        this.mapUi = mapUi;
      }

      _createClass(EditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mapUi.editorArea.clear();
          this.mapUi.enableSelectingTile(false);
        }
      }, {
        key: "close",
        value: function close() {
          this.uiState.editorEnabled$.next(false);
        }
      }]);

      return EditorComponent;
    }();

    EditorComponent.ɵfac = function EditorComponent_Factory(t) {
      return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_2__["MapUi"]));
    };

    EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorComponent,
      selectors: [["app-editor"]],
      decls: 19,
      vars: 4,
      consts: [["tabTitle", "Tile"], ["tileTab", ""], [3, "isVisible$"], ["tabTitle", "Tile painting"], ["tilePaintingTab", ""], ["tabTitle", "units"], ["unitTab", ""], ["tabTitle", "cities"], ["cityTab", ""], ["tabTitle", "players"], ["playersTab", ""], [3, "click"]],
      template: function EditorComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_17_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r28.isVisible$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r29.isVisible$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r30.isVisible$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible$", _r31.isVisible$);
        }
      },
      directives: [_widgets_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _widgets_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"], _tile_editor_tile_editor_component__WEBPACK_IMPORTED_MODULE_5__["TileEditorComponent"], _tile_painting_tile_painting_component__WEBPACK_IMPORTED_MODULE_6__["TilePaintingComponent"], _unit_editor_unit_editor_component__WEBPACK_IMPORTED_MODULE_7__["UnitEditorComponent"], _city_editor_city_editor_component__WEBPACK_IMPORTED_MODULE_8__["CityEditorComponent"], _players_editor_players_editor_component__WEBPACK_IMPORTED_MODULE_9__["PlayersEditorComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 25%;\n  display: flex;\n  border-radius: 0;\n  border-width: 3px 0 0 0;\n}\n[_nghost-%COMP%]   app-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsT0FBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItd2lkdGg6IDNweCAwIDAgMDtcbiAgYXBwLXRhYnMge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHggMCAwIDA7XG59XG46aG9zdCBhcHAtdGFicyB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-editor",
          templateUrl: "./editor.component.html",
          styleUrls: ["./editor.component.scss"]
        }]
      }], function () {
        return [{
          type: _ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_2__["MapUi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/players-editor/players-editor.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/ui/editor/players-editor/players-editor.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PlayersEditorComponent */

  /***/
  function srcAppUiEditorPlayersEditorPlayersEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayersEditorComponent", function () {
      return PlayersEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    function PlayersEditorComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tracked");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayersEditorComponent_li_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r179);

          var player_r177 = ctx.$implicit;

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r178.track(player_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Track");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r177 = ctx.$implicit;

        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tracked", player_r177.id === ctx_r176.trackedPlayerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Player ", player_r177.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", player_r177.cssColor);
      }
    }

    var PlayersEditorComponent = /*#__PURE__*/function () {
      function PlayersEditorComponent(cdr, game) {
        _classCallCheck(this, PlayersEditorComponent);

        this.cdr = cdr;
        this.game = game;
      }

      _createClass(PlayersEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "track",
        value: function track(player) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.setTrackedPlayer(player.id);

                  case 2:
                    this.cdr.markForCheck();

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "players",
        get: function get() {
          return this.game.state.players;
        }
      }, {
        key: "trackedPlayerId",
        get: function get() {
          var _a;

          return (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id;
        }
      }]);

      return PlayersEditorComponent;
    }();

    PlayersEditorComponent.ɵfac = function PlayersEditorComponent_Factory(t) {
      return new (t || PlayersEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"]));
    };

    PlayersEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlayersEditorComponent,
      selectors: [["app-players-editor"]],
      decls: 2,
      vars: 1,
      consts: [[3, "tracked", 4, "ngFor", "ngForOf"], [1, "color-box"], [1, "tracked-text"], [1, "track-btn", 3, "click"]],
      template: function PlayersEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlayersEditorComponent_li_1_Template, 8, 5, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.players);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]],
      styles: ["[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   li.tracked[_ngcontent-%COMP%]   .track-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(.tracked)   .tracked-text[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  width: 30px;\n  min-width: 30px;\n  border-radius: 4px;\n  height: 30px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   .tracked-text[_ngcontent-%COMP%] {\n  color: var(--growth-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvcGxheWVycy1lZGl0b3IvcGxheWVycy1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2VkaXRvci9wbGF5ZXJzLWVkaXRvci9wbGF5ZXJzLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FERU07RUFDRSxhQUFBO0FDQVI7QURJTTtFQUNFLGFBQUE7QUNGUjtBREtJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNITjtBREtJO0VBQ0UsMEJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci9wbGF5ZXJzLWVkaXRvci9wbGF5ZXJzLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgICYudHJhY2tlZCB7XG4gICAgICAudHJhY2stYnRuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpub3QoLnRyYWNrZWQpIHtcbiAgICAgIC50cmFja2VkLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29sb3ItYm94IHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAudHJhY2tlZC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncm93dGgtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46aG9zdCBsaSA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG46aG9zdCBsaS50cmFja2VkIC50cmFjay1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgbGk6bm90KC50cmFja2VkKSAudHJhY2tlZC10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IGxpIC5jb2xvci1ib3gge1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzBweDtcbn1cbjpob3N0IGxpIC50cmFja2VkLXRleHQge1xuICBjb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayersEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-players-editor",
          templateUrl: "./players-editor.component.html",
          styleUrls: ["./players-editor.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/tile-editor/tile-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui/editor/tile-editor/tile-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: TileEditorComponent */

  /***/
  function srcAppUiEditorTileEditorTileEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileEditorComponent", function () {
      return TileEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants */
    "./src/app/ui/editor/constants.ts");
    /* harmony import */


    var src_app_map_generators_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/map-generators/utils */
    "./src/app/map-generators/utils.ts");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/hex-math */
    "./src/app/shared/hex-math.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../widgets/radio/radio.component */
    "./src/app/ui/widgets/radio/radio.component.ts");
    /* harmony import */


    var _widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../widgets/multiselect/multiselect.component */
    "./src/app/ui/widgets/multiselect/multiselect.component.ts");

    function TileEditorComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sea level");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r41.tile.seaLevel = $event;
          return ctx_r41.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Land form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r43.tile.landForm = $event;
          return ctx_r43.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Climate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r44.tile.climate = $event;
          return ctx_r44.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.updateForest($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wetlands");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.updateWetlands($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "River");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-multiselect", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_multiselect_changed_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.updateRiver($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Improvement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.updateImprovement($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Road");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-radio", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TileEditorComponent_div_0_Template_app_radio_changed_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.updateRoad($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    function TileEditorComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Select the tile to edit.\n");
      }
    }

    var TileEditorComponent = /*#__PURE__*/function () {
      function TileEditorComponent(game, mapUi) {
        _classCallCheck(this, TileEditorComponent);

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

      _createClass(TileEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          var shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return v;
          }));
          var hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return !v;
          }));
          shown.subscribe(function () {
            _this48.mapUi.enableSelectingTile(true);

            _this48.mapUi.selectedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden)).subscribe(function (tile) {
              return _this48.tile = tile;
            });
          });
          hidden.subscribe(function () {
            return _this48.mapUi.enableSelectingTile(false);
          });
        }
      }, {
        key: "update",
        value: function update() {
          if (this.tile) {
            this.game.state.updateTile(this.tile);
          }
        }
      }, {
        key: "updateForest",
        value: function updateForest(forest) {
          if (this.tile) {
            this.tile.forest = forest && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isForestable"])(this.tile);
            this.update();
          }
        }
      }, {
        key: "updateWetlands",
        value: function updateWetlands(wetlands) {
          if (this.tile) {
            this.tile.wetlands = wetlands && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["areWetlandsPossible"])(this.tile);
            this.update();
          }
        }
      }, {
        key: "updateImprovement",
        value: function updateImprovement(improvement) {
          if (this.tile) {
            if (Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isImprovementPossible"])(this.tile, improvement)) {
              this.tile.improvement = improvement;
              this.update();
            }
          }
        }
      }, {
        key: "updateRoad",
        value: function updateRoad(road) {
          if (this.tile && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["isRoadPossible"])(this.tile)) {
            this.tile.road = road;
            this.update();

            var _iterator83 = _createForOfIteratorHelper(this.tile.neighbours),
                _step83;

            try {
              for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
                var neighbour = _step83.value;
                this.game.state.updateTile(neighbour);
              }
            } catch (err) {
              _iterator83.e(err);
            } finally {
              _iterator83.f();
            }
          }
        }
      }, {
        key: "updateRiver",
        value: function updateRiver(riverParts) {
          if (!this.tile) {
            return;
          }

          this.tile.riverParts = riverParts;

          var _iterator84 = _createForOfIteratorHelper(this.tile.neighbours),
              _step84;

          try {
            for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
              var neighbour = _step84.value;
              var dir = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_5__["getDirectionTo"])(this.tile, neighbour);
              var hasRiver = riverParts.includes(dir);
              var oppositeDir = src_app_map_generators_utils__WEBPACK_IMPORTED_MODULE_3__["OPPOSITE_DIRECTIONS"][dir];
              var neighbourRiverParts = new Set(neighbour.riverParts);

              if (hasRiver) {
                neighbourRiverParts.add(oppositeDir);
              } else {
                neighbourRiverParts["delete"](oppositeDir);
              }

              neighbour.riverParts = Array.from(neighbourRiverParts);
              this.game.state.updateTile(neighbour);
            }
          } catch (err) {
            _iterator84.e(err);
          } finally {
            _iterator84.f();
          }

          this.update();
        }
      }]);

      return TileEditorComponent;
    }();

    TileEditorComponent.ɵfac = function TileEditorComponent_Factory(t) {
      return new (t || TileEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]));
    };

    TileEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TileEditorComponent,
      selectors: [["app-tile-editor"]],
      inputs: {
        isVisible$: "isVisible$"
      },
      decls: 3,
      vars: 2,
      consts: [["class", "tile", 4, "ngIf", "ngIfElse"], ["selectTilePromptTmpl", ""], [1, "tile"], [3, "options", "value", "changed"]],
      template: function TileEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TileEditorComponent_div_0_Template, 33, 16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TileEditorComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tile)("ngIfElse", _r39);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"], _widgets_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_10__["MultiselectComponent"]],
      styles: ["[_nghost-%COMP%]   .tile[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .tile[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvdGlsZS1lZGl0b3IvdGlsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2VkaXRvci90aWxlLWVkaXRvci90aWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci90aWxlLWVkaXRvci90aWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgPiAqIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC50aWxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC50aWxlID4gKiB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tile-editor",
          templateUrl: "./tile-editor.component.html",
          styleUrls: ["./tile-editor.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_6__["GameApi"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]
        }];
      }, {
        isVisible$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/tile-painting/tile-painting.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/ui/editor/tile-painting/tile-painting.component.ts ***!
    \********************************************************************/

  /*! exports provided: TilePaintingComponent */

  /***/
  function srcAppUiEditorTilePaintingTilePaintingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TilePaintingComponent", function () {
      return TilePaintingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/ui/editor/constants.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/hex-math */
    "./src/app/shared/hex-math.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var src_app_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/controls */
    "./src/app/controls.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../widgets/radio/radio.component */
    "./src/app/ui/widgets/radio/radio.component.ts");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    var IGNORE_OPTION = {
      label: "ignore",
      value: undefined
    };

    var TilePaintingComponent = /*#__PURE__*/function () {
      function TilePaintingComponent(game, controls, mapUi) {
        _classCallCheck(this, TilePaintingComponent);

        this.game = game;
        this.controls = controls;
        this.mapUi = mapUi;
        this.SIZE_OPTIONS = [{
          label: "1x1",
          value: 1
        }, {
          label: "2x2",
          value: 2
        }, {
          label: "3x3",
          value: 3
        }, {
          label: "5x5",
          value: 5
        }, {
          label: "7x7",
          value: 7
        }, {
          label: "10x10",
          value: 10
        }, {
          label: "15x15",
          value: 15
        }];
        this.SEA_LEVEL_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["SEA_LEVEL_OPTIONS"]));
        this.LAND_FORM_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["LAND_FORM_OPTIONS"]));
        this.CLIMATE_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["CLIMATE_OPTIONS"]));
        this.FOREST_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["FOREST_OPTIONS"]));
        this.WETLANDS_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["WETLANDS_OPTIONS"]));
        this.IMPROVEMENT_OPTIONS = [IGNORE_OPTION].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["IMPROVEMENT_OPTIONS"]));
        this.DEFAULT_PAINT_DATA = {
          size: 1,
          climate: undefined,
          forest: undefined,
          landForm: undefined,
          seaLevel: undefined,
          wetlands: undefined,
          improvement: undefined
        };
        this.paintData = Object.assign({}, this.DEFAULT_PAINT_DATA);
      }

      _createClass(TilePaintingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          var shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (v) {
            return v;
          }));
          var hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (v) {
            return !v;
          }));
          shown.subscribe(function () {
            _this49.controls.mouseButton$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(hidden)).subscribe(function (button) {
              if (button === 0) {
                _this49.paint();
              }
            });

            _this49.mapUi.hoveredTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(hidden)).subscribe(function (tile) {
              if (tile) {
                var tiles = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__["getTilesInRange"])(tile, _this49.paintData.size - 1);

                _this49.mapUi.editorArea.clear();

                _this49.mapUi.editorArea.addTiles(Array.from(tiles));

                if (_this49.controls.mouseButton === 0) {
                  _this49.paint();
                }
              } else {
                _this49.mapUi.editorArea.clear();
              }
            });
          });
          hidden.subscribe(function () {
            return _this49.mapUi.editorArea.clear();
          });
        }
      }, {
        key: "paint",
        value: function paint() {
          var _a;

          var pivotTile = this.mapUi.hoveredTile;

          if (!pivotTile) {
            return;
          }

          var tiles = Object(src_app_shared_hex_math__WEBPACK_IMPORTED_MODULE_4__["getTilesInRange"])(pivotTile, this.paintData.size - 1);

          var _iterator85 = _createForOfIteratorHelper(tiles),
              _step85;

          try {
            for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
              var tile = _step85.value;

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
          } catch (err) {
            _iterator85.e(err);
          } finally {
            _iterator85.f();
          }

          (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.updateTiles(Array.from(tiles));
        }
      }, {
        key: "reset",
        value: function reset() {
          this.paintData = Object.assign({}, this.DEFAULT_PAINT_DATA);
        }
      }]);

      return TilePaintingComponent;
    }();

    TilePaintingComponent.ɵfac = function TilePaintingComponent_Factory(t) {
      return new (t || TilePaintingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_controls__WEBPACK_IMPORTED_MODULE_6__["Controls"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]));
    };

    TilePaintingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TilePaintingComponent,
      selectors: [["app-tile-painting"]],
      inputs: {
        isVisible$: "isVisible$"
      },
      decls: 30,
      vars: 14,
      consts: [[3, "options", "value", "changed"], [3, "click"]],
      template: function TilePaintingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brush size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_3_listener($event) {
            return ctx.paintData.size = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sea level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_7_listener($event) {
            return ctx.paintData.seaLevel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Land form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_11_listener($event) {
            return ctx.paintData.landForm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Climate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_15_listener($event) {
            return ctx.paintData.climate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_19_listener($event) {
            return ctx.paintData.forest = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wetlands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_23_listener($event) {
            return ctx.paintData.wetlands = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Improvement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-radio", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TilePaintingComponent_Template_app_radio_changed_27_listener($event) {
            return ctx.paintData.improvement = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TilePaintingComponent_Template_button_click_28_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__["RadioComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9lZGl0b3IvdGlsZS1wYWludGluZy90aWxlLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TilePaintingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tile-painting",
          templateUrl: "./tile-painting.component.html",
          styleUrls: ["./tile-painting.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]
        }, {
          type: src_app_controls__WEBPACK_IMPORTED_MODULE_6__["Controls"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_7__["MapUi"]
        }];
      }, {
        isVisible$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/editor/unit-editor/unit-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui/editor/unit-editor/unit-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: UnitEditorComponent */

  /***/
  function srcAppUiEditorUnitEditorUnitEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitEditorComponent", function () {
      return UnitEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_data_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data/units */
    "./src/app/data/units.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../widgets/toggle/toggle.component */
    "./src/app/ui/widgets/toggle/toggle.component.ts");
    /* harmony import */


    var _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../widgets/radio/radio.component */
    "./src/app/ui/widgets/radio/radio.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    function UnitEditorComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitEditorComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.destroy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UnitEditorComponent = /*#__PURE__*/function () {
      function UnitEditorComponent(game, mapUi) {
        _classCallCheck(this, UnitEditorComponent);

        this.game = game;
        this.mapUi = mapUi;
        this.spawnMode = false;
        this.definition = null;
        this.unit = null;
        this.definitionOptions = [];
      }

      _createClass(UnitEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.definitionOptions = src_app_data_units__WEBPACK_IMPORTED_MODULE_2__["UNITS_DEFINITIONS"].map(function (d) {
            return {
              label: d.name,
              value: d
            };
          });
          var shown = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return v;
          }));
          var hidden = this.isVisible$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
            return !v;
          }));
          shown.subscribe(function () {
            _this50.mapUi.enableSelectingTile(true);

            _this50.mapUi.selectedTile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(hidden)).subscribe(function (tile) {
              if (!tile) {
                return;
              } // if (this.spawnMode) {
              //   this.spawn(tile);
              // } else {
              //   this.selectTile(tile);
              // }

            });
          });
          hidden.subscribe(function () {
            return _this50.mapUi.enableSelectingTile(false);
          });
        }
      }, {
        key: "spawn",
        value: function spawn(tile) {
          if (!this.definition) {
            return;
          } // this.game.unitsManager.spawn(
          //   this.definition.id,
          //   tile,
          //   this.game.players[0],
          // );

        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.unit) {// this.game.unitsManager.destroy(this.unit);
          }
        }
      }, {
        key: "selectTile",
        value: function selectTile(tile) {
          if (tile.units.length) {// this.unit = tile.units[0];
            // this.definition = this.unit.definition;
          }
        }
      }]);

      return UnitEditorComponent;
    }();

    UnitEditorComponent.ɵfac = function UnitEditorComponent_Factory(t) {
      return new (t || UnitEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_4__["MapUi"]));
    };

    UnitEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnitEditorComponent,
      selectors: [["app-unit-editor"]],
      inputs: {
        isVisible$: "isVisible$"
      },
      decls: 4,
      vars: 4,
      consts: [[3, "value", "changed"], [3, "options", "value", "changed"], [3, "click", 4, "ngIf"], [3, "click"]],
      template: function UnitEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function UnitEditorComponent_Template_app_toggle_changed_0_listener($event) {
            return ctx.spawnMode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spawn mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-radio", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function UnitEditorComponent_Template_app_radio_changed_2_listener($event) {
            return ctx.definition = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnitEditorComponent_button_3_Template, 2, 0, "button", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.spawnMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.definitionOptions)("value", ctx.definition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit);
        }
      },
      directives: [_widgets_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ToggleComponent"], _widgets_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__["RadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXRvci91bml0LWVkaXRvci91bml0LWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-unit-editor",
          templateUrl: "./unit-editor.component.html",
          styleUrls: ["./unit-editor.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_4__["MapUi"]
        }];
      }, {
        isVisible$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-info/game-info.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/game-info/game-info.component.ts ***!
    \*****************************************************/

  /*! exports provided: GameInfoComponent */

  /***/
  function srcAppUiGameInfoGameInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameInfoComponent", function () {
      return GameInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _debug_debug_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../debug/debug.component */
    "./src/app/ui/debug/debug.component.ts");

    function GameInfoComponent_app_debug_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-debug");
      }
    }

    var GameInfoComponent = /*#__PURE__*/function () {
      function GameInfoComponent(game, uiState) {
        _classCallCheck(this, GameInfoComponent);

        this.game = game;
        this.uiState = uiState;
        this.debugModalVisible = false;
      }

      _createClass(GameInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openEditor",
        value: function openEditor() {
          this.uiState.editorEnabled$.next(true);
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.uiState.menuVisible$.next(true);
        }
      }]);

      return GameInfoComponent;
    }();

    GameInfoComponent.ɵfac = function GameInfoComponent_Factory(t) {
      return new (t || GameInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]));
    };

    GameInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameInfoComponent,
      selectors: [["app-game-info"]],
      decls: 11,
      vars: 4,
      consts: [[1, "bar"], [3, "click"], [4, "ngIf"]],
      template: function GameInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_4_listener() {
            return ctx.debugModalVisible = !ctx.debugModalVisible;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "debug");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_6_listener() {
            return ctx.openEditor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "editor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInfoComponent_Template_button_click_8_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameInfoComponent_app_debug_10_Template, 1, 0, "app-debug", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("turn: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.game.state.turn$), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debugModalVisible);
        }
      },
      directives: [_button_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _debug_debug_component__WEBPACK_IMPORTED_MODULE_5__["DebugComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px 20px;\n}\n[_nghost-%COMP%]   .bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9nYW1lLWluZm8vZ2FtZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICAuYmFyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbjpob3N0IC5iYXIgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-game-info",
          templateUrl: "./game-info.component.html",
          styleUrls: ["./game-info.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/game-menu.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/game-menu/game-menu.component.ts ***!
    \*****************************************************/

  /*! exports provided: GameMenuComponent */

  /***/
  function srcAppUiGameMenuGameMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMenuComponent", function () {
      return GameMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-menu-view/main-menu-view.component */
    "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts");
    /* harmony import */


    var _new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./new-game-view/new-game-view.component */
    "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts");
    /* harmony import */


    var _save_view_save_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./save-view/save-view.component */
    "./src/app/ui/game-menu/save-view/save-view.component.ts");
    /* harmony import */


    var _load_view_load_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./load-view/load-view.component */
    "./src/app/ui/game-menu/load-view/load-view.component.ts");

    function GameMenuComponent_app_main_menu_view_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-menu-view", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GameMenuComponent_app_main_menu_view_2_Template_app_main_menu_view_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameMenuComponent_app_new_game_view_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-game-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_new_game_view_3_Template_app_new_game_view_return_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.view = "main-menu-view";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameMenuComponent_app_save_view_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-save-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_save_view_4_Template_app_save_view_return_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.view = "main-menu-view";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameMenuComponent_app_load_view_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-load-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("return", function GameMenuComponent_app_load_view_5_Template_app_load_view_return_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.view = "main-menu-view";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GameMenuComponent = /*#__PURE__*/function () {
      function GameMenuComponent(uiState) {
        _classCallCheck(this, GameMenuComponent);

        this.uiState = uiState;
        this.view = "main-menu-view";
      }

      _createClass(GameMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "return",
        value: function _return() {
          this.uiState.menuVisible$.next(false);
        }
      }]);

      return GameMenuComponent;
    }();

    GameMenuComponent.ɵfac = function GameMenuComponent_Factory(t) {
      return new (t || GameMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"]));
    };

    GameMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameMenuComponent,
      selectors: [["app-game-menu"]],
      decls: 6,
      vars: 5,
      consts: [[1, "panel", "menu"], [3, "ngSwitch"], [3, "change", 4, "ngSwitchCase"], [3, "return", 4, "ngSwitchCase"], [3, "change"], [3, "return"]],
      template: function GameMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-switch", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameMenuComponent_app_main_menu_view_2_Template, 1, 0, "app-main-menu-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameMenuComponent_app_new_game_view_3_Template, 1, 0, "app-new-game-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameMenuComponent_app_save_view_4_Template, 1, 0, "app-save-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameMenuComponent_app_load_view_5_Template, 1, 0, "app-load-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _main_menu_view_main_menu_view_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuViewComponent"], _new_game_view_new_game_view_component__WEBPACK_IMPORTED_MODULE_4__["NewGameViewComponent"], _save_view_save_view_component__WEBPACK_IMPORTED_MODULE_5__["SaveViewComponent"], _load_view_load_view_component__WEBPACK_IMPORTED_MODULE_6__["LoadViewComponent"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvZ2FtZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvZ2FtZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL2dhbWUtbWVudS9nYW1lLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgLm1lbnUge1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3QgLm1lbnUge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-game-menu",
          templateUrl: "./game-menu.component.html",
          styleUrls: ["./game-menu.component.scss"]
        }]
      }], function () {
        return [{
          type: _ui_state__WEBPACK_IMPORTED_MODULE_1__["UIState"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/load-view/load-view.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/game-menu/load-view/load-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoadViewComponent */

  /***/
  function srcAppUiGameMenuLoadViewLoadViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadViewComponent", function () {
      return LoadViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../saves-list/saves-list.component */
    "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
    /* harmony import */


    var src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/saving */
    "./src/app/api/saving.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../widgets/modal/modal.component */
    "./src/app/ui/widgets/modal/modal.component.ts");
    /* harmony import */


    var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../widgets/spinner/spinner.component */
    "./src/app/ui/widgets/spinner/spinner.component.ts");

    function LoadViewComponent_app_modal_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading map");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var LoadViewComponent = /*#__PURE__*/function () {
      function LoadViewComponent(game, uiState, camera) {
        _classCallCheck(this, LoadViewComponent);

        this.game = game;
        this.uiState = uiState;
        this.camera = camera;
        this["return"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveName = "";
        this.waiting = false;
      }

      _createClass(LoadViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load() {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var data, city, unit;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    if (this.saveName) {
                      _context29.next = 2;
                      break;
                    }

                    return _context29.abrupt("return");

                  case 2:
                    data = Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__["loadGameData"])(this.saveName);

                    if (data) {
                      _context29.next = 5;
                      break;
                    }

                    return _context29.abrupt("return", null);

                  case 5:
                    this.waiting = true;
                    _context29.next = 8;
                    return this.game.loadGame(data);

                  case 8:
                    city = (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.cities[0];

                    if (city) {
                      this.camera.moveToTile(city.tile);
                    } else {
                      unit = (_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.units[0];

                      if (unit) {
                        this.camera.moveToTile(unit.tile);
                      }
                    }

                    this.uiState.menuVisible$.next(false);
                    this.waiting = false;

                  case 12:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "import",
        value: function _import(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var target, files;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    target = event.target;
                    files = target.files;

                    if (files) {
                      _context30.next = 4;
                      break;
                    }

                    return _context30.abrupt("return");

                  case 4:
                    _context30.next = 6;
                    return Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_3__["importSave"])(files[0]);

                  case 6:
                    this.savesListComponent.refresh();

                  case 7:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }]);

      return LoadViewComponent;
    }();

    LoadViewComponent.ɵfac = function LoadViewComponent_Factory(t) {
      return new (t || LoadViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_4__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_5__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"]));
    };

    LoadViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadViewComponent,
      selectors: [["app-load-view"]],
      viewQuery: function LoadViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.savesListComponent = _t.first);
        }
      },
      outputs: {
        "return": "return"
      },
      decls: 13,
      vars: 3,
      consts: [["type", "file", 3, "change"], ["uploader", ""], [3, "selectedSave", "change"], [1, "actions"], [3, "click"], [3, "disabled", "click"], [4, "ngIf"], [1, "center"]],
      template: function LoadViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoadViewComponent_Template_input_change_0_listener($event) {
            return ctx["import"]($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Load the game");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-saves-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoadViewComponent_Template_app_saves_list_change_4_listener($event) {
            return ctx.saveName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_6_listener() {
            return ctx["return"].next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r77.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Import");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadViewComponent_Template_button_click_10_listener() {
            return ctx.load();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Load");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoadViewComponent_app_modal_12_Template, 5, 0, "app-modal", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedSave", ctx.saveName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.saveName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.waiting);
        }
      },
      directives: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"], _button_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 15px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbG9hZC12aWV3L2xvYWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZ2FtZS1tZW51L2xvYWQtdmlldy9sb2FkLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9nYW1lLW1lbnUvbG9hZC12aWV3L2xvYWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOmhvc3QgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-load-view",
          templateUrl: "./load-view.component.html",
          styleUrls: ["./load-view.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_4__["GameApi"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_5__["UIState"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }];
      }, {
        "return": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        savesListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_2__["SavesListComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ui/game-menu/main-menu-view/main-menu-view.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MainMenuViewComponent */

  /***/
  function srcAppUiGameMenuMainMenuViewMainMenuViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuViewComponent", function () {
      return MainMenuViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainMenuViewComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_ng_container_4_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.change.next("save-view");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_ng_container_4_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83["return"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var MainMenuViewComponent = /*#__PURE__*/function () {
      function MainMenuViewComponent(game, uiState) {
        _classCallCheck(this, MainMenuViewComponent);

        this.game = game;
        this.uiState = uiState;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MainMenuViewComponent, [{
        key: "return",
        value: function _return() {
          this.uiState.menuVisible$.next(false);
        }
      }]);

      return MainMenuViewComponent;
    }();

    MainMenuViewComponent.ɵfac = function MainMenuViewComponent_Factory(t) {
      return new (t || MainMenuViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]));
    };

    MainMenuViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainMenuViewComponent,
      selectors: [["app-main-menu-view"]],
      outputs: {
        change: "change"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "item", 3, "click"], [4, "ngIf"]],
      template: function MainMenuViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_Template_div_click_0_listener() {
            return ctx.change.next("new-game-view");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuViewComponent_Template_div_click_2_listener() {
            return ctx.change.next("load-view");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainMenuViewComponent_ng_container_4_Template, 5, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.game.init$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 20px 200px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbWFpbi1tZW51LXZpZXcvbWFpbi1tZW51LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2dhbWUtbWVudS9tYWluLW1lbnUtdmlldy9tYWluLW1lbnUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDRSx3Q0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L21haW4tbWVudS12aWV3L21haW4tbWVudS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaXRlbSB7XG4gICAgcGFkZGluZzogMjBweCAyMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLml0ZW0ge1xuICBwYWRkaW5nOiAyMHB4IDIwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-main-menu-view",
          templateUrl: "./main-menu-view.component.html",
          styleUrls: ["./main-menu-view.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_2__["UIState"]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/new-game-view/new-game-view.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ui/game-menu/new-game-view/new-game-view.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NewGameViewComponent */

  /***/
  function srcAppUiGameMenuNewGameViewNewGameViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGameViewComponent", function () {
      return NewGameViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/game */
    "./src/app/api/game.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../widgets/modal/modal.component */
    "./src/app/ui/widgets/modal/modal.component.ts");
    /* harmony import */


    var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../widgets/spinner/spinner.component */
    "./src/app/ui/widgets/spinner/spinner.component.ts");

    function NewGameViewComponent_app_modal_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Generating map");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var NewGameViewComponent = /*#__PURE__*/function () {
      function NewGameViewComponent(game, uiState, camera) {
        _classCallCheck(this, NewGameViewComponent);

        this.game = game;
        this.uiState = uiState;
        this.camera = camera;
        this["return"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.width = 50;
        this.height = 40;
        this.uniformity = 0.5;
        this.seaLevel = 0;
        this.humanPlayersCount = 1;
        this.aiPlayersCount = 5;
        this.seed = null;
        this.waiting = false;
      }

      _createClass(NewGameViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "start",
        value: function start() {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var mapOptions, unit;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    mapOptions = {
                      width: this.width,
                      height: this.height,
                      uniformity: this.uniformity,
                      seaLevel: this.seaLevel,
                      aiPlayersCount: this.aiPlayersCount,
                      humanPlayersCount: this.humanPlayersCount,
                      seed: this.seed ? (_a = this.seed) === null || _a === void 0 ? void 0 : _a.toString() : undefined
                    };
                    this.waiting = true;
                    _context31.next = 4;
                    return this.game.newGame(mapOptions);

                  case 4:
                    this.waiting = false;
                    unit = (_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.units[0];

                    if (unit) {
                      this.camera.moveToTile(unit.tile);
                    }

                    this.uiState.menuVisible$.next(false);

                  case 8:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }]);

      return NewGameViewComponent;
    }();

    NewGameViewComponent.ɵfac = function NewGameViewComponent_Factory(t) {
      return new (t || NewGameViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_game__WEBPACK_IMPORTED_MODULE_2__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_3__["UIState"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]));
    };

    NewGameViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewGameViewComponent,
      selectors: [["app-new-game-view"]],
      outputs: {
        "return": "return"
      },
      decls: 35,
      vars: 14,
      consts: [["type", "range", "min", "10", "max", "200", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "-0.3", "max", "0.3", "step", "0.05", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "10", "step", "0.05", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "1", "max", "16", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "actions"], [3, "click"], [4, "ngIf"], [1, "center"]],
      template: function NewGameViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start new game");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Width: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.width = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Height: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Sea level: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.seaLevel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Uniformity: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.uniformity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Human players count: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.humanPlayersCount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " AI players count: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.aiPlayersCount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Seed: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewGameViewComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.seed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewGameViewComponent_Template_button_click_30_listener() {
            return ctx["return"].next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Return");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewGameViewComponent_Template_button_click_32_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NewGameViewComponent_app_modal_34_Template, 5, 0, "app-modal", 7);
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _button_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _widgets_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvbmV3LWdhbWUtdmlldy9uZXctZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvbmV3LWdhbWUtdmlldy9uZXctZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L25ldy1nYW1lLXZpZXcvbmV3LWdhbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewGameViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-new-game-view",
          templateUrl: "./new-game-view.component.html",
          styleUrls: ["./new-game-view.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api_game__WEBPACK_IMPORTED_MODULE_2__["GameApi"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_3__["UIState"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }];
      }, {
        "return": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/save-view/save-view.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/game-menu/save-view/save-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: SaveViewComponent */

  /***/
  function srcAppUiGameMenuSaveViewSaveViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveViewComponent", function () {
      return SaveViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_saving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/saving */
    "./src/app/api/saving.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../ui-state */
    "./src/app/ui/ui-state.ts");
    /* harmony import */


    var _saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../saves-list/saves-list.component */
    "./src/app/ui/game-menu/saves-list/saves-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    var SaveViewComponent = /*#__PURE__*/function () {
      function SaveViewComponent(game, uiState) {
        _classCallCheck(this, SaveViewComponent);

        this.game = game;
        this.uiState = uiState;
        this["return"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveName = "";
      }

      _createClass(SaveViewComponent, [{
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var data;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    if (!this.saveName) {
                      _context32.next = 6;
                      break;
                    }

                    _context32.next = 3;
                    return this.game.saveGame();

                  case 3:
                    data = _context32.sent;
                    Object(src_app_api_saving__WEBPACK_IMPORTED_MODULE_2__["saveGameData"])(data, this.saveName);
                    this.uiState.menuVisible$.next(false);

                  case 6:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }]);

      return SaveViewComponent;
    }();

    SaveViewComponent.ɵfac = function SaveViewComponent_Factory(t) {
      return new (t || SaveViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_state__WEBPACK_IMPORTED_MODULE_4__["UIState"]));
    };

    SaveViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SaveViewComponent,
      selectors: [["app-save-view"]],
      outputs: {
        "return": "return"
      },
      decls: 11,
      vars: 3,
      consts: [[3, "selectedSave", "change"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "actions"], [3, "click"], [3, "disabled", "click"]],
      template: function SaveViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save the game");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-saves-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SaveViewComponent_Template_app_saves_list_change_2_listener($event) {
            return ctx.saveName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Save name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SaveViewComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.saveName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveViewComponent_Template_button_click_7_listener() {
            return ctx["return"].next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveViewComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedSave", ctx.saveName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.saveName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.saveName);
        }
      },
      directives: [_saves_list_saves_list_component__WEBPACK_IMPORTED_MODULE_5__["SavesListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _button_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZS12aWV3L3NhdmUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZ2FtZS1tZW51L3NhdmUtdmlldy9zYXZlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvZ2FtZS1tZW51L3NhdmUtdmlldy9zYXZlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SaveViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-save-view",
          templateUrl: "./save-view.component.html",
          styleUrls: ["./save-view.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_4__["UIState"]
        }];
      }, {
        "return": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/game-menu/saves-list/saves-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/game-menu/saves-list/saves-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SavesListComponent */

  /***/
  function srcAppUiGameMenuSavesListSavesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavesListComponent", function () {
      return SavesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_saving__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../api/saving */
    "./src/app/api/saving.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../button.directive */
    "./src/app/ui/button.directive.ts");

    function SavesListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var save_r72 = ctx.$implicit;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.change.next(save_r72);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var save_r72 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75["export"](save_r72);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavesListComponent_div_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var save_r72 = ctx.$implicit;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76["delete"](save_r72);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var save_r72 = ctx.$implicit;

        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", save_r72 === ctx_r70.selectedSave);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](save_r72);
      }
    }

    function SavesListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No saves yet\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SavesListComponent = /*#__PURE__*/function () {
      function SavesListComponent() {
        _classCallCheck(this, SavesListComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SavesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refresh();
        }
      }, {
        key: "delete",
        value: function _delete(save) {
          Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["deleteSaveGame"])(save);
          this.refresh();

          if (this.selectedSave === save) {
            this.change.next("");
          }
        }
      }, {
        key: "export",
        value: function _export(save) {
          Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["exportSave"])(save);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.saves = Object(_api_saving__WEBPACK_IMPORTED_MODULE_1__["listSaveGames"])();
        }
      }]);

      return SavesListComponent;
    }();

    SavesListComponent.ɵfac = function SavesListComponent_Factory(t) {
      return new (t || SavesListComponent)();
    };

    SavesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SavesListComponent,
      selectors: [["app-saves-list"]],
      inputs: {
        selectedSave: "selectedSave"
      },
      outputs: {
        change: "change"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "save", 3, "selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "save", 3, "click"], [1, "save-actions"], [3, "click"]],
      template: function SavesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SavesListComponent_div_0_Template, 8, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavesListComponent_div_1_Template, 2, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.saves);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.saves.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"]],
      styles: ["[_nghost-%COMP%]   .save[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .save[_ngcontent-%COMP%]   .save-actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .save[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .save.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZXMtbGlzdC9zYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9nYW1lLW1lbnUvc2F2ZXMtbGlzdC9zYXZlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREVNO0VBQ0UsaUJBQUE7QUNBUjtBREdJO0VBQ0Usd0NBQUE7QUNETjtBREdJO0VBQ0Usd0NBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3VpL2dhbWUtbWVudS9zYXZlcy1saXN0L3NhdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5zYXZlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuc2F2ZS1hY3Rpb25zIHtcbiAgICAgID4gKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMik7XG4gICAgfVxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5zYXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuc2F2ZSAuc2F2ZS1hY3Rpb25zID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLnNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLnNhdmUuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTQpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-saves-list",
          templateUrl: "./saves-list.component.html",
          styleUrls: ["./saves-list.component.scss"]
        }]
      }], null, {
        selectedSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/map-ui.ts":
  /*!******************************!*\
    !*** ./src/app/ui/map-ui.ts ***!
    \******************************/

  /*! exports provided: MapUi */

  /***/
  function srcAppUiMapUiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapUi", function () {
      return MapUi;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _api_unit_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api/unit-details */
    "./src/app/api/unit-details.ts");
    /* harmony import */


    var _api_city_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/city-details */
    "./src/app/api/city-details.ts");
    /* harmony import */


    var _renderer_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../renderer/area */
    "./src/app/renderer/area.ts");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _renderer_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _ui_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ui-state */
    "./src/app/ui/ui-state.ts");

    7;

    var MapUi = /*#__PURE__*/function () {
      function MapUi(game, camera, uiState) {
        var _this51 = this;

        _classCallCheck(this, MapUi);

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
        this.clickedTile$.subscribe(function (tile) {
          var _a;

          if (_this51.selectingTileEnabled) {
            _this51._selectedTile$.next(tile);
          } else if (tile.units.length) {
            if (((_a = _this51.selectedUnit) === null || _a === void 0 ? void 0 : _a.tile) !== tile) {
              _this51.selectUnit(tile.units[0]);
            }
          } else if (tile === null || tile === void 0 ? void 0 : tile.city) {
            _this51.selectCity(tile.city);
          } else {
            _this51.selectUnit(null);

            _this51.setPath(null);
          }
        });
        this.hoveredTile$.subscribe(function (tile) {
          if (!_this51.uiState.selectedCity$.value) {
            if (tile === null || tile === void 0 ? void 0 : tile.city) {
              _this51.hoverCity(tile.city);
            } else if (_this51.hoveredCity) {
              _this51.unhoverCity();
            }
          }
        });
        (_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer$.subscribe(function (player) {
          var _a, _b;

          _this51._selectedUnit$.next(null);

          var tileOfInterest = ((_a = player === null || player === void 0 ? void 0 : player.units[0]) === null || _a === void 0 ? void 0 : _a.tile) || ((_b = player === null || player === void 0 ? void 0 : player.cities[0]) === null || _b === void 0 ? void 0 : _b.tile);

          if (tileOfInterest) {
            _this51.camera.moveToTile(tileOfInterest);
          }

          _this51.setPath(null);
        });
        this.game.init$.subscribe(function () {
          _this51.game.state.citySpawned$.subscribe(function (city) {
            if (city.player.id === _this51.game.state.trackedPlayer.id) {
              _this51.selectCity(city);
            }
          });

          _this51.game.state.turn$.subscribe(function () {
            return _this51.setPath(null);
          });

          var areasContainer = _this51.camera["renderer"].mapDrawer.areasContainer;
          _this51.unitRangeArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffffff,
            container: areasContainer,
            backgroundOpacity: 0.15,
            borderShadow: 0.4,
            borderSize: 0.0,
            borderShadowStrength: 2,
            visibleOnWater: true
          });
          _this51.cityRangeArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffffff,
            container: areasContainer,
            backgroundOpacity: 0.2,
            borderShadow: 0.3,
            borderSize: 0.1,
            borderShadowStrength: 1.2,
            visibleOnWater: false
          });
          _this51.cityBordersOnlyArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffffff,
            container: areasContainer,
            backgroundOpacity: 0,
            borderShadow: 0.3,
            borderSize: 0.1,
            borderShadowStrength: 1.2,
            visibleOnWater: false
          });
          _this51.cityWorkedTilesArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffa001,
            container: areasContainer,
            backgroundOpacity: 0.2,
            borderShadow: 0.8,
            borderSize: 0,
            borderShadowStrength: 1,
            visibleOnWater: true
          });
          _this51.cityNotWorkedTilesArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffffff,
            container: areasContainer,
            backgroundOpacity: 0.2,
            borderShadow: 0.3,
            borderSize: 0,
            borderShadowStrength: 1.5,
            visibleOnWater: false
          });
          _this51.editorArea = new _renderer_area__WEBPACK_IMPORTED_MODULE_6__["Area"](_this51.game.state, {
            color: 0xffffff,
            container: areasContainer,
            backgroundOpacity: 0.25,
            borderShadow: 0.5,
            borderSize: 0.05,
            borderShadowStrength: 1,
            visibleOnWater: true
          });
        });
        this.game.stop$.subscribe(function () {
          return _this51.clear();
        });
      }

      _createClass(MapUi, [{
        key: "update",
        value: function update() {
          this._yieldsVisible$.next(this.camera.transform.scale > 40);
        }
      }, {
        key: "enableSelectingTile",
        value: function enableSelectingTile(enable) {
          this.selectingTileEnabled = enable;

          if (!enable) {
            this._selectedTile$.next(null);
          }
        }
      }, {
        key: "clickTile",
        value: function clickTile(tile) {
          this._clickedTile$.next(tile);
        }
      }, {
        key: "hoverTile",
        value: function hoverTile(tile) {
          this._hoveredTile$.next(tile);
        }
      }, {
        key: "setPath",
        value: function setPath(path) {
          this._activePath$.next(path);
        }
      }, {
        key: "selectCity",
        value: function selectCity(city) {
          var _this52 = this;

          var _a;

          if (!city) {
            this.uiState.selectedCity$.next(null);

            this._cityLabelsVisible$.next(true);

            this.allowMapPanning = true;
            return;
          }

          if (city.player.id === ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id)) {
            this.game.state.getCityDetails(city.id).then(function (data) {
              var cityDetails = new _api_city_details__WEBPACK_IMPORTED_MODULE_5__["CityDetails"](_this52.game.state, data);

              _this52.uiState.selectedCity$.next(cityDetails);

              _this52._cityLabelsVisible$.next(false);

              _this52.cityRangeArea.setTiles(Array.from(cityDetails.tiles));

              _this52.allowMapPanning = false;
            });
          }
        }
      }, {
        key: "hoverCity",
        value: function hoverCity(city) {
          var _this53 = this;

          var _a;

          this.hoveredCity = city;

          if (city.player.id === ((_a = this.game.state) === null || _a === void 0 ? void 0 : _a.trackedPlayer.id)) {
            city.getWorkTiles().then(function (data) {
              _this53.cityWorkedTilesArea.setTiles(data.workedTiles);

              _this53.cityNotWorkedTilesArea.setTiles(data.notWorkedTiles);

              _this53.cityBordersOnlyArea.setTiles(data.notWorkedTiles.concat(data.workedTiles));
            });
          } else {
            city.getRange().then(function (tiles) {
              _this53.cityRangeArea.setTiles(tiles);
            });
          }
        }
      }, {
        key: "unhoverCity",
        value: function unhoverCity() {
          this.cityWorkedTilesArea.clear();
          this.cityNotWorkedTilesArea.clear();
          this.cityBordersOnlyArea.clear();
          this.cityRangeArea.clear();
          this.hoveredCity = null;
        }
      }, {
        key: "selectUnit",
        value: function selectUnit(unit) {
          var _a, _b, _c;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            var _this54 = this;

            var data, unitDetails;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    if (!((unit === null || unit === void 0 ? void 0 : unit.id) === ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.id))) {
                      _context33.next = 2;
                      break;
                    }

                    return _context33.abrupt("return");

                  case 2:
                    this.clearSelectedUnit(!unit);

                    if (unit) {
                      _context33.next = 5;
                      break;
                    }

                    return _context33.abrupt("return");

                  case 5:
                    if (!(unit.player.id === ((_b = this.game.state) === null || _b === void 0 ? void 0 : _b.trackedPlayer.id))) {
                      _context33.next = 11;
                      break;
                    }

                    _context33.next = 8;
                    return this.game.state.getUnitDetails(unit.id);

                  case 8:
                    data = _context33.sent;

                    if (data) {
                      unitDetails = new _api_unit_details__WEBPACK_IMPORTED_MODULE_4__["UnitDetails"](this.game.state, data);

                      this._selectedUnit$.next(unitDetails);

                      this.game.state.updateUnit(unitDetails.id);
                      unitDetails.getRange().then(function (tiles) {
                        return _this54.unitRangeArea.setTiles(tiles);
                      });
                    }

                    this.setPath(((_c = this._selectedUnit$.value) === null || _c === void 0 ? void 0 : _c.path) || null);

                  case 11:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "clearSelectedUnit",
        value: function clearSelectedUnit() {
          var clearRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var previousUnit = this.selectedUnit;

          this._selectedUnit$.next(null);

          if (clearRange) {
            this.unitRangeArea.clear();
          }

          if (previousUnit) {
            this.game.state.updateUnit(previousUnit.id);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
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
      }, {
        key: "hoveredTile",
        get: function get() {
          return this._hoveredTile$.value;
        }
      }, {
        key: "selectedUnit",
        get: function get() {
          return this._selectedUnit$.value;
        }
      }]);

      return MapUi;
    }();

    MapUi.ɵfac = function MapUi_Factory(t) {
      return new (t || MapUi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_7__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ui_state__WEBPACK_IMPORTED_MODULE_9__["UIState"]));
    };

    MapUi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapUi,
      factory: MapUi.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapUi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _api__WEBPACK_IMPORTED_MODULE_7__["GameApi"]
        }, {
          type: _renderer_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ui_state__WEBPACK_IMPORTED_MODULE_9__["UIState"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/minimap/minimap.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui/minimap/minimap.component.ts ***!
    \*************************************************/

  /*! exports provided: MinimapComponent */

  /***/
  function srcAppUiMinimapMinimapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinimapComponent", function () {
      return MinimapComponent;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/lib/pixi.es.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_renderer_minimap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/renderer/minimap */
    "./src/app/renderer/minimap.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/renderer/renderer */
    "./src/app/renderer/renderer.ts");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");

    var _c0 = ["canvas"];

    var MinimapComponent = /*#__PURE__*/function () {
      function MinimapComponent(game, renderer, camera) {
        _classCallCheck(this, MinimapComponent);

        this.game = game;
        this.renderer = renderer;
        this.camera = camera;
        this.app = null;
        this.minimapRenderer = null;
      }

      _createClass(MinimapComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.create();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b;

          (_a = this.minimapRenderer) === null || _a === void 0 ? void 0 : _a.destroy();
          (_b = this.app) === null || _b === void 0 ? void 0 : _b.destroy();
        }
      }, {
        key: "create",
        value: function create() {
          if (this.minimapRenderer) {
            this.minimapRenderer.destroy();
          }

          this.minimapRenderer = new src_app_renderer_minimap__WEBPACK_IMPORTED_MODULE_2__["MinimapRenderer"](this.game, this.renderer, this.camera);
          this.minimapRenderer.calculateSize();
          this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            view: this.canvas.nativeElement,
            width: this.minimapRenderer.width,
            height: this.minimapRenderer.height,
            autoStart: false
          });
          this.minimapRenderer.create(this.app);
        }
      }, {
        key: "moveViewport",
        value: function moveViewport(event) {
          if (!this.minimapRenderer) {
            return;
          }

          if (event.buttons === 1) {
            var canvasRect = this.canvas.nativeElement.getBoundingClientRect();
            this.camera.moveTo((event.clientX - canvasRect.x) / this.minimapRenderer.scale, (event.clientY - canvasRect.y) / this.minimapRenderer.scale);
          }
        }
      }]);

      return MinimapComponent;
    }();

    MinimapComponent.ɵfac = function MinimapComponent_Factory(t) {
      return new (t || MinimapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__["GameRenderer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]));
    };

    MinimapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MinimapComponent,
      selectors: [["app-minimap"]],
      viewQuery: function MinimapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [[3, "mousemove", "mousedown"], ["canvas", ""]],
      template: function MinimapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "canvas", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function MinimapComponent_Template_canvas_mousemove_0_listener($event) {
            return ctx.moveViewport($event);
          })("mousedown", function MinimapComponent_Template_canvas_mousedown_0_listener($event) {
            return ctx.moveViewport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  margin-left: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9taW5pbWFwL21pbmltYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL21pbmltYXAvbWluaW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL21pbmltYXAvbWluaW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgY2FudmFzIHtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgY2FudmFzIHtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinimapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-minimap",
          templateUrl: "./minimap.component.html",
          styleUrls: ["./minimap.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: src_app_renderer_renderer__WEBPACK_IMPORTED_MODULE_4__["GameRenderer"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["canvas"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/next-turn-button/next-turn-button.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/next-turn-button/next-turn-button.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NextTurnButtonComponent */

  /***/
  function srcAppUiNextTurnButtonNextTurnButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextTurnButtonComponent", function () {
      return NextTurnButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _next_turn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../next-turn.service */
    "./src/app/ui/next-turn.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../widgets/spinner/spinner.component */
    "./src/app/ui/widgets/spinner/spinner.component.ts");

    function NextTurnButtonComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Wait for other players\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NextTurnButtonComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NextTurnButtonComponent_ng_template_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.nextTurnService.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r24.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.label, " ");
      }
    }

    var NextTurnButtonComponent = /*#__PURE__*/function () {
      function NextTurnButtonComponent(cdr, game, nextTurnService) {
        _classCallCheck(this, NextTurnButtonComponent);

        this.cdr = cdr;
        this.game = game;
        this.nextTurnService = nextTurnService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(NextTurnButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.game.nextTask$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            return _this55.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "cssClass",
        get: function get() {
          var nextTask = this.game.nextTask;

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
      }, {
        key: "label",
        get: function get() {
          var nextTask = this.game.nextTask;

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
      }]);

      return NextTurnButtonComponent;
    }();

    NextTurnButtonComponent.ɵfac = function NextTurnButtonComponent_Factory(t) {
      return new (t || NextTurnButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_next_turn_service__WEBPACK_IMPORTED_MODULE_4__["NextTurnService"]));
    };

    NextTurnButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NextTurnButtonComponent,
      selectors: [["app-next-turn-button"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["buttonTmpl", ""], [3, "click"]],
      template: function NextTurnButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NextTurnButtonComponent_button_0_Template, 3, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NextTurnButtonComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.nextTurnService.waiting$))("ngIfElse", _r23);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _widgets_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-bottom: 3px solid var(--color-primary-0);\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  font-size: 22px;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   app-spinner[_ngcontent-%COMP%] {\n  --spinner-size: 20px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9uZXh0LXR1cm4tYnV0dG9uL25leHQtdHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL25leHQtdHVybi1idXR0b24vbmV4dC10dXJuLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91aS9uZXh0LXR1cm4tYnV0dG9uL25leHQtdHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS0wKTtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgYXBwLXNwaW5uZXIge1xuICAgIC0tc3Bpbm5lci1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59XG46aG9zdCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGFwcC1zcGlubmVyIHtcbiAgLS1zcGlubmVyLXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NextTurnButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-next-turn-button",
          templateUrl: "./next-turn-button.component.html",
          styleUrls: ["./next-turn-button.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: _next_turn_service__WEBPACK_IMPORTED_MODULE_4__["NextTurnService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/next-turn.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/ui/next-turn.service.ts ***!
    \*****************************************/

  /*! exports provided: NextTurnService */

  /***/
  function srcAppUiNextTurnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextTurnService", function () {
      return NextTurnService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _renderer_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../renderer/camera */
    "./src/app/renderer/camera.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-ui */
    "./src/app/ui/map-ui.ts");

    var NextTurnService = /*#__PURE__*/function () {
      function NextTurnService(game, camera, mapUi) {
        _classCallCheck(this, NextTurnService);

        this.game = game;
        this.camera = camera;
        this.mapUi = mapUi;
        this._waiting$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.waiting$ = this._waiting$.asObservable();
      }

      _createClass(NextTurnService, [{
        key: "next",
        value: function next() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            var nextTask, state, city, unit;
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    if (!this._waiting$.value) {
                      _context34.next = 2;
                      break;
                    }

                    return _context34.abrupt("return");

                  case 2:
                    nextTask = this.game.nextTask;

                    if (nextTask) {
                      _context34.next = 9;
                      break;
                    }

                    this._waiting$.next(true);

                    _context34.next = 7;
                    return this.game.nextPlayer();

                  case 7:
                    this._waiting$.next(false);

                    return _context34.abrupt("return");

                  case 9:
                    state = this.game.state;
                    _context34.t0 = nextTask.task;
                    _context34.next = _context34.t0 === "city" ? 13 : _context34.t0 === "unit" ? 16 : 20;
                    break;

                  case 13:
                    city = state.citiesMap.get(nextTask.id);
                    this.mapUi.selectCity(city);
                    return _context34.abrupt("break", 20);

                  case 16:
                    unit = state.unitsMap.get(nextTask.id);
                    this.mapUi.selectUnit(unit);
                    this.camera.moveToTileWithEasing(unit.tile);
                    return _context34.abrupt("break", 20);

                  case 20:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }]);

      return NextTurnService;
    }();

    NextTurnService.ɵfac = function NextTurnService_Factory(t) {
      return new (t || NextTurnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]));
    };

    NextTurnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NextTurnService,
      factory: NextTurnService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NextTurnService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _api__WEBPACK_IMPORTED_MODULE_3__["GameApi"]
        }, {
          type: _renderer_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_5__["MapUi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/percent-bonus.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/ui/percent-bonus.pipe.ts ***!
    \******************************************/

  /*! exports provided: PercentBonusPipe */

  /***/
  function srcAppUiPercentBonusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PercentBonusPipe", function () {
      return PercentBonusPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PercentBonusPipe = /*#__PURE__*/function () {
      function PercentBonusPipe() {
        _classCallCheck(this, PercentBonusPipe);
      }

      _createClass(PercentBonusPipe, [{
        key: "transform",
        value: function transform(value) {
          return (value * 100).toFixed(0) + "%";
        }
      }]);

      return PercentBonusPipe;
    }();

    PercentBonusPipe.ɵfac = function PercentBonusPipe_Factory(t) {
      return new (t || PercentBonusPipe)();
    };

    PercentBonusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "percentBonus",
      type: PercentBonusPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentBonusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "percentBonus"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/player-yields/player-yields.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui/player-yields/player-yields.component.ts ***!
    \*************************************************************/

  /*! exports provided: PlayerYieldsComponent */

  /***/
  function srcAppUiPlayerYieldsPlayerYieldsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerYieldsComponent", function () {
      return PlayerYieldsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../widgets/tooltip.directive */
    "./src/app/ui/widgets/tooltip.directive.ts");

    function PlayerYieldsComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From cities: ", ctx_r164.yields.income.publicWorks, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Improvements maintainance: ", ctx_r164.yields.costs.publicWorks, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Netto per turn: ", ctx_r164.yields.perTurn.publicWorks, "");
      }
    }

    var PlayerYieldsComponent = /*#__PURE__*/function () {
      function PlayerYieldsComponent(game) {
        _classCallCheck(this, PlayerYieldsComponent);

        this.game = game;
      }

      _createClass(PlayerYieldsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "yields",
        get: function get() {
          return this.game.state.trackedPlayer.yields;
        }
      }]);

      return PlayerYieldsComponent;
    }();

    PlayerYieldsComponent.ɵfac = function PlayerYieldsComponent_Factory(t) {
      return new (t || PlayerYieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]));
    };

    PlayerYieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerYieldsComponent,
      selectors: [["app-player-yields"]],
      decls: 4,
      vars: 4,
      consts: [[1, "public-works-color", 3, "appTooltip"], ["publicWorksTooltipTmpl", ""]],
      template: function PlayerYieldsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerYieldsComponent_ng_template_2_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", _r163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Public works: ", ctx.yields.total.publicWorks, " (", ctx.yields.perTurn.publicWorks >= 0 ? "+" : "", "", ctx.yields.perTurn.publicWorks, ")\n");
        }
      },
      directives: [_widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9wbGF5ZXIteWllbGRzL3BsYXllci15aWVsZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3BsYXllci15aWVsZHMvcGxheWVyLXlpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvcGxheWVyLXlpZWxkcy9wbGF5ZXIteWllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerYieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-player-yields",
          templateUrl: "./player-yields.component.html",
          styleUrls: ["./player-yields.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_1__["GameApi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/product-requirements/product-requirements.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui/product-requirements/product-requirements.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductRequirementsComponent */

  /***/
  function srcAppUiProductRequirementsProductRequirementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRequirementsComponent", function () {
      return ProductRequirementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_buildings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/buildings */
    "./src/app/core/buildings.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["buildingTmpl"];
    var _c1 = ["sizeTmpl"];

    function ProductRequirementsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        requirement: a0
      };
    };

    function ProductRequirementsComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductRequirementsComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var requirement_r159 = ctx.$implicit;

        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r154.templates.get(requirement_r159.id))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, requirement_r159));
      }
    }

    function ProductRequirementsComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var requirement_r161 = ctx.requirement;

        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r156.getBuildingName(requirement_r161.buildingId));
      }
    }

    function ProductRequirementsComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var requirement_r162 = ctx.requirement;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requirement_r162.size);
      }
    }

    var ProductRequirementsComponent = /*#__PURE__*/function () {
      function ProductRequirementsComponent() {
        _classCallCheck(this, ProductRequirementsComponent);

        this.templates = new Map();
        this.failedRequirements = [];
      }

      _createClass(ProductRequirementsComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.templates.set("building", this.buildingRef);
          this.templates.set("size", this.sizeRef);

          var _iterator86 = _createForOfIteratorHelper(this.product.weakRequirements),
              _step86;

          try {
            for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
              var r = _step86.value;

              if (!r.check(this.city)) {
                this.failedRequirements.push(r);
              }
            }
          } catch (err) {
            _iterator86.e(err);
          } finally {
            _iterator86.f();
          }
        }
      }, {
        key: "getBuildingName",
        value: function getBuildingName(id) {
          return src_app_core_buildings__WEBPACK_IMPORTED_MODULE_1__["BUILDINGS_MAP"].get(id).name;
        }
      }]);

      return ProductRequirementsComponent;
    }();

    ProductRequirementsComponent.ɵfac = function ProductRequirementsComponent_Factory(t) {
      return new (t || ProductRequirementsComponent)();
    };

    ProductRequirementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductRequirementsComponent,
      selectors: [["app-product-requirements"]],
      viewQuery: function ProductRequirementsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buildingRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sizeRef = _t.first);
        }
      },
      inputs: {
        product: "product",
        city: "city"
      },
      decls: 5,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["buildingTmpl", ""], ["sizeTmpl", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function ProductRequirementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductRequirementsComponent_ng_container_0_Template, 2, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductRequirementsComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductRequirementsComponent_ng_template_3_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.failedRequirements);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  color: var(--color-danger-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS9wcm9kdWN0LXJlcXVpcmVtZW50cy9wcm9kdWN0LXJlcXVpcmVtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvcHJvZHVjdC1yZXF1aXJlbWVudHMvcHJvZHVjdC1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvcHJvZHVjdC1yZXF1aXJlbWVudHMvcHJvZHVjdC1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG59XG4iLCI6aG9zdCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRequirementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-product-requirements",
          templateUrl: "./product-requirements.component.html",
          styleUrls: ["./product-requirements.component.scss"]
        }]
      }], function () {
        return [];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        city: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buildingRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["buildingTmpl"]
        }],
        sizeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["sizeTmpl"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/turn-counter/turn-counter.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui/turn-counter/turn-counter.component.ts ***!
    \***********************************************************/

  /*! exports provided: TurnCounterComponent */

  /***/
  function srcAppUiTurnCounterTurnCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnCounterComponent", function () {
      return TurnCounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TurnCounterComponent = /*#__PURE__*/function () {
      function TurnCounterComponent(game) {
        _classCallCheck(this, TurnCounterComponent);

        this.game = game;
        this.isVisible = false;
      }

      _createClass(TurnCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          this.game.state.turn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (turn) {
            return turn > 1;
          })).subscribe(function () {
            _this56.isVisible = true;

            if (_this56.timeout) {
              clearTimeout(_this56.timeout);
            }

            _this56.timeout = setTimeout(function () {
              return _this56.isVisible = false;
            }, 2000);
          });
        }
      }]);

      return TurnCounterComponent;
    }();

    TurnCounterComponent.ɵfac = function TurnCounterComponent_Factory(t) {
      return new (t || TurnCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"]));
    };

    TurnCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TurnCounterComponent,
      selectors: [["app-turn-counter"]],
      hostVars: 2,
      hostBindings: function TurnCounterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-visible", ctx.isVisible);
        }
      },
      decls: 3,
      vars: 3,
      consts: [[1, "turn"]],
      template: function TurnCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("turn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.game.state.turn$), "");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: 20%;\n  font-size: 30px;\n  left: 0;\n  color: white;\n  opacity: 0;\n  transition: 1s linear;\n  pointer-events: none;\n}\n.is-visible[_nghost-%COMP%] {\n  opacity: 1;\n  transition: 0s;\n}\n[_nghost-%COMP%]   .turn[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto;\n  line-height: 55px;\n  background: linear-gradient(90deg, transparent, rgba(84, 140, 255, 0.5), rgba(84, 140, 255, 0.5), transparent);\n}\n[_nghost-%COMP%]   .turn[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .turn[_ngcontent-%COMP%]:after {\n  height: 2px;\n  content: \" \";\n  display: block;\n  background: linear-gradient(90deg, transparent, #548cff, #548cff, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhHQUFBO0FDRUo7QURLSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhFQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC91aS90dXJuLWNvdW50ZXIvdHVybi1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMXMgbGluZWFyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgJi5pcy12aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDBzO1xuICB9XG4gIC50dXJuIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHJnYmEoODQsIDE0MCwgMjU1LCAwLjUpLFxuICAgICAgcmdiYSg4NCwgMTQwLCAyNTUsIDAuNSksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDkwZGVnLFxuICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgcmdiYSg4NCwgMTQwLCAyNTUsIDEpLFxuICAgICAgICByZ2JhKDg0LCAxNDAsIDI1NSwgMSksXG4gICAgICAgIHRyYW5zcGFyZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMXMgbGluZWFyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0LmlzLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwcztcbn1cbjpob3N0IC50dXJuIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoODQsIDE0MCwgMjU1LCAwLjUpLCByZ2JhKDg0LCAxNDAsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQpO1xufVxuOmhvc3QgLnR1cm46YmVmb3JlLCA6aG9zdCAudHVybjphZnRlciB7XG4gIGhlaWdodDogMnB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICM1NDhjZmYsICM1NDhjZmYsIHRyYW5zcGFyZW50KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-turn-counter",
          templateUrl: "./turn-counter.component.html",
          styleUrls: ["./turn-counter.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api__WEBPACK_IMPORTED_MODULE_2__["GameApi"]
        }];
      }, {
        isVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.is-visible"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/turns.pipe.ts":
  /*!**********************************!*\
    !*** ./src/app/ui/turns.pipe.ts ***!
    \**********************************/

  /*! exports provided: TurnsPipe */

  /***/
  function srcAppUiTurnsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnsPipe", function () {
      return TurnsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TurnsPipe = /*#__PURE__*/function () {
      function TurnsPipe() {
        _classCallCheck(this, TurnsPipe);
      }

      _createClass(TurnsPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value === null) {
            return "";
          }

          if (value === Infinity) {
            return "∞";
          }

          return value.toString();
        }
      }]);

      return TurnsPipe;
    }();

    TurnsPipe.ɵfac = function TurnsPipe_Factory(t) {
      return new (t || TurnsPipe)();
    };

    TurnsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "turns",
      type: TurnsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "turns"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/ui-state.ts":
  /*!********************************!*\
    !*** ./src/app/ui/ui-state.ts ***!
    \********************************/

  /*! exports provided: UIState */

  /***/
  function srcAppUiUiStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIState", function () {
      return UIState;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UIState = function UIState() {
      _classCallCheck(this, UIState);

      this.editorEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
      this.menuVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
      this.selectedCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    };
    /***/

  },

  /***/
  "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UnitActionRequirementsComponent */

  /***/
  function srcAppUiUnitActionRequirementsUnitActionRequirementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitActionRequirementsComponent", function () {
      return UnitActionRequirementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/unit-actions */
    "./src/app/core/unit-actions.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UnitActionRequirementsComponent_div_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Must be on owned tile. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cannot be build on someone else's land. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Already built. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Already built. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cannot be built here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not enough public work points. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function UnitActionRequirementsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var requirement_r169 = ctx.$implicit;

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
      }
    }

    function UnitActionRequirementsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Will consume ", ctx_r166.publicWorksRequired, " public works points.\n");
      }
    }

    function UnitActionRequirementsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Costs per turn: ", ctx_r167.publicWorksPerTurn, " public works points.\n");
      }
    }

    function UnitActionRequirementsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Will consume the unit\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var UnitActionRequirementsComponent = /*#__PURE__*/function () {
      function UnitActionRequirementsComponent(cdr) {
        _classCallCheck(this, UnitActionRequirementsComponent);

        this.cdr = cdr;
        this.failedRequirements = [];
      }

      _createClass(UnitActionRequirementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return this.unit.getFailedActionRequirements(this.action);

                  case 2:
                    this.failedRequirements = _context35.sent;
                    this.cdr.markForCheck();

                  case 4:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "publicWorksRequired",
        get: function get() {
          return Object(src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__["getPublicWorksRequired"])(this.action);
        }
      }, {
        key: "publicWorksPerTurn",
        get: function get() {
          return Object(src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_2__["getPublicWorksPerTurn"])(this.action);
        }
      }]);

      return UnitActionRequirementsComponent;
    }();

    UnitActionRequirementsComponent.ɵfac = function UnitActionRequirementsComponent_Factory(t) {
      return new (t || UnitActionRequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    UnitActionRequirementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UnitActionRequirementsComponent,
      selectors: [["app-unit-action-requirements"]],
      inputs: {
        unit: "unit",
        action: "action"
      },
      decls: 4,
      vars: 4,
      consts: [["class", "requirements", 4, "ngFor", "ngForOf"], ["class", "public-works-color", 4, "ngIf"], [4, "ngIf"], [1, "requirements"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "public-works-color"]],
      template: function UnitActionRequirementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UnitActionRequirementsComponent_div_0_Template, 8, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UnitActionRequirementsComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UnitActionRequirementsComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitActionRequirementsComponent_div_3_Template, 2, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.failedRequirements);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.publicWorksRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.publicWorksPerTurn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action === "foundCity");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
      styles: ["[_nghost-%COMP%]   .requirements[_ngcontent-%COMP%] {\n  color: var(--color-danger-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMvdW5pdC1hY3Rpb24tcmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMvdW5pdC1hY3Rpb24tcmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsK0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpL3VuaXQtYWN0aW9uLXJlcXVpcmVtZW50cy91bml0LWFjdGlvbi1yZXF1aXJlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5yZXF1aXJlbWVudHMge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG4gIH1cbn1cbiIsIjpob3N0IC5yZXF1aXJlbWVudHMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyLXRleHQpO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitActionRequirementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-unit-action-requirements",
          templateUrl: "./unit-action-requirements.component.html",
          styleUrls: ["./unit-action-requirements.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        action: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/unit-marker/unit-marker.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/unit-marker/unit-marker.component.ts ***!
    \*********************************************************/

  /*! exports provided: UnitMarkerComponent */

  /***/
  function srcAppUiUnitMarkerUnitMarkerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitMarkerComponent", function () {
      return UnitMarkerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_renderer_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/renderer/constants */
    "./src/app/renderer/constants.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/renderer/camera */
    "./src/app/renderer/camera.ts");

    var UnitMarkerComponent = /*#__PURE__*/function () {
      function UnitMarkerComponent(cdr, domSanitizer, camera) {
        _classCallCheck(this, UnitMarkerComponent);

        this.cdr = cdr;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(UnitMarkerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this57 = this;

          this.camera.transform$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            return _this57.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "transform",
        get: function get() {
          if (!this.unit) {
            return "";
          }

          var _ref4 = [this.unit.tile.x, this.unit.tile.y],
              x = _ref4[0],
              y = _ref4[1];

          var _this$camera$gameToSc3 = this.camera.gameToScreen(x, y),
              _this$camera$gameToSc4 = _slicedToArray(_this$camera$gameToSc3, 2),
              screenX = _this$camera$gameToSc4[0],
              screenY = _this$camera$gameToSc4[1];

          var scale = this.camera.transform.scale / src_app_renderer_constants__WEBPACK_IMPORTED_MODULE_3__["TILE_SIZE"];
          return this.domSanitizer.bypassSecurityTrustStyle("translate(".concat(screenX, "px, ").concat(screenY, "px) scale(").concat(scale, ")"));
        }
      }, {
        key: "haveMoves",
        get: function get() {
          return this.unit.actionPointsLeft > 0;
        }
      }]);

      return UnitMarkerComponent;
    }();

    UnitMarkerComponent.ɵfac = function UnitMarkerComponent_Factory(t) {
      return new (t || UnitMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]));
    };

    UnitMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnitMarkerComponent,
      selectors: [["app-unit-marker"]],
      hostVars: 4,
      hostBindings: function UnitMarkerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.transform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("have-moves", ctx.haveMoves);
        }
      },
      inputs: {
        unit: "unit"
      },
      decls: 1,
      vars: 0,
      consts: [[1, "inner"]],
      template: function UnitMarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  transform-origin: top left;\n  will-change: transform;\n  --color: rgb(255, 36, 36, 0.8);\n}\n.have-moves[_nghost-%COMP%] {\n  --color: rgb(101, 234, 75, 0.8);\n}\n[_nghost-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  margin-top: 24px;\n  margin-left: 24px;\n  border-radius: 50%;\n  border: 15px solid;\n  border-color: var(--color) transparent;\n  -webkit-animation: spin 3s linear infinite;\n          animation: spin 3s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LW1hcmtlci91bml0LW1hcmtlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvdW5pdC1tYXJrZXIvdW5pdC1tYXJrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRjtBRFBBO0VBQ0U7SUFDRSx1QkFBQTtFQ0NGO0VEQ0E7SUFDRSx5QkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBRjtBRENFO0VBQ0UsK0JBQUE7QUNDSjtBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdWkvdW5pdC1tYXJrZXIvdW5pdC1tYXJrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC0tY29sb3I6IHJnYigyNTUsIDM2LCAzNiwgMC44KTtcbiAgJi5oYXZlLW1vdmVzIHtcbiAgICAtLWNvbG9yOiByZ2IoMTAxLCAyMzQsIDc1LCAwLjgpO1xuICB9XG4gIC5pbm5lciB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IpIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cbiIsIkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC0tY29sb3I6IHJnYigyNTUsIDM2LCAzNiwgMC44KTtcbn1cbjpob3N0LmhhdmUtbW92ZXMge1xuICAtLWNvbG9yOiByZ2IoMTAxLCAyMzQsIDc1LCAwLjgpO1xufVxuOmhvc3QgLmlubmVyIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDE1cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3IpIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-unit-marker",
          templateUrl: "./unit-marker.component.html",
          styleUrls: ["./unit-marker.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_renderer_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }];
      }, {
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["style.transform"]
        }],
        haveMoves: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.have-moves"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/unit-panel/unit-panel.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui/unit-panel/unit-panel.component.ts ***!
    \*******************************************************/

  /*! exports provided: UnitPanelComponent */

  /***/
  function srcAppUiUnitPanelUnitPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitPanelComponent", function () {
      return UnitPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/unit-actions */
    "./src/app/core/unit-actions.ts");
    /* harmony import */


    var src_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api */
    "./src/app/api/index.ts");
    /* harmony import */


    var _map_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../map-ui */
    "./src/app/ui/map-ui.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../button.directive */
    "./src/app/ui/button.directive.ts");
    /* harmony import */


    var _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../widgets/tooltip.directive */
    "./src/app/ui/widgets/tooltip.directive.ts");
    /* harmony import */


    var _unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../unit-action-requirements/unit-action-requirements.component */
    "./src/app/ui/unit-action-requirements/unit-action-requirements.component.ts");
    /* harmony import */


    var _unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../unit-marker/unit-marker.component */
    "./src/app/ui/unit-marker/unit-marker.component.ts");

    var _c0 = function _c0(a0) {
      return {
        action: a0
      };
    };

    function UnitPanelComponent_div_0_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var action_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r15.unit.doAction(action_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx_r13.unit.canDoAction(action_r14));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appTooltip", _r10)("tooltipContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, action_r14));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.getActionName(action_r14), " ");
      }
    }

    function UnitPanelComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.destroy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Disband");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.setOrder("skip");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Skip move");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitPanelComponent_div_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.setOrder("sleep");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sleep");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UnitPanelComponent_div_0_button_17_Template, 2, 7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
      }
    }

    function UnitPanelComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-unit-action-requirements", 9);
      }

      if (rf & 2) {
        var action_r21 = ctx.action;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("unit", ctx_r11.unit)("action", action_r21);
      }
    }

    function UnitPanelComponent_app_unit_marker_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-unit-marker", 10);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("unit", ctx_r12.unit);
      }
    }

    var UnitPanelComponent = /*#__PURE__*/function () {
      function UnitPanelComponent(cdr, game, mapUi) {
        _classCallCheck(this, UnitPanelComponent);

        this.cdr = cdr;
        this.game = game;
        this.mapUi = mapUi;
        this.unit = null;
        this.requirementsTemplates = new Map();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(UnitPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          this.mapUi.selectedUnit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (unit) {
            _this58.unit = unit;

            _this58.cdr.markForCheck();
          });
          this.game.state.turn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this58, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      if (!this.unit) {
                        _context36.next = 9;
                        break;
                      }

                      _context36.next = 3;
                      return this.unit.refresh();

                    case 3:
                      _context36.t0 = this.mapUi.unitRangeArea;
                      _context36.next = 6;
                      return this.unit.getRange();

                    case 6:
                      _context36.t1 = _context36.sent;

                      _context36.t0.setTiles.call(_context36.t0, _context36.t1);

                      this.cdr.markForCheck();

                    case 9:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "getActionName",
        value: function getActionName(action) {
          return src_app_core_unit_actions__WEBPACK_IMPORTED_MODULE_4__["ACTIONS"][action].name;
        }
      }, {
        key: "setOrder",
        value: function setOrder(order) {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return (_a = this.unit) === null || _a === void 0 ? void 0 : _a.setOrder(order);

                  case 2:
                    this.cdr.markForCheck();

                  case 3:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.unit) {
            this.unit.disband();
            this.mapUi.selectUnit(null);
          }
        }
      }]);

      return UnitPanelComponent;
    }();

    UnitPanelComponent.ɵfac = function UnitPanelComponent_Factory(t) {
      return new (t || UnitPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]));
    };

    UnitPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UnitPanelComponent,
      selectors: [["app-unit-panel"]],
      decls: 4,
      vars: 2,
      consts: [["class", "panel panel-top-right-corner", 4, "ngIf"], ["unitActionsTooltipTmpl", ""], [3, "unit", 4, "ngIf"], [1, "panel", "panel-top-right-corner"], [1, "actions"], [1, "btn-danger", 3, "click"], [3, "click"], [3, "disabled", "appTooltip", "tooltipContext", "click", 4, "ngFor", "ngForOf"], [3, "appTooltip", "tooltipContext", "click"], [3, "unit", "action"], [3, "unit"]],
      template: function UnitPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UnitPanelComponent_div_0_Template, 18, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UnitPanelComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitPanelComponent_app_unit_marker_3_Template, 1, 1, "app-unit-marker", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _button_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _widgets_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], _unit_action_requirements_unit_action_requirements_component__WEBPACK_IMPORTED_MODULE_10__["UnitActionRequirementsComponent"], _unit_marker_unit_marker_component__WEBPACK_IMPORTED_MODULE_11__["UnitMarkerComponent"]],
      styles: ["[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  max-width: 400px;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS91bml0LXBhbmVsL3VuaXQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3VuaXQtcGFuZWwvdW5pdC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBSjtBRENJO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0FDQ047QURBTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3VpL3VuaXQtcGFuZWwvdW5pdC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5hY3Rpb25zIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgLnBhbmVsIC5hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCAucGFuZWwgLmFjdGlvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-unit-panel",
          templateUrl: "./unit-panel.component.html",
          styleUrls: ["./unit-panel.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: src_app_api__WEBPACK_IMPORTED_MODULE_5__["GameApi"]
        }, {
          type: _map_ui__WEBPACK_IMPORTED_MODULE_6__["MapUi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/widgets/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppUiWidgetsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent() {
        _classCallCheck(this, ModalComponent);
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)();
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "panel"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/multiselect/multiselect.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/widgets/multiselect/multiselect.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MultiselectComponent */

  /***/
  function srcAppUiWidgetsMultiselectMultiselectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function () {
      return MultiselectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MultiselectComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiselectComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var option_r55 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.toggleOption(option_r55);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r55 = ctx.$implicit;

        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r54.value.includes(option_r55.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r55.label, "\n");
      }
    }

    var MultiselectComponent = /*#__PURE__*/function () {
      function MultiselectComponent() {
        _classCallCheck(this, MultiselectComponent);

        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MultiselectComponent, [{
        key: "toggleOption",
        value: function toggleOption(option) {
          if (this.value.includes(option.value)) {
            var index = this.value.indexOf(option.value);

            var newValue = _toConsumableArray(this.value);

            newValue.splice(index, 1);
            this.changed.next(newValue);
          } else {
            this.changed.next([].concat(_toConsumableArray(this.value), [option.value]));
          }
        }
      }]);

      return MultiselectComponent;
    }();

    MultiselectComponent.ɵfac = function MultiselectComponent_Factory(t) {
      return new (t || MultiselectComponent)();
    };

    MultiselectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiselectComponent,
      selectors: [["app-multiselect"]],
      inputs: {
        options: "options",
        value: "value"
      },
      outputs: {
        changed: "changed"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]],
      template: function MultiselectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiselectComponent_div_0_Template, 2, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 10px;\n}\n[_nghost-%COMP%]   .option[_ngcontent-%COMP%]:not(.selected):hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .option.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLHdDQUFBO0FDQ047QURDSTtFQUNFLHdDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAub3B0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgJjpub3QoLnNlbGVjdGVkKTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xuICAgIH1cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAub3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbjpob3N0IC5vcHRpb246bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiselectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-multiselect",
          templateUrl: "./multiselect.component.html",
          styleUrls: ["./multiselect.component.scss"]
        }]
      }], null, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/progress-bar/progress-bar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/widgets/progress-bar/progress-bar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppUiWidgetsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProgressBarComponent_ng_container_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r128.nextProgressPercent, "%");
      }
    }

    function ProgressBarComponent_ng_container_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r129.progressPercent - ctx_r129.nextProgressPercent, "%")("left", ctx_r129.nextProgressPercent, "%");
      }
    }

    function ProgressBarComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarComponent_ng_container_0_div_1_Template, 1, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarComponent_ng_container_0_div_3_Template, 1, 4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.nextProgress > ctx_r127.progress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r127.progressPercent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.nextProgress < ctx_r127.progress);
      }
    }

    var _c0 = ["*"];

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);
      }

      _createClass(ProgressBarComponent, [{
        key: "progressPercent",
        get: function get() {
          return this.progress / this.total * 100;
        }
      }, {
        key: "nextProgressPercent",
        get: function get() {
          return this.nextProgress / this.total * 100;
        }
      }]);

      return ProgressBarComponent;
    }();

    ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)();
    };

    ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["app-progress-bar"]],
      inputs: {
        progress: "progress",
        nextProgress: "nextProgress",
        total: "total"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "progress next", 3, "width", 4, "ngIf"], [1, "progress"], ["class", "progress negative", 3, "width", "left", 4, "ngIf"], [1, "progress", "next"], [1, "progress", "negative"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressBarComponent_ng_container_0_Template, 5, 4, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_ngcontent-%COMP%]:root {\n  --progress-bar-color: royalblue;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  z-index: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n  text-shadow: 0 0 4px black;\n}\n\n[_nghost-%COMP%]   .progress[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background-color: var(--progress-bar-color);\n}\n\n[_nghost-%COMP%]   .progress.next[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n[_nghost-%COMP%]   .progress.negative[_ngcontent-%COMP%] {\n  background-color: #c22929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3dpZGdldHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDRUo7O0FEREk7RUFDRSxZQUFBO0FDR047O0FEREk7RUFDRSx5QkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLXByb2dyZXNzLWJhci1jb2xvcjogcm95YWxibHVlO1xufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XG4gIC5wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzcy1iYXItY29sb3IpO1xuICAgICYubmV4dCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICYubmVnYXRpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMjkyOTtcbiAgICB9XG4gIH1cbn1cbiIsIjpyb290IHtcbiAgLS1wcm9ncmVzcy1iYXItY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xufVxuOmhvc3QgLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzLWJhci1jb2xvcik7XG59XG46aG9zdCAucHJvZ3Jlc3MubmV4dCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbjpob3N0IC5wcm9ncmVzcy5uZWdhdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjI5Mjk7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-progress-bar",
          templateUrl: "./progress-bar.component.html",
          styleUrls: ["./progress-bar.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        progress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextProgress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/radio/radio.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/widgets/radio/radio.component.ts ***!
    \*****************************************************/

  /*! exports provided: RadioComponent */

  /***/
  function srcAppUiWidgetsRadioRadioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioComponent", function () {
      return RadioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RadioComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var option_r51 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.changed.next(option_r51.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r51 = ctx.$implicit;

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", option_r51.value === ctx_r50.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r51.label, "\n");
      }
    }

    var RadioComponent = function RadioComponent() {
      _classCallCheck(this, RadioComponent);

      this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    RadioComponent.ɵfac = function RadioComponent_Factory(t) {
      return new (t || RadioComponent)();
    };

    RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioComponent,
      selectors: [["app-radio"]],
      inputs: {
        options: "options",
        value: "value"
      },
      outputs: {
        changed: "changed"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]],
      template: function RadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadioComponent_div_0_Template, 2, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 3px 10px;\n}\n[_nghost-%COMP%]   .option[_ngcontent-%COMP%]:not(.selected):hover {\n  background-color: var(--color-primary-2);\n}\n[_nghost-%COMP%]   .option.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLHdDQUFBO0FDQ047QURDSTtFQUNFLHdDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAub3B0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgJjpub3QoLnNlbGVjdGVkKTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xuICAgIH1cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAub3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbjpob3N0IC5vcHRpb246bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTIpO1xufVxuOmhvc3QgLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-radio",
          templateUrl: "./radio.component.html",
          styleUrls: ["./radio.component.scss"]
        }]
      }], null, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/spinner/spinner.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/widgets/spinner/spinner.component.ts ***!
    \*********************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppUiWidgetsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)();
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      decls: 0,
      vars: 0,
      template: function SpinnerComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n  --spinner-size: 64px;\n  display: inline-block;\n}\n[_nghost-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: var(--spinner-size);\n  height: var(--spinner-size);\n  border-radius: 50%;\n  border: calc(var(--spinner-size) / 6) solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNFSjtBREFFO0VBQ0U7SUFDRSx1QkFBQTtFQ0VKO0VEQUU7SUFDRSx5QkFBQTtFQ0VKO0FBQ0Y7QURSRTtFQUNFO0lBQ0UsdUJBQUE7RUNFSjtFREFFO0lBQ0UseUJBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tc3Bpbm5lci1zaXplOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS1zcGlubmVyLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tc3Bpbm5lci1zaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNwaW5uZXItc2l6ZSkgLyA2KSBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc3Bpbm5lci1zaXplOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IHZhcigtLXNwaW5uZXItc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc3Bpbm5lci1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IGNhbGModmFyKC0tc3Bpbm5lci1zaXplKSAvIDYpIHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/tabs/index.ts":
  /*!******************************************!*\
    !*** ./src/app/ui/widgets/tabs/index.ts ***!
    \******************************************/

  /*! exports provided: TabComponent, TabsComponent */

  /***/
  function srcAppUiWidgetsTabsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tab/tab.component */
    "./src/app/ui/widgets/tabs/tab/tab.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__["TabComponent"];
    });
    /* harmony import */


    var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tabs.component */
    "./src/app/ui/widgets/tabs/tabs.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/ui/widgets/tabs/tab/tab.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui/widgets/tabs/tab/tab.component.ts ***!
    \******************************************************/

  /*! exports provided: TabComponent */

  /***/
  function srcAppUiWidgetsTabsTabTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return TabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TabComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "isVisible"]);
      }
    }

    var _c0 = ["*"];

    var TabComponent = /*#__PURE__*/function () {
      function TabComponent() {
        _classCallCheck(this, TabComponent);

        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isVisible$ = this._isVisible$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
      }

      _createClass(TabComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
      }, {
        key: "hide",
        value: function hide() {
          this._isVisible$.next(false);
        }
      }, {
        key: "show",
        value: function show() {
          this._isVisible$.next(true);

          this.select.next();
        }
      }, {
        key: "isVisible",
        get: function get() {
          return this._isVisible$.value;
        }
      }]);

      return TabComponent;
    }();

    TabComponent.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent)();
    };

    TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabComponent,
      selectors: [["app-tab"]],
      inputs: {
        tabTitle: "tabTitle"
      },
      outputs: {
        select: "select"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[1, "content"], [4, "ngIf"]],
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabComponent_1_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]:not(.no-padding) {\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAmOm5vdCgubm8tcGFkZGluZykge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbjpob3N0Om5vdCgubm8tcGFkZGluZykge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tab",
          templateUrl: "./tab.component.html",
          styleUrls: ["./tab.component.scss"]
        }]
      }], null, {
        tabTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/tabs/tabs.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui/widgets/tabs/tabs.component.ts ***!
    \***************************************************/

  /*! exports provided: TabsComponent */

  /***/
  function srcAppUiWidgetsTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tab/tab.component */
    "./src/app/ui/widgets/tabs/tab/tab.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TabsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var tab_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.activateTab(tab_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r35 === ctx_r34.activeTab);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r35.tabTitle);
      }
    }

    var _c0 = ["*"];

    var TabsComponent = /*#__PURE__*/function () {
      function TabsComponent() {
        _classCallCheck(this, TabsComponent);
      }

      _createClass(TabsComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.activateTab(this.tabs.first);
        }
      }, {
        key: "activateTab",
        value: function activateTab(tab) {
          if (this.activeTab) {
            this.activeTab.hide();
          }

          this.activeTab = tab;
          this.activeTab.show();
        }
      }]);

      return TabsComponent;
    }();

    TabsComponent.ɵfac = function TabsComponent_Factory(t) {
      return new (t || TabsComponent)();
    };

    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsComponent,
      selectors: [["app-tabs"]],
      contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 1,
      consts: [[1, "tabs"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]],
      template: function TabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_div_1_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.grow-tabs[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 1;\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 30px;\n  cursor: pointer;\n  border-bottom: 3px solid var(--color-secondary-1-4);\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-secondary-1-2);\n}\n[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-color: var(--color-secondary-1-0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FDR047QURGTTtFQUNFLHdDQUFBO0FDSVI7QURGTTtFQUNFLHdDQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC91aS93aWRnZXRzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJi5ncm93LXRhYnMgLnRhYnMgLnRhYiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIC50YWIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeS0xLTQpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtMik7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdC5ncm93LXRhYnMgLnRhYnMgLnRhYiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbjpob3N0IC50YWJzIC50YWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5LTEtNCk7XG59XG46aG9zdCAudGFicyAudGFiOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktMS0yKTtcbn1cbjpob3N0IC50YWJzIC50YWIuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktMS0wKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tabs",
          templateUrl: "./tabs.component.html",
          styleUrls: ["./tabs.component.scss"]
        }]
      }], null, {
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/toggle/toggle.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui/widgets/toggle/toggle.component.ts ***!
    \*******************************************************/

  /*! exports provided: ToggleComponent */

  /***/
  function srcAppUiWidgetsToggleToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () {
      return ToggleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var ToggleComponent = /*#__PURE__*/function () {
      function ToggleComponent() {
        _classCallCheck(this, ToggleComponent);

        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToggleComponent, [{
        key: "toggle",
        value: function toggle() {
          this.value = !this.value;
          this.changed.next(this.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToggleComponent;
    }();

    ToggleComponent.ɵfac = function ToggleComponent_Factory(t) {
      return new (t || ToggleComponent)();
    };

    ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToggleComponent,
      selectors: [["app-toggle"]],
      hostVars: 2,
      hostBindings: function ToggleComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_click_HostBindingHandler() {
            return ctx.toggle();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("enabled", ctx.value);
        }
      },
      inputs: {
        value: "value"
      },
      outputs: {
        changed: "changed"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.enabled[_nghost-%COMP%] {\n  background-color: royalblue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3dpZGdldHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VpL3dpZGdldHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJi5lbmFibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdC5lbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-toggle",
          templateUrl: "./toggle.component.html",
          styleUrls: ["./toggle.component.scss"]
        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.enabled"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/tooltip.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui/widgets/tooltip.directive.ts ***!
    \*************************************************/

  /*! exports provided: TooltipDirective */

  /***/
  function srcAppUiWidgetsTooltipDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tooltip/tooltip.component */
    "./src/app/ui/widgets/tooltip/tooltip.component.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

    var TooltipDirective = /*#__PURE__*/function () {
      function TooltipDirective(elementRef, overlay) {
        _classCallCheck(this, TooltipDirective);

        this.elementRef = elementRef;
        this.overlay = overlay;
        this.overlayRef = null;
      }

      _createClass(TooltipDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.overlayRef) {
            this.overlayRef.dispose();
          }
        }
      }, {
        key: "showTooltip",
        value: function showTooltip() {
          this.overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions(this.getPositions())
          });
          var tooltipPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"]);
          var componentRef = this.overlayRef.attach(tooltipPortal);
          componentRef.instance.templateRef = this.templateRef;
          componentRef.instance.context = this.context;
        }
      }, {
        key: "hideTooltip",
        value: function hideTooltip() {
          if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        }
      }, {
        key: "getPositions",
        value: function getPositions() {
          return [{
            originX: "center",
            originY: "top",
            overlayX: "center",
            overlayY: "bottom"
          }, {
            originX: "center",
            originY: "bottom",
            overlayX: "center",
            overlayY: "top"
          }];
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "appTooltip", ""]],
      hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
            return ctx.showTooltip();
          })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
            return ctx.hideTooltip();
          });
        }
      },
      inputs: {
        templateRef: ["appTooltip", "templateRef"],
        context: ["tooltipContext", "context"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appTooltip]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
        }];
      }, {
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["appTooltip"]
        }],
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["tooltipContext"]
        }],
        showTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mouseenter"]
        }],
        hideTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mouseleave"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/widgets/tooltip/tooltip.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/widgets/tooltip/tooltip.component.ts ***!
    \*********************************************************/

  /*! exports provided: TooltipComponent */

  /***/
  function srcAppUiWidgetsTooltipTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TooltipComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var TooltipComponent = /*#__PURE__*/function () {
      function TooltipComponent() {
        _classCallCheck(this, TooltipComponent);
      }

      _createClass(TooltipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)();
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["app-tooltip"]],
      decls: 1,
      vars: 2,
      consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef)("ngTemplateOutletContext", ctx.context);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-primary-4);\n  border-radius: 8px;\n  color: white;\n  padding: 8px;\n  border: 2px solid var(--color-primary-0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL2FwcC91aS93aWRnZXRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tooltip",
          templateUrl: "./tooltip.component.html",
          styleUrls: ["./tooltip.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/tul/Projects/civ/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map