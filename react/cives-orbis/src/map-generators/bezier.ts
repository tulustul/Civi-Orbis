type Vector2 = [number, number];

export function* generateBezierSegments(
  controls: Vector2[],
  detail: number,
): IterableIterator<[Vector2, Vector2]> {
  let lastPoint: Vector2 | null = null;

  let a0: Vector2, a1: Vector2, a2: Vector2, a3: Vector2;
  for (let i = 0; i < controls.length - 2; i += 4) {
    a0 = controls[i];
    a1 = controls[i + 1];
    a2 = controls[i + 2];

    a3 = controls[i + 3];
    for (let j = 0; j < 1; j += detail) {
      const newPoint = cubicBezier(a0, a1, a2, a3, j);
      if (lastPoint) {
        yield [lastPoint, newPoint];
      }
      lastPoint = newPoint;
    }
  }
}

function cubicBezier(
  p1: Vector2,
  p2: Vector2,
  p3: Vector2,
  p4: Vector2,
  t: number,
): Vector2 {
  return [
    cubicBezierPoint(p1[0], p2[0], p3[0], p4[0], t),
    cubicBezierPoint(p1[1], p2[1], p3[1], p4[1], t),
  ];
}

function cubicBezierPoint(
  a0: number,
  a1: number,
  a2: number,
  a3: number,
  t: number,
) {
  return (
    Math.pow(1 - t, 3) * a0 +
    3 * Math.pow(1 - t, 2) * t * a1 +
    3 * (1 - t) * Math.pow(t, 2) * a2 +
    Math.pow(t, 3) * a3
  );
}
