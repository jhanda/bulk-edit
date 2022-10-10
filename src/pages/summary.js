import React from "react";
import ClayMultiSelect from '@clayui/multi-select';

const Summary = (props) => {
    
    const spritemap = "../../icons.svg";
    const [value, setValue] = React.useState("");
    const [items, setItems] = React.useState([
        {
        label: "one",
        value: "1"
        }
    ]);

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

    console.log(props.tags);

  return (
    <div className="container">
        <ClayMultiSelect
            {...props}
            inputName="myInput"
            items={items}
            onChange={setValue}
            onItemsChange={setItems}
            sourceItems={props.tags}
            spritemap={spritemap}
            value={value}
        />
    </div>
  );
};


export default Summary;