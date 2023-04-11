import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import router from "next/router";
import { BigButton } from "../components/Button/BigButton";

const inter = Inter({ subsets: ["latin"] });

export default function PreTest() {
  return (
    <div
      className={`${styles.backgroundDiv}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ width: "80%", height: "100%" }}>
        <iframe
          style={{ height: "100%" }}
          className="nettskjema-iframe"
          src="https://nettskjema.no/a/334632?embed=1"
          title="Post-test coralQuest"
          frameBorder="0"
          width="100%"></iframe>
      </div>
    </div>
  );
}
