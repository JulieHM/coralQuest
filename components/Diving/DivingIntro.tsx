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
    <div
      style={{
        height: "100%",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div
          style={{
            width: "40rem",
          }}
          className={`${styles["agentSpeechBubbleDiving"]} ${styles["pil_venstre"]}`}>
          <p>{title}</p>
          <div dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>

        <Image
          className={`animate__animated animate__jackInTheBox ${styles.crab}`}
          alt="crab"
          src={`/images/${crabType}.svg`}
          width={250}
          height={250}></Image>
      </div>
    </div>
  );
};
