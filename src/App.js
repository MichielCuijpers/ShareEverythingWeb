import React from 'react';
import Helmet from 'react-helmet';
import { Router, Route, Link, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Items from './Items';
import ItemDetails from './ItemDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onRouteUpdate = () => {
    window.scrollTo(0, 0);
  };

  render() {
    injectTapEventPlugin();    
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
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
          ]}
        />             
        <MuiThemeProvider muiTheme={muiTheme}>        
          <Router history={browserHistory} onRouteUpdate={this.onRouteUpdate}>
            <Route path="/" component={Items} />
            <Route path="/details/:id" component={ItemDetails} />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
