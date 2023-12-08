import React from "react";
import "./LandingPageHome.scss";
import Mael from "./mael";

const LandingPageHome = () => {
  return (
    <div className="container">
      <Mael></Mael>
      <div className="textBox">
        Alors que le Giec a rendu en mars la synthèse de son dernier rapport qui
        dresse un constat sans ambiguïté sur la crise climatique, le journal 20
        Minutes revient en vidéos sur 5 des avertissements les plus marques
        faits ces dernières années par António Guterre, l’actuel secrétaire
        général de l’ONU.
      </div>
    </div>
  );
};

export default LandingPageHome;
