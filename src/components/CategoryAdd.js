import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(' ')
    const handleInputChage = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //console.log('submit hecho')
        setCategories (cats=> [inputValue, ...cats])
    }
    return (
        <form onSubmit ={handleSubmit}>
           <input
              type = "text" 
              value ={inputValue}
              onChange={handleInputChage}
           /> 
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}