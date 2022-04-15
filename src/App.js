import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Skills />
      </Layout>
    </>
  );
}

export default App;
