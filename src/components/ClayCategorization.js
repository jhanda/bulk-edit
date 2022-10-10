import React from "react"
import ClayPanel from '@clayui/panel';
import ClayMultiSelect from '@clayui/multi-select';

export default function ClayCategorization(props) {

    const spritemap = "../icons.svg";

    const [value, setValue] = React.useState("");
    const [items, setItems] = React.useState([]);

    const sourceItems = [
        {
        label: "one",
        value: "1"
        },
        {
        label: "two",
        value: "2"
        },
        {
        label: "three",
        value: "3"
        },
        {
        label: "four",
        value: "4"
        }
    ];

    function handleOnChange(newValue){
        setValue(newValue)
    }

    function handleOnItemsChange(newItems){
        setItems(newItems)
    }


    return (
        <ClayPanel
            displayTitle="Categorization"
            displayType="secondary"
            spritemap={spritemap}
        >
        <ClayPanel.Body>
            <ClayMultiSelect
                inputName="myInput"
                items={items}
                onChange={handleOnChange}
                onItemsChange={handleOnItemsChange}
                sourceItems={sourceItems}
                spritemap={spritemap}
                value={value}
            />
        </ClayPanel.Body>
      </ClayPanel>
       
    )
}


