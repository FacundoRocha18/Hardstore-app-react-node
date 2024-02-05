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
    <section className="main-content-wrapper">
      <div className="mb-2">
        <h2 className="text-center">Productos</h2>
      </div>

      {<ProductsGrid />}
    </section>
  );
};
