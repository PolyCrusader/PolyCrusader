import { useState } from "react"
import TinderCard from "./TinderCard";
import CarteReponse from "./CarteReponse";

const Tinder = () => {
        const [isResultPage, setIsResultPage] = useState(false);
        const [SubmittedAnswers, setSubmittedAnswers] = useState(null)




        

        const handleSubmit = (value) => {
            console.log("I HAVE RECEIVED THE VALUE", value);
                setSubmittedAnswers(value);
                setIsResultPage(!isResultPage);
        }

        const handleNextMatch = () => {
                setIsResultPage(!isResultPage);
                console.log("next match");
        }

    return (
        <div className="tinder-page">
                {
                        !isResultPage && <TinderCard save={handleSubmit} />
                }
                {
                        isResultPage && <CarteReponse side={SubmittedAnswers} onNextMatch={handleNextMatch} />
                }

               <h1>{SubmittedAnswers}</h1>
        </div>
    )
}

export default Tinder