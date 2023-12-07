import "./App.scss";
import LandingPageHome from "./LandingPageHome";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Footer from "./Footer.jsx";
import './App.scss'
import TinderCard from './TinderCard'

function App() {
    return (
        <>
            <div>
                <LandingPageHome></LandingPageHome>
                <Section2></Section2>
                <Section3></Section3>
                <Footer></Footer>
                <TinderCard/>
            </div>
        </>
    );
}

export default App
