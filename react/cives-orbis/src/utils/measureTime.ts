export function measureTime<T>(message: string, fn: () => T): T {
  const t0 = performance.now();
  const result = fn();
  const t1 = performance.now();
  console.log(`${message} took: ${(t1 - t0).toFixed(1)} ms`);
  return result;
}

export async function measureTimeAsync<T>(
  message: string,
  fn: () => Promise<T>,
): Promise<T> {
  const t0 = performance.now();
  const result = await fn();
  const t1 = performance.now();
  console.log(`${message} took: ${(t1 - t0).toFixed(1)} ms`);
  return result;
}
