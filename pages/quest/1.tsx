import React from "react";
import QuestionCard from "../../components/Quiz/QuestionCard";
import PedagogicalAgent from "../../components/Quiz/PedagogicalAgent";
import Header from "../../components/Navbar/Header";
import { StartQuizButton } from "../../components/Button/StartQuizButton";
import { questions } from "../api/questions";
import styles from "../../components/Quiz/Quiz.module.css";

const TOTAL_QUESTIONS = 3;

export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
  info: string;
};

export default function Quest1() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [number, setNumber] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(true);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [complete, setComplete] = React.useState<boolean>(false);
  const [correct, setCorrect] = React.useState<boolean>();
  const [visible, setQuestionVisible] = React.useState<boolean>(false);
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [lastQuestion, setLastQuestion] = React.useState<boolean>(false);

  const startQuiz = async () => {
    setGameStarted(true);
    setComplete(false);
    setGameOver(false);
    setQuestionVisible(true);
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
        info: questions[number].info,
      };
      setCorrect(correct);
      setQuestionVisible(false);
      setUserAnswers((prev) => [...prev, answerObject]);
      if (number == TOTAL_QUESTIONS - 1) setLastQuestion(true);
    }
  };

  const handleNext = () => {
    console.log(number);
    setCorrect(undefined);
    setQuestionVisible(true);
    if (number < TOTAL_QUESTIONS - 1) setNumber((prev) => prev + 1);
    else setComplete(true);
    console.log(number);
  };

  console.log(complete);
  return (
    <div className={styles.quizWrapper}>
      <Header
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        gameStarted={gameStarted}
      />
      {complete && <div className="complete">Quiz is complete</div>}

      {gameOver || complete ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <StartQuizButton onClick={startQuiz} title="Start quiz" />
        </div>
      ) : null}

      <>
        {!loading && !gameOver && !complete && visible ? (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : (
          !visible &&
          !gameOver &&
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
