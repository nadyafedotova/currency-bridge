import React from 'react';
import Menu from './Menu';
import { links } from './Navbar';
import { Link } from 'react-router-dom';
import { hideConverter } from '../redux/typies';
import { connect } from 'react-redux';

function Footer ({ dispatch }) {
    const handleClick = () => dispatch(hideConverter());
    return (
        <nav className="container-footer">
            <div className="footer">
                <div className="info">
                    <Link to="/" className="info-footer" onClick={handleClick}>
                        <span className="icon"></span>
                        <span>Чіп Чендж</span>
                    </Link>
                    <p>04128, м.Київ, вул. Хрещатик, 19
                        Ліцензія НБУ №156
                        Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
                </div>

                <div className="menu-footer">
                    <ul>
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
                <div className="phone">
                    <span className="icon-sing"/>
                    <div>
                        <span>3773</span>
                        <span className="phone-title">Цілодобова підтримка</span>
                    </div>
                </div>

                <div className="phone">
                    <span className="icon-phone"/>
                    <div>
                        <span>8 800 111 22 33</span>
                        <span className="phone-title">Безкоштовно для дзвінків в межах України</span>
                    </div>
                </div>
                <div className="socials">
                    <Link to="#" className="facebook"/>
                    <Link to="#" className="insta"/>
                    <Link to="#" className="twitter"/>
                    <Link to="#" className="youtube"/>
                </div>
            </div>
        </nav>
    )
}

export default connect()(Footer);