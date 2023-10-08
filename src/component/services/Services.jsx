import { useEffect, useState } from "react";
import Service from "./Service";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
            <div className="text-center">
               <h4 className="text-lg text-red-500 font-semibold mb-3">Our Service</h4>
               <h3 className="text-2xl font-semibold">We Provide the best service</h3>
               <hr className="border-b-2 border-b-black w-80 mx-auto mt-2" />
            </div>
            <div data-aos="fade-up" className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 pt-[8vh]">
               {
                  events.map(event => <Service event={event} key={event.id}></Service>)
               }
            </div>
         </div>
      </div>
   );
};

export default Services;