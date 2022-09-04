import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from '../TodoContext/index'

function CreateTodoButton() {

    const {
      setOpenModal,
      openModal,

    } = React.useContext(TodoContext);

    const onCLickButton = () => {
        
        setOpenModal(!openModal)
       
      
    };

    return(

      <button className='createButton'
      onClick={onCLickButton}>
        +
      </button>
        
    )
    
}

export {CreateTodoButton}