import React from 'react';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';
import DateRangePicker from "./DateRangePicker";
import { FaExclamationCircle } from 'react-icons/fa';

const Flight = () => {
    const { tracker, isCalenderOpen, onToggleCalender } = useCampaignContext(CampaignContext);

    return (
        <React.Fragment>
            <h4>
                <FaExclamationCircle
                    size={18}
                    style={{ verticalAlign: 'sub' }}
                    className='exclamation' />
                Select when the campaign start and end
            </h4>

            <div className="datesContainer">
                <div>
                    <h5>Start Date</h5>
                    <div
                        className="date"
                        onClick={onToggleCalender}>
                        {tracker.dateRange.start.format("DD-MM-YYYY")}
                    </div>
                </div>

                <div>
                    <h5>End Date</h5>
                    <div
                        className="date"
                        onClick={onToggleCalender}>
                        {tracker.dateRange.end.format("DD-MM-YYYY")}
                    </div>
                </div>
            </div>
            {
                isCalenderOpen && <DateRangePicker />
            }
        </React.Fragment>
    );
}

export default Flight;
