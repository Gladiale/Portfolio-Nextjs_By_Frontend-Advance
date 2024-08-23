"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Required Modules
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// Testimonial Data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anana",
    position: "CEO - Taunna",
    message:
      "It is a world class design and development work at a fair price point. The team is professional, and nailed the final product. 10/10 recommend!",
  },
  {
    image: "/t-avt-2.png",
    name: "Doe",
    position: "C00 - Patrik",
    message:
      "It is a world class design and development work at a fair price point. The team is professional, and nailed the final product. 10/10 recommend!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jimmi",
    position: "customer",
    message:
      "It is a world class design and development work at a fair price point. The team is professional, and nailed the final product. 10/10 recommend!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center gap-x-8 h-full px-16">
            {/* Avatar, Name, Position */}
            <div className="w-full flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* Image */}
                <div className="mt-16 mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>

                {/* Name */}
                <div className="text-lg">{person.name}</div>

                {/* Position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              <div className="xl:text-lg mt-3 w-[80%] text-center md:text-center">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
