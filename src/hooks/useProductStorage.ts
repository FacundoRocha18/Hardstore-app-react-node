import { useEffect, useState } from "react";

export const useProductStorage = () => {
  const [storedProduct, setStoredProduct] = useState(null);

  const getStoredProduct = () => {
    const storedProduct = localStorage.getItem("product");

    return storedProduct;
  };

  useEffect(() => {
    setStoredProduct(getStoredProduct());

    return () => {};
  }, [getStoredProduct]);

  const saveProduct = (product) => {
    if (!product) {
      return;
    }

    localStorage.setItem("product", JSON.stringify(product));
    setStoredProduct(product);
  };

  return {
    saveProduct: saveProduct,
    storedProduct,
  };
};
