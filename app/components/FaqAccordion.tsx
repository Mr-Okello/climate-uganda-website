"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "mission",
    title: "Why focus on local stories?",
    content:
      "Students learn faster when examples match their daily lives. Local stories make climate science feel real and doable."
  },
  {
    id: "partners",
    title: "Who can partner with Climate Uganda Classroom?",
    content:
      "Schools, youth clubs, NGOs, and community groups are welcome to partner on lessons, events, and action campaigns."
  },
  {
    id: "support",
    title: "How can I support the program?",
    content:
      "Share learning resources, volunteer as a speaker, or help students document their climate actions."
  }
];

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([accordionItems[0].id]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-8 space-y-3">
      {accordionItems.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-brand-dark">
                {item.title}
              </span>
              <span className="text-lg font-semibold text-brand-green">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && <p className="mt-3 text-sm text-slate-600">{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
