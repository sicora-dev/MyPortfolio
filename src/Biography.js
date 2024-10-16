import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Technologies from './Technologies';
import './index.css';


function Biography() {

    const downloadPdf = () => {
        window.open('https://drive.google.com/file/d/17f5HSPRRS2Yy0QMX4XNuuFhjxzAIo-wk/view?usp=sharing' , '_blank');

    
    }
    return (
        <div id="Biography" className='flex flex-grow flex-col lg:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4 about items-center h-full'>
            <img src='./foto_carnet.jpg' alt='Foto de Carnet' className=' h-auto w-52 lg:w-96 object-cover rounded-[0.375rem] xl:w-100 transition-transform transform hover:scale-105' />
            <div className='ml-4 flex-grow items-center'>
                <div className='h-auto flex mx-4 px-2 items-center justify-center sm:justify-between lg:justify-normal'>
                    <h2 className='font-github text-xl py-1 rounded-[0.375rem] font-bold text-highlight-purple'>ME PRESENTO...</h2>
                    <button 
                    onClick={downloadPdf}
                    className='font-github mx-2 sm:ml-4 px-2 py-1 rounded-[0.375rem] items-center border border-[rgb(240,246,252)] shadow-lg bg-action-color hover:bg-action-color-hover text-white transition-transform hover:scale-105 hidden sm:flex'>
                        <span className='mr-2 '>CV</span>
                        <FiDownload />
                    </button>
                </div>
                
                <p className='font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto flex-grow hidden sm:block'>
                    Me llaman Siro, y estoy en proceso de convertirme en <span className='font-bold text-highlight-purple'>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</span>.
                    <br /><br />
                    Mi verdadera pasión es el <span className='font-bold text-highlight-purple'>desarrollo frontend</span>, lo que me lleva a aprender constantemente y a enfrentar nuevos desafíos con entusiasmo.
                    Me encanta crear interfaces de usuario que sean tanto intuitivas como visualmente atractivas, y tengo un gran interés en tecnologías como:<br />
                    <br />
                    <span className='font-bold text-highlight-purple text-2xl'><Technologies /></span>
                    <br />
                    Me considero una persona curiosa por naturaleza, siempre buscando aprender algo nuevo. Además, tengo una habilidad especial para <span className='font-bold text-highlight-purple'>liderar proyectos</span>,
                    motivando a mis compañeros y resolviendo conflictos de manera efectiva. Valoro enormemente el <span className='font-bold text-highlight-purple'>trabajo en equipo</span> y siempre busco colaborar para alcanzar los mejores resultados posibles.
                </p>
                <p className='font-github mt-2 mx-0 px-2 py-1 rounded-[0.375rem] h-auto flex-grow block sm:hidden'>
                    Soy Siro, estudiante de <span className='font-bold text-highlight-purple'>Desarrollo de Aplicaciones Multiplataforma</span>.
                    <br /><br />
                    Mi pasión es el <span className='font-bold text-highlight-purple'>desarrollo frontend</span>. Disfruto creando interfaces intuitivas y visualmente atractivas, y me interesa mucho trabajar con tecnologías como:
                    <br /><br />
                    <span className='font-bold text-highlight-purple text-xl'><Technologies /></span>
                    <br />
                    Me considero curioso, buen líder y un entusiasta del <span className='font-bold text-highlight-purple'>trabajo en equipo</span>.
                </p>
                <button 
                    onClick={downloadPdf}
                    className='mx-auto md:mx-0 w-1/3 button font-github sm:mx-5 px-2 py-1 rounded-[0.375rem] flex items-center border border-[rgb(240,246,252)] shadow-lg bg-action-color hover:bg-action-color-hover text-white transition-transform transform hover:scale-105 sm:hidden'>
                        <span className='mr-2'>CV</span>
                        <FiDownload />
                </button>                
            </div>
            
        </div>
    )

}

export default Biography;