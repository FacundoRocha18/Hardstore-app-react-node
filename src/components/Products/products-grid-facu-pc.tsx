/* Components -------------------------------- */
import { useProductsContext } from "../../contexts/products-context";
import { ProductsCard } from "./product-card";

/* Styles imports -------------------------------- */
const ProductsGrid = () => {
	const { products } = useProductsContext();

	return (
		<div className="product-grid-layout">
			{products.map((product) => (
				<ProductsCard key={product.id} product={product} {...product} />
			))}
		</div>
	);
};

export default ProductsGrid;
