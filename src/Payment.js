import React from 'react';

import AppBar from 'material-ui/AppBar';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import { connect } from 'react-redux';

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
}

const Payment = ({ items }, { router }) => {
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
    }
  }

  const onHome = () => {
    router.goBack();
  }

  const onConfirmation = () => {
    router.push(`/confirmation`);
  }

  const itemsInCart = items
    .filter(item => item.inCart)
    .map(({ title, price, id }) => <Line title={title} price={price} key={id} />)

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
        <RaisedButton
          label="Accept & Pay"
          fullWidth
          labelPosition="before"
          secondary
          onTouchTap={onConfirmation}
          icon={<Right />}
        />
      </BottomButton>
    </div>
  )
};

Payment.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  }
};

export default connect(mapStateToProps, null)(Payment);
