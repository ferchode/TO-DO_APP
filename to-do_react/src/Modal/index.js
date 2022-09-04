import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

// const modal = ReactDOM.createRoot(document.getElementById('modal'));

// modal.render(

//     <App />
    
// )

function Modal({children}) {

    return ReactDOM.createPortal(

        <div className='modal-cont'>
            <p>Escribe tu nuevo TO-DO</p>
            
            <textarea
            placeholder='Escribe aquí tu TO-DO' 
            />

            <div className='btns'>
            <button className='cancelar btnModal'>Cancelar</button>
            <button className='cancelar btnModal'>Añadir</button>
            </div>
        </div>,
        document.getElementById('modal')
        
    )
    
}

export { Modal };