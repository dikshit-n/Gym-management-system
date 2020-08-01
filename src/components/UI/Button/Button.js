import React from 'react'

import './Button.css'

const Button = props =>{
    return (
        <div className='position' >
            <button  type={props.type} required disabled={props.disabled} className='myButton' onClick={(event) => props.onClick(event)}>{props.displayValue} </button>
        </div>
    )
}

export default Button