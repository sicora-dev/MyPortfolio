import React from "react";
import { FiDownload } from "react-icons/fi";
import "./index.css";

function Cv() {
  const downloadPdf = () => {
    window.open(
      "https://drive.google.com/file/d/17f5HSPRRS2Yy0QMX4XNuuFhjxzAIo-wk/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <button
        onClick={downloadPdf}
        className="mx-auto md:mx-0 w-1/3 button font-github sm:mx-5 px-2 py-1 rounded-[0.375rem] flex items-center border shadow-lg button-efecto-slide transition-transform transform hover:scale-105 bg-action-color text-white sm:hidden"
      >
        <span className="mr-2">CV</span>
        <FiDownload />
      </button>
    </>
  );
}

export default Cv;
