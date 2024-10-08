import React from "react";
import Typewriter from "typewriter-effect";

function Technologies() {
  return (
    <div className="justify-center">
      <Typewriter
        options={{
          strings: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Kotlin",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          pauseFor: 500,
        }}
      />
    </div>
  );
}

export default Technologies;