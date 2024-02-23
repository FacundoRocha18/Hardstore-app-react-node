import { useState, useEffect, useRef } from "react";
import { get_products as fetch_products } from "../services/fetchProducts";
import { type IProduct } from "../common/interfaces";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Sin errores");
  const should_fetch = useRef(true);

  const get_products = async () => {
    try {
      setLoading(true);
      const data = await fetch_products();
      setProducts(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (should_fetch.current) {
      get_products();
    }
  }, []);

  return [products, loading, error] as const;
};
