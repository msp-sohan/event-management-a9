import { useLoaderData } from "react-router-dom";
import OurService from "./OurService";
import Footer from "../../component/Footer/Footer";
import Partner from "../../component/Partner/Partner";


const OurServices = () => {
   const services = useLoaderData()
   return (
      <div>
         <div className="relative flex justify-center items-end">
            <img className="h-[50vh] w-full" src="https://i.ibb.co/nwVTtSv/our-services.jpg" alt="" />
            <h3 className="absolute font-semibold text-xl lg:text-4xl bottom-10 text-white bg-blue-800 p-1 lg:p-2 rounded bg-opacity-50">Our Services</h3>
         </div>
         <div className="container mx-auto">
            <h3 className="text-center text-3xl font-semibold text-blue-800 mt-20">The Services We Provide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[8vh] p-5">
               {
                  services.map(service => <OurService key={service.id} service={service}></OurService>)
               }
            </div>
         </div>
         {/* <div className="pt-12 bg-gradient-to-r from-cyan-300 to-blue-200 bg-opacity-50">
            <h3 className="text-center text-3xl lg:text-4xl font-semibold text-blue-800 mb-5">Our Corporate Clients</h3>
            <Partner></Partner>
         </div> */}
         <div className="flex flex-col items-center justify-center text-center px-5 py-16 my-24 bg-gradient-to-r from-pink-400 to-violet-500">
            <h3 className="text-2xl lg:text-3xl font-semibold">Write your special wishes. We love to hear from all of you...</h3>
            <button className="btn rounded-3xl mt-5">get in touch</button>
         </div>

         <Footer></Footer>
      </div>
   );
};

export default OurServices;