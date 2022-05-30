import React from 'react'
import { Link } from 'react-router-dom';

/* Styles imports */
import style from "../FixedComponents/header.module.css";
import css from "classnames";

/* Components -------------------------------- */
import CategoriesLinks from '../categories/CategoriesLinks'


const Header = ({ token, username, onLogout, categories }) => {

    return (
        <>
            <header className={css(style.header)} id='header'>
                <div className="center-object flex-item justify-space-between">
                    <div className={style.logo}>
                        <Link to={'/'}><h1 className="website-logo title-center"><span>Hard</span>Store</h1></Link>

                    </div>
                    <div className={style.menu}>
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Inicio</Link></li>
                                {
                                    !token && <li><Link to={'/api/auth/login'}>Login</Link></li>
                                }
                                {
                                    username && <li><Link to={'/api/users/profile'} title={username.replace(/"/g, '')}>{username.replace(/"/g, '')}</Link></li>
                                }
                                {
                                    token && <li><button type='submit' className={style.logout} onClick={onLogout}>Cerrar sesión</button></li>
                                }
                                <Link to={'api/products/shoppingCart'} className='show-cart btn'><span className="material-icons-outlined">shopping_cart</span></Link>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <CategoriesLinks
                categories={categories}
            />
        </>
    )
}

export default Header;