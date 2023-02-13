import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useContext } from "react";
import { context } from "./_app";

const Game = () => {
  let { myCorals } = useContext(context);
  const coralCatalog = [
    {
      name: "seagrass2",
      price: 2,
      width: "20vw",
      height: "90vh",
      top: "4vh",
      right: "55vw",
    },
    {
      name: "purple",
      price: 3,
      width: "15vw",
      height: "20vh",
      top: "74vh",
      right: "30vw",
    },
    {
      name: "orange",
      price: 8,
      width: "35vw",
      height: "35vh",
      top: "60vh",
      right: "8vw",
    },
    {
      name: "purpleTentacles",
      price: 4,
      width: "50vw",
      height: "70vh",
      top: "32vh",
      right: "-10vw",
    },
    {
      name: "Paleyellow",
      price: 1,
      width: "20vw",
      height: "20vh",
      top: "75vh",
      right: "5vw",
    },
    {
      name: "pink",
      price: 3,
      width: "30vw",
      height: "30vh",
      top: "64vh",
      right: "50vw",
    },
    {
      name: "blue",
      price: 2,
      width: "12vw",
      height: "12vw",
      top: "73vh",
      right: "47vw",
    },
    {
      name: "seagrass1",
      price: 9,
      width: "20vw",
      height: "70vh",
      top: "25vh",
      right: "64vw",
    },
    {
      name: "seagrass1",
      price: 7,
      width: "20vw",
      height: "70vh",
      top: "25vh",
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
        <div style={{ margin: "1.5rem" }}>
          <div>
            <SandDollar></SandDollar>
          </div>
          <div
            style={{
              //display: "flex",
              //flexDirection: "row",
              //justifyContent: "flex-end",
              //alignItems: "flex-end",
              height: "100vh",
              position: "relative",
              width: "80vw",
              minWidth: "80vw",
              maxWidth: "80vw",
              overflow: "hidden",
            }}>
            {coralCatalog.map((coral) => {
              if (myCorals.includes(coral.name)) {
                return (
                  <Image
                    id="purple"
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
