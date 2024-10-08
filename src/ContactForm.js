import React, { useEffect } from "react";
import "./index.css";

function ContactForm() {
    
  return (
    <div class="w-full max-w-screen-sm items-center justify-center">
      <form class="bg-[rgba(13,17,23,0.5)] shadow-md rounded-[0.375rem] px-8 pt-6 pb-8">
        <div class="mb-4">
          <label
            class="block text-highlight-purple text-md font-bold mb-2"
            for="username"
          >
            Correo Electrónico
          </label>
          <input
            class="shadow appearance-none border rounded-[0.375rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-highlight-purple focus:border-highlight-purple"
            id="email"
            type="mail"
            
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-highlight-purple text-md font-bold mb-2 w-fit"
            for="message"
          >
            Mensaje
          </label>
          <textarea
            className="shadow appearance-none border rounded-[0.375rem] w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-highlight-purple focus:border-highlight-purple"
            id="message"
            rows="4"
          />
          
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-action-color hover:bg-action-color-hover text-white font-bold py-2 px-4 rounded-[0.375rem] transform ease-in-out duration-200 focus:outline-none focus:shadow-outline hover:scale-105"
            type="button"
          >
            Enviar
          </button>
          
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
