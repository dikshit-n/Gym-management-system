import React from 'react'

import './smallSendButton.css'
import sendIcon from '../../../../SVG/SendIcon/sendIcon.svg'

const SmallSendButton = props => <button type="submit" className='Submit'> <img src={sendIcon} alt="o" width="17px" height="17px" /> </button>

export default SmallSendButton