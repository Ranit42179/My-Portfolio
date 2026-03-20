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
      <div className="pt-24 md:pt-28">
        <HeroSection />
        <About />
        <Skill />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
