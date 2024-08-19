"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Required Modules
import { FreeMode, Pagination } from "swiper/modules";

const skillData = [
  {
    image: "/ico-1.png",
    title: "Branding",
    description: "Minimal personal page (built with Framer) for freelance product designer.",
  },
  {
    image: "/ico-2.png",
    title: "Design",
    description: "Featuring a unique bento gird of preview images when you click projects.",
  },
  {
    image: "/ico-3.png",
    title: "Development",
    description:
      "Clean One Pager for Relay grid of the design studio led when you click his projects.",
  },
  {
    image: "/ico-4.png",
    title: "Mobile Apps",
    description:
      "Lots of fun stuff in here like a when you click his projects unique bento gird of preview images.",
  },
  {
    image: "/ico-2.png",
    title: "SEO",
    description:
      "chat bot and even a pong game fun stuff in that discounts his services if you beat the house.",
  },
];

const ServiceSlider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {skillData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              <div className="text-4xl mb-4">
                <Image src={item.image} width={50} height={50} alt="" />
              </div>

              {/* Title Description */}
              <div className="mb-2">
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="">{item.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
