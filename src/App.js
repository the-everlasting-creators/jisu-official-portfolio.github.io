import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
