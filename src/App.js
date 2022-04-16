import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
      </Layout>
    </>
  );
}

export default App;
