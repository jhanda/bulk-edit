import './App.css';
import React from "react"
import {getCatalogs, getProducts, getTags} from './utils/Requests';

import { HashRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

//Pages
import Search from './pages/search'
import SelectOperation from './pages/select-operation'
import OperationDetails from './pages/operation-details'
import Confirmation from './pages/confirmation'
import Summary from './pages/summary';

function App() {
  const siteId = 20123
  const [catalogMap, setCatalogMap] = React.useState(new Map())
  const [tags, setTags] = React.useState([])  
  const [searchTerm, setSearchTerm] = React.useState("")
  const [products, setProducts] = React.useState([])
  const [selectedProductIds, setSelectedProductIds] = React.useState([])
  const [selectedOperation, setSelectedOperation] = React.useState("")

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

  React.useEffect(() => {
    getTags(siteId)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(element => {
        setTags(prevTags => [...prevTags, {label: element.name, value: element.id}])
      });
    });
  }, [tags])

  function updateSearchTerm(newTerm){
    setSearchTerm(newTerm)
  }
  
  function selectProduct(productId){
    //props.selectedProductIds.some(x => x == (product.productId))
    selectedProductIds.includes(productId)? 
    setSelectedProductIds(selectedProductIds.filter(item => item !== productId))
    :
    (setSelectedProductIds(prevSelectedProductIds => [... selectedProductIds, productId]))
  }
  
  return (
    <div className="App">      
      <HashRouter>
        <nav>
          <h1>Bulk Edit Products</h1>
          <Link to="/">Select Products</Link> |
          <Link to="/select-operation" className={selectedProductIds.length > 0 ? '' : 'disabled-link'}>Select Operation</Link> |
          <Link to="/operation-details" className={selectedOperation ? '' : 'disabled-link'}>Operation Details</Link> |
          <Link to="/confirmation">Confirmation</Link>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={
              <Search
                searchTerm = {searchTerm}
                products = {products}
                selectedProductIds = {selectedProductIds}
                catalogMap = {catalogMap}
                updateSearchTerm = {updateSearchTerm}
                selectProduct = {selectProduct}
                setSelectedProductIds = {setSelectedProductIds}
              />
            } />
          <Route  path="/select-operation" element={
            <SelectOperation
              selectedProductIds = {selectedProductIds}
              selectedOperation = {selectedOperation}
              setSelectedOperation = {setSelectedOperation}
            />
          } />
          <Route  path="/operation-details" element={
            <OperationDetails 
              selectedProductIds = {selectedProductIds}
              selectedOperation = {selectedOperation}
            />
          } />
          <Route  path="/confirmation" element={
            <Confirmation 
              selectedProductIds = {selectedProductIds}
              tags = {tags}
            />
          } />
          <Route  path="/summary" element={
            <Summary 
              selectedProductIds = {selectedProductIds}
              tags = {tags}
            />
          } />
          
      
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
