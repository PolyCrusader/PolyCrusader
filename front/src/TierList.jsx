import React, { useEffect } from 'react';
import { useState } from 'react';
import './TierList.scss';
import PopUp from './PopUp';

function TierList() {
  const [stockage, setStockage] = useState([]);
  const [S, setS] = useState([]);
  const [A, setA] = useState([]);
  const [B, setB] = useState([]);
  const [C, setC] = useState([]);
  const [D, setD] = useState([]);
  const [draggedCard, setDraggedCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  class Card {
    constructor(name, image,tier,id) {
      this.name = name;
      this.image = image;
      this.tier =tier;
      this.id = id;
      this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.";
    }
  }

  useEffect(() => {
    const newStockage = [];
    for (let i = 0; i < 10; i++) {
      let card = new Card("card " + i, "https://picsum.photos/200","StockageCard",i);
      newStockage.push(card);
    }
    setStockage(newStockage);
  }, []);

  function handleDrop(e, tier) {
    e.preventDefault();
    
    
    const card = draggedCard || stockage[0];
    
    const oldTier = card.tier;
    console.log(oldTier);
    
    if (oldTier !== 'StockageCard') {
        switch (oldTier) {
          case 'S':
            console.log(card.name);
            
            setS((S) => S.filter((c) => c.name !== card.name));
            break;
          case 'A':
            setA((A) => A.filter((c) => c.name !== card.name));
            break;
          case 'B':
            setB((B) => B.filter((c) => c.name !== card.name));
            break;
          case 'C':
            setC((C) => C.filter((c) => c.name !== card.name));
            break;
          case 'D':
            setD((D) => D.filter((c) => c.name !== card.name));
            break;
          default:
            break;
        }
      }
      else{
        setStockage((stockage) => stockage.filter((c) => c.name !== card.name));
      }
    
    card.tier = tier;
    switch (tier) {
        case 'S':
            setS(S => [...S, card]);
            console.log(card.tier);
            break;
        case 'A':
            setA(A => [...A, card]);
            console.log(card.tier);
            break;
        case 'B':
            setB(B => [...B, card]);
            console.log(card.tier);
            break;
        case 'C':
            setC(C => [...C, card]);
            console.log(card.tier);
            break;
        case 'D':
            setD(D => [...D, card]);
            console.log(card.tier);
            break;
        case 'StockageCard':
            setStockage(stockage => [...stockage,card]);
            console.log(card.tier);
        default:
            break;
    }

    console.log(S);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragStart(card) {
    setDraggedCard(card);
  }

 
  function onClose(){
    setSelectedCard(null);
  }
  

  return (
    <div>
      <h1>TierList</h1>
      {selectedCard && <PopUp card={selectedCard} onClose={onClose}/>}
      <div className="TierList">
        <div className="S" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'S')}>
        <div className='Tier'><h2>S</h2></div>
          {S.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="A" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'A')}>
          <div className='Tier'><h2>A</h2></div>
          {A.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="B" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'B')}>
        <div className='Tier'><h2>B</h2></div>
          {B.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="C" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'C')}>
        <div className='Tier'><h2>C</h2></div>
          {C.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="D" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'D')}>
        <div className='Tier'><h2>D</h2></div>
          {D.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>

        <div className="StockageCard" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'StockageCard')} >
          {stockage.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)} >
              <img src={card.image} alt={card.name}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TierList;
