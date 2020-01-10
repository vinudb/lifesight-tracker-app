import React from 'react';
import { attributionTypes } from '../utils';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';

const TrackingOptions = () => {
    const { onAttributionTypeChange, tracker } = useCampaignContext(CampaignContext);

    return (
        <React.Fragment>
            <h4 className='subTitle'>TRACKING OPTIONS</h4>
            <h5 className="subTitle">Attribution Types</h5>
            <div className="chkContainer">
                {
                    attributionTypes.map((type, index) => {
                        return (
                            <label className="container" key={index}>{type}
                                <input
                                    type="checkbox"
                                    value={type}
                                    onChange={onAttributionTypeChange}
                                    checked={tracker.attributionTypes.indexOf(type) > -1} />
                                <span className="checkmark"></span>
                            </label>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default TrackingOptions;
