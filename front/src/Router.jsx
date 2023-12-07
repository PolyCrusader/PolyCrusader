import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Page2 from "./Page2";
import HeaderHome from "./HeaderHome";
import TierList from "./Tierlist";
import Tinder from "./Tinder";


export default function AppRouter() {
    return (
        <Router>
        <HeaderHome />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page/2" element={<Page2 />} />
          <Route path="/tierlist" element={<TierList />} />
          <Route path="/tinder" element={<Tinder />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Gros on a pas trouvé ta page... Big 404</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    )
    }