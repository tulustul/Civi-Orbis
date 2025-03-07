import clsx from "clsx";
import styles from "./Spinner.module.css";

type Props = {
  size?: "small" | "normal";
};
export function Spinner({ size = "normal" }: Props) {
  return <div className={clsx(styles.spinner, styles[size])} />;
}
