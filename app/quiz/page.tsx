"use client";

import { useMemo, useState } from "react";
import quizData from "../../data/quiz.json";
import type { QuizQuestion } from "../lib/types";

export default function QuizPage() {
  const questions = quizData as QuizQuestion[];
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      const selected = answers[question.id];
      if (selected === question.answerIndex) {
        return total + 1;
      }
      return total;
    }, 0);
  }, [answers, questions]);

  const handleSelect = (id: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Climate Change Quiz</h1>
        <p className="text-slate-600">
          Test your knowledge with 15 quick questions about climate change in Uganda.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-600">Questions answered</p>
            <p className="text-2xl font-semibold text-slate-900">
              {Object.keys(answers).length}/{questions.length}
            </p>
          </div>
          {submitted ? (
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-brand-green">
              Your score: {score}/{questions.length}
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              Submit quiz
            </button>
          )}
        </div>
      </section>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <article key={question.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {index + 1}. {question.question}
            </h2>
            <div className="mt-4 grid gap-3">
              {question.options.map((option, optionIndex) => {
                const selected = answers[question.id] === optionIndex;
                const isCorrect = question.answerIndex === optionIndex;
                const showResult = submitted;
                const baseClasses =
                  "rounded-xl border px-4 py-3 text-sm transition";
                const stateClasses = showResult
                  ? isCorrect
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : selected
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-slate-200 text-slate-600"
                  : selected
                    ? "border-brand-blue bg-blue-50 text-brand-blue"
                    : "border-slate-200 text-slate-600 hover:border-brand-blue";

                return (
                  <button
                    key={option}
                    type="button"
                    className={`${baseClasses} ${stateClasses}`}
                    onClick={() => handleSelect(question.id, optionIndex)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Explanation:</span> {question.explanation}
              </p>
            )}
          </article>
        ))}
      </div>

      {submitted && (
        <button
          onClick={handleReset}
          className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow hover:border-brand-blue hover:text-brand-blue"
        >
          Try again
        </button>
      )}
    </div>
  );
}
