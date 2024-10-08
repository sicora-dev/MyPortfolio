import React from "react";
import { useEffect } from "react";
import "./App.css";
import MainContent from "./MainContent";
import Biography from "./Biography";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

function App({ currentSection, direction }) {
  useEffect(() => {
    const section3 = document.getElementById("section3");
    if (section3) {
      section3.firstChild.classList.remove(
        "transition-shadow",
        "duration-300",
        "hover:shadow-2xl"
      );
      section3.firstChild.firstChild.classList.add(
        "transition-shadow",
        "duration-300",
        "hover:shadow-2xl"
      );
    }
  }, [currentSection]);
  return (
    <div className="flex flex-col h-full lg:h-[100vh] relative overflow-hidden">
      {currentSection === 1 && (
        <>
          <MainContent
            name="section1"
            className={`absolute top-0 left-0  h-[100vh] flex text-[rgb(240,246,252)] p-4 transform duration-200 ease-in-out items-center justify-center w-full transition-section ${
              direction === "down" ? "slide-in-down" : "slide-in-up"
            }`}
          >
            <Biography />
          </MainContent>
        </>
      )}

      {currentSection === 2 && (
        <MainContent
          name="section2"
          className={`absolute top-0 left-0  h-[100vh] flex text-[rgb(240,246,252)] p-4 transform duration-200 ease-in-out items-start justify-center w-full transition-section ${
            direction === "down" ? "slide-in-down" : "slide-in-up"
          }`}
        >
          <Projects />
        </MainContent>
      )}

      {currentSection === 3 && (
        <MainContent
          name="section3"
          className={`absolute top-0 left-0 h-[100vh] flex text-[rgb(240,246,252)] p-4 transform duration-200 ease-in-out items-start justify-center w-full transition-section ${
            direction === "down" ? "slide-in-down" : "slide-in-up"
          }`}
        >
          <ContactForm />
        </MainContent>
      )}
    </div>
  );
}

export default App;
