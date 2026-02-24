import React from 'react'
import {  NavLink  } from 'react-router-dom'
import styles from './NavPage.module.css'

export default function NavPage() {
  return (
    <ul className={styles.navList}>
        <li className={styles.navItem}><NavLink  to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink ></li>
        <li className={styles.navItem}><NavLink  to='/aboutPage'>About</NavLink ></li>
          <li className={styles.navItem}><NavLink  to='/blog'>Blog</NavLink ></li>
        <li className={styles.navItem}><NavLink  to='/contact'>Contact</NavLink ></li>
    </ul>
  )
}
