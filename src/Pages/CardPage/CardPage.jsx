  import { useCartContext } from '../../Contexts/CartContext/Cart'
  import { MdDelete } from "react-icons/md";
  import Icon from '../../Components/Icon/Icon';
  import styles from './CardPage.module.css'
  export default function CardPage() {
    const {products,updateQuantity, removeFromCart,totalItemsQuantity}=useCartContext()
    const totalPrice = products.reduce((prev, cur) => {
    return prev + Number(cur.price) * (Number(cur.quantity) || 1);}, 0);
  if (products.length ===0 ) return <h1>add product</h1>
    return (
      <div className='container'>
        <h1>All Order</h1>
        <hr />
        <div>
          {
            products.map((product)=>(
            <div className={styles.cartItem} key={product.id}>
  <div className={styles.img}>
    <img src={product.images[0]} alt={product.title} />
  </div>
  <div className={styles.details}>
    <h3>{product.title}</h3>
<span className={styles.price}>
  ${ (Number(product.price) * (Number(product.quantity) || 1)).toFixed(2) }
</span>    
<div className={styles.quantity}>
      <button
        onClick={() =>
          updateQuantity(
            product.id,
            product.quantity > 1 ? product.quantity - 1 : 1
          )
        }
      >
        -
      </button>
      <span>Quantity :{product.quantity}</span>
      <button
        onClick={() => updateQuantity(product.id, product.quantity + 1)}
      >
        +
      </button>
    </div>
  </div>
  <div
    className={styles.deleteBtn}
  >
    <Icon onClick={()=>removeFromCart(product.id)}>
      <MdDelete />
    </Icon>
  </div>
  <hr />
</div>    ))
          }
        </div>
        <div className="total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <h2>total quantity : {totalItemsQuantity()}</h2>
        </div>
      </div>
    )
  }
