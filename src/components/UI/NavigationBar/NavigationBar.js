import React from 'react'
import './NavigationBar.css'

const Navigation = props => {

    let container = ['pureMenu']
    let unorderedList = ['pureMenuList']
    let eachListItem = ['pureMenuItem', 'pureMenuSelected']

    return(
        <div className={container.join(' ')}>
            <ul className={unorderedList.join(' ')}>
                {props.links.map((child, index) => {
                    if(child.props.to !== null)
                    return (
                    <div key={index} className={eachListItem.join(' ')}>
                        {child}
                    </div>)
                    else return null
                })}
            </ul>
        </div>
    )
}

export default Navigation