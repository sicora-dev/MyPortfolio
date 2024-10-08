import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const Main = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [direction, setDirection] = useState("down");

  const handleUpClick = () => {
    if (currentSection > 1) {
      setDirection("up");
      setCurrentSection(currentSection - 1);
    }
  };

  const handleDownClick = () => {
    if (currentSection < 3) {
      setDirection("down");
      setCurrentSection(currentSection + 1);
    }
  };
  

  return (
    <React.StrictMode>
      <Header />
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
        <button
          onClick={handleUpClick}
          disabled={currentSection === 1}
          className="bg-action-color text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Up
        </button>
        <button
          onClick={handleDownClick}
          disabled={currentSection === 3}
          className="bg-action-color text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Down
        </button>
      </div>
      <App currentSection={currentSection} direction={direction} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
