import styles from "../../styles/Home.module.css";
import Image from "next/image";
import "animate.css";

type DivingIntroProps = {
  title: string;
  intro: string;
  crabType?: string | undefined;
};

export const DivingIntro = ({ intro, title, crabType }: DivingIntroProps) => {
  const formattedText = intro.replace(/\*\*(.*?)\*\*/g, `<b>$1</b>`);

  return (
    <>
      <div
        className={`animate__animated animate__fadeIn ${styles.speakingBubble}`}>
        <p>{title}</p>
        <div dangerouslySetInnerHTML={{ __html: formattedText }} />
      </div>
      <Image
        className={`animate__animated animate__jackInTheBox ${styles.crab}`}
        alt="crab"
        src={`/images/${crabType}.svg`}
        width={200}
        height={200}></Image>
    </>
  );
};
