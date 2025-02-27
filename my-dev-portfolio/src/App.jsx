import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <>
      <Navbar title="DEV ABIOLA + DEVOPS ENGINEER" />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
