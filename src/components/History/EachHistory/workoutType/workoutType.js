import React from 'react'

import './workoutType.css'

const WorkoutType = props => {
    // props.id
    return <div className='WorkoutType' > {props.name} {props.count} </div>        
}

export default WorkoutType