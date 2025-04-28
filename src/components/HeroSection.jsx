import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImage from "../assets/men-bg.webp";
import image1 from "../assets/swiper-img1.png";
import image2 from "../assets/swiper-img2.png";
import image3 from "../assets/swiper-img3.png";
import image4 from "../assets/swiper-img4.png";
import image5 from "../assets/swiper-img5.png";
import image6 from "../assets/ecommerce-agencies.png";
import image7 from "../assets/img-5star.png";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col lg:flex-row items-center py-10 px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8 mb-12 lg:mb-0">
        <h1 className="text-4xl text-white font-bold mb-4">
          Top-Rated<br></br> eCommerce <br></br> Development <br></br> Company
        </h1>
        <p className="text-lg text-white mb-6">
          Our highly rated eCommerce development agency supports businesses to
          grow their sales and revenues while increasing their customer base.
        </p>
        <ul className="text-white space-y-2 mb-6">
          <li className="flex items-center">.End-to-End eCommerce Design</li>
          <li className="flex items-center">.Frontend & Backend Development</li>
          <li className="flex items-center">.eCommerce Marketing</li>
        </ul>

        <button className="px-6 py-3 w-full sm:w-1/2 bg-blue-500 text-white text-lg font-semibold rounded-full transition-all duration-300 ease-in-out hover:gradient-animate">
          Request a Quote
        </button>

        {/* New Row with 2Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* First Column */}
          <div className="flex items-center space-x-4">
            <img
              src={image7}
              alt="5 Star DesignRush Reviews"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-white">5 Star DesignRush Reviews</p>

              <div className="flex space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex items-center space-x-4">
            <img
              src={image6}
              alt="Ecommerce Excellence Award"
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-white">Ecommerce</p>
              <p className="text-white">Excellence Award</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:pl-8">
        {/* Swiper Carousel*/}
        <div className="relative flex-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-lg overflow-hidden"
          >
            <SwiperSlide>
              <img
                src={image1}
                alt="Ecommerce 1"
                className="w-45 h-40 object-cover mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="Ecommerce 2"
                className="w-45 h-40 object-cover mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="Ecommerce 3"
                className="w-45 h-40 object-cover mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image4}
                alt="Ecommerce 4"
                className="w-45 h-40 object-cover mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image5}
                alt="Ecommerce 5"
                className="w-45 h-40 object-cover mx-auto rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Video Player */}
        <div className="relative flex w-full">
          <div className="relative w-1/3 h-0 pb-[25%] lg:pb-[20%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.digitalsilk.com/web-development/ecommerce-development/"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Ecommerce Video"
            ></iframe>
          </div>

          <div className=" text-white sm:mt-2 w-2/3 ml-6 w-1/3">
            <div className="block mb-1">SEE OUR WORK</div>
            <div className="block font-semibold mb-1">IN ACTION</div>
            <div className="block mb-1">1 MINUTE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
