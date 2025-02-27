import clsx from "clsx";
import { Option } from "./types";

import styles from "./Radio.module.css";

type Props<T> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function Radio<T>({ options, value, onChange }: Props<T>) {
  return (
    <div>
      {options.map((option, i) => (
        <div
          key={i}
          className={clsx(styles.option, {
            [styles.selected]: option.value === value,
          })}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
