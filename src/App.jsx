import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume.jsx";
import Skill from "./components/Skill.jsx";
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Resume />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
