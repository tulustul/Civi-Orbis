import { Option } from "./types";
import styles from "./Radio.module.css";
import clsx from "clsx";

type Props<T> = {
  options: Option<T>[];
  value: T[];
  onChange: (value: T[]) => void;
};

export function Multiselect<T>({ options, value, onChange }: Props<T>) {
  function toggleOption(option: Option<T>) {
    if (value.includes(option.value)) {
      const index = value.indexOf(option.value);
      const newValue = [...value];
      newValue.splice(index, 1);
      onChange(newValue);
    } else {
      onChange([...value, option.value]);
    }
  }

  return (
    <div>
      {options.map((option, i) => (
        <div
          key={i}
          className={clsx(styles.option, {
            [styles.selected]: value.includes(option.value),
          })}
          onClick={() => toggleOption(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
