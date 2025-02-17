import { Children, ReactNode, useState } from "react";
import styles from "./Tabs.module.css";
import clsx from "clsx";

interface TabProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}

interface TabsProps {
  children: ReactNode;
  defaultTab?: number;
}

export function Tab({ children, onClick }: TabProps) {
  return (
    <div className={styles.tabContent} onClick={onClick}>
      {children}
    </div>
  );
}

export function Tabs({ children, defaultTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={clsx(styles.tabHeader, {
              [styles.active]: activeTab === index,
            })}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.title}
          </div>
        ))}
      </div>

      {tabs[activeTab]}
    </div>
  );
}
