import { Link } from 'react-router-dom';

/* Styles imports -------------------------------- */
import style from './ProductsCard.module.css';
import css from 'classnames';

const ProductsCard = ({ onAdd, product, id, name, thumbnail, price, showAlert }) => {
	const handle_add_clicked = (e) => {
		e.preventDefault();

		showAlert('Se añadió correctamente el producto al carrito', 'success', true);
		onAdd(product, 1);
	}

	return (
		<article className={css(style.item)} id="item">
			<div className={style.body}>
				<div className={style.image}>
					<img src="https://pcparts.com.uy/wp-content/uploads/2021/06/EQUIPOSARMADOSINTEL10GTX-300x300.jpg" alt="" />
				</div>
				<div className={style.info}>
					<div className={style.title}>
						<Link to={`/api/products/product/${id}`} replace>
							<h4 id="item-title" title={name}>{name}</h4>
						</Link>
					</div>
					<div className={style.flex}>
						<div className={style.price}>
							<p>USD {price} iva inc.</p>
						</div>
						<div className={style.btncontainer}>
							<button className="add-item btn p-btn addToCart" onClick={(e) => { handle_add_clicked(e); }}>
								<p>Añadir al carrito</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

/* ProductsCard.defaultProps = {
		name: 'Product name',
		image: placeholderImage,
		price: 0
} */

export default ProductsCard;
