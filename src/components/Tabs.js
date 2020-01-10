import React from 'react';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';

const Tabs = () => {
    const { steps, activeStep } = useCampaignContext(CampaignContext);
    
    return (
        <div className="tabs">
            {
                steps.map((step, index) => {
                    return (
                        activeStep !== index + 1 ?
                            <div className='tab' key={index}>{step}</div> :
                            <div key={index} className="tab activeTab">{step}</div>
                    )
                })
            }
        </div>
    );
}

export default Tabs;