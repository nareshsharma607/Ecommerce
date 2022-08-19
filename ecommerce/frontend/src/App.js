

import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import ProductList from './components/productList/ProductList';

function App() {
  let [products,setProducts]=useState([])

  let [searchString,setSearchString]=useState("")
  let search=
  (event)=>{
    const searchFieldString=event.target.value.toLowerCase()
     return setSearchString(searchFieldString)
    }

  // fetch('http://localhost:3000/products')
  // .then((response)=>{
  //   return response.json()
  // }).then((data)=>{
  //       return setProducts(data)
  // })
  
  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then((response)=>{
    console.log(response)
    return response.json()
  }).then((data)=>{
    return setProducts(data)
    
  })
  },[])
  
  const filteredProducts= products.filter((product)=>{
    return product.name.toLowerCase().includes(searchString,0)
   
 })


  return (
    <div className="App">
       <Search searchHandler={search} />
      <ProductList products={filteredProducts}/>
      
    </div>
  );
}

export default App;
