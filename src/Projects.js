import { useState, useEffect } from 'react';
import projects from './projects.json';
import Puntoscarga from './Puntoscarga';
import './index.css';

function Projects() {

    const [info, setInfo] = useState([]);
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        setInfo(projects);

        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    return (
        <div className='flex flex-col gap-4 w-full '>
            <h2 className='font-github text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple'>
                Mis proyectos (hasta ahora <Puntoscarga />)
            </h2>
            {
                info.map((project, index) => {
                    if (index % 2 === 0 && screenSize.width > 640) {
                        return (
                            <div key={index} className='flex flex-col sm:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4'>
                                <div className='flex w-full items-center flex-col sm:flex-row'>
                                    <div className='flex-grow'>
                                        <h3 className='font-github h-full text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple'>
                                            {project.titulo}
                                        </h3>
                                        <p className='font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto desc'>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <img
                                        src={project.img}
                                        alt={project.titulo}
                                        className='w-50 h-80 object-cover rounded-[0.375rem] img-project transition-transform transform hover:scale-105' />
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className='flex flex-col sm:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4 item'>
                                <div className='flex w-full items-center flex-col sm:flex-row'>
                                    <img
                                        src={project.img}
                                        alt={project.titulo}
                                        className='w-50 h-80 object-cover rounded-[0.375rem] img-project transition-transform transform hover:scale-105' />
                                    <div className='flex-grow'>
                                        <h3 className='font-github text-xl mx-4 px-2 py-1 rounded-[0.375rem] font-bold text-highlight-purple'>
                                            {project.titulo}
                                        </h3>
                                        <p className='font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto desc'>
                                            {project.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        );

                    }
                })
            }
        </div>
    );
}

export default Projects;
