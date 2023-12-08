import React, { useEffect } from 'react';
import PopUp from './PopUp';
import { useState } from 'react';

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
        <div className='Tier'><h2>S</h2></div>
          {S.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="A" >
          <div className='Tier'><h2>A</h2></div>
          {A.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="B" >
        <div className='Tier'><h2>B</h2></div>
          {B.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="C" >
        <div className='Tier'><h2>C</h2></div>
          {C.map((card) => (
            <div className="Card" key={card.name}  onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="D" >
        <div className='Tier'><h2>D</h2></div>
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