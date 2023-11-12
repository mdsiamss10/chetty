"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LoginButton from "./LoginButton";

function LoginPage() {
  return (
    <>
      <div className="flex h-[100dvh] login_page_main flex-col justify-center items-center">
        <div className="p-3 w-screen md:w-fit md:backdrop-blur rounded-md text-center h-full md:h-fit flex flex-col justify-center items-center">
          <motion.div initial={{ y: 50 }} animate={{ y: -20 }}>
            <Image
              src="/logo.png"
              width={1000}
              height={1000}
              className="w-[20rem] mx-auto cursor-pointer"
              quality={1}
              alt="Image"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 5 }}
            className="text-center lg:my-8 flex flex-col gap-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
              You asked<span className="text-purple-500">.</span>
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white">
              I delivered<span className="text-purple-500">.</span>
            </h1>
          </motion.div>
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
