import React, { useState } from 'react'
import { Link } from 'react-router-dom';

/* Styles imports */
import style from "../FixedComponents/header.module.css";
import css from "classnames";

/* Components -------------------------------- */
import CategoriesLinks from '../categories/CategoriesLinks'


const Header = ({ token, username, onLogout, categories }) => {

    const [toggle, setToggle] = useState(false);

    const [icon, setIcon] = useState('menu');

    const handleClick = (e) => {

        e.preventDefault();

        setToggle(!toggle);
        (!toggle) ? setIcon('close') : setIcon('menu');
    }

    return (
        <>
            <header className={css(style.header)} id='header'>
                <div className="center-object flex-item justify-space-between align-items-center">
                    <div className={style.logo}>
                        <Link to={'/'}><h1 className="website-logo title-center"><span>Hard</span>Store</h1></Link>
                        <button className={style.toggle} onClick={(e) => handleClick(e)}>
                            <span className="material-icons-round">
                                {icon}
                            </span>
                        </button>
                    </div>
                    <div className={css(style.menu, !toggle && style.hidden)}>
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Inicio</Link></li>
                                {
                                    !token && <li><Link to={'/api/auth/login'}>Login</Link></li>
                                }
                                {/* {
                                    username && <li><Link to={'/api/users/profile'} title={username.replace(/"/g, '')}>{username.replace(/"/g, '')}</Link></li>
                                } */}
                                {
                                    token && <li><button type='submit' className={style.logout} onClick={onLogout}>Cerrar sesión</button></li>
                                }
                                <Link to={'api/products/shoppingCart'} className={css('btn', style.show_cart)}><p className={style.cartText}>Carrito</p><span className="material-icons-outlined">shopping_cart</span></Link>

                            </ul>
                        </nav>
                    </div>
                </div>
                    <CategoriesLinks
                        categories={categories}
                    />
            </header>

        </>
    )
}

export default Header;