import React from 'react';
import { trackerDefault, channelsDefault } from '../utils';
import CampaignContext from "../context/campaignContext";
import Header from './Header';
import Tabs from './Tabs';
import FooterButtons from './FooterButtons';
import ChannelContainer from './ChannelContainer';
import Flight from './Flight';
import Budget from './Budget';
import { addNewTracker } from '../apiCalls';
import { trackPromise } from 'react-promise-tracker';

class CampaignApp extends React.Component {
    state = {
        activeStep: 1,
        steps: ['STEP 1 - SELECT CHANNEL', 'STEP 2 - FLIGHT', 'STEP 3 - BUDGET'],
        tracker: trackerDefault,
        isCalenderOpen: false,
        error: '',
        channels: channelsDefault
    }

    onChannelClick = (channel) => {
        const channels_modified = this.state.channels.map((item) => (
            channel === item.name ? { ...item, active: true } : { ...item, active: false }
        ));
        this.setState({
            tracker: { ...this.state.tracker, channel },
            channels: channels_modified,
            error: ''
        })
    }

    onBudgetChange = (e) => {
        const budget = e.target.value;
        !budget || budget.match(/^\d{1,}(\.\d{0,2})?$/) &&
            this.setState(() => ({ tracker: { ...this.state.tracker, budget }, error: '' }));

    };

    onImpressionsChange = (e) => {
        const impressions = e.target.value;
        !impressions || impressions.match(/^\d{1,}?$/) &&
            this.setState(() => ({ tracker: { ...this.state.tracker, impressions }, error: '' }));
    };

    onToggleCalender = () => this.setState({ isCalenderOpen: !this.state.isCalenderOpen });

    onDatesChange = (dateRange) =>
        this.setState({
            tracker: { ...this.state.tracker, dateRange },
            isCalenderOpen: !this.state.isCalenderOpen
        })

    onChannelTypeChange = (e) => {
        if (e.target.checked) {
            this.setState({
                tracker: {
                    ...this.state.tracker,
                    channelTypes: [...this.state.tracker.channelTypes, e.target.value]
                },
                error: ''
            })
        } else {
            const temp = this.state.tracker.channelTypes.filter((item) => !(item === e.target.value))
            this.setState({ tracker: { ...this.state.tracker, channelTypes: temp }, error: '' })
        }
    }

    onAttributionTypeChange = (e) => {
        if (e.target.checked) {
            this.setState({
                tracker: {
                    ...this.state.tracker,
                    attributionTypes: [...this.state.tracker.attributionTypes, e.target.value]
                },
                error: ''
            })
        } else {
            const temp = this.state.tracker.attributionTypes.filter((item) => !(item === e.target.value))
            this.setState({ tracker: { ...this.state.tracker, attributionTypes: temp }, error: '' })
        }
    }

    onPreviousClick = () => this.setState({ activeStep: this.state.activeStep - 1 });

    onNextClick = () => {
        if (this.state.activeStep === 1) {
            if (this.state.tracker.channelTypes.length === 0 ||
                this.state.tracker.attributionTypes.length === 0 ||
                !this.state.tracker.channel) {
                this.setState({ error: 'Channel, Channel Type or Attribution Type cannot be empty' })
                return;
            }
        }
        this.setState({ activeStep: this.state.activeStep + 1 })
    }

    onCancelClick = () => 
        this.setState({ activeStep: 1, tracker: trackerDefault, error: '', channels: channelsDefault })

    onCreateTrackerClick = () => {
        if (!this.state.tracker.budget || !this.state.tracker.impressions) {
            this.setState({ error: 'Budget or impressions cannot be empty' })
            return;
        } else {
            trackPromise(
                addNewTracker(this.state.tracker).then(() => {
                    alert('Tracker saved successfully');
                    this.setState({ activeStep: 1, tracker: trackerDefault, channels: channelsDefault })
                }).catch((e) => alert('Oops! Something went wrong. Please try later')));
        }
    }

    render() {
        const { activeStep, steps, tracker, isCalenderOpen, channels, error } = this.state;
        const contextValues = {
            activeStep,
            steps,
            tracker,
            isCalenderOpen,
            channels,
            error,
            onPreviousClick: this.onPreviousClick,
            onNextClick: this.onNextClick,
            onCancelClick: this.onCancelClick,
            onChannelTypeChange: this.onChannelTypeChange,
            onAttributionTypeChange: this.onAttributionTypeChange,
            onDatesChange: this.onDatesChange,
            onToggleCalender: this.onToggleCalender,
            onBudgetChange: this.onBudgetChange,
            onImpressionsChange: this.onImpressionsChange,
            onCreateTrackerClick: this.onCreateTrackerClick,
            onChannelClick: this.onChannelClick
        };
        return (
            <div>
                <CampaignContext.Provider value={contextValues}>
                    <div className="header contentPadding">
                        <Header />
                        <Tabs />
                    </div>
                    <div className="contentPadding boxShadow">
                        {
                            this.state.activeStep === 1 ?
                                <ChannelContainer /> : this.state.activeStep === 2 ?
                                    <Flight /> : <Budget />
                        }
                        <FooterButtons />
                    </div>
                </CampaignContext.Provider>
            </div>
        );
    }
}

export default CampaignApp;