import React from 'react';

import AppBar from 'material-ui/AppBar';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import BottomButton from './BottomButton';

const Confirmation = (props, { router }) => {
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
      fontSize: 24,
      lineHeight: 1.4,
      textAlign: 'center',
    },
    emoji: {
      textAlign: 'center',      
      paddingTop: 48,
      fontSize: 112, 
      paddingBottom: 24,     
    },
  }

  const onHome = () => {
    router.goBack();
  }

  return (
    <div>
      <AppBar
        title="Share Everything"
        style={styles.appbar}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={onHome}
      />
      <div style={styles.container}>
          <div style={styles.emoji}> 
            🎉
          </div>        
        <div style={styles.content}>
          <div>Congratulations.</div>
          <div>Your items are ordered and coming your way.</div>
        </div>
      </div>
      <BottomButton>
        <RaisedButton
          label="Back to Home"
          fullWidth
          labelPosition="after"
          secondary
          onTouchTap={onHome}
          icon={<NavigationClose />}
        />
      </BottomButton>
    </div>
  )
};

Confirmation.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Confirmation;