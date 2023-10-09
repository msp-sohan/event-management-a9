import Footer from "../../component/Footer/Footer";


const AboutPage = () => {
   
   return (
      <div className="bg-white">
         <div>
            <div className="relative lg:flex justify-center items-center">
               <img className="h-60 w-full lg:h-96 xl:h-1/2" src="https://i.ibb.co/2MMZ26L/event-management-company.jpg" alt="" />
               {/* <div className="absolute   text-white sm:items-end lg: gap-4 p-1 lg:p-2 rounded  "> */}
               <div className="lg:absolute top-[50%] lg:text-white lg:rounded text-center flex justify-center items-center bg-blue-600 bg-opacity-30 p-1">
                  <h4 className="text-xl lg:text-4xl font-semibold ">EventWonder</h4>
                  <img className="h-8 lg:h-16 w-8 lg:w-16" src="https://i.ibb.co/jLKB9L8/OIG-removebg-preview.png" alt="" />
                  <h4 className="text-xl lg:text-4xl font-semibold">Event ManageMent</h4>
               </div>
            </div>
            <div className="container mx-auto mt-8 p-5">
               <h4 className="text-lg font-semibold">About Us</h4>
               <h3 className="text-2xl font-semibold text-blue-700 mb-9">EventWonder Event</h3>
               <div className="grid md:grid-cols-10 gap-4">
                  <div className="col-span-1">
                     <hr className="h-1 bg-gray-300"/>
                  </div>
                  <div className="col-span-8 lg:text-justify">
                     <h2 className="text-xl lg:text-2xl font-semibold">EventWonder Event is a recognized and trusted Event Management Company, actively working in every field of event organization.</h2>
                     <div className="md:text-justify flex flex-col gap-3 pt-5">
                        <p className="text-sm lg:text-lg">EventWonder is a team of powerful flappers, who stumped upon the events to make event planning simply amazing. Their love for putting life, in any event, reflects in their professional expertise. Together we have become the most trusted and top event & wedding planners in India. Millions of people outreach us because of the trust we have garnered throughout the years of hard work and creative thoughts.</p>
                        <p className="text-sm lg:text-lg">Its more than an event for us when we see those teary eyes with smiling faces, it makes us proud of our work. Just, to see that smile, we put a little extra effort into our work by consulting, discussing and advising a tailored made plan to our clients intricate needs.</p>
                        <p className="text-sm lg:text-lg">Our team has certain divisions to simplify event planning. We are a strong believer of transparency and, therefore, there is no middleman to barge upon.</p>
                        <p className="text-sm lg:text-lg">We understand the delicacy of the wedding time. Thus, we ensure professionalism in every minute details. From venue selection to makeup artist or choosing any destination of your choice for a destination wedding, there is nothing which we cannot do.</p>
                        <p className="text-sm lg:text-lg">As top wedding planners in Delhi NCR, it is our responsibility to put zeal in any event. Therefore, we establish a lively environment around our audience and guests. All team members are so enthusiastic that they wont fumble to execute even a small-sized event. Eventually, we are loved by our clients for our dedication and honest suggestions.</p>
                        <p className="text-sm lg:text-lg">Being an old player in the field of top event management companies; our expertise makes us a well-recognized leader. This quality comes from an approach to consistently re-invent and re-innovate each event, making it unique and special in its own.</p>
                        <p className="text-sm lg:text-lg">Our comprehensive approach and in-depth knowledge of local markets and vendors, to produce block-busters events and give value for money to the client.</p>
                        <p className="text-sm lg:text-lg">Now that we have successfully covered pan India as best event organizers and top wedding planners in India, we have now started marking our presence across globally. Yes, thats right! Couples who look for a customized plan for their dream wedding or who want best event planners have started recognizing us abroad as well.</p>
                        <p className="text-sm lg:text-lg">You will get quality service at affordable prices. Find EventWonder event as best event planners, event organizers, event management companies, wedding event planners in Delhi NCR, Noida, Gurgaon, Faridabad.</p>
                     </div>
                     <hr className="mt-5 p-[1px] bg-gray-300"/>
                  </div>
               </div>
               <div>
                  <h2 className="text-4xl font-semibold text-green-700 text-center mt-20">What we do?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center py-20 xl:px-28">
                     <div className="border">
                        <div className="border h-[30vh] md:h-[35vh] xl:h-[40vh] p-2 hover:shadow-2xl hover:drop-shadow-2xl xl:px-14">
                           <h3 className="text-2xl font-semibold py-2 text-blue-700">Wedding <br />Events</h3>
                           <p className="text-blue-800 lg:text-lg text-justify">We provide very good wedding, pre-wedding, destination wedding event services. If you are finding the best service to fulfill all the desires in the marriage then we can do it for you. We have done many wedding events for which we are highly appreciated.</p>
                        </div>
                        <div className="border h-[38vh] md:h-[40vh] lg:h-[45vh] xl:px-14 xl:h-[50vh] p-2 hover:shadow-2xl hover:drop-shadow-2xl">
                           <h3 className="text-2xl font-semibold py-2 text-blue-700">Promotional <br />Events</h3>
                           <p className="text-blue-800 lg:text-lg text-justify">If you want someone who can help you with the promotion of your product then we are the one for you. EventWonder Events will give all types of marketing, advertisement solutions. We are working as a service provider for atl and btl promotion service, product launch events, road shows etc. Our special team for these type of events will get in touch with you and perform every action after understanding your needs.</p>
                        </div>
                     </div>
                     <div>
                        <div className="border h-[30vh] md:h-[35vh] xl:h-[40vh] p-2 hover:shadow-2xl hover:drop-shadow-2xl xl:px-14">
                           <h3 className="text-2xl font-semibold py-2 text-blue-700">Corporate <br />Events</h3>
                           <p className="text-blue-800 lg:text-lg text-justify">We also deal with corporate events like conferences, exhibitions, fashion shows, seminars etc. We have a dedicated team to handle all the corporate events. We take deep care of everything in your corporate event so that you could get the desired results from it.</p>
                        </div>
                        <div className="border h-[38vh] md:h-[40vh] lg:h-[45vh] xl:px-14 xl:h-[50vh] p-2 hover:shadow-2xl hover:drop-shadow-2xl">
                           <h3 className="text-2xl font-semibold py-2 text-blue-700">Photography, Music <br />& Light Service</h3>
                           <p className="text-blue-800 lg:text-lg text-justify">We also provide reliable services for Sound, Light, Photography, Videography etc. We have rental services for all kind of requirements in a marriage or other events. We have the best quality lights, sound system, and professional people to handle these works.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default AboutPage;