import React from "react";
import ClayPanel from '@clayui/panel';
import {Routes, Route, useNavigate} from 'react-router-dom';


const SelectOperation = (props) => {

    const spritemap = "../icons.svg";
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState(
        {
            selectedOperation: props.selectedOperation
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        props.setSelectedOperation(value)
    }

    function navigateNext(){
        navigate('/operation-details');
    }

    return (
        <div className="container">
            <h1>Step 2 of 4: Choose bulk operation</h1>

            Choose which type of operation you would like to perform on the selected issues.  
            <ClayPanel
                displayType="secondary"
                spritemap={spritemap}
            >
                <ClayPanel.Body>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                        type="radio" 
                                        name="selectedOperation" 
                                        id="editTagsAndCategories" 
                                        value="editTagsAndCategories"  
                                        checked={formData.selectedOperation === "editTagsAndCategories"} 
                                        onChange={handleChange}/>
                                </td>
                                <td><label htmlFor="editTagsAndCategories">Edit Tags & Categories</label></td>
                                <td>Edit Asset Tags and/or Asset Categories</td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="radio" 
                                        name="selectedOperation" 
                                        id="addSpecifications"
                                        value="addSpecifications"
                                        checked={formData.selectedOperation === "addSpecifications"} 
                                        onChange={handleChange}/>
                                </td>
                                <td><label htmlFor="addSpecifications">Add Specifications</label></td>
                                <td>Add specifications to products</td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="radio" 
                                        name="selectedOperation" 
                                        id="editVisibility"         
                                        value="editVisibility"  
                                        checked={formData.selectedOperation === "editVisibility"} 
                                        onChange={handleChange}/>
                                </td>
                                <td><label htmlFor="editVisibility">Edit Visibility</label></td>
                                <td>Edit products visibility by Account Group or Channel</td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="radio" 
                                        name="selectedOperation" 
                                        id="moveProducts" 
                                        value="moveProducts"  
                                        checked={formData.selectedOperation === "moveProducts"} 
                                        onChange={handleChange}/>
                                </td>
                                <td><label htmlFor="moveProducts">Move Products</label></td>
                                <td>Move products to another catalog</td>
                            </tr>
                        </tbody>
                    </table>
                    <button 
                        type="button" 
                        className={`btn btn-primary ${formData.selectedOperation ? '' : 'disabled'}`}
                        onClick={navigateNext}
                    >
                        Next
                    </button>
                </ClayPanel.Body>
            </ClayPanel>
        </div>
    );
};

export default SelectOperation;