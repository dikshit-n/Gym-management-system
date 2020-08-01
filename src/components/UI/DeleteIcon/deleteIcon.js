import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import './deleteIcon.css'

const deleteIcon = props => {
    return <DeleteIcon onClick={props.onClick} className='delete' fontSize="small" />
}

export default deleteIcon