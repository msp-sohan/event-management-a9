import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partner = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   return (
      <div className="container mx-auto overflow-x-hidden text-center h-40 pt-12">
         <Slider {...settings}>
            <div className="flex justify-center items-center">
               <img className="max-w-[40px]" src="https://i.ibb.co/yW1kRBd/pngwing-com.png" />
               <h3>Hello world</h3>
            </div>
            <div className="flex justify-center items-center">
               <img className="max-w-[40px]" src="https://i.ibb.co/yW1kRBd/pngwing-com.png" />
               <h3>Hello world</h3>
            </div>
            <div className="flex justify-center items-center">
               <img className="max-w-[40px]" src="https://i.ibb.co/yW1kRBd/pngwing-com.png" />
               <h3>Hello world</h3>
            </div>
         </Slider>
      </div>
   );
};

export default Partner;