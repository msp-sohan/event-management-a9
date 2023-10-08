// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Banner/banner.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
   const [testimonials, setTestimonials] = useState([]);

   useEffect(() => {
      fetch("https://pvzsohan.github.io/eventapi/testimonial.json")
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, []);

   useEffect(() => {
      AOS.init({ duration: 2000 })
   }, [])

   return (
      <div data-aos="fade-left" className="h-[55vh] mb-60 container mx-auto rounded drop-shadow-2xl p-5">
         <div className="text-center">
            <h2 className="text-xl text-red-500">Testimonial</h2>
            <h2 className="text-4xl font-semibold py-3 text-blue-800">What Our Client Say</h2>
            <p className="text-base pb-8 w-[40%] mx-auto">We place huge value on strong relationship and have seen the benefit the bring to out bussiness. Customer feedback is vital in helping us to get it right</p>
         </div>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
               clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper">
            {testimonials.map(testimonial => (
               <SwiperSlide key={testimonial.id}>
                  <div data-aos="flip-left" className="p-10 rounded">
                     <div className="w-28 h-28 mx-auto">
                        <img src={testimonial.image} alt="" className="rounded-full object-cover" />
                     </div>
                     <h2 className="text-xl font-semibold pt-5">{testimonial.name}</h2>
                     <p className="text-[16px]">{testimonial.designation}</p>
                     <hr className="my-4" />
                     <p className="text-justify"><q> {testimonial.message}</q></p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Testimonials;
