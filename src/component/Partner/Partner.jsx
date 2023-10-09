import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partner = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   return (
      <div className="container mx-auto text-center">
         <Slider {...settings}>
            <div className="">
               {/* <img className="max-w-[40px]" src="" /> */}
               <h3>Hello world</h3>
            </div>
            <div className="">
               {/* <img className="max-w-[40px]" src="" /> */}
               <h3>Hello world</h3>
            </div>
            <div className="">
               {/* <img className="max-w-[40px]" src="" /> */}
               <h3>Hello world</h3>
            </div>
         </Slider>
      </div>
   );
};

export default Partner;