import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

import { setSearch } from './actions/search';

import Items from './Items';
import BottomButton from './BottomButton';
import Logo from './Logo';

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
        minHeight: '100vh',
        backgroundColor: '#f6f6f6'
      },
      header: {
        padding: 32,
        backgroundColor: '#fff',
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
        <AppBar
          title="POSSESSLESS"
          style={styles.appbar}
          iconElementLeft={<IconButton><Logo color="#f99" /></IconButton>}
        />
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.headerTitle}>What do you need?</div>
            <TextField
              value={this.props.searchQuery}
              onChange={(e, value) => this.props.setSearch(value)}
              hintText="Search"
              fullWidth
              style={styles.search}
            />
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

const mapStateToProps = ({ items, search }) => {
  return {
    searchQuery: search.query,
    numberOfItemsInCart: items.filter(item => item.inCart).length
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (value) => {
      dispatch(setSearch(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
