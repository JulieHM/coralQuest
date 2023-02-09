import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useContext } from "react";
import { context } from "./_app";

const Game = () => {
  let { myCorals } = useContext(context);
  const coralCatalog = [
    { name: "seagrass2", price: 2 },
    { name: "purple", price: 3 },
    { name: "orange", price: 8 },
    { name: "purpleTentacles", price: 4 },
    { name: "Paleyellow", price: 1 },
    { name: "pink", price: 3 },
    { name: "seagrass1", price: 2 },
    { name: "seagrass1", price: 9 },
    { name: "seagrass1", price: 7 },
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "90vh",
            }}>
            {coralCatalog.map((coral) => {
              {
                console.log(myCorals);
              }
              if (myCorals.includes(coral.name)) {
                return (
                  <Image
                    id="purple"
                    src={`/images/corals/view/${coral.name}.svg`}
                    alt={"coral with purple tentacles"}
                    width={400}
                    height={600}
                    key={coral.name}
                  />
                );
              }
            })}
            {/* <Image
              id="purple"
              src={`/images/corals/view/${purpleTentacles}.svg`}
              alt={"coral with purple tentacles"}
              width={400}
              height={600}></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
