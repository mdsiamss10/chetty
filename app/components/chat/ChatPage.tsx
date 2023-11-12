"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import PasswordModal from "./PasswordModal";
import Form from "./form/Form";
import Navbar from "./navbar/Navbar";

function ChatPage() {
  const session = useSession();

  //! Open Modal if password is not set to localstorage
  useEffect(() => {
    if (localStorage.getItem("isPasswordSet") !== "true") {
      // @ts-ignore
      document.getElementById("my_modal_1")?.showModal();
    }
  }, []);
  if (localStorage.getItem("isPasswordSet") !== "true") {
    return <PasswordModal />;
  }

  //! Show loading if user is not loaded
  if (session.status === "loading") {
    return (
      <>
        <div className="h-[100dvh] grid place-items-center">
          <span className="loading loading-infinity w-[4rem] opacity-70 text-white"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container container_glass mx-auto max-w-4xl max-h-[100dvh] h-[100dvh] p-2 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-y-auto overflow-x-hidden grid place-items-center">
          <h1 className="font-extrabold text-3xl">Hello!</h1>
        </div>
        <Form />
      </div>
    </>
  );
}

export default ChatPage;
