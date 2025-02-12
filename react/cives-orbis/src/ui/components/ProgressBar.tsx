import clsx from "clsx";
import styles from "./ProgressBar.module.css";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  progress: number;
  nextProgress: number;
  total: number;
  className?: string;
};

export function ProgressBar({
  progress,
  nextProgress,
  total,
  children,
  className,
}: Props) {
  const percent = (progress / total) * 100;
  const nextPercent = nextProgress ? (nextProgress / total) * 100 : 0;

  if (!total) {
    return null;
  }

  return (
    <div className={clsx(styles.progressBar, className)}>
      {nextProgress > progress && (
        <div
          className={clsx(styles.progress, styles.next)}
          style={{ width: `${nextPercent}%` }}
        ></div>
      )}

      <div className={styles.progress} style={{ width: `${percent}%` }}></div>

      {nextProgress < progress && (
        <div
          className={clsx(styles.progress, styles.negative)}
          style={{
            width: `${percent - nextPercent}%`,
            left: `${nextPercent}%`,
          }}
        ></div>
      )}

      {children}
    </div>
  );
}
