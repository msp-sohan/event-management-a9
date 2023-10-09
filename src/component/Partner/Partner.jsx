import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partner = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   return (
      <div className="h-[30vh] container mx-auto px-5 mb-10">
         <Slider {...settings}>
            <div className="container mx-auto px-5 pt-6 md:pt-14 lg:pt-16">
               <img className="w-36" src="https://www.matrimonybangladesh.com/static/logo.png" />
            </div>
            <div className="container mx-auto px-5 pt-7 md:pt-14 lg:pt-16">
               <img className="w-44" src="https://www.kabinbd.com/uploads/footer_logo/footer_logo_1606851229.png" />
            </div>
            <div className="container mx-auto px-5 pt-5 md:pt-10 lg:pt-9">
               <img className="w-44" src="https://i.ibb.co/d62qHDJ/clipart2792844.png" />
            </div>
            <div className="container mx-auto px-5 pt-3 md:pt-6 lg:pt-7">
               <img className="w-44" src="https://www.nicepng.com/png/full/363-3632362_matrimony-logo-png.png" />
            </div>
            <div className="container mx-auto  px-5 ">
               <img className="w-44" src="https://i.ibb.co/5BhjX6P/shubh-vivah.png" />
            </div>
            <div className="container mx-auto px-5 pt-1 md:pt-4 lg:pt-3">
               <img className="w-44" src="https://www.al-nikah.com/images/al-nikah-logo.png" />
            </div>
         </Slider>
      </div>
   );
};

export default Partner;