import React from "react";
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayTable from "@clayui/table";
import ClayManagementToolbar from "@clayui/management-toolbar";

const Search = (props) => {

    const spritemap = "../../icons.svg";
	const [searchMobile, setSearchMobile] = React.useState(false);

	
    const lang ="en_US"
    const [formData, setFormData] = React.useState({searchTerm: props.searchTerm})
    const [search, setSearch] = React.useState("");

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
        
    function handleSelectAll(){
        console.log("Toggle select all");
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
		    				checked={allSelected}
			    			containerProps={{ className: "mx-3" }}
				    		indeterminate={indeterminate}
					    	onChange={() => console.log("Selecting all")}
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

                    <ClayManagementToolbar.Search>
                        <ClayInput.Group>
                            <ClayInput.GroupItem>
                            <ClayInput
                                aria-label="Search"
                                className="form-control input-group-inset input-group-inset-after"
                                placeholder="Search . . . "
                                type="text"
                            />
                            <ClayInput.GroupInsetItem after tag="span">
                                <ClayButtonWithIcon
                                    className="navbar-breakpoint-d-none"
                                    displayType="unstyled"
                                    onClick={() => setSearchMobile(false)}
                                    spritemap={spritemap}
                                    symbol="times"
                                />
                                <ClayButtonWithIcon
                                    displayType="unstyled"
                                    spritemap={spritemap}
                                    symbol="search"
                                    type="submit"
                                />
                            </ClayInput.GroupInsetItem>
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
    );
};

export default Search;