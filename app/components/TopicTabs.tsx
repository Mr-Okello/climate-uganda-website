"use client";

import { useMemo, useState } from "react";

interface Topic {
  title: string;
  content: string;
  keyImpacts: string[];
  studentActions: string[];
  localExamples: string[];
}

type TabId = "overview" | "impacts" | "actions" | "examples";

export default function TopicTabs({ topic }: { topic: Topic }) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = useMemo(
    () => [
      {
        id: "overview" as TabId,
        label: "Overview",
        content: (
          <div>
            <p className="text-slate-600">{topic.content}</p>
          </div>
        )
      },
      {
        id: "impacts" as TabId,
        label: `Key impacts (${topic.keyImpacts.length})`,
        content: (
          <ul className="space-y-2 text-sm text-slate-600">
            {topic.keyImpacts.map((impact) => (
              <li key={impact}>• {impact}</li>
            ))}
          </ul>
        )
      },
      {
        id: "actions" as TabId,
        label: `Student actions (${topic.studentActions.length})`,
        content: (
          <ul className="space-y-2 text-sm text-slate-600">
            {topic.studentActions.map((action) => (
              <li key={action}>• {action}</li>
            ))}
          </ul>
        )
      },
      {
        id: "examples" as TabId,
        label: `Local examples (${topic.localExamples.length})`,
        content: (
          <ul className="space-y-2 text-sm text-slate-600">
            {topic.localExamples.map((example) => (
              <li key={example}>• {example}</li>
            ))}
          </ul>
        )
      }
    ],
    [topic]
  );

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                isActive
                  ? "bg-brand-green text-white"
                  : "border border-slate-200 text-slate-600 hover:border-brand-green"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 text-sm">{activeContent}</div>
    </div>
  );
}
