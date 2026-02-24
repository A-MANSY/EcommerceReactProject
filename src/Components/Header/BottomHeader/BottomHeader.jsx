import styles from "./BottomHeader.module.css"
import Icon from "../../Icon/Icon";
import BrowserCategroy from "../../BrowserCategroy/BrowserCategroy";
import NavPage from "../../navPage/NavPage";
import { CiLogin } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";

export default function BottomHeader() {
  return (
    <div className={styles.BtmHeader}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <BrowserCategroy />
          <NavPage />
          <div className={styles.icons}>
            <div className={styles.iconWrapper}>
              <CiLogin />
            </div>
            <div className={styles.iconWrapper}>
              <IoPersonAddSharp />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
