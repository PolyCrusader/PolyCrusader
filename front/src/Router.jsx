import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";


export default function AppRouter() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<App />} />
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