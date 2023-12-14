"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)

import { motion } from "framer-motion"; // Importing motion from framer-motion library
import type { Metadata } from "next";
import LoginButton from "./LoginButton"; // Importing LoginButton component

export const metadata: Metadata = {
  title: "Chetty - Login",
  description: "Chetty login page",
};

function LoginPage() {
  return (
    <>
      {/* Main container for the login page */}
      <div className="flex h-[100dvh] login_page_main flex-col justify-center items-center">
        {/* Container for the login content */}
        <div className="p-3 w-screen md:w-fit md:backdrop-blur rounded-md text-center h-full md:h-fit flex flex-col justify-center items-center">
          {/* Animated logo and title */}
          <motion.div initial={{ y: 50 }} animate={{ y: -20 }}>
            <span className="text-2xl md:text-5xl font-extrabold select-none cursor-pointer">
              {/* Animated individual letters in the title */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary"
              >
                C
              </motion.span>
              <span>he</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary"
              >
                tt
              </motion.span>
              y<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Animated tagline */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 5 }}
            className="text-center lg:my-8 flex flex-col gap-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
              You asked<span className="text-purple-500">.</span>
            </h1>
            <h1 className="text-[3.65rem] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white">
              I delivered
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-purple-500"
              >
                .
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated login button */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 25 }}
            className="mt-8 w-full sm:px-14 md:px-0"
          >
            <LoginButton />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
