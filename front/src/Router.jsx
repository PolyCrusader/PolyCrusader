import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HeaderHome from "./HeaderHome";
import TierList from "./TierList";
import Tinder from "./Tinder";
import Page404 from "./Page404";
import IcebergGame from "./iceberg";

export default function AppRouter() {
  return (
    <Router>
      <HeaderHome />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tierlist" element={<TierList />} />
        <Route path="/tinder" element={<Tinder />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/iceberg" element={<IcebergGame />} />
      </Routes>
    </Router>
  );
}
