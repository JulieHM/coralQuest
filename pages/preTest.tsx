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
      <iframe
        style={{ height: "90%", width: "80%" }}
        className="nettskjema-iframe"
        src="https://nettskjema.no/a/328683?embed=1"
        title="Pre-test coralQuest"
        frameBorder="0"
        width="100%"></iframe>

      <Link href="/avatar">
        <button type="submit" className={styles["button"]}>
          Gå videre
        </button>
      </Link>
    </div>
  );
}
