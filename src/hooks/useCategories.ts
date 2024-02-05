import { useState, useEffect, useRef } from "react";
import { fetch_categories } from "../services/fetchCategories";
import { type ICategory } from "../common/interfaces";

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Sin errores");
  const should_fetch = useRef(true);

  const get_categories = async () => {
    try {
      setLoading(true);
      const data = await fetch_categories();
      setCategories(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (should_fetch.current) {
      get_categories();
    }
  }, []);

  categories.sort((a, b) => {
    return a.id - b.id;
  });

  return [categories, loading, error] as const;
};
