import React from 'react';
import noteImg from '../assets/notes.png'
import './Loaded.css'

function EmptyLoadedview(props){


    return[

        <div className='note-container'>

            <p className='anounce'>
                Oye❗ Está un poco vacío por acá
            </p>

            <figure className='noteImg'>
            <img 
            src={noteImg} 
            alt='Note img' 
            />
            
            </figure>
            
            <p className='invitation'>
                Comienza a agregar TO-DOs cuando estes preparado 
                presionando el icono 
                
                <span className='btnIcon'>
                    +
                </span>
            </p>

        </div>


    ]


}

export {EmptyLoadedview}