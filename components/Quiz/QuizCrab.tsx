import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";

type Props = {
  info?: string;
};

const QuizCrab: React.FC<Props> = ({ info }) => {
  return (
    <Image
      src="/images/crab.svg"
      width={400}
      height={400}
      alt="crab the crab"
      className={styles["crab"]}></Image>
  );
};

export default QuizCrab;
