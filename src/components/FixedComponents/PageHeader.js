import React from 'react'
import { Link } from 'react-router-dom';


const Header = ({ token, onLogout }) => {

    return (
        <>
            <header className="website-header" id='header'>
                <div className="center-object flex-item justify-space-between">
                    <div className="header-logo">
                        <Link to={'/'}><h1 className="website-logo title-center"><span>Hard</span>Store</h1></Link>

                    </div>
                    <div className="header-menu">
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Inicio</Link></li>
                                <li><Link to={'/api/auth/login'}>Login</Link></li>
                                <Link to={'api/products/shoppingCart'} className='show-cart btn'><span className="material-icons-outlined">shopping_cart</span></Link>
                                {
                                    token && <button type='submit' className='logout-btn btn' onClick={ onLogout }><span className="material-icons-outlined">logout</span></button>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;