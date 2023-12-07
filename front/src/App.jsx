import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import LandingPageHome from "./LandingPageHome";
import HeaderHome from "./HeaderHome.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HeaderHome></HeaderHome>
        <LandingPageHome></LandingPageHome>
      </div>
    </>
  );
}

export default App;
