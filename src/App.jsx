import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./components/Portofolio";
import Projects from "./components/Projects";
import './index.css';
import Header from "./components/Header";
import Services from "./components/Services";
import Exprience from "./components/Exprience";

function App() {
  return (
    <Router basename="/vite-deploys">
      <Header />
      <Routes>
        <Route path="/" element={<Portofolio />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Expriences" element={<Exprience />} />
      </Routes>
    </Router>
  );
}

export default App;