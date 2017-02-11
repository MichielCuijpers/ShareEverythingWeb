import React from 'react';
import Paper from 'material-ui/Paper';

const BottomButton = ({ children }) => {
  const styles = {
    buttonContainer: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
    },
    button: {
      padding: 16,
    }
  };

  return (
    <div style={styles.buttonContainer}>
      <Paper zDepth={1}>
        <div style={styles.button}>
          {children}
        </div>
      </Paper>
    </div>
  );
};

export default BottomButton;
