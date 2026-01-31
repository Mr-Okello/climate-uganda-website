"use client";

import { useEffect, useMemo, useState } from "react";

interface ActionItem {
  id: string;
  text: string;
}

const storageKey = "climate-actions";

export default function ActionsPage() {
  const [actions, setActions] = useState<ActionItem[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setActions(JSON.parse(stored) as ActionItem[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(actions));
  }, [actions]);

  const total = useMemo(() => actions.length, [actions]);

  const handleAdd = () => {
    if (!input.trim()) return;
    const newAction = {
      id: crypto.randomUUID(),
      text: input.trim()
    };
    setActions((prev) => [newAction, ...prev]);
    setInput("");
  };

  const handleDelete = (id: string) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <span className="badge">Pledge tracker</span>
        <h1 className="mt-3 text-3xl font-semibold text-brand-dark">
          Track your climate actions
        </h1>
        <p className="mt-3 text-slate-600">
          Add actions you or your classmates have completed. The list stays saved in
          your browser.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="e.g., planted 3 trees"
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-green focus:outline-none"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
            >
              Add action
            </button>
          </div>
          <div className="mt-4 rounded-xl bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
            Total actions logged: {total}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {actions.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
              No actions yet. Add your first pledge above!
            </div>
          ) : (
            actions.map((action) => (
              <div
                key={action.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <p className="text-sm text-slate-700">{action.text}</p>
                <button
                  type="button"
                  onClick={() => handleDelete(action.id)}
                  className="text-xs font-semibold uppercase tracking-wide text-red-500"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
