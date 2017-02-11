import React from 'react';
import Helmet from 'react-helmet';
import { Router, Route, Link, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Grid from './Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const muiTheme = getMuiTheme();

    return (
      <div>
        <Helmet
          title="Share Everything"
          titleTemplate="%s"
          link={[
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
          ]}
          meta={[
            { 'char-set': 'utf-8' },
            { name: 'description', content: 'Share Everything' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}
        />             
        <MuiThemeProvider muiTheme={muiTheme}>        
          <div>
            <AppBar title="Share Everything" />

            <Router history={browserHistory}>
              <Route path="/" component={Grid}>
              </Route>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
