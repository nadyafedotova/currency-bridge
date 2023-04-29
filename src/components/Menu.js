import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleConverterVisibility } from '../redux/typies';

function Menu ({ link, value, index, dispatch }) {
    const handleClick = () => {
        if (link === 'converter') dispatch(toggleConverterVisibility());
    }

    return (
        <li>
            <NavLink
                key={index}
                to={`/${link}`}
                onClick={handleClick}
            >
                {value}
            </NavLink>
        </li>
    )
}

export default connect()(Menu);
