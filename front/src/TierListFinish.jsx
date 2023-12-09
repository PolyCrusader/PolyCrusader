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
        constructor(name, image, tier, id, description,action) {
            this.name = name;
            this.image = image;
            this.tier = tier;
            this.id = id;
            this.description = description;
            this.action = action;
        }
    }

    function onClose() {
        setSelectedCard(null);
    }

    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (!dataLoaded) {
        let nb = 0;
        setA([]);
        setS([]);
        setB([]);
        setC([]);
        setD([]);

        for (let y = 0; y < 4; y++) {
            for (let i = 0; i < data[y].Actions.length; i++) {
                let description = data[y].Actions[i].Description;
                console.log(description);
                switch (data[y].Actions[i].Tier) {
                    case "S":
                        import(data[y].Actions[i].img)
                            .then(image => {
                                let card = new Card("card " + nb, image.default, "S", i, description, data[y].Name);
                                setS(prevS => [...prevS, card]);
                            })
                            .catch(error => {
                                console.error(`There was an error loading the image: ${error}`);
                            });
                        break;
                    case "A":
                        import(data[y].Actions[i].img)
                            .then(image => {
                                let card = new Card("card " + nb, image.default, "A", i, description,data[y].Name);
                                setA(prevA => [...prevA, card]);
                            })
                            .catch(error => {
                                console.error(`There was an error loading the image: ${error}`);
                            });
                        break;
                    case "B":
                        import(data[y].Actions[i].img)
                            .then(image => {
                                let card = new Card("card " + nb, image.default, "B", i, description,data[y].Name);
                                setB(prevB => [...prevB, card]);
                            })
                            .catch(error => {
                                console.error(`There was an error loading the image: ${error}`);
                            });
                        break;
                    case "C":
                        import(data[y].Actions[i].img)
                            .then(image => {
                                let card = new Card("card " + nb, image.default, "C", i, description,data[y].Name);
                                setC(prevC => [...prevC, card]);
                            })
                            .catch(error => {
                                console.error(`There was an error loading the image: ${error}`);
                            });
                        break;

                    case "D":
                        import(data[y].Actions[i].img)
                            .then(image => {
                                let card = new Card("card " + nb, image.default, "D", i, description,data[y].Name);
                                setD(prevD => [...prevD, card]);
                            })
                            .catch(error => {
                                console.error(`There was an error loading the image: ${error}`);
                            });
                        break;
                }
                nb += 1;
            }

        }
        setDataLoaded(true);
    }
    }, [dataLoaded]);

    const [selectedCard, setSelectedCard] = useState(null);
    return (
        <div>
            <h1>TierList Finished</h1>
            {selectedCard && <PopUp card={selectedCard} onClose={onClose} id={2} />}
            <div className="TierList">
                <div className="S" >
                    <div className='Tier'>
                        <img src={tierS} alt='tierS' />
                    </div>
                    {S.map((card) => (
                        <div className="Card" key={card.name} onClick={() => setSelectedCard(card)}>
                            <img src={card.image} alt={card.name} />
                        </div>
                    ))}
                </div>
                <div className="A" >
                    <div className='Tier'>
                        <img src={tierA} alt='tierA' />
                    </div>
                    {A.map((card) => (
                        <div className="Card" key={card.name} onClick={() => setSelectedCard(card)}>
                            <img src={card.image} alt={card.name} />
                        </div>
                    ))}
                </div>
                <div className="B" >
                    <div className='Tier'>
                        <img src={tierB} alt='tierB' />
                    </div>
                    {B.map((card) => (
                        <div className="Card" key={card.name} onClick={() => setSelectedCard(card)}>
                            <img src={card.image} alt={card.name} />
                        </div>
                    ))}
                </div>
                <div className="C" >
                    <div className='Tier'>
                        <img src={tierC} alt='tierC' />
                    </div>
                    {C.map((card) => (
                        <div className="Card" key={card.name} onClick={() => setSelectedCard(card)}>
                            <img src={card.image} alt={card.name} />
                        </div>
                    ))}
                </div>
                <div className="D" >
                    <div className='Tier'>
                        <img src={tierD} alt='tierD' />
                    </div>
                    {D.map((card) => (
                        <div className="Card" key={card.name} onClick={() => setSelectedCard(card)}>
                            <img src={card.image} alt={card.name} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default TierListFinish;