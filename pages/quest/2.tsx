import { useContext } from "react";
import Header from "../../components/Navbar/Header";
import React from "react";
import { divingContent } from "../api/diving";
import { DivingIntro } from "../../components/Diving/DivingIntro";
import { DivingMap } from "../../components/Diving/DivingMap";
import styles from "../../styles/Home.module.css";
import { Context } from "../../context/Context";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";

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
    if (item) {
      setSandDollarCount(sandDollarCount + 4);
      setXP(XP + 10);
    }
    if (number == 1) {
      logEvent(analytics, "dive_begin");
    }
    if (divingContent[number].type == "intro" && number > 1) {
      logEvent(analytics, "read_feedback_from_crab_dive");
    }
    if (divingContent[number].type == "map") {
      logEvent(analytics, "diving_map");
    }
    if (number == 8) {
      logEvent(analytics, "dive_complete");
    }
  };

  const handleBack = () => {
    setNumber(number - 1);
    logEvent(analytics, "dive_go_back");
  };

  const handleSaveItem = () => {
    if (divingContent[number].type == "map" && item) {
      const title = divingContent[number].title;
      setDivingText([...divingText, { title: title, content: item }]);
    }

    console.log(item);
    setItem("");
  };

  console.log(number);
  const isLastQuestion = number == divingContent.length - 1 ? true : false;

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
              number={number}
              handleBack={handleBack}
              handleNext={handleNext}
              handleSaveItem={handleSaveItem}
              isLastQuestion={isLastQuestion}
            />
          ) : (
            <DivingMap
              title={divingContent[number].title}
              body={divingContent[number].body}
              src={divingContent[number].iframe}
              item={item}
              setItem={setItem}
              onSave={handleSaveItem}
              question={divingContent[number].question}
              number={number}
              handleBack={handleBack}
              handleNext={handleNext}
              handleSaveItem={handleSaveItem}
              isLastQuestion={isLastQuestion}></DivingMap>
          )}
        </div>
      </div>
    </>
  );
}
