import React from "react"
import ClayCategorization from "./ClayCategorization"
import ClaySchedule from "./ClaySchedule"

export default function EditDetails(props) {
        
    return (
        <div className="container edit-details">
            <h3>Edit Details</h3>
            <div className="row">
                <div className="col-6">
                    <ClaySchedule />
                </div>
                <div className="col-6">
                    <ClayCategorization  />
                </div>
            </div>
      </div>
    )
}


