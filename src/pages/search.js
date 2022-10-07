import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const Search = (props) => {

    const navigate = useNavigate();

    const allSelected =
		props.selectedProductIds.length > 0 &&
		props.selectedProductIds.length === props.products.length;

	const indeterminate =
		props.selectedProductIds.length > 0 &&
		props.selectedProductIds.length < props.products.length;

    function handleChange(event) {
          setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [event.target.id] : event.target.value
            }
        })
    }

	function getCategories(product){
		const categories = []
		product.categories.forEach((category, i) => categories.push(category.name));
		return categories
	}

	function handleToggle(event){
		const {name, value, type, checked} = event.target
		props.selectProduct(name)
		console.log("Handling toggle for " + name + " value is " + checked); 
	}
    
    function toggleSelectAll(){
		allSelected ? unselectAll() : selectAll()
	}
    
    function selectAll(){
        props.setSelectedProductIds(props.products.map(product => product.productId))
    }

    function unselectAll(){
        props.setSelectedProductIds([])
    }

    function navigateNext(){
        navigate('/select-operation');
    }

    return (
        <div>
            <h1>Step 1 of 4: Select Products</h1>
            <SearchBar 
                searchTerm = {props.searchTerm}
                handleChange = {props.updateSearchTerm}
            />
            <SearchResults 
                allSelected = {allSelected}
                products = {props.products}
                selectedProductIds = {props.selectedProductIds}
                catalogMap = {props.catalogMap}
                selectProduct = {props.selectProduct}
                toggleSelectAll = {toggleSelectAll}
            />
            <button 
                type="button" 
                className={`btn btn-primary ${props.selectedProductIds.length > 0 ? '' : 'disabled'}`}
                onClick={navigateNext}
            >
                Next
            </button>
        </div>
    );
};

export default Search;