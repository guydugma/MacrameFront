import { useEffect, useState } from "react";
import { ProductType } from "../@types/types";
import { getProducts } from "../services/products";


export const useProducts = () => {

  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  useEffect( () => {
    setError(null);
    setIsLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setError(null);
      })
      .catch((e) => {
        setError("Network error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
};