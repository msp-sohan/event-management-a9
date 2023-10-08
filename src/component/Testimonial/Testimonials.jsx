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
   console.log(testimonials);

   useEffect(() => {
      fetch("../../../public/testimonial.json")
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, []);

   useEffect(() => {
      AOS.init({ duration: 2000 })
   }, [])

   return (
      <div data-aos="fade-left" className="h-[55vh] mb-12 container mx-auto shadow-2xl rounded drop-shadow-2xl p-5">
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
                     <p className="text-justify">{testimonial.message}</p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Testimonials;
