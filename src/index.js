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
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleWheel = (e) => {
    if (isTransitioning) return;
    const isAtBottom = window.scrollY === 0;
    const isAtTop = window.scrollY + window.innerHeight >= document.body.offsetHeight;
    if (e.deltaY > 0) {
      if (currentSection !== 3 && isAtBottom) {
        setIsTransitioning(true);
        setCurrentSection(currentSection + 1);
        
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
          setIsTransitioning(false);
        }, 800);
      }
    } else if (currentSection !== 1 && isAtTop) {
      setIsTransitioning(true);
      setCurrentSection(currentSection - 1);
     
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        setIsTransitioning(false);
      }, 800);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

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
   
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", handleWheel);

    return () => {
      
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection,touchStartY,touchEndY,handleWheel]);

  return (
    <React.StrictMode>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <App currentSection={currentSection} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
