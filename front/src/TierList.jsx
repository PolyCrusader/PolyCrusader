import React, { useEffect } from 'react';
import { useState } from 'react';
import './TierList.scss';
import PopUp from './PopUp';
import TierListFinish from './TierListFinish';
import data from './InfoTierList.json';
import tierD from './assets/TierList/tierD.png';
import tierC from './assets/TierList/tierC.png';
import tierB from './assets/TierList/tierB.png';
import tierA from './assets/TierList/tierA.png';
import tierS from './assets/TierList/tierS.png';

function TierList() {
  const [Action1, setAction1] = useState([]);
  const [Action2, setAction2] = useState([]);
  const [Action3, setAction3] = useState([]);
  const [Action4, setAction4] = useState([]);

  

  const [S, setS] = useState([]);
  const [A, setA] = useState([]);
  const [B, setB] = useState([]);
  const [C, setC] = useState([]);
  const [D, setD] = useState([]);
  const [draggedCard, setDraggedCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [submit, setSubmit] = useState(false);



  class Card {
    constructor(name, image,tier,id,description) {
      this.name = name;
      this.image = image;
      this.tier =tier;
      this.id = id;
      this.description = description;
    }
  }

  console.log(data);


   
  

  

  useEffect(() => {
    let nb=0;
    for(let y=0 ; y<4 ;y++){
        const newStockage = [];
        switch (y) {
            case 0:

            for (let i = 0; i < data[y].Actions.length; i++) {
                let card = new Card("card " + i, "https://picsum.photos/200","Action1",i,data[y].Actions[i].Description);
                newStockage.push(card);
              }
              setAction1(newStockage);
                
                break;

            case 1:

                for (let i = 0; i < data[y].Actions.length; i++) {
                    let card = new Card("card " + i, "https://picsum.photos/200","Action2",i,data[y].Actions[i].Description);
                    console.log(i,data[y].Actions.Description);
                    newStockage.push(card);
                  }
                  setAction2(newStockage);
                    
                    break;
            case 2:

            for (let i = 0; i < data[y].Actions.length; i++) {
                let card = new Card("card " + i, "https://picsum.photos/200","Action3",i,data[y].Actions[i].Description);
                newStockage.push(card);
              }
              setAction3(newStockage);
                
                break;
            case 3:

                for (let i = 0; i < data[y].Actions.length; i++) {
                    let card = new Card("card " + i, "https://picsum.photos/200","Action4",i,data[y].Actions[i].Description);
                    newStockage.push(card);
                  }
                  setAction4(newStockage);
                    
                    break;
        
            default:
                break;
        }
        
    }
    
    
  }, []);

  function handleDrop(e, tier) {
    e.preventDefault();
    
    
    const card = draggedCard;
    
    const oldTier = card.tier;
  
    
   
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
           case 'Action1':
            setAction1((Action1) => Action1.filter((c) => c.name !== card.name));
            break;
           case 'Action2':
            setAction2((Action2) => Action2.filter((c) => c.name !== card.name));
            break;
           case 'Action3':
            setAction3((Action3) => Action3.filter((c) => c.name !== card.name));
            break;
            case 'Action4':
            setAction4((Action4) => Action4.filter((c) => c.name !== card.name));
            break;

          default:
            break;
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
        case 'Action1':
            setAction1(Action1 => [...Action1,card]);
            console.log(card.tier);
            break;
        case 'Action2':
            setAction2(Action2 => [...Action2,card]);
            
            console.log(card.tier);
            break;
        case 'Action3':
            setAction3(Action3 => [...Action3,card]);
            console.log(card.tier);
            break;
        case 'Action4':
            setAction4(Action4 => [...Action4,card]);
            console.log(card.tier);
            break;
        default:
            break;
    }

    setDraggedCard(null);
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
  
  function handleSubmit(){
    if(Action1.length===0 && Action2.length===0 &&  Action3.length===0)
    {setSubmit(true);}
  }

  return (
    <div>
      <h1>TierList</h1>
      
      {selectedCard && <PopUp card={selectedCard} onClose={onClose} id={1}/>}
      <div className="TierList">
        <div className="S" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'S')}>
        <div className='Tier'>
        <img src={tierS} alt='tierS'/>
        </div>
          {S.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="A" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'A')}>
          <div className='Tier'>
            <img src={tierA} alt='tierA'/>
          </div>
          {A.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="B" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'B')}>
        <div className='Tier'>
            <img src={tierB} alt='tierB'/>
        </div>
          {B.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="C" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'C')}>
        <div className='Tier'>
            <img src={tierC} alt='tierC'/>
        </div>
          {C.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
        <div className="D" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'D')}>
        <div className='Tier'>
            <img src={tierD} alt='tierD'/>
        </div>
          {D.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)}>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>

        <div className="jump"></div>

        <div className="Action1" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Action1')} >
        <div className='TierAction'>
            <h2>{data[0].Name}</h2>
            <p>{data[0].Description}</p>
        </div>
          {Action1.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)} >
              <img src={card.image} alt={card.name}  />
            </div>
          ))}
        </div>
        <div className="Action2" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Action2')} >
        <div className='TierAction'>
            <h2>{data[1].Name}</h2>
            <p>{data[0].Description}</p>
        </div>
          {Action2.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)} >
              <img src={card.image} alt={card.name}  />
            </div>
          ))}
        </div>
        <div className="Action3" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Action3')} >
        <div className='TierAction'>
            <h2>{data[2].Name}</h2>
            <p>{data[0].Description}</p>
        </div>
          {Action3.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)} >
              <img src={card.image} alt={card.name}  />
            </div>
          ))}
        </div>
        <div className="Action4" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Action4')} >
        <div className='TierAction'>
            <h2>{data[3].Name}</h2>
            <p>{data[0].Description}</p>
        </div>
          {Action4.map((card) => (
            <div className="Card" key={card.name} onDrag={() => handleDragStart(card)} onClick={() => setSelectedCard(card)} >
              <img src={card.image} alt={card.name}  />
            </div>
          ))}
        </div>
        
      </div>
      <button className='Submit' onClick={() => handleSubmit()}>Submit</button>
      { submit && <TierListFinish/>}
      
    </div>
  );
}

export default TierList;
