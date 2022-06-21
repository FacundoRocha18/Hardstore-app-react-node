import React, { useState } from 'react'
import { Link } from 'react-router-dom';

/* Styles imports */
import style from "./SiteHeader.css";
import css from "classnames";

/* Components -------------------------------- */
import CategoriesMenu from './Categories/CategoriesMenu'

const Header = ({ token, username, onLogout, categories }) => {

    const [toggle, setToggle] = useState(false);

    const [icon, setIcon] = useState('menu');

    const handleClick = (e) => {

        e.preventDefault();

        setToggle(!toggle);
        (!toggle) ? setIcon('close') : setIcon('menu');
    }

    const [show, setShow] = useState(null);

    const [isClicked, setIsClicked] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsClicked(!isClicked);
        return setShow(!show);
    }

    return (
        <>
            <header className={css(style.header)} id='header'>
                <div className={style.header_container}>
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
                                <div className={style.dropdown}>
                                    <li>
                                        <button className={style.categories_btn} onClick={(e) => handleToggle(e)}>

                                            <div >
                                                <p className='title-center'>Categorías</p>
                                            </div>
                                            <span className={css("material-icons-round", isClicked && style.rotate)}>
                                                expand_more
                                            </span>
                                        </button>
                                    </li>
                                    <div className={css(style.dropdown_body, !show && style.hide, show && style.show)}>
                                        <CategoriesMenu categories={categories} />
                                    </div>
                                </div>
                                {
                                    !token && <li><Link to={'/api/auth/login'}>Login</Link></li>
                                }
                                {/* {
                                    username && <li><Link to={'/api/users/profile'} title={username.replace(/"/g, '')}>{username.replace(/"/g, '')}</Link></li>
                                } */}
                                {
                                    token && <li><button type='submit' className={style.logout} onClick={onLogout}>Cerrar sesión</button></li>
                                }
                                
                                <li><Link to={'api/products/shoppingCart'} className={css('btn', style.show_cart)}><p className={style.cartText}>Carrito</p><span className="material-icons-outlined">shopping_cart</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;