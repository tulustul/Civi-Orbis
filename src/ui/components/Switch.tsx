import clsx from "clsx";
import styles from "./Switch.module.css";

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ label, checked, onChange }: Props) {
  return (
    <div
      className={clsx(styles.switch, { [styles.checked]: checked })}
      onClick={() => onChange(!checked)}
    >
      {label}
    </div>
  );
}
