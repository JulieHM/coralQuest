import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
        style={{
          width: "80%",
          height: "90%",
          margin: "10px",
        }}
        className="nettskjema-iframe"
        frameBorder="0"
        src="https://nettskjema.no/a/328683?embed=1"
        title="Pre-test coralQuest"></iframe>

      <Link href="/avatar">
        <button type="submit" className={styles["button"]}>
          Gå videre
        </button>
      </Link>
    </div>
  );
}
