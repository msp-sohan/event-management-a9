
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";


const ServiceDetails = () => {
const events = useLoaderData()
console.log(events)



   const {id} = useParams()

   const single = events.find(event=>event.id === parseInt(id))
   console.log(single)


   return (
      <div className="bg-white">
         <div className="pt-32 container mx-auto bg-white">
            <div className="w-[80%] mx-auto mb-20">
               <div className="mb-5 mx-auto">
                  <img className="w-full h-[650px]" src={single.photo} alt="" />
               </div>
               <div className="flex justify-between">
                  <div>
                     <p className="text-lg ">Price: <span className="text-lg text-yellow-500">{single.price}</span></p>
                     <p className="text-lg ">Date: <span className="text-lg text-yellow-500">{single.date}</span></p>
                  </div>
                  <div>
                     <p className="text-lg ">Location: <span className="text-lg text-yellow-500">{single.location}</span></p>
                     <p className="text-lg">Duration: <span className="text-lg text-yellow-500">{single.duration}</span></p>
                  </div>
               </div>
               <div>
                  <h3 className="text-3xl font-semibold text-blue-700 my-5">{single.title}</h3>
                  <p className="py-6">{single.shortDescription}</p>
                  <p>{single.description}</p>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ServiceDetails;