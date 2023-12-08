import './App.scss'
import "./assets/catpuccin.scss";
import { useState } from 'react';
import { useEffect } from 'react';


function CarteReponse ({ side, onNextMatch , content, logo, isInfoTrue, sourceUrl}) {
    const [PlayerAnswer, setPlayerAnswer] = useState(null);
    const [SourceUrl, setSourceUrl] = useState(null);

    useEffect(() => {
        side === "left" ? setPlayerAnswer("false") : setPlayerAnswer("true");
    },[side]);

    const isCorrect = (PlayerAnswer === isInfoTrue);
    console.log(sourceUrl);

    useEffect(() => {
        sourceUrl == "o" ? setSourceUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ") : setSourceUrl(sourceUrl);
    },[sourceUrl]);
  return (
    <>
        <h1> {isCorrect ? "Vous avez donné la bonne réponse" : "Vous avez donné la mauvaise réponse"} </h1>
        <div className="case-reponse" style={{backgroundColor: isCorrect ? "rgba(0,255,0,0.1)" : "rgba(255,0,0,0.1)"}}>
            <img src={logo} className="logo" alt="Vite logo" />
            <p className = "text-reponse" > {content} <a href={SourceUrl}>Source</a></p>
        </div>
        <button className = "bouton" onClick={ () => onNextMatch() }> Next Match </button>
    </>
    )
}

export default CarteReponse;