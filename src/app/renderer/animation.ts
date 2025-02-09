export type AnimationOptions<T extends number | number[]> = {
  from: T;
  to: T;
  duration: number;
  easing?: (t: number) => number;
  fn: (x: T) => void;
};

export type TimelineOptions = {
  animations: Animation[];
};

export class Animations {
  static new<T extends number | number[]>(
    options: AnimationOptions<T>,
  ): Animation {}

  static run<T extends number | number[]>(
    options: AnimationOptions<T>,
  ): Animation {}

  static timeline(options: TimelineOptions): Animation {}

  private static makeAnimation<T extends number | number[]>(
    options: AnimationOptions<T>,
  ): Animation {}

  static easing = {
    linear,
    easeOutQuad,
    easeOutCubic,
  };
}

export class AnimationsManager {
  private animations: Animation[] = [];

  add(animation: Animation) {
    this.animations.push(animation);
  }

  update(stepTime: number) {
    this.animations = this.animations.filter((animation) => {
      const value = animation.step(stepTime);
      if (value !== null) {
        return true;
      }
      return false;
    });
  }
}

export interface Animation {
  step(stepTime: number): number | number[] | null;
}

export class ValueAnimation implements Animation {
  private progress = 0;
  private diff: number;
  private easing: (t: number) => number;

  constructor(public options: AnimationOptions<number>) {
    this.easing = options.easing || linear;
    this.diff = options.to - options.from;
  }

  step(stepTime: number): number | null {
    if (this.progress >= this.options.duration) {
      return null;
    }
    this.progress += stepTime;
    const eased = this.easing(this.progress / this.options.duration);
    return this.options.from + this.diff * Math.min(eased, 1);
  }
}

export class MultiValueAnimation implements Animation {
  private progress = 0;
  private diff: number[] = [];
  private easing: (t: number) => number;

  constructor(public options: AnimationOptions<number[]>) {
    this.easing = options.easing || linear;
    if (options.from.length !== options.to.length) {
      throw new Error("From and to values must have the same length");
    }
    for (let i = 0; i < options.from.length; i++) {
      this.diff.push(options.to[i] - options.from[i]);
    }
  }

  step(stepTime: number): number[] | null {
    if (this.progress >= this.options.duration) {
      return null;
    }
    this.progress += stepTime;
    const eased = this.easing(this.progress / this.options.duration);
    return this.options.from.map(
      (from, i) => from + this.diff[i] * Math.min(eased, 1),
    );
  }
}

export function linear(t: number) {
  return t;
}

export function easeOutQuad(t: number) {
  return t * (2 - t);
}

export function easeOutCubic(t: number) {
  return --t * t * t + 1;
}

export const animationsManager = new AnimationsManager();
