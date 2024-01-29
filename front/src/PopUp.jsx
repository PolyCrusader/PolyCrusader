import React from 'react'
import './TierList.scss';

function PopUp({card,onClose,id}){
    let name;
    if(id === 1){
        name = 'PopUp1'
    }
    else{
        name='PopUp2';
    }
    return (
        <div className={name}>
            <button className='close' onClick={onClose}>X</button>
            <img src={card.image} alt={card.name}/>
            <h3>{card.action}</h3>
            <p>{card.description}</p>
        </div>
    )
}

export default PopUp;