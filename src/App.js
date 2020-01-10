import React from 'react';
import './App.scss';
import CampaignApp from './components/CampaignApp';
import Loading from './components/Loading';

function App() {
  return (
    <React.Fragment>
      <Loading />
      {
        <div className="content-container">
          <CampaignApp />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
