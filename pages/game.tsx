import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useContext, useEffect } from "react";
import "animate.css";
import React from "react";
import { Context } from "../context/Context";
import { convertToObject } from "typescript";

const Game = () => {
  let { myCorals, avatarName } = useContext(Context);
  const [animateIn, setAnimateIn] = React.useState(false);

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
      name: "paleYellow",
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
      name: "greenYellow",
      price: 9,
      width: "20vw",
      height: "70vh",
      top: "45vh",
      right: "35vw",
    },
    {
      name: "seagrass1",
      price: 7,
      width: "20vw",
      height: "70vh",
      top: "35vh",
      right: "60vw",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimateIn(true);
    }, 0);
    //clearTimeout(timeoutId);
    setTimeout(() => {
      setAnimateIn(false);
    }, 7000);
  }, []);

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className={styles["backgroundDiv"]}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Navbar></Navbar>
          <div>
            <div>
              <div style={{ position: "absolute", top: "3rem", right: "3rem" }}>
                <SandDollar></SandDollar>
              </div>

              {myCorals.length === 0 && (
                <div>
                  <div
                    className={`${styles["agentSpeechBubble"]} ${styles["pil_høyre"]}`}>
                    <p>
                      Hei <b>{avatarName}</b>, jeg heter Krabbe!
                    </p>
                    <p>
                      Velkommen til CoralQuest. Her kan du gjennom ulike
                      aktiviteter lære om og teste kunnskapen din om korallrev
                      og bærekraft.
                    </p>
                    <p>
                      Ta quiz og dra på dykketur for å tjene sanddollar og XP.
                      Med sandollarene kan du kjøpe koraller for å gjøre denne
                      bleke havbunnen fin igjen!
                    </p>
                    <p>Husk å sjekke ut ledertavlen. Lykke til!</p>
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
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  marginLeft: "0rem",
                }}>
                <>
                  <Image
                    src={"images/fish.svg"}
                    width={100}
                    height={100}
                    className={`${styles.fish1} ${
                      animateIn
                        ? "animate__animated animate__bounceInLeft animate__slower"
                        : "animate__animated animate__bounceOutRight animate__slower"
                    }`}
                    alt={""}></Image>

                  <Image
                    src={"images/fish.svg"}
                    width={100}
                    height={100}
                    className={`${styles.fish2} ${
                      animateIn
                        ? "animate__animated animate__bounceInLeft animate__slower"
                        : "animate__animated animate__bounceOutRight animate__slower"
                    }`}
                    alt={""}></Image>
                </>

                {coralCatalog.map((coral) => {
                  if (myCorals.includes(coral.name)) {
                    return (
                      <div key={coral.name}>
                        <Image
                          className={`animate__animated animate__jello ${styles.coral} `}
                          src={`/images/corals/view/${coral.name}.svg`}
                          alt={`picture of ${coral.name} coral`}
                          key={coral.name}
                          width={100}
                          height={100}
                          style={{
                            position: "absolute",
                            top: coral.top,
                            //backgroundPosition: coral.right, coral.top,
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
      </div>
    </>
  );
};

export default Game;
