import { useCategroyContext } from "../../../Contexts/CategroyContext/CategroyProvider"
import Spinner from '../../spinner/Spinner'
import Message from '../../message/Message'
import { Link } from "react-router-dom"
import styles from './CategoriesList.module.css'

export default function CategoriesList() {
  const { isLoading, categroy, error } = useCategroyContext();

  if (isLoading) return <Spinner />;
  if (error) return <Message message='We got some error' />;

  return (
    <ul className={styles.list}>
      {categroy.map((cat) => (
        <li key={cat.slug} className={styles.categoryItem}>
          <Link to={`/category/${cat.slug}`} className={styles.categoryLink}>
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
