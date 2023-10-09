import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HowitWork = () => {
   
   useEffect(() => {
      AOS.init({ duration: 2000 })
   }, [])

   return (
      <div data-aos="fade-up" className="mb-20">
         <div className="container mx-auto text-center px-5">
            <h2 className="text-3xl font-semibold text-blue-800">How It Work</h2>
            <p className="text-sm lg:text-base px-6 pt-5 pb-10">We do our work with lots of love and dedication. We have created a great environment of energy to ensure the creative ideas coming out from our minds.</p>
         </div>
         <div className="container mx-auto px-5 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md hover:translate-y-1">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Apazing <br /> people</h3>
                  <img src="https://i.ibb.co/9HPyBK1/icon-1.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">Working hard as a group of highly talented and friendly people who make sure all the arrangements in an event goes well.</p>
            </div>
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Best
                  <br />   Experienced</h3>
                  <img src="https://i.ibb.co/w4nGgM7/icon-2.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">EventWonders events is well experienced and highly trusted in the field of events management service provider. We have served lots of clients and gave them satisfying results.</p>
            </div>
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Innovation
                  <br />   Oriented</h3>
                  <img src="https://i.ibb.co/LgLfCVf/icon-3.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">EventWonders events is known for its unique and innovative approach towards every event. We never use traditional methods to establish an event setup.</p>
            </div>
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Different
                  <br />   Approach</h3>
                  <img src="https://i.ibb.co/S66MwSc/icon-4.png.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">Continuously providing different ideas to make the events attractive and indulging. We are using the latest techniques to create the required environment in your event.</p>
            </div>
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Professional
                   <br />  Team</h3>
                  <img src="https://i.ibb.co/ZVKY2YZ/icon-5.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">A highly experienced and educated team of the individuals that know how to handle all the possibilities of problems and hassles.</p>
            </div>
            <div data-aos="flip-down" className="p-5 drop-shadow-2xl bg-white rounded-md">
               <div className="flex justify-between items-center pb-5">
                  <h3 className="text-lg lg:text-2xl font-semibold border-b-2 pb-2 border-gray-500">Quality
                  <br />   Services</h3>
                  <img src="https://i.ibb.co/1fQ595Z/icon-6.png" alt="" />
               </div>
               <p className="text-md lg:text-lg">High-Quality, Quick and reliable services on the most affordable prices in the industry of event management.</p>
            </div>
         </div>
      </div>
   );
};

export default HowitWork;