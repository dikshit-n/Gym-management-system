import React from 'react'
import axios from 'axios'

import WorkoutTypes from './WorkoutTypes/WorkoutTypes'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const HomePage = props => {
    return(
        <WorkoutTypes />
    )
}

export default withErrorHandler(HomePage, axios)