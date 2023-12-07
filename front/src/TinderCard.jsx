import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";

const TinderCard = ({ save }) => {
  let logo = viteLogo;
  let content = "Lorem Ipsum";

  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = document.querySelector('.tinder-card');
      if(card) {
        if(e.clientX < 2*window.innerWidth / 5) {
            card.style.transform = "rotate(-10deg) translate(-150%, 50%)"
        }
        else if(e.clientX > 3*window.innerWidth / 5) {
            card.style.transform = "rotate(10deg) translate(50%, 50%)"
        }
        else {
            card.style.transform = "rotate(0deg) translate(-50%, 50%)"
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLeftClick = () => {
    console.log("left");
    setIsLeft(true);
    save("left");
  }

  const handleRightClick = () => {
    console.log("right");
    setIsRight(true);
    save("right");
  }

  return (
    <>
        <div className="left-div" onClick={handleLeftClick}></div>
        <div className="right-div" onClick={handleRightClick}></div>
        <div className="tinder-card">
            <img src={logo} alt="fact about climate" />
            <p>{content}</p>
        </div>
    </>
  )
}

export default TinderCard