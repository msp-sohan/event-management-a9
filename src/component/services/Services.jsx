import { useEffect, useState } from "react";
import Service from "./Service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const Services = () => {
   const [events, setEvents] = useState([])
   useEffect(()=>{
      fetch("https://pvzsohan.github.io/eventapi/event.json")
      .then(res=>res.json())
      .then(data => setEvents(data))
   },[])

   useEffect(()=>{
      AOS.init({duration: 2000})
   },[])

   return (
      <div className="bg-white">
         <div className="container mx-auto py-28">
            <div className="text-center p-5">
               <h4 className="text-lg text-red-500 font-semibold mb-3">Our Service</h4>
               <h3 className="text-2xl xl:text-4xl font-semibold text-blue-800">We Provide the best service</h3>
               <hr className="border-b-2 border-b-gray-300 mx-auto mt-3" />
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[8vh] p-5">
               {
                  events.slice(0,6).map(event => <Service event={event} key={event.id}></Service>)
               }
            </div>
            <div className="text-center mt-8">
               <Link to="/service" className="text-2xl font-semibold uppercase p-4 text-white rounded-lg bg-opacity-80 btn-secondary">Show more</Link>
            </div>
         </div>
         
      </div>
   );
};

export default Services;