import CategoriesList from "../CategoriesList/CategoriesList"
import styles from './Categories.module.css'

export default function Categories() {
  return (
    <div className={styles.dropdown}>
      <ul>
        <CategoriesList />
      </ul>
    </div>
  )
}
