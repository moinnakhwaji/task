import { useState } from "react";
import { TabsProps } from "./Tabs.types";
import clsx from "clsx";

export const Tabs = ({ items, defaultActiveId, orientation = "horizontal" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveId || items[0].id);

  const isVertical = orientation === "vertical";

  return (
    <div className={clsx("flex", isVertical ? "flex-row" : "flex-col")}>
      <div className={clsx("flex", isVertical ? "flex-col w-48" : "flex-row")}>
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "px-4 py-2 text-sm font-medium border-b-2 transition",
              activeTab === tab.id
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4" role="tabpanel" id={`tab-panel-${activeTab}`}>
        {items.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
