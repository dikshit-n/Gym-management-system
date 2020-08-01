import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import './AddWorkoutTypeButton.css'

const AddWorkoutTypeButton = props => {
    return (
        <div className='AddWorkoutType' onClick={props.onClick} >
            <AddIcon />
        </div>
    )
}

export default AddWorkoutTypeButton