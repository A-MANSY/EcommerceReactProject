import React from 'react'
import styles from './Details.module.css'
export default function Details({children}) {
  return (
      <div className={`${styles.details} container`}>
        {children}
        </div>  
)
}
