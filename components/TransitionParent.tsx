"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";

const TransitionParent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div className="h-full">
        <Transition key={pathname} />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default TransitionParent;
