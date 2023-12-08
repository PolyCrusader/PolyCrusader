import React, { useEffect } from 'react';
import PopUp from './PopUp';
import { useState } from 'react';

import tierD from './assets/TierList/tierD.png';
import tierC from './assets/TierList/tierC.png';
import tierB from './assets/TierList/tierB.png';
import tierA from './assets/TierList/tierA.png';
import tierS from './assets/TierList/tierS.png';

function TierListFinish() {

    const [S, setS] = useState([]);
    const [A, setA] = useState([]);
    const [B, setB] = useState([]);
    const [C, setC] = useState([]);
    const [D, setD] = useState([]);

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
          let card = new Card("card " + i, "https://picsum.photos/200","Action1",i);
          newStockage.push(card);
        }
        setA(newStockage);
      }, []);

      function onClose(){
        setSelectedCard(null);
      }

  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div>
    <h1>TierList Finished</h1>
      {selectedCard && <PopUp card={selectedCard} onClose={onClose} id={2}/>}
      <div className="TierList">
        <div className="S" >
        <div className='Tier'>
          <img src={tierS} alt='tierS' />
        </div>
          {S.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="A" >
          <div className='Tier'>
          <img src={tierA} alt='tierA' />
          </div>
          {A.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="B" >
        <div className='Tier'>
        <img src={tierB} alt='tierB' />
        </div>
          {B.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="C" >
        <div className='Tier'>
        <img src={tierC} alt='tierC' />
        </div>
          {C.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="D" >
        <div className='Tier'>
        <img src={tierD} alt='tierD' />
        </div>
          {D.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>

        </div>
        </div>
  );
}

export default TierListFinish;