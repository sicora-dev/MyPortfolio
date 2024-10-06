import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Type from './Type';
import './index.css';

function Biography() {

    const downloadPdf = () => {
        window.open('https://drive.google.com/file/d/17f5HSPRRS2Yy0QMX4XNuuFhjxzAIo-wk/view?usp=sharing' , '_blank');

    
    }
    return (
        <div className='flex flex-grow flex-col sm:flex-row bg-[rgba(13,17,23,0.5)] p-5 rounded-[0.375rem] gap-4 '>
            <img src='/foto_carnet.jpg' alt='Foto de Carnet' className=' w-50 h-80 object-cover rounded-[0.375rem] xl:w-100 transition-transform transform hover:scale-105' />
            <div className='ml-4 flex-grow items-center'>
                <div className='flex mx-4 px-2 items-center justify-between sm:justify-normal'>
                    <h2 className='font-github text-xl py-1 rounded-[0.375rem] font-bold text-highlight-purple'>ME PRESENTO...</h2>
                    <button 
                    onClick={downloadPdf}
                    className='font-github ml-0 sm:ml-4 px-2 py-1 rounded-[0.375rem] flex items-center border button-efecto-slide transition-transform transform hover:scale-105'>
                        <span className='mr-2 '>CV</span>
                        <FiDownload />
                    </button>
                </div>
                
                <p className='font-github mt-2 mx-4 px-2 py-1 rounded-[0.375rem] h-auto flex-grow'>
                    Me llaman Siro, y estoy en proceso de convertirme en <span className='font-bold text-highlight-purple'>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</span>.
                    <br /><br />
                    Mi verdadera pasión es el <span className='font-bold text-highlight-purple'>desarrollo frontend</span>, lo que me lleva a aprender constantemente y a enfrentar nuevos desafíos con entusiasmo.
                    Me encanta crear interfaces de usuario que sean tanto intuitivas como visualmente atractivas, y tengo un gran interés en tecnologías como <span className='font-bold text-highlight-purple'><Type /></span>.
                    <br /><br />
                    Me considero una persona curiosa por naturaleza, siempre buscando aprender algo nuevo. Además, tengo una habilidad especial para <span className='font-bold text-highlight-purple'>liderar proyectos</span>,
                    motivando a mis compañeros y resolviendo conflictos de manera efectiva. Valoro enormemente el <span className='font-bold text-highlight-purple'>trabajo en equipo</span> y siempre busco colaborar para alcanzar los mejores resultados posibles.
                </p>
            </div>
        </div>
    )

}

export default Biography;