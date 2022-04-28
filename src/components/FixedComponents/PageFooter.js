import React from "react";
import { Link } from 'react-router-dom';


const Footer = () => {

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
                                <li><Link to={'/api/auth/'}>Login</Link></li>
                                <Link to={'/shoppingCart'} className='show-cart btn'><span className="material-icons-outlined">shopping_cart</span></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;