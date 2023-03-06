import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useContext, useEffect } from "react";
import "animate.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import React from "react";
import { child, get, getDatabase, ref } from "firebase/database";
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
