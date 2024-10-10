import './index.css';

function Footer() {
    const email ='sirocornejoraez@gmail.com';
    const subject = 'Contacto desde portfolio';
    const body = '';

    const openEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    return (
        <footer className="font-github p-4 text-[rgb(240,246,252)] bg-[rgba(13,17,23,0.5)] backdrop-blur-sm mt-10">
            <div className="flex flex-col justify-center items-center">
                <ul className='flex flex-col space-x-4 mb-0 items-center gap-4'>                  
                    <p className="text-center">sirocornejoraez@gmail.com</p>
                </ul>

            </div>
        </footer>
    );

}

export default Footer;