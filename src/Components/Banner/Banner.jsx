// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";
import slider1 from "../../assets/Image/action.jpg";
import slider2 from "../../assets/Image/racing.webp";
import slider3 from "../../assets/Image/adventure.jpg";
import slider4 from "../../assets/Image/action1.jpg";
import slider5 from "../../assets/Image/action3.jpg";

const Banner = () => {
  return (
    <div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className=" px-6 py-10  "
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg "
      >
        <SwiperSlide>
          <Slide image={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slider5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
