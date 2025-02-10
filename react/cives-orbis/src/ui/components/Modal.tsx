import { PropsWithChildren } from "react";
import { Panel } from "./Panel";
import styles from "./Modal.module.css";

export function Modal({ children }: PropsWithChildren) {
  return (
    <div className={styles.modal}>
      <Panel className={styles.content}>{children}</Panel>
    </div>
  );
}
