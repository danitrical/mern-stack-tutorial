import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Slider from '../slider/Slider'
import ProductList from '../productsList/ProductList'
import { PRODUCTS_DATA, PRODUCTS_DATA_3 } from '../../constants/PRODUCT_DUMP'

const Home = () => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:4000/products?skip=2&give=6';
    const fetchData = await fetch(url)
    const data = await fetchData.json();
    setProducts1(data?.data?.splice(0,2))
    setProducts2(data?.data)
}

useEffect(() => {
  fetchData()
}, [])
  
  return (
    <>
      <Header />
      <Slider />
      <ProductList data={products1} isHorzontal />
      <ProductList data={products2} />
    </>
  )
}

export default Home
