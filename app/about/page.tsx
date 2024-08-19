"use client";

import AvatarPerson from "@/components/AvatarPerson";
import Socials from "@/components/Socials";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

const About = () => {
  return (
    <div className="h-full py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Side Content */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={smoothIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            A <span className="text-accent">professional</span> writer makes big differ.
          </motion.h2>
          <motion.p
            variants={smoothIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 text-black mb-3 xl:mb-6 px-2 xl:px-0"
          >
            Highly creative strategic media and technology leader, speaker and advisor who has
            received wide industry recognition for his impact including being top executives at
            forties500.
          </motion.p>

          <motion.div variants={smoothIn("right", 0.6)} initial="hidden" animate="show">
            <div className="flex justify-center xl:justify-start">
              <Socials />
            </div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <motion.div
          variants={smoothIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0">
            <AvatarPerson />
          </div>

          {/* Count Up Experience */}
          <div className="flex-1 flex justify-center absolute mt-16 p-5 bg-white/90 rounded-full z-10">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <CountUp start={0} end={10} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of experience
            </div>
          </div>

          {/* Count Up Projects */}
          <div className="flex-1 flex justify-center absolute mt-80 ms-96 p-5 bg-white/90 rounded-full z-10">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <CountUp start={0} end={15} duration={5} />K
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished Projects
            </div>
          </div>

          {/* Count Up Awards */}
          <div className="flex-1 flex justify-center absolute mt-96 ms-20 p-5 bg-white/90 rounded-full z-10">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <CountUp start={0} end={12} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Winning Awards
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
