import React from 'react'

import './Textbox.css'
import AddIcon from '@material-ui/icons/Add';

const TextBox = props => {
    return (
        <div className='fakeTextBox' >
            {props.showIcon ? <AddIcon /> : null} 
            <input 
                name={props.name} 
                spellCheck={false} 
                className='textbox' 
                required type={props.type} 
                value={props.value} 
                placeholder={props.placeholder} 
                onChange={event => props.onChange(event)} />
        </div>
    )
}

export default TextBox