// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {

   return (
      <>
         <div className="h-screen">
            <Swiper
               spaceBetween={30}
               speed={1000}
               centeredSlides={true}
               autoplay={{
                  delay: 5500,
                  disableOnInteraction: false
               }}
               pagination={{
                  clickable: true
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper"
            >
               <SwiperSlide className="relative"><img src="https://i.ibb.co/n6C3gBm/wedding.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Wedding Event Management</p></SwiperSlide>
               <SwiperSlide className="relative"><img src="https://i.ibb.co/PCqG1tS/birthday.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Creating Memorable Birthdays</p></SwiperSlide>
               <SwiperSlide className="relative"><img src="https://i.ibb.co/2FyxvkX/anniversaries.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Crafting Memorable Anniversaries</p></SwiperSlide>
               <SwiperSlide className="relative"><img src="https://i.ibb.co/NmSbXrS/engagement.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Engagement Elegance Services</p></SwiperSlide>
               <SwiperSlide className="relative"><img src="https://i.ibb.co/bQpCX9d/retirement.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Retirement Extravaganza</p></SwiperSlide>
               <SwiperSlide className="relative"><img src="https://i.ibb.co/1QxnXWV/baby-shower.jpg" alt="" /><p className="absolute bottom-20 text-2xl lg:text-3xl bg-[#0a4275] text-white p-1 xl:p-2 font-semibold rounded bg-opacity-50 tracking-normal lg:tracking-widest">Showering Baby with Love</p></SwiperSlide>
            </Swiper>
         </div>
      </>
   );
};

export default Banner;



// const Banner = () => {
//    return (
//       <div>

//          <div id="default-carousel" className="relative w-full" data-carousel="slide">
//             {/* <!-- Carousel wrapper --> */}
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                {/* <!-- Item 1 --> */}
//                <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="https://i.ibb.co/CwvPz9f/food-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                </div>
//                {/* <!-- Item 2 --> */}
//                <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="https://i.ibb.co/3c4zmMk/rectangle-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                </div>
//                {/* <!-- Item 3 --> */}
//                <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="https://i.ibb.co/FmHySkB/Rectangle-4281.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                </div>
//                {/* <!-- Item 4 --> */}
//                <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="https://i.ibb.co/VmNmmdj/rectangle-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                </div>
//                {/* <!-- Item 5 --> */}
//                <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="https://i.ibb.co/3c4zmMk/rectangle-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                </div>
//             </div>
//             {/* <!-- Slider indicators --> */}
//             <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>
//             {/* <!-- Slider controls --> */}
//             <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//                   </svg>
//                   <span className="sr-only">Previous</span>
//                </span>
//             </button>
//             <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//                   </svg>
//                   <span className="sr-only">Next</span>
//                </span>
//             </button>
//          </div>

//       </div>
//    );
// };

// export default Banner;