// import styles from "./TopHeader.module.css"
import {Link} from "react-router-dom"
import Logo from "../../Logo/Logo"
import Search from "../../Search/Search"
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Icon from "../../Icon/Icon";
import { useCartContext } from "../../../Contexts/CartContext/Cart";
export default function TopHeader() {
  const{totalItems,totalItemsInFav}= useCartContext()
  return (
    <div  className="TopHeader">
      <div className="container flex-between ">
        <Link to='/'><Logo/></Link>
        <Search/>

  <div className="icons flex-between">
    <Icon Url={'/favorite'}>
      <MdFavoriteBorder />
      <span className="badge">{totalItemsInFav()}</span>

    </Icon>
    <Icon Url={'/card'}>
    <FaShoppingCart />
    <span className="badge">{totalItems()}</span>
    </Icon>
  </div>
      </div>
    </div>
  )
}
