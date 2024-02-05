/* Components -------------------------------- */
import { useProductsContext } from "../../contexts/products-context";
import { ProductsCard } from "./product-card";

/* Styles imports -------------------------------- */
const ProductsGrid = () => {
  const { products } = useProductsContext();

  return (
    <section className="w-10/12 my-8 mx-auto" id="products-wrapper">
      <div className="grid">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} {...product} />
        ))}
      </div>
      <title>App</title>
    </section>
  );
};

export default ProductsGrid;
