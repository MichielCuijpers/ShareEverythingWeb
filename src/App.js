import React from 'react';
import Helmet from 'react-helmet';
import { Router, Route, Link, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Items from './Items';
import ItemDetails from './ItemDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    injectTapEventPlugin();    
    const muiTheme = getMuiTheme();

    const styles = {
      appbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      },
      content: {
        marginTop: 64,
      },
    };

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
          <div>
            <AppBar title="Share Everything" showMenuIconButton={false} style={styles.appbar} />
            <div style={styles.content}> 
              <Router history={browserHistory}>
                <Route path="/" component={Items} />
                <Route path="/details/:id" component={ItemDetails} />
              </Router>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
