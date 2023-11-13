"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)

import { signOut, useSession } from "next-auth/react"; // Importing signOut and useSession from next-auth
import Image from "next/image"; // Importing Image component from next/image

function Navbar() {
  const session = useSession(); // Using the useSession hook to get authentication status

  return (
    <>
      <div className="glass p-2 z-50 py-2 md:p-3 md:pl-10 rounded-full rounded-tl-sm rounded-bl-sm w-full flex items-center justify-between">
        <span className="text-2xl md:text-3xl font-extrabold select-none cursor-pointer">
          <span className="text-primary">C</span>he
          <span className="text-primary">tt</span>y
          <span className="text-primary">.</span>
        </span>

        <div className="dropdown dropdown-bottom dropdown-end w-full">
          <label tabIndex={0}>
            <Image
              src={session.data?.user?.image as string}
              width={1000}
              height={1000}
              className="w-14 md:w-14 rounded-full border-4 border-[#2F1E4B] ml-auto"
              quality={100}
              alt="Image"
            />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-fit max-w-sm p-2 mt-4 shadow dropdown-bg text-primary-content rounded-tr-none"
          >
            <div className="card-body">
              <h3 className="card-title">Hola!</h3>
              <p className="leading-6">
                You&apos;re currently logged in as {session.data?.user?.email}.
                For logout,{" "}
                <span
                  onClick={() => {
                    void signOut();
                  }}
                  className="text-red-500 hover:text-red-400 transition-all underline cursor-pointer select-none"
                >
                  Click here.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
