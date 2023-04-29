import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { hideConverter } from '../redux/typies';
import { connect } from 'react-redux';

export const links = {
    'services':'Послуги',
    'converter':'Конвертер валют',
    'contacts':'Контакти',
    'questions':'Задати питання',
}

function Navbar ({ dispatch }) {
    const handleClick = () => dispatch(hideConverter());
    return (
        <nav className="container-header">
            <div className="header">
                <Link to="/" className="logo" onClick={handleClick}>
                    <span className="icon"></span>
                    <span>Чіп Чендж</span>
                </Link>
                <div className="menu">
                    <ul className="ul-header">
                        {Object.entries(links).map(([link, value], index) => {
                            return (
                                <Menu
                                    link={link}
                                    value={value}
                                    key={index}
                                />
                            )
                        })}
                    </ul>
                </div>
                <Link to="/sing" className="sing">
                    <span className="icon-sing"/>
                    <span>Особистий кабінет</span>
                </Link>
            </div>
        </nav>
    )
}

export default connect()(Navbar);