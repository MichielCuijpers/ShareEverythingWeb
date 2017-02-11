import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import data from './data.json';

const Grid = () => {
  const components = data.map((tile, i) => {
    return (
      <GridTile
        key={tile.id}
        title={tile.title}
        subtitle={<span>by <b>{tile.owner}</b></span>}
      >
        <img src={tile.imageUrl} />      
      </GridTile>
    )
  });

  const styles = {
    gridList: {
      backgroundColor: '#f6f6f6',
      flex: 1,
      padding: 4,
    }
  }

  return (
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {components}
    </GridList>      
  )
};

export default Grid;