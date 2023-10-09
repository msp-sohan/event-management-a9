import { Link } from "react-router-dom";


const OurService = ({service}) => {
   const { id, photo, price, title, shortDescription } = service || {};

   return (
      <div className="flex flex-col h-full hover:drop-shadow-xl">
         <div className="px-0 relative mt-6 pb-8 flex-shrink-0 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <div className="relative flex justify-center items-center opacity-60 hover:opacity-100">
               <img className="rounded-t-lg w-full h-[35vh] hover:from-secondary-focus" src={photo} alt="EventWonders" />
            </div>
            <div className="p-3 flex-grow">
               <p>Price: <span className="font-semibold text-blue-900">{price}</span></p>
               <h5 className="my-3 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                  {title}
               </h5>
               <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {shortDescription}
               </p>
               <div className="absolute bottom-3">
                  <button className="btn-ghost bg-[#0a4275] text-white hover:text-black py-1 px-2 rounded font-semibold text-lg text-justify">
                     <Link to={`./${id}`}>Show Details</Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurService;