import { shuffleArray } from "../../utils";

export type Question = {
  question: string;
  correct_answer: string;
  answers: string[];
  info: string;
};

export type QuestionState = Question & { answers: string[] };

export const questions = [
  {
    question: "Hva trenger et korallrev for å leve?",
    correct_answer: "Sol",
    answers: ["Sol", "Vann", "Farge"],
    info: "Visste du at et korallrev trenger så mye sol blablabla",
  },
  {
    question: "Hvorfor er korallrev viktig?",
    correct_answer: "Forebygge naturkatastrofer",
    answers: ["Forebygge naturkatastrofer", "Pynte i havet", "Mat til fisk"],
    info: "Korallrev kan redde landsbyer fra naturkatastrofe",
  },
  {
    question: "Finnes det korallrev i norge?",
    correct_answer: "Ja",
    answers: ["Ja", "Nei"],
    info: "Det finnes faktisk x antall korallrev i Norge",
  },
];
