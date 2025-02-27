import { bridge } from "@/bridge";
import { useObservable } from "@/utils";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./TurnCounter.module.scss";

export function TurnsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const turn = useObservable(bridge.game.turn$);

  useEffect(() => {
    setIsVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      timeoutRef.current = null;
    }, 2000) as any;
  }, [turn]);

  if (!turn) {
    return;
  }

  return (
    <div className={clsx(styles.wrapper, { [styles.isVisible]: isVisible })}>
      <div className={styles.turn}>turn {turn}</div>
    </div>
  );
}
