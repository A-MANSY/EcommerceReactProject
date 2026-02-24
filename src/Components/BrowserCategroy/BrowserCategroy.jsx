import styles from './BrowserCategroy.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Icon from '../Icon/Icon';
import Categories from './Categories/Categories';
import { useState ,useEffect,useRef} from 'react';
export default function BrowserCategroy() {
  const [isOpen,setIsOpen]=useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  document.addEventListener("mousedown", handleClickOutside)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])

  return (
      <div className={styles.categroyNav}>
      <span
        onClick={()=>setIsOpen(!isOpen)}
        role='button'
        className={styles.categroy_btn}>
      <span className={styles.cat}>
      <Icon>
        <IoMenu className={styles.cat}/>
        </Icon>
          </span>
          <h5>BrowserCategory</h5>
          <span>
      <Icon >
       <IoIosArrowDown  className={`${styles.cat} ${isOpen ? styles.arrowOpen : ""}`}/>
     </Icon>
      </span>
        </span>
        {isOpen && <div ref={dropdownRef}><Categories /></div>}
        </div>  
  )
}
