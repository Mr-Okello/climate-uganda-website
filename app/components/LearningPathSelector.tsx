"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface LearningPath {
  id: string;
  label: string;
  description: string;
  highlights: string[];
  actions: { label: string; href: string }[];
}

const learningPaths: LearningPath[] = [
  {
    id: "students",
    label: "Student explorer",
    description:
      "Short lessons, quick quizzes, and everyday actions you can take in class or at home.",
    highlights: [
      "Start with beginner-friendly topics",
      "Take a 15-question knowledge check",
      "Log personal climate actions"
    ],
    actions: [
      { label: "Browse topics", href: "/topics" },
      { label: "Take the quiz", href: "/quiz" }
    ]
  },
  {
    id: "teachers",
    label: "Teacher toolkit",
    description:
      "Lesson-ready resources, discussion prompts, and ways to track class progress.",
    highlights: [
      "Use local examples for discussions",
      "Assign quizzes for quick feedback",
      "Encourage classroom pledges"
    ],
    actions: [
      { label: "View resources", href: "#resources" },
      { label: "Track pledges", href: "/actions" }
    ]
  },
  {
    id: "clubs",
    label: "Climate club leader",
    description:
      "Plan group activities, share impact stories, and keep the momentum going.",
    highlights: [
      "Pick a focus topic for the month",
      "Organize a community action",
      "Celebrate wins with the action tracker"
    ],
    actions: [
      { label: "Pick a topic", href: "/topics" },
      { label: "Plan actions", href: "/actions" }
    ]
  }
];

export default function LearningPathSelector() {
  const [activeId, setActiveId] = useState(learningPaths[0].id);

  const activePath = useMemo(
    () => learningPaths.find((path) => path.id === activeId) ?? learningPaths[0],
    [activeId]
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-3">
        {learningPaths.map((path) => {
          const isActive = path.id === activeId;
          return (
            <button
              key={path.id}
              type="button"
              onClick={() => setActiveId(path.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand-green text-white"
                  : "border border-slate-200 text-slate-600 hover:border-brand-green"
              }`}
            >
              {path.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-brand-dark">{activePath.label}</h3>
        <p className="mt-2 text-sm text-slate-600">{activePath.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {activePath.highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          {activePath.actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
