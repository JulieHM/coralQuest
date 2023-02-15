import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";

type Props = {
  animate: string;
};

const QuizCrab: React.FC<Props> = ({ animate }) => {
  return (
    <Image
      src="/images/crab.svg"
      width={400}
      height={400}
      alt="crab the crab"
      className={styles["crab"] + " " + styles[animate]}></Image>
  );
};

export default QuizCrab;
