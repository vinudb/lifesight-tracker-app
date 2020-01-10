import React from 'react';
import { channelTypes } from '../utils';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';

const ChannelType = () => {
    const { onChannelTypeChange, tracker } = useCampaignContext(CampaignContext);

    return (
        <div className='channelTypeContainer'>
            <h4 className='subTitle'>TYPE(S) OF CHANNEL</h4>
            <div className="chkContainer">
                {
                    channelTypes.map((type, index) => (
                        <label className="container" key={index}>{type}
                            <input
                                type="checkbox"
                                value={type}
                                onChange={onChannelTypeChange}
                                checked={tracker.channelTypes.indexOf(type) > -1} />
                            <span className="checkmark"></span>
                        </label>
                    ))
                }
            </div>
        </div>
    );
}

export default ChannelType;
