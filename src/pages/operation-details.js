import React from "react";
import EditTagsAndCategories from "../components/EditTagsAndCategories"
import AddSpecifications from "../components/AddSpecifications"
import EditVisibility from "../components/EditVisibility"
import MoveProducts from "../components/MoveProducts"


const OperationDetails = (props) => {

    console.log(props);

    return (
        <div>
            <h1>Step 3 of 4: Operation Details</h1>

            {props.selectedOperation === "editTagsAndCategories" &&  <EditTagsAndCategories />}
            
            {props.selectedOperation === "addSpecifications" &&  <AddSpecifications />}

            {props.selectedOperation === "editVisibility" &&  <EditVisibility />}

            {props.selectedOperation === "moveProducts" &&  <MoveProducts />}


        </div>
    );
};

export default OperationDetails;