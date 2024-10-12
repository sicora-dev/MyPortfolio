import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";


function Header({ setCurrentSection, currentSection }) {
  const [lastMouseMove, setLastMouseMove] = useState(0);
  const [isInactive, setIsInactive] = useState(false);
  const [lastSection, setLastSection] = useState(currentSection);

  const goSection = (e) => {
    setCurrentSection(parseInt(e.target.id));
  };
  const goBackMain = () => {
    setCurrentSection(1);
  };

  useEffect(() => {
    
    const handleMouseMove = () => {
      setLastMouseMove(Date.now());
      setIsInactive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setLastSection(currentSection);
    const checkInactivity = () => {
      if (Date.now() - lastMouseMove > 500 && currentSection !== 1) {
        // 1 segundo de inactividad
        setIsInactive(true);
      }
    };

    const interval = setInterval(checkInactivity, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [lastMouseMove, currentSection]);

  const getTitle = () => {
    switch (currentSection) {
      case 1:
        return "Biografia";
      case 2:
        return "Proyectos";
      case 3:
        return "Contacto";
      default:
        return "Mi portfolio";
    }
  };

  return (
    <header
      className={`fixed top-0 w-full transition-transform duration-300 ease-in-out z-10 translate-y-0 bg-[rgba(13,17,23,0.5)] text-[rgb(240,246,252)] ${
        isInactive ? "hidden-section" : ""
      }`}
    >
      <div className="w-full p-4 shadow-xl rounded-t-md flex justify-around items-center">
        <div className="relative w-52 h-12 transform duration-1000">
          <h1
            className="absolute w-full h-full flex items-center justify-center text-2xl font-bold font-raleway text-highlight-purple"   
          >
            <span className={`absolute flex transform duration-1000 ease-in-out items-center justify-center w-full ${currentSection === 1 ? "" : "hidden-section-up"}`}>Biografía</span>
            <span className={`absolute flex transform duration-1000 ease-in-out items-center justify-center w-full ${currentSection === 2 ? "" : lastSection === 1 ? "hidden-section-down" :"hidden-section-up"}`}>Proyectos</span>
            <span className={`absolute flex transform duration-1000 ease-in-out items-center justify-center w-full ${currentSection === 3 ? "" : "hidden-section-down"}`}>Contacto</span>
          </h1>
        </div>
        <ul className=" space-x-4 mb-0 items-center hidden sm:flex">
          <li className="cursor-pointer">
            <button
              id="1"
              onClick={goSection}
              className="button font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Biografia
            </button>
          </li>
          <li className="cursor-pointer ">
            <button
              id="2"
              onClick={goSection}
              className="button font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Proyectos
            </button>
          </li>
          <li className="cursor-pointer">
            <button
              id="3"
              onClick={goSection}
              className="button font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Contacto
            </button>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://github.com/sicora-dev"
              className="button font-raleway px-2 py-1 rounded-[0.375rem] flex group transition-transform transform hover:scale-105"
            >
              <FaGithub className="text-2xl group-hover:text-highlight-purple transition-transform transform group-hover:scale-105" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
