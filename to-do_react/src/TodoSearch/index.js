import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

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