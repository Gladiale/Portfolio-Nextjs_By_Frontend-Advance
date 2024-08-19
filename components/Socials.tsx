import Link from "next/link";
import {
  RiBubbleChartFill,
  RiDribbbleFill,
  RiMessageFill,
  RiPatreonFill,
  RiWhatsappFill,
  RiYuqueFill,
} from "react-icons/ri";

const socialData = [
  { name: "home", path: "/", icon: <RiBubbleChartFill /> },
  { name: "home", path: "/", icon: <RiDribbbleFill /> },
  { name: "home", path: "/", icon: <RiMessageFill /> },
  { name: "home", path: "/", icon: <RiPatreonFill /> },
  { name: "home", path: "/", icon: <RiWhatsappFill /> },
  { name: "home", path: "/", icon: <RiYuqueFill /> },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-black">
      {socialData.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
