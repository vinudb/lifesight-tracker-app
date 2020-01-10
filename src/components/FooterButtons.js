import React from 'react';
import CampaignContext, { useCampaignContext } from '../context/campaignContext';

const FooterButtons = () => {
    const {
        steps,
        activeStep,
        onPreviousClick,
        onNextClick,
        onCancelClick,
        onCreateTrackerClick,
        error
    } = useCampaignContext(CampaignContext);

    return (
        <React.Fragment>
            <div className='footerButtonContainer'>
                <div>
                    {
                        activeStep > 1 &&
                        <button
                            className="button"
                            onClick={onPreviousClick}>
                            {'<'} &nbsp;&nbsp;&nbsp;PREVIOUS
                        </button>
                    }
                </div>
                
                <div className="footerRightContainer">
                    <button className="button" onClick={onCancelClick}>CANCEL</button>
                    {
                        activeStep < steps.length &&
                        <button
                            className="nextButton button"
                            onClick={onNextClick}>
                            NEXT&nbsp;&nbsp;&nbsp;>
                        </button>
                    }
                    {
                        activeStep === steps.length &&
                        <button
                            className="createTracker button"
                            onClick={onCreateTrackerClick}>
                            CREATE TRACKER
                        </button>
                    }
                </div>
            </div>
            <div className="error">{error}</div>
        </React.Fragment>
    )
}

export default FooterButtons;