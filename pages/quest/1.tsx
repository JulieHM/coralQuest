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
import Image from "next/image";
import { StartQuizButton } from "../../components/Button/StartQuizButton";
import { delay } from "../../utils";
import { useRouter } from "next/router";
import { Context } from "../../context/Context";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";

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
  const [quizLevel, setQuizLevel] = React.useState<string>("lett");
  //const [completedQuizzes, setCompletedQuizzes] = React.useState<number[]>([1]);
  const quizLevelTypes = [
    { number: 1, quizLevel: "lett", color: "#84D47D", title: "Lett" },
    {
      number: 2,
      quizLevel: "middels",
      color: "#D3D66B",
      title: "Middels",
    },
    { number: 3, quizLevel: "vanskelig", color: "#E283A0", title: "Vanskelig" },
  ];

  const {
    avatarName,
    sandDollarCount,
    setSandDollarCount,
    XP,
    setXP,
    unlockedQuizzes,
    setUnlockedQuizzes,
  } = useContext(Context);

  React.useEffect(() => {
    console.log(unlockedQuizzes);
  }, [unlockedQuizzes]);

  const questions =
    quizLevel == "lett"
      ? questions_easy
      : quizLevel == "middels"
      ? questions_medium
      : questions_hard;

  const startQuiz = async () => {
    setGameStarted(true);
    setQuestionVisible(true);
  };
  const dollars = quizLevel == "lett" ? 1 : quizLevel == "middels" ? 2 : 3;
  const xp = quizLevel == "lett" ? 20 : quizLevel == "middels" ? 25 : 30;

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!complete) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
        setSandDollarCount(sandDollarCount + dollars);
        logEvent(analytics, "earn_sand_dollars", {
          virtual_currency_name: "sand_dollars",
          value: dollars,
        });
        setXP(XP + xp);
        setCorrect(correct);
        setComplete(false);
      }
      if (!correct) {
        setXP(XP + 5);
      }

      const answerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        correct,
        info: questions[number].info,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      await delay(1500);

      setQuestionVisible(false);
      logEvent(analytics, "read_feedback_from_crab_quiz", {
        character_name: avatarName,
      });
      if (number == TOTAL_QUESTIONS - 1) setLastQuestion(true);
    }
  };

  const router = useRouter();

  const handleNext = async (quizLevel: string) => {
    setCorrect(undefined);
    if (number < TOTAL_QUESTIONS - 1) {
      setNumber((prev) => prev + 1);
    } else {
      setComplete(true);
      logEvent(analytics, "quiz_complete", {
        quiz_level: quizLevel,
        score: score,
      });
      if (score >= 3 && unlockedQuizzes[unlockedQuizzes.length - 1] <= 3) {
        setUnlockedQuizzes((prevArray: any[]) => [
          ...prevArray,
          prevArray[unlockedQuizzes.length - 1] + 1,
        ]);
      }
      await delay(2000);
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
          <p className={styles["quizdone"]}>
            Quizen er ferdig. Du fikk {score} riktige svar!
          </p>
          {(score >= 3 && quizLevel === "lett") || quizLevel === "middels" ? (
            <p className={styles["tryagain"]}>En ny quiz er låst opp!</p>
          ) : quizLevel === "hard" ? (
            <p className={styles["tryagain"]}>
              Prøv igjen for å tjene mer XP og sanddollar.
            </p>
          ) : (
            <p className={styles["tryagain"]}>
              Prøv igjen for å låse opp en ny quiz og tjene mer XP og
              sanddollar.
            </p>
          )}
        </div>
      )}

      {!gameStarted ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15vh",
            }}>
            {!complete && (
              <>
                {quizLevelTypes.map((el) => (
                  <>
                    {unlockedQuizzes.includes(el.number) ? (
                      <StartQuizButton
                        style={{ backgroundColor: el.color }}
                        onClick={() => {
                          startQuiz();
                          setQuizLevel(el.quizLevel);
                          logEvent(analytics, "quiz_begin", {
                            quiz_level: el.quizLevel,
                          });
                        }}
                        title={el.title}
                      />
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          backgroundColor: "#2DAFB8",
                          height: "16rem",
                          width: "16rem",
                          borderRadius: "50%",
                          marginLeft: "1.5rem",
                        }}>
                        <Image
                          alt="locked"
                          src="/images/lock.svg"
                          height={90}
                          width={90}></Image>
                      </div>
                    )}
                  </>
                ))}
              </>
            )}
          </div>
        </>
      ) : null}

      <>
        {!complete && visible ? (
          <QuestionCard
            level={quizLevel}
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
                onClick={() => handleNext(quizLevel)}
                isCorrect={correct}
                info={questions[number].info}
                lastQuestion={lastQuestion}
                dollars={dollars}
              />
            </>
          )
        )}
      </>
    </div>
  );
}
