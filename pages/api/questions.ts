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
    info: "En enkelt koral kalles en polypp, og hver polypp lever på toppen av den forrige generasjonens kalkskall.",
  },
  {
    question: "Hva er det største korallrevet i verden?",
    correct_answer: "Great Barrier Reef i Australia",
    answers: [
      "Great Barrier Reef i Australia",
      "MesoAmerican Barrier Reef i Belize",
      "Raja Ampat i Indonesia",
    ],
    info: "Great Barrier Reef er over 2600 kilometer langt, og kan til og med sees fra verdensrommet!",
  },
  {
    question: "Finnes det korallrev i Norge?",
    correct_answer: "Ja",
    answers: ["Ja", "Nei"],
    info: "Korallrev finnes langs hele Norskekysten. Så langt er omtrent 1500 rev observert, men det er ikke utenkelig at det finnes opp mot 10 000.",
  },
  {
    question: "Hva gir korallene sin farge?",
    correct_answer: "Alger",
    answers: ["Havstrømmer", "Alger", "Fisk"],
    info: "Koraller får fargene sine fra alger som de lever i et symbiotisk forhold med. Algene går gjennom fotosyntesen",
  },
  {
    question: "I hvilke miljøer trives koraller best?",
    correct_answer: "Tropiske havområder",
    answers: [
      "Tropiske havområder",
      "Arktiske havområder",
      "Elver og innsjøer",
    ],
    info: "Selvom vi finner koraller over store deler av havet, trives de best der de har tilgang til mye sol - særlig rundt ekvator",
  },
];

export const questions_medium = [
  {
    question: "Hvor stor del av havbunnen består av korallrev?",
    correct_answer: "1%",
    answers: ["10%", "5%", "1%"],
    info: "Selv om korallrevene bare dekker under en prosent av havbunnen, er hele 25 % av havets arter avhengige av dem for å leve.",
  },
  {
    question: "Hvorfor er korallrev viktig for mennesker?",
    correct_answer: "Forebygge naturkatastrofer",
    answers: ["Forebygge naturkatastrofer", "Pynte i havet", "Mat til fisk"],
    info: "På samme måte som koraller er avhengige av alger for å overleve, er mennesker avhengig av korallrev. En halv millard mennesker er avhengige av korallrev for mat og inntekt. Verden over beskytter rev mennesker som lever ved kysten gjennom å bremse bølgene fra store stormer som dannes på havet.",
  },
  {
    question: "Hva forårsaker korallbleking?",
    correct_answer: "Økt havtemperatur",
    answers: ["Lavere havtemperatur", "Forsøpling", "Høyere havtemperatur"],
    info: "Økte havtemperaturer og havforsuring truer korrallrevene. Grunt vann varmes fortere opp enn dypt. Ettersom mange rev ligger i områder hvor vannet er grunt merkes derfor klimaendringene mer akutt.",
  },
  {
    question: "Hvor lenge har koraller bygget rev?",
    correct_answer: "100 millioner år",
    answers: ["100 millioner år", "100 000 år", "10 millioner år"],
    info: "Visste du at koraller har bygget rev helt siden det fortsatt levde dinosaurer på jordkloden vår!",
  },
  {
    question: "Hvordan prøver forskere å hjelpe korallrev å holde seg friske?",
    correct_answer: "100 millioner år",
    answers: ["100 millioner år", "100 000 år", "10 millioner år"],
    info: "Koraller har bygget rev helt siden det fortsatt levde dinosaurer på jordkloden vår!",
  },
];

export const questions_hard = [
  {
    question: "Hva slags menneskelig aktivitet truer korallrev lokalt?",
    correct_answer: "Alle alternativene",
    answers: [
      "Uforsiktive turister",
      "Overfisking",
      "Forsøpling",
      "Alle alternativene",
    ],
    info: "Det er mange forskjellige ting som truer korallrevene. De blir ødelagte av uforsiktige turister, forsøpling, overfiske og skadelige fiskemetoder som trålfiske",
  },

  {
    question: "Hvilket stoff benyttes når koraller bygger korallrev?",
    correct_answer: "Kalsiumkarbonat",
    answers: ["Kalsiumkarbonat", "Karbondioksid", ""],
    info: "Kalsiumkarbonat består av kalsium og karbon.",
  },
  {
    question: "Hvilke av disse er IKKE en type korallstruktur?",
    correct_answer: "polyrall reefs",
    answers: ["atoll reefs", "barrier reefs", "fringing reefs", "polyrall"],
    info: "Korallrev er faktisk de største sturkturene bygget av dyr. De tre grunnformene er atoll reefs, fringing reefs og barrier reefs",
  },
  {
    question: "spm 4?",
    correct_answer: "x",
    answers: ["x", "y", "z"],
    info: "info",
  },
  {
    question: "spm 5?",
    correct_answer: "z",
    answers: ["x", "y", "z"],
    info: "info",
  },
];
