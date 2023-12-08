import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const FeaturedFood = () => {
    return (
        <div className="my-10">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <img src={slide1} alt="" />
                  <p className="uppercase text-3xl -mt-10 text-center text-white">salad</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide2} alt="" />
                  <p className="uppercase text-3xl -mt-10 text-center text-white">soups</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide3} alt="" />
                  <p className="uppercase text-3xl -mt-10 text-center text-white">pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide4} alt="" />
                  <p className="uppercase text-3xl -mt-10 text-center text-white">dessert</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide5} alt="" />
                  <p className="uppercase text-3xl -mt-10 text-center text-white">salad</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeaturedFood;
