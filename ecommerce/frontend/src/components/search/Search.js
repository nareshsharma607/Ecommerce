import React from 'react'
import './search.css'

export default function Search(props) {
  return (
    <div>
        <label className='search-label'>search Product:</label>
        <input className='search-box' onChange={props.searchHandler}/>
    </div>
  )
}