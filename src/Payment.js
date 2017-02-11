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
import Checkbox from 'material-ui/Checkbox';

import { connect } from 'react-redux';

import { resetCart } from './actions/items';
import { resetSearch } from './actions/search';

import BottomButton from './BottomButton';

// eslint-disable-next-line
class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      termsAndConditionsAccepted: false,
    };
  }

  onHome = () => {
    this.context.router.goBack();
  };

  onConfirmation = () => {
    this.context.router.push('/confirmation');
  };

  onDelete = () => {
    this.props.resetCart();
    this.props.resetSearch();
    this.context.router.goBack();
  };

  onCheckTermsAndConditions = (e, termsAndConditionsAccepted) => {
    this.setState({ termsAndConditionsAccepted });
  };

  render() {
    const { items } = this.props;

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
      },
      checkbox: {
        margin: 16,
        width: 'auto',
        display: 'inline-block',
      },
      checkboxLabel: {
        zIndex: -1,
        marginLeft: -16,
      },
      link: {
        color: '#7EBF9A',
      },
    };

    const itemsInCart = items
      .filter(item => item.inCart)
      .map(({ title, price, inCartAmount, id }) => {
        let amount = `ETH for ${inCartAmount} days`;
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
          onLeftIconButtonTouchTap={this.onHome}
        />
        <div style={styles.container}>
          <List>
            {itemsInCart}
          </List>
          <Divider style={styles.divider} />
          <List>
            <ListItem
              primaryText="Total ETH"
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
          <label style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
            <Checkbox
              checked={this.state.termsAndConditionsAccepted}
              onCheck={this.onCheckTermsAndConditions}
              style={styles.checkbox}
            />
            <span style={styles.checkboxLabel}>Accept <a style={styles.link} href="#">Terms and Conditions</a></span>
          </label>
        </div>
        <BottomButton>
          <div style={styles.buttons}>
            <RaisedButton
              backgroundColor="#bf7e7e"
              icon={<DeleteForever color="#fff" />}
              style={styles.delete}
              onTouchTap={this.onDelete}
            />
            <RaisedButton
              label="Accept & Pay"
              labelPosition="before"
              secondary
              onTouchTap={this.onConfirmation}
              icon={<Right />}
              style={styles.accept}
              disabled={!this.state.termsAndConditionsAccepted}
            />
          </div>
        </BottomButton>
      </div>
    );
  }
}

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
    resetSearch: () => {
      dispatch(resetSearch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
