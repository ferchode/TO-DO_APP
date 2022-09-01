import React from 'react';
import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
        <h2 className='counter'>Has completado {completed} de {total} TODO's</h2>
    )
}

export {TodoCounter};