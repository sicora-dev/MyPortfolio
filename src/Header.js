import { useEffect } from "react";
import "./index.css";
import { FaGithub } from "react-icons/fa";

function Header() {
  const email = "sirocornejoraez@gmail.com";
  const subject = "Contacto desde potfolio";
  const body = "";

  const openEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  const removeProjects = () => {
    const project = document.getElementsByClassName("projects")[0];
    const about = document.getElementsByClassName("about")[0];
    if (about.classList.contains("brightness-50")) {
        about.classList.remove("brightness-50");
    }
    if (project.classList.contains("brightness-50")) {
      project.classList.remove("brightness-50");
    } else {
        project.classList.add("brightness-50");
    }
  };
  const removeAbout = () => {
    const about = document.getElementsByClassName("about")[0];
    const projects = document.getElementsByClassName("projects")[0];
    if (projects.classList.contains("brightness-50")) {
        projects.classList.remove("brightness-50");
    }
    if (about.classList.contains("brightness-50")) {
      about.classList.remove("brightness-50");
    } else {
      about.classList.add("brightness-50");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector("header");
      if (header && header.classList) {
        if (scroll > 1) {
          header.classList.add("backdrop-blur-sm");
        } else {
          header.classList.remove("backdrop-blur-sm");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-center items-center text-[rgb(240,246,252)] sticky top-0 bg-[rgba(13,17,23,0.5)] transition ease-in-out duration-1000 z-50 ">
      <div className="w-full p-4 shadow-xl rounded-t-[0.375rem] flex justify-around items-center ">
        <h1 className="text-2xl font-bold mb-0 font-raleway text-highlight-purple">
          Siro's Portfolio
        </h1>
        <ul className="flex space-x-4 mb-0 items-center hidden sm:flex">
          <li className="cursor-pointer">
            <a
              onClick={removeProjects}
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              onClick={removeAbout}
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href={openEmail}
              target="_blank"
              className="font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105"
            >
              Contact
            </a>
          </li>
          <li className="cursor-pointer ">
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
