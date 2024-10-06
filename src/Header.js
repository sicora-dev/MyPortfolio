import { useEffect } from 'react';
import './index.css';
import { FaGithub } from 'react-icons/fa';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const header = document.querySelector('header');
            if (header && header.classList) {
                if (scroll > 1) {
                    header.classList.add('backdrop-blur-sm');
                } else {
                    header.classList.remove('backdrop-blur-sm');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="flex justify-center items-center text-[rgb(240,246,252)] sticky top-0 bg-[rgba(13,17,23,0.5)] transition ease-in-out duration-1000 z-50 ">
            <div className="w-full p-4 shadow-xl rounded-t-[0.375rem] flex justify-around items-center ">

                <h1 className="text-2xl font-bold mb-0 font-raleway text-highlight-purple">Siro's Portfolio</h1>
                <ul className='flex space-x-4 mb-0 items-center'>

                    <li>
                        <a href="#" className='font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105'>About</a>
                    </li>
                    <li>
                        <a href="#" className='font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105'>Projects</a>
                    </li>
                    <li>
                        <a href="#" className='font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105'>Contact</a>
                    </li>
                    <li>
                        <a href="#" className='font-raleway px-2 py-1 rounded-[0.375rem] flex'><FaGithub className="text-2xl text-highlight-purple transition-transform transform hover:scale-105" /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;