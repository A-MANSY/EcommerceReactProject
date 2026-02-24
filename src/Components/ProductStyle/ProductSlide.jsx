import styles from "./ProductSlide.module.css";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/CartContext/Cart';
export default function ProductSlide({ product }) {
  const{addToCart, addToFavorite,
  removeFromFavorite,favorite }=useCartContext()
  const isFav = favorite.some(item => item.id === product.id);

  const handleFavorite = (e) => {
    e.stopPropagation(); // عشان ميأثرش على اللينك
    if (isFav) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
    }
  };

  return (
  <div className={styles.product}>
      <div className={styles.favoriteIcon} onClick={handleFavorite}>
        {isFav ? (
          <FaHeart className={styles.favoriteActive} />
        ) : (
          <FaRegHeart className={styles.favorite} />
        )}
      </div>

      <Link to={`/product/${product.id}`} onClick={() => window.scroll(0, 0)}>
        <img src={product.images?.[0]} alt={product.title} className={styles.image} />
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(product.rating) ? styles.activeStar : styles.star}
            />
          ))}
          <span className={styles.rateNumber}>({product.rating})</span>
        </div>
      </Link>

      <div className={styles.bottom}>
        <span className={styles.price}>${product.price}</span>
        <button
          className={styles.btn}
          type='button'
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); ;addToCart(product); }}
        >
          Add
        </button>
      </div>
    </div>
  );
}