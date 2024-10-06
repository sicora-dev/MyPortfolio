import React from "react";
import Typewriter from "typewriter-effect";

function Puntoscarga() {
  return (
    <div className="inline-block">
      <Typewriter
        options={{
          strings: [
            "..."
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          pauseFor: 100,
          cursor: "",
        }}
      />
    </div>
  );
}

export default Puntoscarga;