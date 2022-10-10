import React from "react"

export default function SearchResults(props) {

	function getCategories(product){
		const categories = []
		product.categories.forEach((category, i) => categories.push(category.name));
		return categories
	}

	function handleToggle(event){
		const {name, value, type, checked} = event.target
		props.selectProduct(name)
	}

	const rowMarkup = props.products.map(product => {
        return (
            <tr key={product.productId}>
                <td>
					<div>
						<input 
                			type="checkbox" 
                			checked={props.selectedProductIds.some(x => x == (product.productId))}
	        				onChange={handleToggle}
            				name={product.productId} 
        				/>
					</div>
				</td>
    	        <td><a href="#1">{product.productId}</a></td>
				<td>{product.name.en_US}</td>
				<td>{product.catalogId}</td>
				<td>{getCategories(product)}</td>
			</tr> )    
        })
        
    return (
        <div className="search-results">
		{props.products.length > 0 ? 
            <table className="table table-striped">
				<thead>
					<tr>
					<th> 
						<input 
                			type="checkbox" 
                			checked={props.allSelected}
	        				onChange={props.toggleSelectAll}
        				/>
					</th>
					<th>Product ID</th>
					<th>Product Name</th>
					<th>Catalog</th>
					<th>Categories</th>
				</tr>
			</thead>
			<tbody>
				{rowMarkup}
			</tbody>
			</table>
			:
			<div className="empty-results">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-question-diamond-fill" viewBox="0 0 16 16">
  					<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
				</svg>
				<h1>No products were found to match your search</h1>
				<h3>Try modifying your query and search again. </h3>
			</div>
		}
        </div>
    )
}
