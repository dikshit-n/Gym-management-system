import React, { memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import BackDrop from '../BackDrop/BackDrop';

const animationTime = {
    enter: 1000,
    exit: 1000
}

const Modal = props => {
    let show = props.show ? true : false
    return (
        <Aux>
            <BackDrop show={show} onClick={props.onClick} />
            <CSSTransition in={show} timeout={animationTime} mountOnEnter unmountOnExit
                classNames={{
                    enter:'',
                    enterActive: 'ModalOpen',
                    exit: "",
                    exitActive: 'ModalClose',
                    appear: '',
                    appearActive:''
                }}>
                <div className='Modal'>
                    {props.children}
                </div>
            </CSSTransition>
        </Aux>
    )
}

export default memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children)