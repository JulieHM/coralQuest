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
    setXP,
    XP,
    divingText,
    setDivingText,
  } = useContext(Context);
  const [number, setNumber] = React.useState<number>(0);
  const [item, setItem] = React.useState("");

  const handleNext = () => {
    handleSaveItem();
    setNumber(number + 1);
    setSandDollarCount(sandDollarCount + 4);
    if (item) {
      setXP(XP + 10);
    }
  };
  const handleBack = () => {
    setNumber(number - 1);
  };

  const handleSaveItem = () => {
    if (divingContent[number].type == "map" && item) {
      const title = divingContent[number].title;
      setDivingText([...divingText, { title: title, content: item }]);
    }
    console.log(item);
    setItem("");
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
        <div>
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
              item={item}
              setItem={setItem}
              onSave={handleSaveItem}
              question={divingContent[number].question}></DivingMap>
          )}

          <div className={styles["buttonContainer"]}>
            {number == 0 ? (
              ""
            ) : (
              <button
                className={buttonStyles["nextDivingButton"]}
                onClick={handleBack}>
                Forrige
              </button>
            )}

            {number == divingContent.length - 1 ? (
              <Link href={"/game"}>
                <button
                  className={buttonStyles["nextDivingButton"]}
                  onClick={handleSaveItem}>
                  Fullfør dykketur
                </button>
              </Link>
            ) : (
              <button
                className={buttonStyles["nextDivingButton"]}
                onClick={handleNext}>
                {number == 0 ? "Start dykketur" : "Neste"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
