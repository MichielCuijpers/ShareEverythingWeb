import React from 'react';

import AppBar from 'material-ui/AppBar';
import Face from 'material-ui/svg-icons/action/face';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';

import BottomButton from './BottomButton';

import { addToCart } from './actions/items';

const ItemDetails = ({ id, title, description, price, imageUrl, owner, addToCart }, { router }) => {
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
    },
  };

  const onAddToCart = () => {
    addToCart();
    router.goBack();
  };

  return (
    <div>
      <AppBar
        title="Share Everything"
        style={styles.appbar}
        iconElementLeft={<IconButton><Left /></IconButton>}
        onLeftIconButtonTouchTap={router.goBack}
      />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={imageUrl} style={styles.image} />
        </div>
        <div style={styles.content}>
          <div style={styles.header}>
            <div style={styles.headerTitle}>{title}</div>
            <div style={styles.headerPrice}>{price}</div>
          </div>
          <div style={styles.description}>{description}</div>
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
      <BottomButton>
        <RaisedButton
          label="Add to Cart"
          fullWidth
          labelPosition="before"
          secondary
          onTouchTap={onAddToCart}
          icon={<AddShoppingCart />}
        />
      </BottomButton>
    </div>
  );
};

ItemDetails.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

const mapStateToProps = ({ items }, { params }) => {
  return items[params.id];
};

const mapDispatchToProps = (dispatch, { params }) => {
  return {
    addToCart: () => {
      dispatch(addToCart(params.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
