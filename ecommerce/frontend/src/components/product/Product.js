import React from 'react'
import './product.css'

export default function Product(props) {
  return (
    <div className='card-container'>
        <img className='img' src={props.product.image}/>
        <h2>Name: {props.product.name}</h2>
        <p>Price:{props.product.price}</p>
        <p>Rating {props.product.rating}</p>

    </div>
  )
}
