import { shuffleArray } from "../../utils";

export type Question = {
  question: string;
  correct_answer: string;
  answers: string[];
  info: string;
};

export type QuestionState = Question & { answers: string[] };

export const questions_easy = [
  {
    question: "Hva er et korallrev bygget opp av?",
    correct_answer: "Polypper",
    answers: ["Steiner", "Polypper", "Døde fisk"],
    info: "Korallrev er rev (grunner i havet) bygd opp av kalkskjeletter. Disse stammer hovedsakelig fra koralldyr, men også fra andre organismer med kalkskall, som kalkalger. En enkelt koral kalles en polypp, og hver polypp lever på toppen av den forrige generasjonens kalkskall (eksoskjelett). ",
  },
  {
    question: "Hva er det største korallrevet i verden?",
    correct_answer: "Great Barrier Reef i Australia",
    answers: [
      "Great Barrier Reef i Australia",
      "MesoAmerican Barrier Reef i Belize",
      "Raja Ampat i Indonesia",
    ],
    info: "info",
  },
  {
    question: "Hvor stor del av haveet består av koraller?",
    correct_answer: "25%",
    answers: ["10%", "25%", "50%"],
    info: "info",
  },
  {
    question: "Finnes det korallrev i norge?",
    correct_answer: "Ja",
    answers: ["Ja", "Nei"],
    info: "Det finnes faktisk x antall korallrev i Norge",
  },
  {
    question: "Hva gir korallene farge?",
    correct_answer: "Alger",
    answers: ["Havstrømmene", "Alger", "Fisk"],
    info: "info om fotosyntesen",
  },
  {
    question: "Hvorfor er korallrev viktig?",
    correct_answer: "Forebygge naturkatastrofer",
    answers: ["Forebygge naturkatastrofer", "Pynte i havet", "Mat til fisk"],
    info: "Korallrev kan redde landsbyer fra naturkatastrofe",
  },
];

export const questions_medium = [
  {
    question: "Hva er en korall?",
    correct_answer: "",
    answers: ["Sol", "Vann", "Farge"],
    info: "info",
  },
  {
    question: "Hva forårsaker korallbleking?",
    correct_answer: "Økt havtemperatur",
    answers: ["Lavere havtemperatur", "Klor", "Høyere havtemperatur"],
    info: "info",
  },
  {
    question: "Hvor trives koraller?",
    correct_answer: "Ja",
    answers: ["Ja", "Nei"],
    info: "Det finnes faktisk x antall korallrev i Norge",
  },
];

export const questions_hard = [
  {
    question: "Hva er trusler ovenfor korallrev forårsaket av mennesker?",
    correct_answer:
      "Korallrev bygges av dyr i havet som utnytter energien fra solen til å lage steiner ut av vann",
    answers: [
      "Korallrev bygges av dyr i havet som utnytter energien fra solen til å lage steiner ut av vann",
      "Kalsiumkarbonat",
      "Farge",
    ],
    info: "info",
  },
  {
    question: "Hvilken setning er sann?",
    correct_answer: "Forebygge naturkatastrofer",
    answers: ["Forebygge naturkatastrofer", "Pynte i havet", "Mat til fisk"],
    info: "Korallrev kan redde landsbyer fra naturkatastrofe",
  },
  {
    question: "Hvilket stoff benyttes når koraller bygger korallrev?",
    correct_answer: "Kalsiumkarbonat",
    answers: ["Kalsiumkarbonat", "x", "y"],
    info: "info",
  },
];
