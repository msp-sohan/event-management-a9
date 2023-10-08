import { useEffect, useState } from "react";

const useFetchApi = () => {
   const [events, setEvents] = useState()
   useEffect(()=>{
      fetch("/events.json")
      .then(res=> res.json())
      .then(data => setEvents(data))
   },[])
   return {events}
};

export default useFetchApi;