import React from 'react';

import AppBar from 'material-ui/AppBar';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

import { connect } from 'react-redux';

import { resetCart } from './actions/items';

import BottomButton from './BottomButton';


// eslint-disable-next-line
const Payment = ({ items, resetCart }, { router }) => {
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
    content: {
      padding: 16,
    },
    divider: {
      marginLeft: 16,
      marginRight: 16,
    },
    buttons: {
      display: 'flex',
    },
    accept: {
      flex: 1,
    },
    delete: {
      marginRight: 12,
    }
  };

  const onHome = () => {
    router.goBack();
  };

  const onConfirmation = () => {
    router.push('/confirmation');
  };

  const onDelete = () => {
    resetCart();
    router.goBack();
  };

  const itemsInCart = items
    .filter(item => item.inCart)
    .map(({ title, price, inCartAmount, id }) => {
      let amount = `For ${inCartAmount} days`;
      if (inCartAmount === 1) {
        amount = amount.substring(0, amount.length - 1);
      }

      return (
        <ListItem
          key={id}
          primaryText={title}
          secondaryText={amount}
          rightAvatar={
            <Avatar
              color="#000"
              backgroundColor="#fff"
              style={{ justifyContent: 'flex-end' }}
            >
              {(inCartAmount * price).toFixed(2)}
            </Avatar>
          }
        />
      );
    });

  const total = items
    .filter(item => item.inCart)
    .reduce((acc, item) => acc + (item.price * item.inCartAmount), 0);

  return (
    <div>
      <AppBar
        title="Share Everything"
        style={styles.appbar}
        iconElementLeft={<IconButton><Left /></IconButton>}
        onLeftIconButtonTouchTap={onHome}
      />
      <div style={styles.container}>
        <List>
          {itemsInCart}
        </List>
        <Divider style={styles.divider} />
        <List>
          <ListItem
            primaryText="Total"
            rightAvatar={
              <Avatar
                color="#000"
                backgroundColor="#fff"
                style={{ justifyContent: 'flex-end' }}
              >
                {total.toFixed(2)}
              </Avatar>
            }
          />
        </List>
      </div>
      <BottomButton>
        <div style={styles.buttons}>
          <RaisedButton
            backgroundColor="#bf7e7e"
            icon={<DeleteForever color="#fff" />}
            style={styles.delete}
            onTouchTap={onDelete}
          />
          <RaisedButton
            label="Accept & Pay"
            labelPosition="before"
            secondary
            onTouchTap={onConfirmation}
            icon={<Right />}
            style={styles.accept}
          />
        </div>
      </BottomButton>
    </div>
  );
};

Payment.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
