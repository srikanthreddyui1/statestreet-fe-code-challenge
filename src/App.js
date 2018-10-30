import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'
import { COLORS } from './resources/theme'
import './App.css'
import Account from './components/Account'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: COLORS.red
    },
    secondary: {
      main: COLORS.white
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.white,
      tertiary: COLORS.grey1
    }
  },
  typography: {
    body2: {
      fontWeight: 400,
      fontSize: 16,
      color: COLORS.black
    },
    body1: {
      fontWeight: 300,
      fontSize: 14,
      color: COLORS.grey1
    },
    title: {
      fontWeight: 400,
      fontSize: 18
    }
  }
});


export const Store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route path="/account" component={Account} />
              <Route path="/" render={() => (
                <div>
                  <NavBar />
                  <SearchBar />
                  <Results />
                </div>)
              } />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;