import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Login/SocialLogin";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import toast from "react-hot-toast";

const Register = () => {
   const { user, createUser, profileUpdate } = useContext(AuthContext)
   const [passwordError, setPasswordError] = useState("")
   const [showPass, setShowPass] = useState(false)
   const navigate = useNavigate()

   const handleRegister = (e) => {
      e.preventDefault()
      const name = e.target.name.value;
      const image = e.target.image.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name,image, email, password)

      const lengthError = /^.{6,}$/;
      const spError = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
      const capitalError = /^[^A-Z]*$/;

      if (!lengthError.test(password)) {
         setPasswordError("Password is less than 6 characters.");
         return;
      } else if (capitalError.test(password)) {
         setPasswordError("Password has no Capital Letter.");
         return;
      } else if (!spError.test(password)) {
         setPasswordError("Password has no special characters.");
         return;
      }

      createUser(email, password)
      .then(result=>{
         if (result.user) {
            toast.success('Account Create Successfully')
            navigate("/")
         }
         if (!user) {
            profileUpdate(name, image)
            .then(()=>{
               toast.success('Account created and profile updated successfully');
               navigate("/");
            })
            .catch(error=>{
               toast.error(error.message);
            })
         } else {
            toast.success('Account created successfully');
            navigate("/");
         }
      })
      .catch(error=>{
         if (error.message) {
            toast.error("Email Already in Use.")
         }
         
      })
   }

   const handleShowPass = ()=>{
      setShowPass(!showPass)
   }

   return (
      <div>
         <section className="bg-[#F4F7FF] py-16 lg:pt-[100px]">
            <div className="container mx-auto">
               <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                     <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-7 px-10 text-center sm:px-12 md:px-[60px]">
                        <div className="mb-10 text-center md:mb-[33px]">
                           <a href="/" className="mx-auto inline-block">
                              <img className="w-56" src="https://i.ibb.co/n1ksR0n/Event-Wonder2.png" alt="logo" />
                           </a>
                        </div>
                        <form onSubmit={handleRegister}>
                           <div className="mb-5">
                              <input type="text" placeholder="Full Name" name="name" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" required/>
                           </div>
                           <div className="mb-5">
                              <input type="text" placeholder="Image Url" name="image" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" required/>
                           </div>
                           <div className="mb-5">
                              <input type="text" placeholder="Email" name="email" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" required/>
                           </div>
                           <div className="mb-5 relative">
                              <input id="password" type={showPass? "text" : "password"} placeholder="Password" name="password" className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" required/>
                              <label onClick={handleShowPass} htmlFor="password" className="absolute top-2 right-2 p-2">
                                 {
                                    showPass ? <BsEyeSlash className="text-xl text-gray-600"></BsEyeSlash> : <BsEye className="text-xl text-gray-600"></BsEye>
                                 }
                              </label>
                           </div>
                           <div className="flex items-start mb-5">
                              {
                                 passwordError && (<p className="text-red-500 text-sm mb-3">{passwordError}</p>)
                              }
                           </div>
                           <div className="mb-6">
                              <input type="submit" value="Create an Account" className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90" />
                           </div>
                        </form>
                        <p className="mb-5 text-base text-[#adadad]">Sign in With</p>
                        <SocialLogin></SocialLogin>
                        <p className="text-base text-[#adadad]">
                           <span className="pr-0.5">Already have an Account?</span>
                           <Link to="/login" className="text-primary hover:underline">
                              Sign In
                           </Link>
                        </p>
                        <div>
                           <span className="absolute top-1 right-1">
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="1.39737" cy="38.6026" r="1.39737" transform="rotate(-90 1.39737 38.6026)" fill="#3056D3" />
                                 <circle cx="1.39737" cy="1.99122" r="1.39737" transform="rotate(-90 1.39737 1.99122)" fill="#3056D3" />
                                 <circle cx="13.6943" cy="38.6026" r="1.39737" transform="rotate(-90 13.6943 38.6026)" fill="#3056D3" />
                                 <circle cx="13.6943" cy="1.99122" r="1.39737" transform="rotate(-90 13.6943 1.99122)" fill="#3056D3" />
                                 <circle cx="25.9911" cy="38.6026" r="1.39737" transform="rotate(-90 25.9911 38.6026)" fill="#3056D3" />
                                 <circle cx="25.9911" cy="1.99122" r="1.39737" transform="rotate(-90 25.9911 1.99122)" fill="#3056D3" />
                                 <circle cx="38.288" cy="38.6026" r="1.39737" transform="rotate(-90 38.288 38.6026)" fill="#3056D3" />
                                 <circle cx="38.288" cy="1.99122" r="1.39737" transform="rotate(-90 38.288 1.99122)" fill="#3056D3" />
                                 <circle cx="1.39737" cy="26.3057" r="1.39737" transform="rotate(-90 1.39737 26.3057)" fill="#3056D3" />
                                 <circle cx="13.6943" cy="26.3057" r="1.39737" transform="rotate(-90 13.6943 26.3057)" fill="#3056D3" />
                                 <circle cx="25.9911" cy="26.3057" r="1.39737" transform="rotate(-90 25.9911 26.3057)" fill="#3056D3" />
                                 <circle cx="38.288" cy="26.3057" r="1.39737" transform="rotate(-90 38.288 26.3057)" fill="#3056D3" />
                                 <circle cx="1.39737" cy="14.0086" r="1.39737" transform="rotate(-90 1.39737 14.0086)" fill="#3056D3" />
                                 <circle cx="13.6943" cy="14.0086" r="1.39737" transform="rotate(-90 13.6943 14.0086)" fill="#3056D3" />
                                 <circle cx="25.9911" cy="14.0086" r="1.39737" transform="rotate(-90 25.9911 14.0086)" fill="#3056D3" />
                                 <circle cx="38.288" cy="14.0086" r="1.39737" transform="rotate(-90 38.288 14.0086)" fill="#3056D3" />
                              </svg>
                           </span>
                           <span className="absolute left-1 bottom-1">
                              <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="2.288" cy="25.9912" r="1.39737" transform="rotate(-90 2.288 25.9912)" fill="#3056D3" />
                                 <circle cx="14.5849" cy="25.9911" r="1.39737" transform="rotate(-90 14.5849 25.9911)" fill="#3056D3" />
                                 <circle cx="26.7216" cy="25.9911" r="1.39737" transform="rotate(-90 26.7216 25.9911)" fill="#3056D3" />
                                 <circle cx="2.288" cy="13.6944" r="1.39737" transform="rotate(-90 2.288 13.6944)" fill="#3056D3" />
                                 <circle cx="14.5849" cy="13.6943" r="1.39737" transform="rotate(-90 14.5849 13.6943)" fill="#3056D3" />
                                 <circle cx="26.7216" cy="13.6943" r="1.39737" transform="rotate(-90 26.7216 13.6943)" fill="#3056D3" />
                                 <circle cx="2.288" cy="38.0087" r="1.39737" transform="rotate(-90 2.288 38.0087)" fill="#3056D3" />
                                 <circle cx="2.288" cy="1.39739" r="1.39737" transform="rotate(-90 2.288 1.39739)" fill="#3056D3" />
                                 <circle cx="14.5849" cy="38.0089" r="1.39737" transform="rotate(-90 14.5849 38.0089)" fill="#3056D3" />
                                 <circle cx="26.7216" cy="38.0089" r="1.39737" transform="rotate(-90 26.7216 38.0089)" fill="#3056D3" />
                                 <circle cx="14.5849" cy="1.39761" r="1.39737" transform="rotate(-90 14.5849 1.39761)" fill="#3056D3" />
                                 <circle cx="26.7216" cy="1.39761" r="1.39737" transform="rotate(-90 26.7216 1.39761)" fill="#3056D3" />
                              </svg>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Register;