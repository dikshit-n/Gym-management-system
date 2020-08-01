import React from 'react'

import './smallSpinner.css'
import SmallSpinnerSVG from '../../../../SVG/SmallSpinner/SmallSpinner.svg'

const SmallSpinner = props => {
    return (
        <div className='smallSpinner' >
            <img width="20px" height="20px" src={SmallSpinnerSVG} alt="o" />
        </div>
    )
}

export default SmallSpinner