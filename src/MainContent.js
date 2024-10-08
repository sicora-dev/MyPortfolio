import './index.css';

function MainContent({ children }) {
    
    return (
        <div className=" absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center text-[rgb(240,246,252)] p-4 transform duration-200 ease-in-out">
            <div className="w-full max-w-[1280px] p-4 flex justify-between transition-shadow duration-300 hover:shadow-2xl">
                {children}
            </div>
        </div>
    );
}

export default MainContent;