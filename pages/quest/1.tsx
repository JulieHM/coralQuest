import React from "react";
import { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { questions } from "../api/questions";

const TOTAL_QUESTIONS = 5;
export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
};

export default function Quest1() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [number, setNumber] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(true);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [complete, setComplete] = React.useState<boolean>(false);

  const startQuiz = async () => {
    setComplete(false);
    setLoading(true);
    setLoading(false);
    setGameOver(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        correct,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const handleNext = () => {
    if (number < TOTAL_QUESTIONS - 1) setNumber((prev) => prev + 1);
    else setComplete(true);
  };

  console.log(number);

  return (
    <>
      <h1>React Typescript Quiz</h1>
      {complete && <div className="complete">Quiz is complete</div>}

      {gameOver || complete ? (
        <>
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        </>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {!loading && !gameOver && !complete && (
        <QuestionCard
          questionNum={number + 1}
          question={questions[number].question}
          answers={questions[number].answers}
          totalQuestions={TOTAL_QUESTIONS}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!loading && !gameOver && !complete && !!userAnswers[number] && (
        <button className="next" onClick={handleNext}>
          Neste spørsmål
        </button>
      )}
    </>
  );
}
