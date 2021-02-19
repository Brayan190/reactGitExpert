import { useEffect, useState } from "react"
import { getGits } from '../Helpers/getGifs';
 
 export const useFetchGifs = (category) => {
     
   const [state, setstate] = useState({
       data:[],
       loading: true
   });


    useEffect(() => {
         getGits(category)
         .then(imgs => {
            
                 setstate({
                     data: imgs,
                     loading:false
                 });
          
         })
       
    }, [category])

   return state
 }
 