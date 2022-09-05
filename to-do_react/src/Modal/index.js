import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css'

function Modal() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const{
    
        addTodo,
        setOpenModal,
        loading,
    
    } = React.useContext(TodoContext)

    const onChange = (event) =>{

        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {

        setOpenModal(false)
    };

    const onSubmit = (event) => {

        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
        
        
    }

    return ReactDOM.createPortal(

        <form 
        className='modal-cont'
        onSubmit={onSubmit}
        >
            <p>Escribe tu nuevo TO-DO</p>
            
            <textarea
            placeholder='Escribe aquí tu TO-DO'
            value={newTodoValue} 
            onChange={onChange}
            />

            <div className='btns'>
            
            <button 
            className='cancelar btnModal'
            type='button'
            onClick={onCancel}
            >
                Cancelar
            </button>
            
            <button 
            className='cancelar btnModal'
            type='submit'
            >
            
                Añadir
            </button>
            
            </div>
        </form>,
        document.getElementById('modal')
        
    )
    
}

export { Modal };