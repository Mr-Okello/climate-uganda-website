export type Topic = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  keyImpacts: string[];
  studentActions: string[];
  localExamples: string[];
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};
