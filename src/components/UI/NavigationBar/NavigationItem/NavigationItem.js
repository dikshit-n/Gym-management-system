import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    props.to !== null ? <li className='NavigationItem'>
        <NavLink 
            to={props.to}
            exact={props.exact}
            activeClassName='active'><h4>{props.children}</h4></NavLink>
    </li> : null
);

export default navigationItem;