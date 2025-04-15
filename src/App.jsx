import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import Projects from "./pages/Projects";
import './index.css';
import Header from "./components/Header";
import Services from "./pages/Services";
import Exprience from "./pages/Exprience";

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