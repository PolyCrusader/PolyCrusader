import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.scss";

const HeaderHome = () => {
  return (
    <div className="headerBox">
      <p className="Titre">La nuit de l'info 2023</p>
      <button className="button" type="button">
        <Link to="/">Accueil</Link>
      </button>
      <button className="button" type="button">
        <Link to="/tinder">Tinder</Link>
      </button>
      <button className="button" type="button">
        <Link to="/tierlist">Tierlist</Link>
      </button>
    </div>
  );
};

export default HeaderHome;
