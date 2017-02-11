import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';


const Items = ({ data, fn }) => {
  const items = data.map(({ title, id, price, imageUrl }) => {
    return (
      <GridTile
        onTouchTap={() => fn.showDetails(id)}
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
    gridList: {
      backgroundColor: '#f6f6f6',
      flex: 1,
      padding: 4,
    },
  }

  return (
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {items}
    </GridList>      
  );
};

export default Items;