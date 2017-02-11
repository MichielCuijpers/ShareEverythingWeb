import React from 'react';

import AppBar from 'material-ui/AppBar';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import { connect } from 'react-redux';

import { resetCart } from './actions/items';

import BottomButton from './BottomButton';

const Line = ({ title, price }) => {
  const styles = {
    line: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8,
    }
  };

  return (
    <div style={styles.line}>
      <div style={styles.title}>{ title }</div>
      <div style={styles.price}>{ price.toFixed(2) }</div>
    </div>
  );
};

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
      marginTop: 16,
      marginBottom: 16,
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
    .map(({ title, price, id }) => <Line title={title} price={price} key={id} />);

  const total = items
    .filter(item => item.inCart)
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <AppBar
        title="Share Everything"
        style={styles.appbar}
        iconElementLeft={<IconButton><Left /></IconButton>}
        onLeftIconButtonTouchTap={onHome}
      />
      <div style={styles.container}>
        <div style={styles.content}>
          {itemsInCart}
          <Divider style={styles.divider} />
          <Line title="Total" price={total} />
        </div>
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
