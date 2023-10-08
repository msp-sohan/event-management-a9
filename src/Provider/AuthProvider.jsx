import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user, setUser] = useState({});
   const [loading , setLoading] = useState(true);

   const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const createUser = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () =>{
      setLoading(true)
      return signOut(auth)
   }

   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser)
         setLoading(false)
      });
      return ()=>{
         unSubscribe()
      }
   },[])

   const profileUpdate = (name, image) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: image,
      });
   }



   const authInfo = {
      user,
      loading,
      googleLogin,
      createUser,
      signIn,
      logOut,
      profileUpdate,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;