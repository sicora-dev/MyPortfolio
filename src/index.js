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
  const [direction, setDirection] = useState("down");
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollY === 0) {
      setAtTop(true);
    } else if (currentScrollY + windowHeight >= documentHeight) {
      setAtBottom(true);
    } else {
      setAtTop(false);
      setAtBottom(false);
    }

    setLastScrollY(currentScrollY);
  };

  const handleWheel = (e) => {
    const documentHeight = document.documentElement.scrollHeight;
    if (e.deltaY < 0) {
      setScrollDirection("up");
      if (atTop && currentSection > 1) {
        setDirection("up");
        setCurrentSection(currentSection - 1);
        scroller.scrollTo(`section${currentSection - 1}`, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
        setAtTop(false);
        window.scrollTo(0, documentHeight);
       
      }
    } else if (e.deltaY > 0) {
      setScrollDirection("down");
      if (atBottom && currentSection < 3) {
        setDirection("down");
        setCurrentSection(currentSection + 1);
        scroller.scrollTo(`section${currentSection + 1}`, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
        setAtBottom(false);
        window.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [lastScrollY, scrollDirection, atTop, atBottom, currentSection]);

  return (
    <React.StrictMode>
      <Header setCurrentSection={setCurrentSection} />
      <App currentSection={currentSection} direction={direction} />
      <Footer />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();