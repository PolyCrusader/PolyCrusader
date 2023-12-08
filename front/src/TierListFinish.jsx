import React, { useEffect } from 'react';
import PopUp from './PopUp';
import { useState } from 'react';
import data from './InfoTierList.json';

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
        constructor(name, image,tier,id,description) {
          this.name = name;
          this.image = image;
          this.tier =tier;
          this.id = id;
          this.description = description;
        }
      }
    


  useEffect(() => {
    let card;
    let nb=0;
    setA([]);
    setS([]);
    setB([]);
    setC([]);
    setD([]);
  
    for(let y=0 ; y<4 ;y++){

          for (let i = 0; i < data[y].Actions.length; i++) {
            let description = data[y].Actions[i].Description;
            console;log(description);
            switch (data[y].Actions[i].Tier) {
              case "S":
                 card = new Card("card " + nb, data[y].Actions[i].img,"S",i,description);
                 setS(prevS => [...prevS, card]); 
                break;
              case "A":
                   card = new Card("card " + nb, data[y].Actions[i].img,"A",i,description);
                   setA(prevA => [...prevA, card]); 
                  break;
                

              case "B":
                    card = new Card("card " + nb, data[y].Actions[i].img,"B",i,description);
                    setB(prevB => [...prevB, card]); 
                   break;
              case "C":
                    card = new Card("card " + nb, data[y].Actions[i].img,"C",i,description);
                    setC(prevC => [...prevC, card]); 
                   break;
                
              case "D":
                   card = new Card("card " + nb,data[y].Actions[i].img,"D",i,description);
                   setD(prevD => [...prevD, card]); 
                  break;
                
              
            
              default:
                break;
                
                
            }
            nb+=1;
          }
         
        }
  }, []);


          



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