
import "./index.css";

function MainContent({id, className, children}) {
  
  return (
    <div id={id} className={className}>
      <div
        className={`sm:max-w-xl lg:max-w-[1280px] max-w-[1280px] p-4 flex items-center justify-center hover:shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
}

export default MainContent;
