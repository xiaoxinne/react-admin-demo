import React from 'react';
import {renderRoutes} from 'react-router-config'
import Routes from './router'
import './App.less'

const App: React.FC = () => {
  return (
    <div className="App">
      {renderRoutes(Routes)}
    </div>
  );
}

export default App;
