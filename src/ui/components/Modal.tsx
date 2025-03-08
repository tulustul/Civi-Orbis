import { PropsWithChildren } from "react";
import { Panel } from "./Panel";
import styles from "./Modal.module.css";
import clsx from "clsx";

type Props = PropsWithChildren & {
  className?: string;
  title?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
};
export function Modal({
  children,
  className,
  title,
  showCloseButton,
  onClose,
}: Props) {
  function getTopBar() {
    if (!title && !showCloseButton) {
      return null;
    }

    return (
      <div className="flex pb-2 mb-2 items-center border-b-1">
        <h2 className="grow text-3xl">{title}</h2>
        {showCloseButton && (
          <button className="" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <Panel className={clsx(className, styles.content)}>
        {getTopBar()}
        {children}
      </Panel>
    </div>
  );
}
