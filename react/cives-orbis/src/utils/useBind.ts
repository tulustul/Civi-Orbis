import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export function useBind<T>(observable: Observable<T>): T | null {
  const [value, setValue] = useState<T | null>(null);
  const setVersion = useState(0)[1];

  useEffect(() => {
    const subscription = observable.subscribe((v) => {
      setVersion((version) => version + 1); // hack to force rerender when reference to the value doesn't change
      setValue(v);
    });
    return () => subscription.unsubscribe();
  }, [observable]);

  return value;
}
