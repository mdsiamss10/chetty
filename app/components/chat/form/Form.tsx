/* eslint-disable react-hooks/exhaustive-deps */ // Disable exhaustive-deps rule for React Hooks

"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)
import { addIsTypingToUserColl, handleFormSubmit } from "@/actions"; // Importing actions
import { useSession } from "next-auth/react"; // Importing useSession hook from next-auth
import { useEffect, useState } from "react"; // Importing React and its hooks/components
import { RiSendPlaneFill } from "react-icons/ri"; // Importing a specific icon from react-icons

function Form() {
  const [text, setText] = useState(""); // State for storing the input text
  const session = useSession(); // Using the useSession hook to get authentication status

  useEffect(() => {
    // Effect to update isTyping in user collection based on the length of the input text
    addIsTypingToUserColl(
      text.length ? true : false,
      session.data?.user?.email
    );
  }, [text]);

  return (
    <>
      <div className="w-full flex items-center glass p-3 px-10 pr-3 rounded-full rounded-tl-sm rounded-bl-sm">
        <form
          onSubmit={async (e) => {
            let newText = text;
            setText("");
            await handleFormSubmit(
              e,
              newText,
              session.data?.user?.name,
              session.data?.user?.email,
              session.data?.user?.image
            );
          }}
          className="w-full flex"
        >
          <input
            type="text"
            value={text}
            onChange={async (e) => {
              setText(e.target.value);
            }}
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
