import { Link, useParams } from "react-router-dom";

/* Custom Hooks -------------------------------- */
import { useProducts } from "../../hooks/useProducts";

/* Components -------------------------------- */
import { ProductsCard } from "./product-card";
import { Loading } from "../Common/loading";

/* Styles imports -------------------------------- */
import css from "classnames";

const CategorizedProducts = ({ onAdd, showAlert }) => {
  const { cat_id } = useParams();
  const { products, loading } = useProducts();
  const matchProducts = checkData(products, cat_id);

  if (loading) {
    return <Loading />;
  }

  if (matchProducts.length === 0) {
    return (
      <div className="main-content-wrapper">
        <h1 className="title-center">
          Ups! Parece que no se encontraron productos.
        </h1>
        <Link className="btn p-btn" to={"/"} replace title="Inicio">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (products) {
    return (
      <section className="main-content-wrapper">
        <div className={css("wd-100", style.container)} id="products-wrapper">
          <div className="mb-2">
            <h1 className="title-center">{matchProducts[0].category_name}</h1>
          </div>
          <div className={css(style.grid)}>
            {matchProducts.map((product) => (
              <ProductsCard
                key={product.id}
                onAdd={onAdd}
                product={product}
                showAlert={showAlert}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

const checkData = (products, cat_id) => {
  if (products.length === 0) {
    console.log("no hay productos");
    return;
  }

  return products.filter(
    (product) => product.category_id.toString() === cat_id.toString(),
  );
};

export default CategorizedProducts;
