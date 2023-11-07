/* Styles imports */
import style from './SiteFooter.module.css';
import css from 'classnames';

const Footer = () => {
	return (
		<footer className={css(style.footer)}>
			<div className={style.logo}>
				<a href="#">
					<h2 className="website-logo title-center">Techie Store</h2>
				</a>
			</div>
			<div>
				<h6>Designed by <a href="https://github.com/FacundoRocha18" target='_blank' title="Facundo Rocha's GitHub" rel="noreferrer">Facundo Rocha</a></h6>
			</div>
		</footer>
	)
}

export default Footer;
