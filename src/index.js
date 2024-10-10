import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { scroller } from "react-scroll";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const Main = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const header = document.querySelector("header");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollY === 0 && currentSection > 1) {
      
      setCurrentSection(currentSection - 1);
      scroller.scrollTo(`section${currentSection - 1}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      document.body.classList.add("no-scroll");
      setTimeout(() => {
        window.scrollTo({
          top: currentScrollY + 1,
          behavior: "smooth",
        });
        
        document.body.classList.remove("no-scroll");
        
      }, 800);
    } else if (
      currentScrollY + windowHeight >= documentHeight &&
      currentSection < 3
    ) {
      
      setCurrentSection(currentSection + 1);
      scroller.scrollTo(`section${currentSection + 1}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      document.body.classList.add("no-scroll");
      setTimeout(() => {
        window.scrollTo({
          top: 1,
          behavior: "smooth",
        });
        
        document.body.classList.remove("no-scroll");
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [currentSection]);

  return (
    <React.StrictMode>
      <Header setCurrentSection={setCurrentSection} />
      <App currentSection={currentSection} />
      
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
