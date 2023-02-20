import Link from "next/link";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";

type Props = {};

const About = () => {
  return (
    <div className={`${styles.backgroundDiv} ${styles.about}`}>
      <h1>Om prosjektet</h1>
      <p>
        Coral Quest er en applikasjon utviklet som en del av et
        forskningsprosjekt av Karen Dahl Aarhus og Julie Holte Motland i
        forbindelse med vår masteroppgave i Informatikk ved NTNU i Trondheim. Vi
        ønsker å undersøke om, og hvordan, spillifisering (eng: gamification)
        kan bidra til å gjøre læring om miljøet mer motiverende, interessant og
        gøy for elever i ungdomsskolealder. I Coral Quest vil elevene kunne
        gjøre en rekke oppdrag (quests) for å lære mer om koraller og miljøet.
        <br></br>
        <br></br>Gjerne ta kontakt om dere har noen spørsmål knyttet til
        prosjektet, applikasjonen eller annet.
        <br></br>
        <br></br>
        Kontakt:
        <br></br>karendaa@ntnu.no
      </p>
      <br></br>

      <Link href={"/login"}>
        <button className={styles["button"]} style={{ width: "10rem" }}>
          Gå til inlogging
        </button>
      </Link>
    </div>
  );
};

export default About;
