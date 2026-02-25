import { useCartContext } from '../../Contexts/CartContext/Cart';
import { MdDelete } from "react-icons/md";
import Icon from '../../Components/Icon/Icon';
import styles from './Favorite.module.css';
import Button from '../../Components/Btn/Button';

export default function Favorite() {
  const { favorite, removeFromFavorite,addToCart } = useCartContext();

  if (favorite.length === 0) return <h1>Add product to favorites</h1>;

  return (
    <div className='container'>
      <h1>Favorite Products</h1>
      <hr />
      <div>
        {favorite.map((product) => (
          <div className={styles.cartItem} key={product.id}>
            <div className={styles.img}>
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div className={styles.details}>
              <h3>{product.title}</h3>
              <span className={styles.price}>
                ${Number(product.price).toFixed(2)}
              </span>  
            <Button onClick={()=>{addToCart(product),setTimeout(removeFromFavorite(product.id),2000)}}>add to your cart</Button>

            </div>
            <div className={ `${styles.deleteBtn} ${styles.row}`}>
              <Icon onClick={() => removeFromFavorite(product.id)}>
                <MdDelete />
              </Icon>  
            </div>
            <hr />
        
          </div>
          
        ))}
      </div>
    </div>
  );
}