import React from 'react';
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {

        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(

        <div className='search-container'>
            <input className='search' 
            placeholder="Busca tu tarea"
            value={searchValue}
            onChange={onSearchValueChange}
            />
            <div className = 'icon-container'>
            <span className="material-symbols-outlined icon-search">search</span>
            </div>
        </div>
        
    )
}

export {TodoSearch};