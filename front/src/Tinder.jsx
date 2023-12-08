import { useState, useEffect } from "react"
import TinderCard from "./TinderCard";
import CarteReponse from "./CarteReponse";

const Tinder = () => {
    const [isResultPage, setIsResultPage] = useState(false);
    const [SubmittedAnswers, setSubmittedAnswers] = useState(null)
    const [apiData, setApiData] = useState(null);

    const [CardContent, setCardContent] = useState(null);
    const [isCardTrue, setIsCardTrue] = useState(null);
    const [CardLogo, setCardLogo] = useState(null);
    const [CardAnswer, setCardAnswer] = useState(null);
    const [CardSourceUrl, setCardSourceUrl] = useState(null);

    useEffect(() => {
        fetch("http://89.168.46.26:8000/api/tinder")
            .then(response => response.json())
            .then(data => setApiData(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    useEffect(() => {
        console.log(apiData);
    }, [apiData]);

    const handleSubmit = (value) => {
        console.log("I HAVE RECEIVED THE VALUE", value);
        setSubmittedAnswers(value);
        setIsResultPage(!isResultPage);
    }

    const handleNextMatch = () => {
        setIsResultPage(!isResultPage);
        console.log("next match");
        getCardContent();
    }

    const RollPics = [
            "https://www.leparisien.fr/resizer/xyl_FHruswkd4a5Ed0n5FO-skZE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KP6C2NIYDZEARCVJZBWTAL5GU4.jpg",
            "https://www.sirenergies.com/content/images/2022/10/climate-change.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_c9yGI8mdU91ZvFf2s7gGPGCDeKWlR8tkw",
            "https://cdn.futura-sciences.com/sources/images/actu/quand-rechauffement-va-arreter.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqmd68hiUJAYq3DGyA05-ynwG4OvbpNnCnw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxolyZAxdMW2j_yM9LWG63V-2z2s5M8In5A&usqp=CAU"
    ];

    let randomPic = RollPics[Math.floor(Math.random() * RollPics.length)];

    const getCardContent = () => {
        let randomIndex = Math.floor(Math.random() * apiData.length);
        let randomCard = apiData[randomIndex];
        setCardContent(randomCard.DescriptionCategorie);
        setIsCardTrue(randomCard.Categorie.toLowerCase());
        console.log(randomCard.Categorie.toLowerCase());
        setCardAnswer(randomCard.Description);
        setCardLogo(randomPic);
        setCardSourceUrl(randomCard.imageUrl);
    }

    

    useEffect(() => {
        if(apiData) {
            getCardContent();
        }
    }
    , [apiData]);

    return (
        <>
            <h1> Truth Quest for the Earth  </h1>
            <p className="gras"> Bienvenue dans TruthQuest, le jeu qui met vos compétences de détection des fausses informations à l'épreuve ! 🕵️‍♂️🔍 <br/> <br/> </p>
            <p className="gras">1. Découvrez la Vérité : </p> <p> Vous êtes un détective de la vérité, chargé de trier les informations authentiques des fausses. Chaque niveau présente une série d'explications sur le changement climatique. <br/> </p> 
            <p className="gras">2. Choisissez le Mensonge :</p> <p> Lisez attentivement chaque explication et identifiez la fausse information parmi les propositions. Faites glisser votre choix vers le bon côté de l'écran pour révéler si vous avez trouvé la réponse correcte. <br/> </p> 
            <p className="gras">3. Points et Niveaux : </p> <p>Gagnez des points en trouvant les fausses informations. Plus vous en découvrez, plus vous montez de niveau. <br/> </p>
            <div className="tinder-page">
                {
                    !isResultPage && <TinderCard save={handleSubmit} logo={CardLogo} content={CardContent} />
                }
                {
                    isResultPage && <CarteReponse side={SubmittedAnswers} onNextMatch={handleNextMatch} content={CardAnswer} logo={CardLogo} isInfoTrue={isCardTrue} sourceUrl={CardSourceUrl}/>
                }
            </div>
        </>
    )
}

export default Tinder;