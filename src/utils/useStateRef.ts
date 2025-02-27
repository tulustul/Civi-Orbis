import { RefObject, useEffect, useRef, useState } from "react";

export function useStateRef<T>(
  initialValue: T,
): [T, (value: T) => void, RefObject<T>] {
  const [value, setValue] = useState<T>(initialValue);
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
}
