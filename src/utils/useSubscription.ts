import { useEffect } from "react";
import { Observable } from "rxjs";

export function useSubscription<T>(
  observable: Observable<T>,
  subscriber: (value: T) => void,
): void {
  useEffect(() => {
    const subscription = observable.subscribe(subscriber);
    return () => subscription.unsubscribe();
  }, [observable]);
}
