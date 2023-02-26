import Link from "next/link";
import { useContext } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Navbar/Header";
import { context } from "../_app";

export default function Quest2() {
  const {
    sandDollarCount,
    setSandDollarCount,
    setTotalSandDollars,
    totalSandDollars,
  } = useContext(context);
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #b4ecf0 0%, #5cb3b9 100%)",
        height: "100vh",
      }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
        }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1674137227202!6m8!1m7!1sCAoSLEFGMVFpcE03d3BPeGpBczRGa0xjSUdzUEhBTWs5LUI3aUw3am9QUFFlcVhu!2m2!1d-13.9717939!2d144.5020591!3f296.74272333134803!4f-1.5582225909680574!5f0.7820865974627469"
          width="800"
          height="500"
          style={{ borderRadius: 10, border: "30px solid black" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <br></br>
        <textarea
          style={{ borderRadius: 10, width: 850, height: 200 }}
          placeholder="Noter dine observasjoner her for 5 sanddollar!"
        />
        <Link href={"/game"}>
          <button
            className={styles["button"]}
            onClick={() => {
              setSandDollarCount(sandDollarCount + 5);
              setTotalSandDollars(totalSandDollars + 5);
            }}>
            Fullfør oppdraget
          </button>
        </Link>
      </div>
    </div>
  );
}

//key: AIzaSyARFCFA9CHseihsYaSxfkqritAwj3zIJM4

//TODO etterhvert: sett input til å være required
//TODO: lagre tekststrengen til firebase
//TODO: CSS lage dykkerbriller view
//TODO: lag tilbake knapp
