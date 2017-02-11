import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import Items from './Items';
import BottomButton from './BottomButton';

class Home extends React.Component {
  onPay = () => {
    this.context.router.push('/payment');
  };

  renderBottomButton = () => {
    const { numberOfItemsInCart } = this.props;

    if (numberOfItemsInCart) {
      let label = `Order ${numberOfItemsInCart} items`;
      if (numberOfItemsInCart === 1) {
        label = label.substring(0, label.length - 1);
      }

      return (
        <BottomButton>
          <RaisedButton
            label={label}
            fullWidth
            labelPosition="before"
            secondary
            onTouchTap={this.onPay}
            icon={<Right />}
          />
        </BottomButton>
      );
    }

    return null;
  };

  render() {
    const { numberOfItemsInCart } = this.props;

    const styles = {
      appbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      },
      container: {
        marginTop: 64,
        marginBottom: numberOfItemsInCart === 0 ? 0 : 76,
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
    };

    return (
      <div>
        <AppBar title="Share Everything" style={styles.appbar} />
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.headerTitle}>What do you need?</div>
            <TextField hintText="Search" fullWidth style={styles.search} />
          </div>
          <Items />
        </div>
        {this.renderBottomButton()}
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = ({ items }) => {
  return {
    numberOfItemsInCart: items.filter(item => item.inCart).length
  };
};

export default connect(mapStateToProps, null)(Home);
