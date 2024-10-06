

import './index.css';

function MainContent({ children }) {
    return (
        <div className="flex justify-center text-[rgb(240,246,252)] p-4 ">
            <div className="w-full max-w-[1280px] p-4 flex justify-between transition-shadow duration-300 hover:shadow-2xl">
                {children}
            </div>
        </div>
    );
}

export default MainContent;