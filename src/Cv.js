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
    <div className="flex justify-center text-[rgb(240,246,252)] p-4 ">
      <div className="w-full max-w-[1280px] p-4 flex justify-center duration-300">
        <button
          onClick={downloadPdf}
          className="w-80 h-20 justify-center font-github ml-0 sm:ml-4 px-2 py-1 rounded-[0.375rem] items-center border shadow-lg button-efecto-slide transition-transform transform hover:scale-105 bg-action-color text-white hover:bg-action-color-hover flex md:hidden lg:hidden"
        >
          <span className="mr-2 text-2xl">CV</span>
          <FiDownload />
        </button>
      </div>
    </div>
  );
}

export default Cv;