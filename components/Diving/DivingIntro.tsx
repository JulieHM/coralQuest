import styles from "../../styles/Home.module.css";

type DivingIntroProps = {
  title: string;
  intro: string;
};

export const DivingIntro = ({ intro, title }: DivingIntroProps) => {
  return (
    <div className={styles["speakingBubble"]}>
      <p>{title}</p>
      <p>{intro}</p>
    </div>
  );
};