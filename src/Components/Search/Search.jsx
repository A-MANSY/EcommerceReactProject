import { IoIosSearch } from "react-icons/io";
import styles from './search.module.css'
export default function Search() {
  return (
    <div className={styles.search_box}>
      <input 
        type="search" 
        id='search' 
        name='search' 
        placeholder='Search for product...' 
      />
      <IoIosSearch className={styles.search_icon} />
    </div>
  )
}
