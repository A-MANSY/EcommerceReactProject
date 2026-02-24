import styles from './Button.module.css'
import React from 'react'

export default function Button({children,onClick}) {
  return (
      <div className={styles.btn} >
        <button onClick={onClick}>{children}</button>
      </div>
  )
}
