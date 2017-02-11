import React from 'react';
import Helmet from 'react-helmet';
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Confirmation from './Confirmation';
import Home from './Home';
import ItemDetails from './ItemDetails';

import rootReducer from './reducers';

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

    const store = createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()      
    );

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
          <Provider store={store}>
            <Router history={browserHistory} onRouteUpdate={this.onRouteUpdate}>
              <Route path="/" component={Home} />
              <Route path="/details/:id" component={ItemDetails} />
              <Route path="/confirmation" component={Confirmation} />            
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
