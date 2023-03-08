import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useContext } from "react";
import "animate.css";
import React from "react";
import { Context } from "../components/context/Context";

const Game = () => {
  let { myCorals } = useContext(Context);

  const coralCatalog = [
    {
      name: "seagrass2",
      price: 2,
      width: "20vw",
      height: "90vh",
      top: "10vh",
      right: "55vw",
    },
    {
      name: "purple",
      price: 3,
      width: "15vw",
      height: "20vh",
      top: "80vh",
      right: "30vw",
    },
    {
      name: "orange",
      price: 8,
      width: "35vw",
      height: "35vh",
      top: "65vh",
      right: "8vw",
    },
    {
      name: "purpleTentacles",
      price: 4,
      width: "50vw",
      height: "70vh",
      top: "37vh",
      right: "-10vw",
    },
    {
      name: "Paleyellow",
      price: 1,
      width: "20vw",
      height: "20vh",
      top: "80vh",
      right: "5vw",
    },
    {
      name: "pink",
      price: 3,
      width: "30vw",
      height: "30vh",
      top: "70vh",
      right: "50vw",
    },
    {
      name: "blue",
      price: 2,
      width: "12vw",
      height: "12vw",
      top: "82vh",
      right: "47vw",
    },
    {
      name: "seagrass1",
      price: 9,
      width: "20vw",
      height: "70vh",
      top: "35vh",
      right: "64vw",
    },
    {
      name: "seagrass1",
      price: 7,
      width: "20vw",
      height: "70vh",
      top: "35vh",
      right: "64vw",
    },
  ];
  return (
    <div className={styles["backgroundDiv"]}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Navbar></Navbar>
        <div>
          <div
            style={{
              height: "100%",
              position: "relative",
              width: "80vw",
              overflowX: "hidden",
              overflowY: "hidden",
            }}>
            <div style={{ position: "absolute", top: "3vh", right: "3vw" }}>
              <SandDollar></SandDollar>
            </div>

            {myCorals.length === 0 && (
              <div>
                <div className={styles["speakingBubbleHome"]}>
                  <p>Heihei, jeg heter Krabbe!</p>
                  <p>
                    Velkommen til Coral Quests. Her kan du gjennom flere
                    forskjellige aktiviteter lære om og teste kunnskapen din om
                    koraller og korallrev.
                  </p>
                  <p>
                    Svar riktig på spørsmålene i quizzen, og noter
                    observasjonene dine på dykketur for å tjene sanddollar og
                    poeng. Med sandollarene kan du kjøpe koraller for å gjøre
                    denne bleke havbunnen fin igjen!
                  </p>
                </div>
                <Image
                  className={"animate__animated animate__jackInTheBox"}
                  alt="crab"
                  src={`/images/crab.svg`}
                  width={300}
                  height={300}
                  style={{
                    position: "absolute",
                    bottom: "5vh",
                    right: "15vw",
                  }}
                />
              </div>
            )}

            {coralCatalog.map((coral) => {
              if (myCorals.includes(coral.name)) {
                return (
                  <div key={coral.name}>
                    <Image
                      className={`animate__animated animate__jello ${styles.coral}`}
                      src={`/images/corals/view/${coral.name}.svg`}
                      alt={`picture of ${coral.name} coral`}
                      key={coral.name}
                      width={100}
                      height={100}
                      style={{
                        position: "absolute",
                        top: coral.top,
                        right: coral.right,
                        height: coral.height,
                        width: coral.width,
                      }}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

{
  /* 
{introCrab ? ( 
            <div>
              <div className={styles["speakingBubbleHome"]}>
                <p>Heihei, jeg heter Krabbe!</p>
                <p>
                  Velkommen til Coral Quests. Her kan du gjennom flere
                  forskjellige aktiviteter lære om og teste kunnskapen din omm
                  koraller og korallrev.
                </p>
                <p>
                  {" "}
                  Svar riktig på spørsmålene i quizzen, og noter observasjonene
                  dine på dykketur for å tjene sanddollar og poeng. Med
                  sandollarene kan du kjøpe koraller for å gjøre denne bleke
                  havbunnen fin igjen!
                </p>
              </div>
              <Image
                className={"animate__animated animate__jackInTheBox"}
                alt="crab"
                src={`/images/crab.svg`}
                width={300}
                height={300}
                style={{
                  position: "absolute",
                  bottom: "5vh",
                  right: "15vw",
                }}></Image>
            </div>) */
}
