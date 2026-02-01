"use client";

import { useEffect, useMemo, useState } from "react";

type ActionItem = {
  id: string;
  text: string;
  createdAt: string;
};

const STORAGE_KEY = "climate-uganda-actions";

export default function ActionsPage() {
  const [actionText, setActionText] = useState("");
  const [actions, setActions] = useState<ActionItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ActionItem[];
        setActions(parsed);
      } catch {
        setActions([]);
      }
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
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(actions));
  }, [actions]);

  const totalActions = useMemo(() => actions.length, [actions]);

  const handleAdd = () => {
    if (!actionText.trim()) return;

    const newAction: ActionItem = {
      id: crypto.randomUUID(),
      text: actionText.trim(),
      createdAt: new Date().toISOString()
    };

    setActions((prev) => [newAction, ...prev]);
    setActionText("");
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
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Climate Action Pledge Tracker</h1>
        <p className="text-slate-600">
          Add small actions you take each week. Your list is saved in this browser using localStorage.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-600">Total actions logged</p>
            <p className="text-2xl font-semibold text-slate-900">{totalActions}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <input
              value={actionText}
              onChange={(event) => setActionText(event.target.value)}
              placeholder="e.g., Planted 3 trees"
              className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
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
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
            >
              Add action
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {actions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
            No actions yet. Start by adding a simple pledge like using public transport or saving water.
          </div>
        ) : (
          actions.map((action) => (
            <article key={action.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{action.text}</p>
                  <p className="text-xs text-slate-500">
                    Added {new Date(action.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(action.id)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700"
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
            </article>
          ))
        )}
      </section>
    </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
