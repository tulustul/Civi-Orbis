import { useState } from "react";

export function useforceRender() {
  const setVersion = useState(0)[1];
  return () => setVersion((version) => version + 1);
}
