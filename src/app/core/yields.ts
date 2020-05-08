export interface Yields {
  food: number;
  production: number;
  culture: number;
  publicWorks: number;
}

export const EMPTY_YIELDS: Yields = {
  food: 0,
  production: 0,
  culture: 0,
  publicWorks: 0,
};

export function zeroYields(yields: Yields) {
  yields.food = 0;
  yields.production = 0;
  yields.culture = 0;
  yields.publicWorks = 0;
}

export function addToYields(targetYields: Yields, yields: Yields) {
  targetYields.food += yields.food;
  targetYields.production += yields.production;
  targetYields.culture += yields.culture;
  targetYields.publicWorks += yields.publicWorks;
}

export function copyYields(targetYields: Yields, yields: Yields) {
  targetYields.food = yields.food;
  targetYields.production = yields.production;
  targetYields.culture = yields.culture;
  targetYields.publicWorks = yields.publicWorks;
}

export function roundYields(yields: Yields) {
  yields.food = Math.ceil(yields.food);
  yields.production = Math.ceil(yields.production);
  yields.culture = Math.ceil(yields.culture);
  yields.publicWorks = Math.ceil(yields.publicWorks);
}
