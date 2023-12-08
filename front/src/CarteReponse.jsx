import viteLogo from '/vite.svg'
import './App.scss'
import "./assets/catpuccin.scss";
import { useState } from 'react';
import { useEffect } from 'react';


function CarteReponse ({ side, onNextMatch }, content, logo, isInfoTru) {
    const [isCorrect, setIsCorrect] = useState(null);
    console.log(side);

    content =" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget sagittis quam. Nam in lacus ut massa rutrum ultricies. Suspendisse porta pulvinar dolor eget porta. Mauris egestas semper urna, sit amet convallis elit blandit aliquet. Donec facilisis, sapien sed sollicitudin feugiat, leo tortor egestas erat, vestibulum imperdiet metus odio et ipsum. Sed dolor sem, mattis vehicula augue id, blandit suscipit tellus. Integer fermentum at mi id luctus. Nullam aliquet porta quam a bibendum. Sed dapibus elementum posuere. Pellentesque euismod scelerisque eros gravida dictum.";
    logo = viteLogo;
    isInfoTrue = true;

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