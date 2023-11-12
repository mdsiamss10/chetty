"use client";

import { useState } from "react";

function PasswordModal() {
  const [password, setPassword] = useState("");
  return (
    <>
      <button
        className="btn"
        // @ts-ignore
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
        style={{ display: "none" }}
      >
        Open Modal
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Please enter security password to continue:</p>
          <form
            className="w-full"
            autoComplete="off"
            onSubmit={() => {
              if (password.length && password === "iamcow") {
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
              disabled={password.length && password === "iamcow" ? false : true}
              className="btn btn-primary w-full mt-4"
            />
          </form>
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
