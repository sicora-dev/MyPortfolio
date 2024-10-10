import { useEffect } from "react";
import "./index.css";

function MainContent({id, className, children}) {
  
  return (
    <div id={id} className={className}>
      <div className=" w-full lg:max-w-[1280px] sm:max-w-xl max-w-[1280px] p-4 flex items-center justify-center ">
                {children}
            </div>
    </div>
  );
}

export default MainContent;
