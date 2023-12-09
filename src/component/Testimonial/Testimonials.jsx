/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';


// import required modules

const Testimonials = ({testimonials}) => {

   const breakpoints = {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      // 1024: {
      //    slidesPerView: 3
      // }
   };


   useEffect(() => {
      AOS.init({ duration: 2000 })
   }, [])

   return (
      <div data-aos="fade-up" className="h-[500px] mb-80 lg:mb-60 container mx-auto rounded px-60">
         <div className="text-center">
            <h2 className="text-xl text-red-500">Testimonial</h2>
            <h2 className="text-2xl lg:text-4xl font-semibold py-3 text-blue-800">
               What Our Client Say
            </h2>
            <p className="text-base pb-8 w-full lg:w-[40%] mx-auto">
               We place huge value on strong relationships and have seen the benefits they bring to our business. Customer feedback is vital in helping us to get it right.
            </p>
         </div>
         <Swiper
            spaceBetween={30}
            freeMode={true}
            pagination={{
               clickable: true,
            }}
            breakpoints={breakpoints}
            modules={[Pagination]}
            className="mySwiper w-96 px-24">
            {
               testimonials.map(testimonial => <SwiperSlide key={testimonial.id}>
                  <div data-aos="flip-left" className="px-10 shadow-2xl w-96 border rounded h-full hover:bg-blue-50 pt-14 ">
                     <div className="w-28 h-28 mx-auto">
                        <img src={testimonial.image} alt="" className="rounded-full object-cover" />
                     </div>
                     <h2 className="text-xl font-semibold pt-5">{testimonial.name}</h2>
                     <p className="text-[16px]">{testimonial.designation}</p>
                     <hr className="my-4" />
                     <p className=""><q> {testimonial.message}</q></p>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </div>
   );
};

export default Testimonials;
