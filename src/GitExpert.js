import React,{ useState} from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import {GitGrid} from './components/GitGrid'


export const GitExpert = () => {
    //const categories = ['one punch','samurai X', 'dragon ball']
    const [categories,setCategories] = useState(['one punch'])
    /* const handleAdd = ()=>{
       // setCategories ([...categories,'hunterXHunter']
       setCategories (cats=> [...categories,'hunterXHunter'])
    } */
    return (
        <div>
            <h1>GitExpertApp</h1>
            <CategoryAdd setCategories = {setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map(category=>
                     <GitGrid  
                     key ={category}
                     category = {category}
                     />                    )
                }
            </ol>
        </div>
    )
}
