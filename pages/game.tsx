import { Navbar } from "../components/Navbar/Navbar";
import { SandDollar } from "../components/SandDollar/SandDollar";
import styles from "../styles/Home.module.css";

const Game = () => {
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
          <SandDollar></SandDollar>
        </div>
      </div>
    </div>
  );
};

export default Game;
