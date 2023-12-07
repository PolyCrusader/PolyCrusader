import React, { useEffect } from 'react';
import { useState } from 'react';
import './TierList.scss';

function TierList() {
  const [stockage, setStockage] = useState([]);
  const [S, setS] = useState([]);
  const [A, setA] = useState([]);
  const [B, setB] = useState([]);
  const [C, setC] = useState([]);
  const [D, setD] = useState([]);

  class Card {
    constructor(name, image,tier) {
      this.name = name;
      this.image = image;
      this.tier =tier;
    }
  }

  useEffect(() => {
    const newStockage = [];
    for (let i = 0; i < 10; i++) {
      let card = new Card("card " + i, "https://picsum.photos/200","StockageCard");
      newStockage.push(card);
    }
    setStockage(newStockage);
  }, []);

  function handleDrop(e, tier) {
    e.preventDefault();
    
    const card = stockage[0];

    const oldTier = card.tier;
    
    if (oldTier !== 'StockageCard') {
        switch (oldTier) {
          case 'S':
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


  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>TierList</h1>
      <div className="TierList">
        <div className="S" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'S')}>
          <h2>S</h2>
          {S.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="A" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'A')}>
          <h2>A</h2>
          {A.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="B" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'B')}>
          <h2>B</h2>
          {B.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="C" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'C')}>
          <h2>C</h2>
          {C.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="D" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'D')}>
          <h2>D</h2>
          {D.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>

        <div className="StockageCard" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'StockageCard')}>
          {stockage.map((card) => (
            <div className="Card" key={card.name}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TierList;
