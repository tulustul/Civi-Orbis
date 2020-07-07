// Proof of concept

import { CityCore } from "./city";
import { TileCore } from "./tile";
import { Yields, EMPTY_YIELDS } from "./yields";
import { UnitCore } from "./unit";

export class TradeManager {
  routes: TradeRoute[] = [];

  private graph = new TradeGraph();

  getAvailableRoutes(from: CityCore): TradeRoute[] {
    return [];
  }

  establishRoute(route: TradeRoute): void {}

  deleteRoute(route: TradeRoute): void {}

  pillage(route: TradeRoute, pillager: UnitCore): void {}

  nextTurn() {}
}

export class TradeGraph {
  nodes: TradeNode[];
  nodesMap = new Map<CityCore, TradeNode>();

  findRoute(from: CityCore, to: CityCore): TradeRoute | null {
    return null;
  }

  addNode(city: CityCore) {}

  removeNode(city: CityCore) {}

  balance() {}
}

export class TradeRoute {
  edges: TradeEdge[];
}

export class TradeNode {
  city: CityCore;
  edges: TradeEdge;
}

export class TradeEdge {
  path: TileCore[];

  routes: TradeRoute[] = [];

  toAYields: Yields = { ...EMPTY_YIELDS };
  toBYields: Yields = { ...EMPTY_YIELDS };

  constructor(public nodeA: CityCore, public nodeB: CityCore) {
    this.path = this.buildPath();
  }

  buildPath(): TileCore[] {
    return [];
  }

  addRoute(route: TradeRoute) {}

  removeRoute(route: TradeRoute) {}

  computeYields() {}
}
