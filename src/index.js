import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
