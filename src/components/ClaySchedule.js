import React from "react"
import ClayDatePicker from '@clayui/date-picker';
import ClayTimePicker from '@clayui/time-picker';
import ClayPanel from '@clayui/panel';
import ClayForm, {ClayCheckbox} from '@clayui/form';



export default function Categorization(props) {

    const [isPublished, setIsPublished] = React.useState(true);
    const [publishDateString, setPublishDateString] = React.useState("");
    const [publishTime, setPublishTime] = React.useState({
        hours: "--",
        minutes: "--"
    });
    
    const [isNeverExpire, setIsNeverExpire] = React.useState(true);
    const [expirationDateString, setExpirationDateString] = React.useState(Date.now().toString());
    const [expirationTime, setExpirationTime] = React.useState({
        hours: "--",
        minutes: "--"
      });

    const spritemap = "../../../icons.svg";

    return (

        <ClayPanel
            displayTitle="Schedule"
            displayType="secondary"
            spritemap={spritemap}
        >
        <ClayPanel.Body>
            <ClayForm>
                <ClayForm.Group className="form-group-sm">
                    <ClayCheckbox
                        aria-label="Published"
                        checked={isPublished}
                        onChange={() => setIsPublished(val => !val)}
                        label="Published"
                    />
                </ClayForm.Group>
                <label htmlFor="publishDate">Display Date</label>
                <div className="form-group-autofit">
                    <div className="form-group-item">
                        <ClayDatePicker
                            id="publishDate"
                            onChange={setPublishDateString}
                            placeholder="YYYY-MM-DD"
                            spritemap={spritemap}
                            value={publishDateString}
                            years={{
                                end: 2024,
                                start: 2008
                            }}
                        /> 
                    </div>
                    <div className="form-group-item">
                        <ClayTimePicker
                            onChange={setPublishTime}
                            spritemap={spritemap}
                            use12Hours
                            value={publishTime}
                        />
                    </div>
                </div>
                <label htmlFor="expirationDate">Expiration Date</label>
                <div className="form-group-autofit">
                    <div className="form-group-item">
                        <ClayDatePicker
                            id="expirationDate"
                            onChange={setExpirationDateString}
                            placeholder="YYYY-MM-DD HH:mm"
                            spritemap={spritemap}
                            value={expirationDateString}
                            years={{
                                end: 2024,
                                start: 2008
                            }}
                        />   
                    </div>
                    <div className="form-group-item">
                        <ClayTimePicker
                            onChange={setExpirationTime}
                            spritemap={spritemap}
                            use12Hours
                            value={expirationTime}
                        />
                    </div>
                </div>
                <ClayForm.Group className="form-group">
                    <ClayCheckbox
                        aria-label="Never Expire"
                        checked={isNeverExpire}
                        onChange={() => setIsNeverExpire(val => !val)}
                        label="Never Expire"
                    />
                </ClayForm.Group>
            </ClayForm>
        </ClayPanel.Body>
      </ClayPanel>

        
    )
}