import { useContext } from "react";
import Header from "../../components/Navbar/Header";
import React from "react";
import { divingContent } from "../api/diving";
import { DivingIntro } from "../../components/Diving/DivingIntro";
import Link from "next/link";
import { DivingMap } from "../../components/Diving/DivingMap";
import styles from "../../styles/Home.module.css";
import buttonStyles from "../../components/Button/Button.module.css";
import { Context } from "../../context/Context";

//dykketur
export default function Quest2() {
  const { sandDollarCount, setSandDollarCount, setXP, XP } =
    useContext(Context);
  const [number, setNumber] = React.useState<number>(0);

  const handleNext = () => {
    setNumber(number + 1);
    //sette en if setning her så man bare får poeng for å skrive noe
    setSandDollarCount(sandDollarCount + 4);
    setXP(XP + 10);
  };
  const handleBack = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <Header />

      <div
        className={
          divingContent[number].crab_type == "crabSad"
            ? styles["divingContainerBleach"]
            : styles["divingQuestContainer"]
        }>
        {divingContent[number].type == "intro" ? (
          <DivingIntro
            title={divingContent[number].title}
            intro={divingContent[number].body}
            crabType={divingContent[number].crab_type}
          />
        ) : (
          <DivingMap
            title={divingContent[number].title}
            body={divingContent[number].body}
            src={divingContent[number].iframe}
            question={divingContent[number].question}></DivingMap>
        )}

        <div className={styles["buttonContainer"]}>
          {number == 0 ? (
            ""
          ) : (
            <button
              className={buttonStyles["nextQuestionButton"]}
              onClick={handleBack}>
              Forrige
            </button>
          )}

          {number == divingContent.length - 1 ? (
            <Link href={"/game"}>
              <button className={buttonStyles["nextQuestionButton"]}>
                Fullfør dykketur
              </button>
            </Link>
          ) : (
            <button
              form="myForm"
              type="submit"
              className={buttonStyles["nextQuestionButton"]}
              onClick={handleNext}>
              {number == 0 ? "Start dykketur" : "Neste"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

//key: AIzaSyARFCFA9CHseihsYaSxfkqritAwj3zIJM4

//TODO etterhvert: sett input til å være required
//TODO: lagre tekststrengen til firebase
