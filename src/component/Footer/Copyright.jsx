import { Link } from "react-router-dom";


const Copyright = () => {
   return (
      <div className="">
         <div className="text-center py-4 bg-[#08355e]">
            <p className='text-gray-300 text-sm'>© 2023<Link href='/' target='_blank'
               className="hover:underline mx-1" rel="noreferrer">EventWonders</Link>All Rights Reserved.</p>
         </div>
      </div>
   );
};

export default Copyright;