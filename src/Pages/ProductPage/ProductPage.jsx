import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useCategroyContext } from '../../Contexts/CategroyContext/CategroyProvider';
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import Button from '../../Components/Btn/Button';
import ProductSection from '../../Components/ProductSection/ProductSection';
import styles from './ProductPage.module.css'
import { useCartContext } from '../../Contexts/CartContext/Cart';
export default function ProductPage() {
  const { id } = useParams();
  const { BASE_URL } = useCategroyContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0); 
  const{addToCart,   addToFavorite, removeFromCart,removeFromFavorite,favorite,products}=useCartContext()
const isFavorite = favorite.some(
  (item) => item.id === data.id
);
const isInCart = products?.some(
  (item) => item.id === data.id
);
  useEffect(() => {
    async function getDetails() {
      try {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const product = await res.json();
        setData(product);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [id, BASE_URL]);

  if (loading) return <div style={{ textAlign: 'center', fontSize: '1.5rem', padding: '4rem' }}>جاري تحميل المنتج...</div>;

  if (!data || Object.keys(data).length === 0) return <div style={{ textAlign: 'center', fontSize: '1.5rem', padding: '4rem', color: 'red' }}>المنتج غير موجود</div>;
  return (
  <div className={styles.container}>
  <div className={styles.productDetails}>
    <div className={styles.imagesSection}>
      <div className={styles.mainImage}>
    <img src={data.images?.[selectedImage]} alt={data.title} className={styles.mainImg} />
      </div>
      {data.images?.length > 1 && (
    <div className={styles.otherImages}>
  {data.images?.map((img, index) => (
    <img 
      key={index}
      src={img}
      alt={`${data.title} - ${index + 1}`}
      className={`${styles.thumbnailImg} ${selectedImage === index ? styles.activeThumbnail : ''}`}
      onClick={() => setSelectedImage(index)}
    />
  ))}
</div>
      )}
    </div>
    <div className={styles.detailsSection}>
      <h2 className={styles.productTitle}>{data.title}  
        <span
  className={styles.favoriteIcon}
  onClick={(e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorite(data.id);
    } else {
      addToFavorite(data);
    }
  }}
>
  {isFavorite ? (
    <FaHeart className={styles.favoriteActive} />
  ) : (
    <FaRegHeart className={styles.favorite} />
  )}
</span>
        </h2>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(data.rating) ? styles.activeStar : styles.star}
          />
        ))}
        <span className={styles.ratingText}>({data.rating})</span>
      </div>
     <p className={styles.price}>
      price :  ${data.price}
        {data.discountPercentage > 0 && (
          <span className={styles.discount}>-{data.discountPercentage}%</span>
        )}
      </p>

      <p className={styles.description}>{data.description}</p>

      <p className={styles.stock}>
        Hurry up! {data.stock > 10 ? "" : "only"} {data.stock} {data.availabilityStatus}
      </p>
      {
        isInCart && <h2> this product in your cart </h2> 
      }

      <div className={styles.actions}>
{isInCart ? (
  <Button
    className={styles.inCartBtn}
    onClick={() => removeFromCart(data.id)}
  >
    Remove From Cart
  </Button>
) : (
  <Button
    className={styles.addToCartBtn}
    onClick={() => addToCart(data)}
  >
    Add To Cart
  </Button>
)}
</div>
    </div>
  </div>
  <div className={styles.similarSection}>
    <ProductSection 
      category={data.category} 
      title={data.category}
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque?"
    />
  </div>
</div>
  );
}