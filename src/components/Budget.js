import React from 'react';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';
import { FaExclamationCircle } from 'react-icons/fa';

const Budget = () => {
    const { tracker, onBudgetChange, onImpressionsChange } = useCampaignContext(CampaignContext);

    return (
        <React.Fragment>
            <h4> 
                <FaExclamationCircle 
                    size={18} 
                    style={{ verticalAlign: 'sub' }} 
                    className='exclamation' /> 
                How much is your campaign budget?
            </h4>

            <div className="budgetContainer">
                <div>
                    <h5>Total Budget (US$)</h5>
                    <input 
                        className="text-input" 
                        type='text' 
                        placeholder='0' 
                        value={tracker.budget} 
                        onChange={onBudgetChange} 
                        autoFocus />
                </div>

                <div>
                    <h5>Total Impressions</h5>
                    <input 
                        className="text-input" 
                        type='text' 
                        placeholder='0' 
                        value={tracker.impressions} 
                        onChange={onImpressionsChange} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Budget;
