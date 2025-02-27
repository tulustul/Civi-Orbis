import { Panel } from "./components";
import { Editor } from "./editor";

import styles from "./Editor.module.css";

export function EditorMode() {
  return (
    <Panel className={styles.panel}>
      <Editor />
    </Panel>
  );
}
