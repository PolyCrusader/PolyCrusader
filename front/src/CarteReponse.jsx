import viteLogo from '/vite.svg'
import './App.scss'
import "./assets/catpuccin.scss";
import { useState } from 'react';
import { useEffect } from 'react';


function CarteReponse ({ side, onNextMatch }) {
    const [isCorrect, setIsCorrect] = useState(null);
    console.log(side);

    useEffect(() => {
        if (side.side === "left") {
            setIsCorrect(false);
        }
        else {
            setIsCorrect(true);
        }
    }, [side.side]);

  return (
    <>
    <h1> {side.side} </h1>
    <div className="case-reponse" >
        <img src={viteLogo} className="logo" alt="Vite logo" />
      <p className = "text-reponse"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget sagittis quam. Nam in lacus ut massa rutrum ultricies. 
        Suspendisse porta pulvinar dolor eget porta. Mauris egestas semper urna, sit amet convallis elit blandit aliquet. Donec facilisis, sapien sed sollicitudin feugiat, leo tortor egestas erat, vestibulum imperdiet metus odio et ipsum. 
        Sed dolor sem, mattis vehicula augue id, blandit suscipit tellus. Integer fermentum at mi id luctus. Nullam aliquet porta quam a bibendum. Sed dapibus elementum posuere. Pellentesque euismod scelerisque eros gravida dictum. </p>
    </div>
    <button className = "bouton" onClick={ () => onNextMatch() }> Next Match </button>
    </>
    )
}

export default CarteReponse;