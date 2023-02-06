import { shuffleArray } from "../../utils";

export type Question = {
  question: string;
  correct_answer: string;
  answers: string[];
};

export type QuestionState = Question & { answers: string[] };

export const questions = [
  {
    question: "Hva trenger et korallrev for å leve?",
    correct_answer: "Sol",
    answers: ["Sol", "Vann", "Farge"],
  },
  {
    question: "Hvorfor er korallrev viktig?",
    correct_answer: "Forebygge naturkatastrofer",
    answers: ["Forebygge naturkatastrofer", "Pynte i havet", "Mat til fisk"],
  },
  {
    question: "Finnes det korallrev i norge?",
    correct_answer: "Ja",
    answers: ["Ja", "Nei"],
  },
];
