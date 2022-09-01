import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onCLickButton = () => {

      alert('Hey!! Soy un alert')
    }
    return(

      <button className='createButton'
      onClick={onCLickButton}>
        +
      </button>
        
    )
    
}

export {CreateTodoButton}