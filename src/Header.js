import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

function Header({ setCurrentSection }) {
  const [lastScroll, setLastScroll] = useState(0);

  const changeSection = (e) => {
    const section = parseInt(e.target.id, 10);
    setCurrentSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const header = document.querySelector("header");

      if (header && header.classList) {
       
        if (currentScroll > 1) {
          header.classList.add("backdrop-blur-sm");
        } else {
          header.classList.remove("backdrop-blur-sm");
        }

      
        if (currentScroll > lastScroll) {
        
          header.classList.add("-translate-y-full");
          header.classList.remove("translate-y-0");
        } else {
          
          header.classList.add("translate-y-0");
          header.classList.remove("-translate-y-full");
        }
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <header className="fixed top-0 w-full transition-transform duration-300 ease-in-out z-50 translate-y-0 bg-[rgba(13,17,23,0.5)] text-[rgb(240,246,252)]">
      <div className="w-full p-4 shadow-xl rounded-t-md flex justify-around items-center">
        <h1 className="text-2xl font-bold mb-0 font-raleway text-highlight-purple">
          Mi Portfolio
        </h1>
        <ul className="flex space-x-4 mb-0 items-center hidden sm:flex">
          <li className="cursor-pointer">
            <a
              id="1"
              onClick={changeSection}
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Biografía
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              id="2"
              onClick={changeSection}
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Proyectos
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              id="3"
              onClick={changeSection}
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Contacto
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://github.com/sicora-dev"
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex"
            >
              <FaGithub className="text-2xl hover:text-highlight-purple transition-transform transform hover:scale-110" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;