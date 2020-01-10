import React from 'react';
import './App.scss';
import CampaignApp from './components/CampaignApp';
import Loading from './components/Loading';
import { usePromiseTracker } from "react-promise-tracker";

function App() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <React.Fragment>
      <Loading />
      {
        !promiseInProgress &&
        <div className="content-container">
          <CampaignApp />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
