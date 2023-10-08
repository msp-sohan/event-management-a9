import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Testimonials from "../../component/Testimonial/Testimonials";
import Services from "../../component/services/Services";


const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <Testimonials></Testimonials>
         <Footer></Footer>
      </div>
   );
};

export default Home;