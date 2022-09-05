import React from 'react';
import warningImg from '../assets/warning.png'
import './error.css'

function ErrorScreen(props){

    return(

        <div className='warning-container'>

            <p className='warn-message'>
                Hubo un error, pero no te preocupes, no es tu culpa.
                <br/>Vamos a regañar al programador.
            </p>

            <figure className='warningImg'>
            <img 
            src={warningImg} 
            alt='Warning img' 
            />
            
            </figure>

        </div>

    )


}

export {ErrorScreen}