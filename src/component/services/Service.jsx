import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Service = ({ event }) => {
   const { id, photo, title, shortDescription } = event || {};

   useEffect(() => {
      AOS.init({ duration: 2000 })
   }, [])

   return (
      <div className="flex flex-col h-full">
         <div data-aos="fade-up" className="mx-3 relative mt-6 pb-8 flex-shrink-0 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
               <img className="rounded-t-lg w-full h-[35vh]" src={photo} alt="Hollywood Sign on The Hill" />
            </a>
            <div className="p-6 flex-grow">
               <h5 className="mb-3 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                  {title}
               </h5>
               <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {shortDescription}
               </p>
               <div className="absolute bottom-3">
                  <button className="btn-ghost bg-[#0a4275] text-white hover:text-black p-2 rounded font-semibold text-lg">
                     <Link to={`./service/${id}`}>Show Details</Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Service;
