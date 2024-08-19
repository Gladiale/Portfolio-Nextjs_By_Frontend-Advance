"use client";

import Stack from "@/components/Stack";
import ProjectsButton from "@/components/ProjectsButton";
import Avatar from "@/components/Avatar";
import { smoothIn } from "@/animate";

// Framer Motion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-full">
      {/* Left Text Section */}
      <div className="w-full h-full">
        <div className="text-center h-full flex flex-col justify-center xl:text-left container mx-auto">
          {/* Stack Logos */}
          <motion.div
            variants={smoothIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 flex justify-center xl:justify-start"
          >
            <Stack />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={smoothIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Design. Development. <br />
            <span className="text-accent">Mastership.</span>
          </motion.h1>

          {/* SubTitle */}
          <motion.p
            variants={smoothIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl text-black mx-auto xl:mx-0"
          >
            We design and develop exceptional digital products and services, eCommerce, and brand
            communication solutions.
          </motion.p>

          {/* Project Circle Button */}
          {/* <div className="hidden justify-center relative z-10">
            <ProjectsButton />
          </div>
          <motion.div
            variants={smoothIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden"
          >
            <ProjectsButton />
          </motion.div> */}

          {/* Button */}
          <motion.div
            variants={smoothIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-6 flex gap-x-4 justify-center xl:justify-start z-10"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="btn rounded-full bg-white text-white border border-black/20 px-8 transition-all duration-300 flex items-center overflow-hidden hover:border-accent group"
            />
            <button
              type="submit"
              className="flex-none rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-accent"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Banner Section */}
      <div className="w-full h-full">
        <motion.div
          variants={smoothIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[670px] max-h-[700px] absolute top-32 lg:bottom-0 lg:right-[2%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
