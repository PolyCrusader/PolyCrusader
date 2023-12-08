import './App.scss'
import "./assets/catpuccin.scss";
import { useState } from 'react';
import { useEffect } from 'react';


function CarteReponse ({ side, onNextMatch , content, logo, isInfoTrue}) {
    const [isCorrect, setIsCorrect] = useState(null);
    console.log(side);

    useEffect(() => {
        if (side === "left") {
            setIsCorrect(false);
        }
        else {
            setIsCorrect(true);
        }
    }, [side]);

  return (
    <>
        <h1> {isCorrect ? "Vous avez donné la bonne réponse" : "Vous avez donné la mauvaise réponse"} </h1>
        <div className="case-reponse" style={{backgroundColor: isInfoTrue ? "rgba(0,255,0,0.1)" : "rgba(255,0,0,0.1)"}}>
            <img src={logo} className="logo" alt="Vite logo" />
            <p className = "text-reponse">{content}</p>
        </div>
        <button className = "bouton" onClick={ () => onNextMatch() }> Next Match </button>
    </>
    )
}

export default CarteReponse;