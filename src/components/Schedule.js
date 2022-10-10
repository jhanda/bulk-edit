import React from "react"

export default function Categorization(props) {

    
    return (
        <div className="card d-flex flex-column">
            <h4 className="align-items-center card-header d-flex justify-content-between py-3">
                Schedule
            </h4>
            <div className="collapse show" id="hfro___collapse">
                <div className="card-body">            
                    <div className="form-group form-inline input-boolean-wrapper">
                        <label className="" for="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_published">
                            <input 
                                checked="" 
                                className="field" 
                                id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_published" 
                                name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_published"
                                onclick="" 
                                type="checkbox" />
                            Published
                        </label>
                    </div>
                    <div className="form-group input-Date-wrapper">
                        <label className=" control-label" for="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDate">    
                            Display Date
                        </label>
                        <div className="form-group-autofit">
                            <div className="form-group-item">
                                <span className="lfr-input-date" id="ixfm___displayDate">
                                    <input 
                                        className="field field form-control" 
                                        id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDate" 
                                        name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDate" 
                                        placeholder="mm/dd/yyyy" 
                                        type="text" 
                                        value="10/06/2021" 
                                    />
                                    <input 
                                        id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateDay" 
                                        name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateDay" 
                                        type="hidden" 
                                        value="6" 
                                    />
                                    <input 
                                        id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateMonth"  
                                        name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateMonth" 
                                        type="hidden" 
                                        value="9"
                                    />
                                    <input 
                                        id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateYear" 
                                        name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateYear" 
                                        type="hidden" 
                                        value="2021"
                                    />
                                </span>
                            </div>
                            <div className="form-group-item">
                                <span className="lfr-input-time" id="ndlp___displayTime">
                                    <input className="form-control field" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateTime" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateTime" placeholder="h:mm am/pm" type="text" value="12:25 PM" />
                                    <input id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateHour" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateHour" type="hidden" value="0" />
                                    <input id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateMinute" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateMinute" type="hidden" value="25" />
                                    <input id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateAmPm" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_displayDateAmPm" type="hidden" value="1" />
                                    <input id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_date" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_date" type="hidden" value="null" />
                                </span>
                            </div>            
                        </div>
                    </div>
                    <div className="form-group input-Date-wrapper">
                        <label className=" control-label disabled" for="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDate">
                            Expiration Date
                        </label>
                        <div className="form-group-autofit">
                            <div className="form-group-item">
                                <span className="lfr-input-date" id="hhwi___displayDate">
                                    <input className="field disabled field disabled form-control" disabled="" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDate" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDate" placeholder="mm/dd/yyyy" type="text" value="10/07/2022" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateDay" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateDay" type="hidden" value="7" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateMonth" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateMonth" type="hidden" value="9" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateYear" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateYear" type="hidden" value="2022" />
                                </span>
                            </div>
                            <div className="form-group-item">
                                <span className="lfr-input-time" id="zqcq___displayTime">
                                    <input className="form-control field disabled" disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateTime" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateTime" placeholder="h:mm am/pm" type="text" value="04:48 PM" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateHour" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateHour" type="hidden" value="4" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateMinute" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateMinute" type="hidden" value="48" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateAmPm" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_expirationDateAmPm" type="hidden" value="1" />
                                    <input disabled="disabled" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_date" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_date" type="hidden" value="null" />
                                </span>
                            </div>
                        </div> 
                        <div className="clearfix">
                            <div className="form-group form-inline input-checkbox-wrapper">
                                <label className="" for="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_fmexpirationDate">
                                    <input checked="" className="field" id="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_fmexpirationDate" name="_com_liferay_commerce_product_definitions_web_internal_portlet_CPDefinitionsPortlet_neverExpire" onclick="" type="checkbox" />
                                    Never Expire
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}