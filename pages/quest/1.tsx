import React, { useContext, useEffect, useState } from "react";
import QuestionCard from "../../components/Quiz/QuestionCard";
import PedagogicalAgent from "../../components/Quiz/PedagogicalAgent";
import Header from "../../components/Navbar/Header";
import { questions } from "../api/questions";
import styles from "../../components/Quiz/Quiz.module.css";
import { StartQuizButton } from "../../components/Button/StartQuizButton";
import QuizCrab from "../../components/Quiz/QuizCrab";
import { delay } from "../../utils";
import { Router, useRouter } from "next/router";
import { Context } from "../../components/context/Context";

const TOTAL_QUESTIONS = 3;

export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
  info: string;
};

//quiz
export default function Quest1() {
  const [number, setNumber] = React.useState<number>(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [complete, setComplete] = React.useState<boolean>(false);
  const [correct, setCorrect] = React.useState<boolean>();
  const [visible, setQuestionVisible] = React.useState<boolean>(false);
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [lastQuestion, setLastQuestion] = React.useState<boolean>(false);
  const [animate, setAnimate] = React.useState<string>("");

  const {
    sandDollarCount,
    setSandDollarCount,
    totalSandDollars,
    setTotalSandDollars,
  } = useContext(Context);

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
        setSandDollarCount(sandDollarCount + 2);
        setTotalSandDollars(totalSandDollars + 2);
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
      setAnimate("crab-in");
      if (number == TOTAL_QUESTIONS - 1) setLastQuestion(true);
    }
  };

  const router = useRouter();

  const handleNext = async () => {
    setCorrect(undefined);
    if (number < TOTAL_QUESTIONS - 1) {
      setNumber((prev) => prev + 1);
      setAnimate("crab-out");
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
            <StartQuizButton onClick={startQuiz} title="Start quiz" />
          )}
        </div>
      ) : null}

      <>
        {!complete && visible ? (
          <QuestionCard
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
      {gameStarted ? <QuizCrab animate={animate} /> : null}
    </div>
  );
}
