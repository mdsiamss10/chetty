"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)

import { deleteMessage } from "@/actions";
import { signOut, useSession } from "next-auth/react"; // Importing signOut and useSession from next-auth
import Image from "next/image"; // Importing Image component from next/image
import { useState } from "react";

function Navbar() {
  const session = useSession(); // Using the useSession hook to get authentication status
  const [password, setPassword] = useState("");

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
                </span>{" "}
                <span>To delete all messages,</span>{" "}
                <span
                  className="text-red-500 hover:text-red-400 transition-all underline cursor-pointer select-none"
                  onClick={() =>
                    // @ts-ignore
                    document.getElementById("my_modal_2")?.showModal()
                  }
                >
                  Click here.
                </span>
                {/* Modal with ID "my_modal_1" */}
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Please enter the security password to continue:
                    </p>

                    {/* Form for entering the password */}
                    <form
                      className="w-full"
                      autoComplete="off"
                      onSubmit={async () => {
                        if (password.length && password === "iamcow") {
                          await deleteMessage();
                        }
                      }}
                    >
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="input input-primary w-full"
                        placeholder="******"
                      />
                      <input
                        type="submit"
                        value="DELETE"
                        disabled={
                          password.length && password === "iamcow"
                            ? false
                            : true
                        } // Disable the submit button if the password is not entered or does not match
                        className="btn btn-primary w-full mt-4"
                      />
                    </form>

                    {/* Hidden modal action */}
                    <div className="modal-action hidden">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
