import React, { useContext, useEffect, useState } from "react";
import QuestionCard from "../../components/Quiz/QuestionCard";
import PedagogicalAgent from "../../components/Quiz/PedagogicalAgent";
import Header from "../../components/Navbar/Header";
import {
  questions_easy,
  questions_medium,
  questions_hard,
} from "../api/questions";
import styles from "../../components/Quiz/Quiz.module.css";
import { StartQuizButton } from "../../components/Button/StartQuizButton";
import { delay } from "../../utils";
import { useRouter } from "next/router";
import { Context } from "../../context/Context";

const TOTAL_QUESTIONS = 5;

export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
  info: string;
};

export default function Quest1() {
  const [number, setNumber] = React.useState<number>(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [complete, setComplete] = React.useState<boolean>(false);
  const [correct, setCorrect] = React.useState<boolean>();
  const [visible, setQuestionVisible] = React.useState<boolean>(false);
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [lastQuestion, setLastQuestion] = React.useState<boolean>(false);
  const [level, setLevel] = React.useState<string>("lett");

  const { sandDollarCount, setSandDollarCount, XP, setXP } =
    useContext(Context);

  const questions =
    level == "lett"
      ? questions_easy
      : level == "medium"
      ? questions_medium
      : questions_hard;

  const startQuiz = async () => {
    setGameStarted(true);
    setQuestionVisible(true);
  };

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!complete) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
        const dollars = level == "easy" ? 1 : level == "medium" ? 2 : 3;
        const xp = level == "easy" ? 5 : level == "medium" ? 10 : 15;
        setSandDollarCount(sandDollarCount + dollars);
        setXP(XP + xp);
        setCorrect(correct);
        setComplete(false);
      }

      const answerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        correct,
        info: questions[number].info,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      await delay(1000);
      setQuestionVisible(false);
      if (number == TOTAL_QUESTIONS - 1) setLastQuestion(true);
    }
  };

  const router = useRouter();

  const handleNext = async () => {
    setCorrect(undefined);
    if (number < TOTAL_QUESTIONS - 1) {
      setNumber((prev) => prev + 1);
    } else {
      setComplete(true);
      await delay(3000);
      router.push("/game");
    }
    setQuestionVisible(true);
  };

  return (
    <div className={styles.quizWrapper}>
      <Header
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        gameStarted={gameStarted}
      />
      {complete && (
        <div className={styles["complete"]}>
          Quizen er ferdig! Du fikk {score} riktige svar!
        </div>
      )}

      {!gameStarted ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
          }}>
          {!complete && (
            <>
              <StartQuizButton
                onClick={() => {
                  startQuiz();
                  setLevel("lett");
                }}
                title="Lett"
              />
              <StartQuizButton
                onClick={() => {
                  startQuiz();
                  setLevel("medium");
                }}
                title="Medium"
              />
              <StartQuizButton
                onClick={() => {
                  startQuiz();
                  setLevel("vanskelig");
                }}
                title="Vanskelig"
              />
            </>
          )}
        </div>
      ) : null}

      <>
        {!complete && visible ? (
          <QuestionCard
            level={level}
            question={questions[number].question}
            answers={questions[number].answers}
            correctAnswer={questions[number].correct_answer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : (
          !visible &&
          !complete &&
          !!userAnswers[number] && (
            <>
              <PedagogicalAgent
                onClick={handleNext}
                isCorrect={correct}
                info={questions[number].info}
                lastQuestion={lastQuestion}
              />
            </>
          )
        )}
      </>
    </div>
  );
}
