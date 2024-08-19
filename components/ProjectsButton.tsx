import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsButton = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[180px] h-[180px] flex justify-center items-center group"
      >
        <Image
          src={"/rounded-text.png"}
          alt=""
          width={140}
          height={148}
          className="w-full h-full max-w-[141px] max-h-[148px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl group-hover:rotate-0 -rotate-90 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsButton;
