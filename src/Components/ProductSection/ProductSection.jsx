  import React, { useEffect, useState } from 'react'
  import {  SwiperSlide } from 'swiper/react';
  import styles from './ProductSection.module.css'
  import { useCategroyContext } from '../../Contexts/CategroyContext/CategroyProvider';
  import { getProductsByCategory } from '../../Api/ApiProduct';
  import Details from '../SectionsComponents/details/details';
  import ProductSlide from '../ProductStyle/ProductSlide';
  import SliderComponent from '../SliderComponent/SliderComponent';
  export default function ProductSection({title, category, description }) {
      const{BASE_URL,} = useCategroyContext()
      const [data ,setData]=useState([])
    useEffect(() => {
      async function fetchData() {
        try {
          const data= await getProductsByCategory(BASE_URL, category);
          setData(data.products);
        } catch (err) {
          console.log(err.message);
        }
      }

      fetchData();
    }, [BASE_URL]);
    return (
<div className= {styles.smart_phone}>
        <Details>
        <h1 className="details">{title}</h1>
        <p>{description}</p>
        </Details>
<SliderComponent>
  {data.map(product => (
    <SwiperSlide key={product.id}>
      <ProductSlide product={product} />
    </SwiperSlide>
  ))}
</SliderComponent>    

      </div>
    )
  }
