import "./index.css";

function MainContent({id, className, children }) {
  return (
    <div id={id} className={className}>
      <div className="w-full max-w-[1280px] p-4 flex justify-center transition-shadow duration-300 hover:shadow-2xl">
                {children}
            </div>
    </div>
  );
}

export default MainContent;
