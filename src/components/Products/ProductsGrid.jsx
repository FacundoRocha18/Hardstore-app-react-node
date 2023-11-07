/* Components -------------------------------- */
import ProductsCard from './product-card'

/* Styles imports -------------------------------- */
import style from './ProductsGrid.module.css'

const ProductsGrid = ({ products, onAdd, showAlert }) => {
	return (
		<section className={style.container} id='products-wrapper' >
			<div className={style.grid}>
				{
					products.map((product) => (
						<ProductsCard
							key={product.id}
							onAdd={onAdd}
							product={product}
							showAlert={showAlert}
							{...product}
						/>
					))
				}
			</div>
		</section>
	)
}

export default ProductsGrid
