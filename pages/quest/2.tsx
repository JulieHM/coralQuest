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
  const {
    sandDollarCount,
    setSandDollarCount,
    setTotalSandDollars,
    totalSandDollars,
  } = useContext(Context);
  const [number, setNumber] = React.useState<number>(0);

  return (
    <>
      <Header />
      <div className={styles["divingQuestContainer"]}>
        {divingContent[number].type == "intro" ? (
          <DivingIntro
            title={divingContent[number].title}
            intro={divingContent[number].body}
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
              onClick={() => setNumber(number - 1)}>
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
              className={buttonStyles["nextQuestionButton"]}
              onClick={() => setNumber(number + 1)}>
              {number == 0 ? "Start dykketur" : "Neste"}
            </button>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 20,
            }}></div>
        </div>
      </div>
    </>
  );
}
