/* Components -------------------------------- */
import ProductsGrid from "../components/Products/products-grid.js";
import { Loading } from "../components/Common/loading.js";
import { useProductsContext } from "../contexts/products-context.js";

export const Home = () => {
	const { loading } = useProductsContext();

	if (loading) {
		return (
			<>
				<Loading />
			</>
		);
	}

	return (
		<section>
			<h2 className="text-center my-4">Productos</h2>
			{<ProductsGrid />}
		</section>
	);
};
