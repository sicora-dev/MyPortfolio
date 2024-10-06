import { useState, useEffect } from "react";
import projects from "./projects.json";
import Puntoscarga from "./Puntoscarga";
import { FaMousePointer } from "react-icons/fa";
import "./index.css";

function Projects() {
  const [info, setInfo] = useState([]);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setInfo(projects);

    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full projects">
      <h2 className="font-github text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple">
        Mis proyectos (hasta ahora <Puntoscarga />)
      </h2>
      {info.map((project, index) => {
        if (index % 2 === 0 && screenSize.width > 1023) {
          return (
            <div
              onClick={() => window.open(project.url, "_blank")}
              key={index}
              className="flex flex-col lg:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4"
            >
              <div className="flex w-full items-center flex-col lg:flex-row">
                <div className="flex-grow">
                  <h3 className="font-github text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple">
                    {project.titulo}
                  </h3>
                  <p className="font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto desc">
                    {project.desc}
                  </p>
                </div>
                <div className="relative group">
                  <img
                    src={project.img}
                    alt={project.titulo}
                    className="cursor-pointer w-100 h-80 object-cover rounded-[0.375rem] transition-transform transform ease-in-out duration-200 hover:scale-105 hover:shadow-md hover:shadow-highlight-purple"
                  />
                  <button
                    onClick={() => window.open(project.url, "_blank")}
                    className="absolute bottom-2 right-2 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2  rounded-[0.375rem]"
                  >
                    <FaMousePointer className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4 item"
            >
              <div className="flex w-full items-center flex-col lg:flex-row">
              <div className="relative group">
                  <img
                    src={project.img}
                    alt={project.titulo}
                    className="cursor-pointer w-100 h-80 object-cover rounded-[0.375rem] transition-transform transform ease-in-out duration-200 hover:scale-105 hover:shadow-md hover:shadow-highlight-purple"
                  />
                  <button
                    onClick={() => window.open(project.url, "_blank")}
                    className="absolute bottom-2 right-2 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-[0.375rem]"
                  >
                    <FaMousePointer className="text-2xl" />
                  </button>
                </div>
                <div className="flex-grow w-96">
                  <h3 className="font-github text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple">
                    {project.titulo}
                  </h3>
                  <p className="font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto desc">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Projects;
