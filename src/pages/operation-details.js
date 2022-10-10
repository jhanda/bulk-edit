import React from "react";
import AddSpecifications from "../components/AddSpecifications"
import EditVisibility from "../components/EditVisibility"
import MoveProducts from "../components/MoveProducts"
import EditDetails from "../components/EditDetails";


const OperationDetails = (props) => {

    return (
        <div className="container">
            <h1>Step 3 of 4: Operation Details</h1>

            {props.selectedOperation === "editTagsAndCategories" &&  <EditDetails />}
            
            {props.selectedOperation === "addSpecifications" &&  <AddSpecifications />}

            {props.selectedOperation === "editVisibility" &&  <EditVisibility />}

            {props.selectedOperation === "moveProducts" &&  <MoveProducts />}


        </div>
    );
};

export default OperationDetails;