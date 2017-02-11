import React from 'react';

import Face from 'material-ui/svg-icons/action/face';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Divider from 'material-ui/Divider';

import data from './data.json';

const ItemDetails = ({ id, title, description, price, imageUrl, owner }) => {
  const styles = {
    imageContainer: {
      padding: 32,
    },
    image: {
      width: '100%',
    },
    content: {
      padding: 16,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,      
    },
    headerTitle: {
      fontSize: 24,
    },
    headerPrice: {
      color: '#ccc',
    },
    description: {
      marginBottom: 16,
    },
    divider: {
      marginTop: 16,
      marginBottom: 16,
    },
    owner: {
      display: 'flex',
      alignItems: 'center',
    },
    ownerText: {
      flex: 1,
    },
    ownerIcon: {
      marginRight: 8,
    }
  }

  return (
    <div>
      <div style={styles.imageContainer}>
        <img src={imageUrl} style={styles.image} />
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.headerTitle}>{ title }</div>
          <div style={styles.headerPrice}>{ price }</div>          
        </div>
        <div style={styles.description}>{ description }</div>
        <Divider style={styles.divider} />   
        <div style={styles.owner}>
          <div style={styles.ownerIcon}><Face color="#ccc" /></div>
          <div style={styles.ownerText}>{owner}</div>
          <div>
            <Star color="#ccc" />
            <Star color="#ccc" />
            <StarBorder color="#ccc" />
          </div>
        </div>
      </div>
    </div>
  )
};

const ItemDetailsRetrieve = ({ params }) => {
  const props = data[params.id - 1];

  return <ItemDetails {...props} />
}

export default ItemDetailsRetrieve;