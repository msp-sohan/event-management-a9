import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import Copyright from "../component/Footer/Copyright";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
   return (
      <div>
         <div><Toaster /></div>
         <Navber></Navber>
         <Outlet></Outlet>
         <Copyright></Copyright>
      </div>
   );
};

export default MainLayout;