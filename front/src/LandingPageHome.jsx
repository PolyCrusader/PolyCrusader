import React from "react";
import "./LandingPageHome.scss";
import Mael from "./mael";

const LandingPageHome = () => {
  return (
    <div className="container">
      <Mael></Mael>
      <div className="textBox">
          Le changement climatique est indéniable, nous affecte tous, et nous affectera de plus en plus si nous ne commençons pas à agir dès à présent. Les solutions sont multiples, et les problèmes également, mais nous pouvons changer les choses grâce à une compréhension individuelle des enjeux et la puissance de la collectivité.
      </div>
    </div>
  );
};

export default LandingPageHome;
