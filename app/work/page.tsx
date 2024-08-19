"use client";

import { smoothIn } from "@/animate";
import WorkSlider from "@/components/WorkSlider";

// Animation
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="h-full py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[60vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={smoothIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={smoothIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-auto text-black lg:mx-0"
            >
              It's a small startup agency. We help businesses elevate their value through custom
              software development, product design, QA and consultancy services. We will help you to
              ideate, design and implement your product from conception to iterative.
            </motion.p>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={smoothIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
