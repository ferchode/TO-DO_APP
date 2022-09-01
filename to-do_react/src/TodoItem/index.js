import React from 'react';
import './TodoItem.css';

const check = <span className="material-symbols-outlined">check_circle</span>
const uncheck = <span className="material-symbols-outlined">radio_button_unchecked</span>
const close = <span className="material-symbols-outlined">close</span>


function TodoItem(props){

    const [initialState, checkState] = React.useState(uncheck);
    const onChange = (event) => {

        if(initialState == uncheck){

        checkState(event.target = check);

        }else{
            
        checkState(event.target = uncheck);

    }

    }

    return (
        <li>
            <span 
            className='close icon' 
            onClick={props.onDelete}
            >
                {close}
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            
            <span 
            className='Tocheck icon' 
            
            onClick={(e) =>{
                
                const fn1 = props.onComplete();
                const fn2 = onChange(e.target);
                
            }}
            >

                {initialState}
            
            </span>
        </li>
    )
}

export {TodoItem};