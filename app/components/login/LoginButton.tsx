"use client";

import { signIn } from "next-auth/react";

async function handleSignIn() {
  await signIn("google");
}

function LoginButton() {
  return (
    <>
      <button
        onClick={handleSignIn}
        className="btn text-white btn-primary w-full"
      >
        LOGIN
      </button>
    </>
  );
}

export default LoginButton;
