import React from "react";
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <li className={`main-nav__item ${props.isActive ? 'is-active' : ''}`}>
            <Link to={props.link}>
                <span className="main-nav__item-icon">
                    <svg className={`icon icon-${props.icon}`}><use xlinkHref={`#icon-${props.icon}`}></use></svg>
                </span>
                {props.title}

                { props.rewards && <span className="badge badge-light">{props.rewards}</span> }
            </Link>
        </li>
    )
}
