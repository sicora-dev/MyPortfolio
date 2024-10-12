import React from "react";
import { useEffect } from "react";
import "./App.css";
import MainContent from "./MainContent";
import Biography from "./Biography";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

function App({ currentSection }) {
  
  useEffect(() => {
    
    const section3 = document.getElementById("section3");
    if (section3) {
      section3.firstChild.classList.remove(
        "transition-shadow",
        "duration-300",
        "hover:shadow-2xl"
      );
      
    }
    if(document.getElementsByTagName("header")){
      document.getElementsByTagName("header")[0].classList.remove("hidden-section");
    }
    
  }, [currentSection]);
  return (
    <div className="flex flex-col h-full justify-center items-center">
      
        <>
          <MainContent
            currentSection={currentSection}
            id="section1"
            className={`absolute top-0 left-0 h-full flex text-[rgb(240,246,252)] p-4 
              transform duration-1000 ease-in-out items-center justify-center w-full
            ${currentSection === 1 ? "" : "hidden-section"}`}
          >
            <Biography />
          </MainContent>
        </>
     
        <MainContent
          currentSection={currentSection}
          id="section2"
          className={`absolute top-0 left-0 h-full flex text-[rgb(240,246,252)] p-4 
            transform duration-1000 ease-in-out items-center justify-center w-full
          ${currentSection === 2 ? "" : "hidden-section"}`}
        >
          <Projects />
        </MainContent>
     
        <MainContent
          currentSection={currentSection}
          id="section3"
          className={`absolute top-0 left-0 h-full flex text-[rgb(240,246,252)] p-4 
            transform duration-1000 ease-in-out items-center justify-center w-full 
            
          ${currentSection === 3 ? "" : "hidden-section"}`}
        >
          <ContactForm />
        </MainContent>
     
    </div>
  );
}

export default App;
