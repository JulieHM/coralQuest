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
    info: "En enkelt koral kalles en polypp, og er et dyr som har et hardt skjelett av kalk. Et korallrev består av millioner av døde og levende polypper/koralldyr.",
  },
  {
    question: "Hva er det største korallrevet i verden?",
    correct_answer: "Great Barrier Reef i Australia",
    answers: [
      "Great Barrier Reef i Australia",
      "Meso-American Barrier Reef i Belize",
      "Rødehavskorallrevet",
    ],
    info: "Great Barrier Reef er over 2600 kilometer langt, og er så stort at det til og med kan sees fra verdensrommet!",
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
    info: "Koraller får fargene sine fra alger som de lever i et symbiotisk forhold med. Algenes viktigste funksjon er å høste energi fra sollys gjennom fotosyntesen og korallene absorberer opptil 90% av denne energien.",
  },
  {
    question: "I hvilke miljøer trives koraller best?",
    correct_answer: "Tropiske havområder",
    answers: [
      "Tropiske havområder",
      "Arktiske havområder",
      "Elver og innsjøer",
    ],
    info: "Selvom vi finner koraller over store deler av havet, trives de best der de har tilgang til mye sol - særlig rundt ekvator.",
  },
];

export const questions_medium = [
  {
    question: "Hvor stor del av havbunnen består av korallrev?",
    correct_answer: "1%",
    answers: ["10%", "5%", "1%"],
    info: "Selv om korallrevene bare dekker under en prosent av havbunnen, er hele 25% av havets arter avhengige av dem for å leve.",
  },

  {
    question: "Hva er korallbleking?",
    correct_answer: "Når en korall kvitter seg med algene sine",
    answers: [
      "Når en korall produserer blekemiddel",
      "Når en korall kvitter seg med algene sine",
    ],
    info: "Korallbleking vil si at en korall mister næringsstoffer og fargen sin ved at algene som bor i dem forsvinner.",
  },

  {
    question: "Hva forårsaker korallbleking?",
    correct_answer: "Økt havtemperatur",
    answers: ["Økt havtemperatur", "Lavere havtemperatur", "Forsøpling"],
    info: "Økte havtemperaturer og havforsuring truer korrallrevene. Grunt vann varmes fortere opp enn dypt. Ettersom mange rev ligger i områder hvor vannet er grunt merkes derfor klimaendringene mer akutt.",
  },

  {
    question: "Hvorfor er korallrev viktig for mennesker?",
    correct_answer: "De er en kilde til mat og inntekt",
    answers: [
      "De er en kilde til mat og inntekt",
      "De er et sted for mennesker å svømme",
      "Korallene brukes som byggematerialer",
    ],
    info: "På samme måte som koraller er avhengige av alger for å overleve er mennesker er avhengig av korallrev. En halv millard mennesker er avhengige av korallrev for mat og inntekt.",
  },

  {
    question: "Hvor lenge har koraller bygget rev?",
    correct_answer: "100 millioner år",
    answers: ["100 000 år", "10 millioner år", "100 millioner år"],
    info: "Visste du at koraller har bygget rev helt siden det fortsatt levde dinosaurer på jordkloden vår! Det eldste korallrevet vi har i dag er 9000 år gammelt.",
  },
];

export const questions_hard = [
  {
    question: "Hva slags menneskelig aktivitet truer korallrevene?",
    correct_answer: "Alle alternativene",
    answers: [
      "Uforsiktige turister",
      "Overfisking",
      "Forsøpling",
      "Alle alternativene",
    ],
    info: "Det er mange forskjellige ting som truer korallrevene. I tillegg til uforsiktige turister, forsøpling, overfiske og skadelige fiskemetoder er økt utslipp av CO2 den største trusselen mot korallrevene våre.",
  },
  {
    question: "Hvilket stoff benyttes når koraller bygger korallrev?",
    correct_answer: "Kalsiumkarbonat",
    answers: ["Kalsiumkarbonat", "Karbondioksid", "Kalsiumoksid"],
    info: "Kalsiumkarbonat består av kalsium og karbon. Korallene trenger kalk for å bygge opp skjelettet sitt. Med økte CO2-utsilpp blir havet surere, surere hav gjør at det blir mindre kalk i vannet som igjen gjør det vanskeligere for korallene å vokse.",
  },
  {
    question: "Hvilke av disse er IKKE en type korallstruktur?",
    correct_answer: "Fjellrev",
    answers: ["Kystrev", "Barriererev", "Ringrev", "Fjellrev"],
    info: "Korallrev er faktisk de største sturkturene bygget av dyr. De tre grunnformene er kystrev, barriererev og ringrev.",
  },
  {
    question: "Kan korallrev beskytte mennesker mot tropiske stormer?",
    correct_answer:
      "Ja, de fungerer som en barriere og reduserer styrken på bølgene som treffer kysten",
    answers: [
      "Ja, de fungerer som en barriere og reduserer styrken på bølgene som treffer kysten",
      "Nei, korallrev tiltrekker seg tropiske stormer og øker deres styrke",
      "Korallrev har ingen innvirkning på ødeleggelsene av tropiske stormer",
    ],
    info: "Friske koraller beskytter land mot ødeleggelser fra tropiske stormer. Dette skjer ved at rev sprer bølgeenergi som reduserer bølgehøyde og bremser vannet før det treffer kysten.",
  },
  {
    question: "Hvor mye vokser koraller på et år?",
    correct_answer: "0,5 - 2,5 centimeter",
    answers: [
      "0,5 - 2,5 centimeter",
      "5 - 10 centimeter",
      "20 - 50 centimeter",
    ],
    info: "I naturen vokser koraller bare mellom 0,5 og 2,5 centimeter på et år. For å få koraller til å vokse fortere har forskere funnet opp en måte å å få dem til å vokse raskere, ved å plante dem i korallgårder.",
  },
];
