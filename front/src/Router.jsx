import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Page2 from "./Page2";
import Header from "./Header";
import Page404 from "./Page404";



export default function AppRouter() {
    return (
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page/2" element={<Page2 />} />
          <Route
            path="*" element={<Page404 />}
            />
        </Routes>
      </Router>
    )
}