import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

import data from './data.json';

const Items = (props, { router }) => {
  const onTouchTap = (id) => {
    router.push(`/details/${id}`);
  };

  const items = data.map(({ title, id, price, imageUrl }) => {
    return (
      <GridTile
        onTouchTap={() => onTouchTap(id)}
        key={id}
        title={title}
        subtitle={<span>{price}</span>}
        //actionIcon={<IconButton><AddShoppingCart color="white" /></IconButton>}        
      >
        <img src={imageUrl} />      
      </GridTile>
    )
  });

  const styles = {
    appbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
    container: {
      marginTop: 64,
    },
    gridList: {
      backgroundColor: '#f6f6f6',
      flex: 1,
      padding: 4,
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
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          {items}
        </GridList>      
      </div>
    </div>
  )
};

Items.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Items;