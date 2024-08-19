// Link
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-center items-center py-8 gap-y-6">
          <Link href={"/"}>
            <Image src="/logo.svg" width={220} height={48} alt="icon" priority />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
