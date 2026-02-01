"use client";

import { useMemo, useState } from "react";
import quizData from "../../data/quiz.json";
import type { QuizQuestion } from "../lib/types";

export default function QuizPage() {
  const questions = quizData as QuizQuestion[];
import quizData from "../data/quiz.json";

interface Question {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

const questions = quizData as Question[];

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      const selected = answers[question.id];
    return questions.reduce((total, question, index) => {
      const selected = answers[index];
      if (selected === question.answerIndex) {
        return total + 1;
      }
      return total;
    }, 0);
  }, [answers, questions]);

  const handleSelect = (id: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  }, [answers]);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
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
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <span className="badge">Quiz</span>
        <h1 className="mt-3 text-3xl font-semibold text-brand-dark">
          Test your climate knowledge
        </h1>
        <p className="mt-3 text-slate-600">
          Answer all 15 questions and see your score with explanations.
        </p>

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <div key={question.question} className="card">
              <p className="text-sm font-semibold text-slate-500">Question {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold text-brand-dark">
                {question.question}
              </h2>
              <div className="mt-4 grid gap-3">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[index] === optionIndex;
                  const isCorrect = submitted && optionIndex === question.answerIndex;
                  const isIncorrect =
                    submitted && selected && optionIndex !== question.answerIndex;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(index, optionIndex)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                        selected
                          ? "border-brand-green bg-brand-light text-brand-dark"
                          : "border-slate-200 text-slate-600 hover:border-brand-green"
                      } ${isCorrect ? "border-brand-green bg-green-50" : ""} ${
                        isIncorrect ? "border-red-400 bg-red-50" : ""
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-semibold text-brand-green">Explanation:</span>{" "}
                  {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
            >
              Submit quiz
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
                Score: {score} / {questions.length}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-brand-green px-5 py-2 text-sm font-semibold text-brand-green"
              >
                Retake quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
