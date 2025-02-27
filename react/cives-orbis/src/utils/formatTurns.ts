export function formatTurns(value: number | null): string {
  if (value === null) {
    return "";
  }
  if (value === Infinity) {
    return "∞";
  }
  return value.toString();
}
