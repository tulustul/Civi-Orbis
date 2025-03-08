import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={clsx(className, "py-5 px-15 rounded-sm")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// button {
//   border: 0;
//   padding: 5px 15px;
//   cursor: pointer;
//   border-radius: 4px;
//   background-color: var(--color-primary-3);
//   color: white;
//   outline: none;
// }
// button:hover {
//   background-color: var(--color-primary-4);
// }
// button.btn-danger {
//   background-color: var(--color-danger-text);
// }
// button.disabled {
//   color: var(--color-secondary-text);
//   background-color: var(--color-primary-3);
// }
