import styles from "../../styles/Home.module.css";
import Image from "next/image";

type DivingIntroProps = {
  title: string;
  intro: string;
};

export const DivingIntro = ({ intro, title }: DivingIntroProps) => {
  return (
    <>
      <div className={styles["speakingBubble"]}>
        <p>{title}</p>
        <p>{intro}</p>
      </div>
      <Image
        alt="crab"
        src={"/images/crab.svg"}
        width={200}
        height={200}></Image>
    </>
  );
};
