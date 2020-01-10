import React from 'react';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';
import { IoMdRadio } from 'react-icons/io';
import { FaMobileAlt, FaHome, FaDesktop } from 'react-icons/fa';

const Channel = () => {
    const { onChannelClick, channels } = useCampaignContext(CampaignContext);

    return (
        <React.Fragment>
            <div className="channelIconContainer">
                <div
                    className={'channelItem ' + (channels[0].active ? 'channelActive' : '')}
                    onClick={() => onChannelClick(channels[0].name)}>
                    <FaMobileAlt size={70} />
                    <div className="channelIconsText">{channels[0].name}</div>
                </div>
                <div
                    className={'channelItem ' + (channels[1].active ? 'channelActive' : '')}
                    onClick={() => onChannelClick(channels[1].name)}>
                    <FaHome size={70} />
                    <div className="channelIconsText">{channels[1].name}</div>
                </div>
                <div
                    className={'channelItem ' + (channels[2].active ? 'channelActive' : '')}
                    onClick={() => onChannelClick(channels[2].name)}>
                    <FaDesktop size={70} />
                    <div className="channelIconsText">{channels[2].name}</div>
                </div>
                <div
                    className={'channelItem ' + (channels[3].active ? 'channelActive' : '')}
                    onClick={() => onChannelClick(channels[3].name)}>
                    <IoMdRadio size={70} />
                    <div className="channelIconsText">{channels[3].name}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Channel;
