import React from "react";
import { Link } from 'react-router-dom';


const Footer = ({ token, username, onLogout }) => {

    return (
        <>
            <footer className="website-footer">
                <div className="center-object flex-item justify-space-between">
                    <div className="footer-logo">
                        <a href="#">
                            <h1 className="website-logo title-center"><span>Hard</span>Store</h1>
                        </a>
                    </div>
                    <div className="footer-menu">
                        <nav>
                        <ul>
                                <li><Link to={'/'}>Inicio</Link></li>
                                {
                                    !token && <li><Link to={'/api/auth/login'}>Login</Link></li>
                                }
                                {
                                    username && <li><Link to={'/api/users/profile'}>{username.replace(/"/g, '')}</Link></li>
                                }
                                {
                                    token && <li><button type='submit' className='logout-btn' onClick={onLogout}>Cerrar sesión</button></li>
                                }
                                <Link to={'api/products/shoppingCart'} className='show-cart btn'><span className="material-icons-outlined">shopping_cart</span></Link>

                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;