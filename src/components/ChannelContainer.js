import React from 'react';
import ChannelType from './ChannelType';
import TrackingOptions from './TrackingOptions';
import Channel from './Channel';
import { FaExclamationCircle } from 'react-icons/fa';

const CampaignContainer = () => {
    return (
        <React.Fragment>
            <h4>
                <FaExclamationCircle
                    size={18}
                    style={{ verticalAlign: 'sub' }}
                    className='exclamation' />
                Select the channel of your campaign
            </h4>

            <Channel />
            <ChannelType />
            <TrackingOptions />
        </React.Fragment>
    );
}

export default CampaignContainer;
