import React from 'react'
import Product from '../product/Product'
import './productList.css'

export default function ProductList(props) {
    console.log(props.products)
  return (
    <div className='card-list'>
        {props.products.map((item)=>{return <Product product={item}/>}) }
    </div>
  )
}
