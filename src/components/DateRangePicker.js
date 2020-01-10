import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import CampaignContext, { useCampaignContext } from '../context/campaignContext';

const RangePicker = () => {
    const { onDatesChange, tracker } = useCampaignContext(CampaignContext);

    return (
        <DateRangePicker
            className="rangePicker"
            value={tracker.dateRange}
            onSelect={onDatesChange}
            singleDateRange={true}
        />
    );
}

export default RangePicker