import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

import data from './data.json';

import Items from './Items';
import BottomButton from './BottomButton';

const Home = (props, { router }) => {
  const fn = {
    showDetails: (id) => {
      router.push(`/details/${id}`);
    },
    addToCart: (id) => {
      console.log('add to cart');
    },
    finishOrder: (id) => {
      router.push(`/confirmation`);
    },
  };

  const styles = {
    appbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
    container: {
      marginTop: 64,
      marginBottom: 76,
    },
    header: {
      padding: 32,
    },
    headerTitle: {
      fontSize: 24,
      textAlign: 'center',
    },
    search: {
      marginTop: 32,
    }
  }

  return (
    <div>
      <AppBar title="Share Everything" style={styles.appbar} />      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerTitle}>What do you need?</div>
          <TextField hintText="Search" fullWidth style={styles.search} />
        </div>
        <Items fn={fn} />
      </div>
      <BottomButton>
        <RaisedButton
          label="Order"
          fullWidth
          labelPosition="before"
          secondary
          onTouchTap={fn.finishOrder}
          icon={<Right />}
        />
      </BottomButton>
    </div>
  )
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;