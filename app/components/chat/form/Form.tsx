"use client";
import { FormEvent, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Form() {
  const [text, setText] = useState("");
  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <>
      <div className="w-full flex items-center glass p-3 px-10 pr-3 rounded-full rounded-tl-sm rounded-bl-sm">
        <form onSubmit={handleFormSubmit} className="w-full flex">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-transparent focus:outline-none w-full"
            placeholder="Type here"
          />
          <button
            className={`rounded-full p-4 grid place-items-center transition-all duration-300 ${
              !text.length
                ? "bg-gray-950 text-gray-800 cursor-auto"
                : "bg-[#5E18D7]"
            }`}
          >
            <RiSendPlaneFill />
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
