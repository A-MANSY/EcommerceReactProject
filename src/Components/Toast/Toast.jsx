import styles from './Toast.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { CiCircleRemove } from "react-icons/ci";
import {Link} from 'react-router-dom'
export default function Toast({ toast }) {
  if (!toast) return null;

  const { product, type } = toast;

  return (
    <div className={`${styles.toast} ${type === 'add' ? styles.add : styles.remove}`}>
      <img src={product.images?.[0]} alt={product.title} className={styles.img} />
      <div className={styles.details}>
        <h4>{product.title}</h4>
        <span>${product.price}</span>
      </div>
      {type === 'add'|| type==="fav-add" ?<FaCheckCircle className={styles.icon} />:<CiCircleRemove className={styles.icon}/>} 
      
      {
        type === "add" && <Link to={'card'}>view cart</Link>
        ||
        type === "remove" && <Link to={'card'}>Remove from  cart</Link>
        ||
        type ===  "fav-add" && <Link to={'favorite'}>view favorite</Link>
        ||
        type === "fav-remove" && <Link to={'favorite'}>Remove from  favorite</Link>
        
      }
      </div>
  );
}