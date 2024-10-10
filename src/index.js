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
  const[touchStartY, setTouchStartY] = useState(0);
  const[touchEndY, setTouchEndY] = useState(0);
  const[isTransitioning, setIsTransitioning] = useState(true);

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

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  }

  const handleTouchMove = (e) => {
    setTouchEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    const touchDifference = touchStartY - touchEndY;
    if (touchDifference > 50 && currentSection < 3) {
      
      setIsTransitioning(true);
      setCurrentSection(currentSection + 1);
      scroller.scrollTo(`section${currentSection + 1}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    } else if (touchDifference < -50 && currentSection > 1) {
      // Swipe down
      setIsTransitioning(true);
      setCurrentSection(currentSection - 1);
      scroller.scrollTo(`section${currentSection - 1}`, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, currentSection, touchStartY, touchEndY]);

  return (
    <React.StrictMode>
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <App currentSection={currentSection} />
      <Footer />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
