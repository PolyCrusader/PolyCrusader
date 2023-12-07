import React from "react";
import "./HeaderStyle.scss";

const HeaderHome = () => {
  return (
    <div className="headerBox">
      <p className="Titre">La nuit de l'info 2023</p>
      <button className="button" type="button">
        Accueil
      </button>
      <button className="button" type="button">
        Accueil
      </button>
      <button className="button" type="button">
        Quizz
      </button>
      <button className="button" type="button">
        Tierlist
      </button>
    </div>
  );
};

export default HeaderHome;
