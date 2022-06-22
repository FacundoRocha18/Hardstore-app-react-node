import React from "react";

/* Styles imports */
import style from "./SiteFooter.module.css";
import css from "classnames";


const Footer = () => {

    return (
        <>
            <footer className={css(style.footer)}>
                <div className={style.footer_container}>
                    <div className={style.logo}>
                        <a href="#">
                            <h1 className="website-logo title-center"><span>Hard</span>Store</h1>
                        </a>
                    </div>
                    <div className={style.menu}>
                        <h6 className="title-center">Designed by <a href="https://github.com/FacundoRocha18" target='_blank' title="Facundo Rocha's GitHub">Facundo Rocha</a></h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;