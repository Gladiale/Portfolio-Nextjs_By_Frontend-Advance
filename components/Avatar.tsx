import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/art.png"}
        alt=""
        width={670}
        height={700}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
