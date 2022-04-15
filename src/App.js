import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contactme" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
