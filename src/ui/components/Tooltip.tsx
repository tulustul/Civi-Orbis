import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from "react";

import styles from "./Tooltip.module.css";
import clsx from "clsx";

type Props = PropsWithChildren & {
  content: ReactNode;
  className?: string;
};
export function Tooltip({ children, content, className }: Props) {
  const [visible, setVisible] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  function show() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  function computePosition(): CSSProperties | undefined {
    if (!visible || !elRef.current) {
      return;
    }
    const box = elRef.current.getBoundingClientRect()!;
    let left = box.left + box.width / 2;
    const overflow = left + 250 > window.outerWidth;
    if (overflow) {
      left -= left + 250 - window.outerWidth;
    }
    if (left < 125) {
      left = 125;
    }

    let topTransform = "-100%";
    let top = box.top;
    if (box.top < 100) {
      topTransform = "10px";
      top = box.bottom;
    }

    return {
      left: `${left}px`,
      top: `${top}px`,
      transform: `translate(${overflow ? "0" : "-50%"}, ${topTransform})`,
    };
  }

  return (
    <>
      <div
        ref={elRef}
        className={clsx(className, styles.child)}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </div>
      {visible && (
        <div className={styles.tooltip} style={computePosition()}>
          {content}
        </div>
      )}
    </>
  );
}
