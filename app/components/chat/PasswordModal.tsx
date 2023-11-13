"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)

import { useState } from "react"; // Importing useState hook from React

function PasswordModal() {
  const [password, setPassword] = useState(""); // State for storing the password

  return (
    <>
      {/* Button to trigger the modal, set to display: none */}
      <button
        className="btn"
        // @ts-ignore
        onClick={() => document.getElementById("my_modal_1")?.showModal()} // Show the modal when the button is clicked
        style={{ display: "none" }}
      >
        Open Modal
      </button>

      {/* Modal with ID "my_modal_1" */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Please enter the security password to continue:
          </p>

          {/* Form for entering the password */}
          <form
            className="w-full"
            autoComplete="off"
            onSubmit={() => {
              if (password.length && password === "iamcow") {
                // If the password is not empty and matches the expected value, set a flag in localStorage
                localStorage.setItem("isPasswordSet", "true");
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
              value="BEG TO CHAT"
              disabled={password.length && password === "iamcow" ? false : true} // Disable the submit button if the password is not entered or does not match
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
    </>
  );
}

export default PasswordModal;
