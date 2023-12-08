import React from "react";
import "./Footer.scss";
import "./HeaderStyle.scss";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footerBox">
          <text className="Titre">La nuit de l'info 2023</text>
          
          <button className="button" type="button">
            <a
              href="https://polycrusader.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PolyCrusader
            </a>
          </button>
        </footer>
      </div>
    </>
  );
};

export default Footer;
