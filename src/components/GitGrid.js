import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
// import { getGits } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GitGrid = ({category}) => {

   const {data: images, loading}= useFetchGifs(category);
    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGits(category).then (setImages);
    // },[category])
   


    return (
        <>
        <h3 className = 'animate__animated animate__flip'>{category}</h3>

       {loading && <p className = 'animate__animated animate__flash'>Loading</p>}

       <div className = 'card-grid'>
           
            
            {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
        </div>
   
        </>
      )   
}
