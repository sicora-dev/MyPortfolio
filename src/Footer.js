import './index.css';

function Footer() {
    const email ='sirocornejoraez@gmail.com';
    const subject = 'Contacto desde portfolio';
    const body = '';

    const openEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    return (
        <footer className="font-github w-full p-4 text-[rgb(240,246,252)] bg-[rgba(13,17,23,0.5)] backdrop-blur-sm mt-10">
            <div className="flex flex-col justify-center items-center">
                <ul className='flex flex-col space-x-4 mb-0 items-center gap-4'>
                    <li>
                        <a 
                        href= {openEmail}
                        className='font-raleway px-2 py-1 rounded-[0.375rem] flex border border-[rgb(240,246,252)] button-efecto-slide transition-transform transform hover:scale-105'>
                            Contact me
                        </a>
                    </li>
                    
                    <p className="text-center">sirocornejoraez@gmail.com</p>
                </ul>

            </div>
        </footer>
    );

}

export default Footer;