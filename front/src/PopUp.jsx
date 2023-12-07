import React from 'react'
import './TierList.scss';

function PopUp({card,onClose}){
    return (
        
            
        <div className='PopUp'>
            <button className='close' onClick={onClose}>X</button>
            <img src={card.image} alt={card.name} />
            <h1>{card.name}</h1>
            <p>{card.description}</p>
        </div>
        
    )
}

export default PopUp;