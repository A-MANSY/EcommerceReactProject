import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCategroyContext } from "../../Contexts/CategroyContext/CategroyProvider";
import ProductSlide from '../../Components/ProductStyle/ProductSlide'
import styles from './Categroy.module.css'
export default function CategoryPage() {
  const { categoryName } = useParams();
  const { BASE_URL } = useCategroyContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${BASE_URL}/category/${categoryName}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryName, BASE_URL]);

  if (loading) return <h2>Loading...</h2>;
  if (!products || products.length === 0) return <h2>No products found</h2>;

  return (
    <div className="container">
      <h1>{categoryName}</h1>
      <hr />
<div className={styles.productsGrid}>
  {products.map((product) => (
    <ProductSlide key={product.id} product={product} />
  ))}
</div>
    </div>
  );
}