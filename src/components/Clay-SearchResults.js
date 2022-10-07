import ClayButton from "@clayui/button";
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayTable from "@clayui/table";

import ClayManagementToolbar from "@clayui/management-toolbar";
import React from "react"

export default function SearchResults(props) {

	const [search, setSearch] = React.useState("");

	const lang ="en_US"

	function getCategories(product){
		const categories = []
		product.categories.forEach((category, i) => categories.push(category.name));
		return categories
	}

	function handleToggle(event){
		const {name, value, type, checked} = event.target
		props.selectProduct(name)
		//console.log("Handling toggle for " + name + " value is " + checked); 
	}

        
	function handleDelete(){
		console.log("Handling the delete")
	}

    return (
		<div>
		<ClayManagementToolbar>
			<ClayManagementToolbar.ItemList expand>
				<ClayManagementToolbar.Item>
					<ClayCheckbox
						// checked={allSelected}
						// containerProps={{ className: "mx-3" }}
						// indeterminate={indeterminate}
						// onChange={() => handleSelectAll(allSelected)}
						title="Select All"
					/>
				</ClayManagementToolbar.Item>
				<ClayManagementToolbar.Item>
					<ClayButton
						className="mr-4"
						displayType="primary"
						onClick={() => handleDelete()}
					>
						{`Bulk Edit  Products`}
					</ClayButton>
				</ClayManagementToolbar.Item>
				<ClayManagementToolbar.Item>
					<span>Status Placeholder</span>
				</ClayManagementToolbar.Item>

				<li className="flex-grow-1"></li>

				<ClayManagementToolbar.Search showMobile>
						<ClayInput.Group>
							<ClayInput.GroupItem>
								<ClayInput
									aria-label="Search"
									className="form-control"
									onChange={(e) => setSearch(e.currentTarget.value)}
									placeholder="Filter By..."
									type="text"
									value={search}
								/>
							</ClayInput.GroupItem>
						</ClayInput.Group>
					</ClayManagementToolbar.Search>

			</ClayManagementToolbar.ItemList>
		</ClayManagementToolbar>
	
		<ClayTable>
			<ClayTable.Head>
				<ClayTable.Row>
					<ClayTable.Cell headingCell></ClayTable.Cell>
					<ClayTable.Cell headingCell>{"Name"}</ClayTable.Cell>
					<ClayTable.Cell headingCell>{"Description"}</ClayTable.Cell>
					<ClayTable.Cell headingCell>{"ID"}</ClayTable.Cell>
					<ClayTable.Cell headingCell>{"Product ID"}</ClayTable.Cell>
					<ClayTable.Cell headingCell>{"State"}</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Head>

			<ClayTable.Body>
				{props.products && props.products.map((product) => (
					<ClayTable.Row key={product.productId}>
						<ClayTable.Cell className="entry-selector lfr-checkbox-column text-left text-middle">
							<ClayCheckbox
							checked={
								props.selectedProductIds &&
								props.selectedProductIds.includes(product.productId)
							}
							onChange={() => onSelect(product.productId)}
							/>
						</ClayTable.Cell>
						<ClayTable.Cell headingTitle>{product.name[lang]}</ClayTable.Cell>
						<ClayTable.Cell expanded truncate>
							{product.description[lang]}
						</ClayTable.Cell>
						<ClayTable.Cell>{product.id}</ClayTable.Cell>
						<ClayTable.Cell>{product.productId}</ClayTable.Cell>
						<ClayTable.Cell>
							{product.active ? "Active" : "Deactivated"}
						</ClayTable.Cell>
					</ClayTable.Row>
				))}
			</ClayTable.Body>
		</ClayTable>
	</div>
    )
}
