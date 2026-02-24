import React from 'react'
import Slider from '../../Components/Slider/Slider'
import styles from './HomePage.module.css'
import SmartPhone from '../../Components/SectionsComponents/SmartPhone/SmartPhone'
import Laptops from '../../Components/SectionsComponents/Laptops/Laptops'
import MobileAccessories from '../../Components/SectionsComponents/MobileAccessories/MobileAccessories'
import SportsAccessories from '../../Components/SectionsComponents/SportsAccessories/SportsAccessories'
import Tablets from '../../Components/SectionsComponents/Tablets/Tablets'
import Sunglasses from '../../Components/SectionsComponents/Sunglasses/Sunglasses'
export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Slider/>
      <SmartPhone />  
      <MobileAccessories/>
      <Laptops/>
      <Tablets/>
      <SportsAccessories/>
      <Sunglasses/>
    </div>
  )
}
