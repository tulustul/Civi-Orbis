import { useState } from "react";

export function useForceRender() {
  const setVersion = useState(0)[1];
  return () => setVersion((version) => version + 1);
}
