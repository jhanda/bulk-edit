import './App.css';
import React from "react"
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import {getCatalogs, getProducts} from './utils/Requests';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'



function App() {

  const [catalogMap, setCatalogMap] = React.useState(new Map())
  const [searchTerm, setSearchTerm] = React.useState("brakes")
  const [products, setProducts] = React.useState([]);
  const [selectedProductIds, setSelectedProductIds] = React.useState([]);

  React.useEffect(() => {
    getProducts(searchTerm)
			.then(response => response.json())
			.then(data => setProducts(data.items));
  }, [searchTerm])

  React.useEffect(() => {
    getCatalogs()
    .then(response => response.json())
    .then(data => {
      data.items.forEach(element => {
        setCatalogMap(prevCatalogMap => prevCatalogMap.set(element.id, element.name))
      });
    });
  }, [catalogMap])

  function handleChange(newTemp){
     setSearchTerm(newTemp)
  }

  function selectProduct(productId){
    console.log(productId)
    //props.selectedProductIds.some(x => x == (product.productId))
    selectedProductIds.includes(productId)? 
    setSelectedProductIds(selectedProductIds.filter(item => item !== productId))
    :
    (setSelectedProductIds(prevSelectedProductIds => [... selectedProductIds, productId]))
  }
  
  return (
    <div className="App">      
      <SearchBar 
        searchTerm = {searchTerm}
        handleChange = {handleChange}
      />
      <SearchResults 
        products = {products}
        selectedProductIds = {selectedProductIds}
        catalogMap = {catalogMap}
        selectProduct = {selectProduct}
      />

    </div>
  );
}

export default App;
