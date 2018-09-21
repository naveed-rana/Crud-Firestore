import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Apps = () => (
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  );

ReactDOM.render(<Apps />, document.getElementById('root'));
//registerServiceWorker();
