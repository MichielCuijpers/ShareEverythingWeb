import React from 'react';
import LightWallet from 'react-lightwallet';
import web3 from 'web3';
 
class App extends React.Component {
  getInitialState() {
    return {address: null};
  }
  
  onChangeSelectedAddress() {
      this.setState({address: address});
  }

  sendTransaction() {
      // Here you can send a transaction normally as you would do using 
      // a node account. The HookedWeb3Provider will intercept the transaction 
      // and in case the sender address is a light wallet one, it will 
      // manually sign the transaction using the pk available on the keystore 
      // and broadcast the transaction using your node. 
      web3.eth.sendTransaction({
          from: this.state.address.
          to: <some address>,
          value: Math.pow(10,18)
      }, function(err, hash) {
          if (err) {
              console.log('Error sending transaction: ' + err);
          } else {
              console.log('Transaction has been sent: ' + hash);
          }
      });
          
  }


  render() {
    return (
      <div className="App">
        <LightWallet 
            onChangeSelectedAddress        = {this.onChangeSelectedAddress}
            enableHookedWeb3Provider       = 'true'
            showAddressBalance             = 'true'
            saveKeystoreToDiskAfterChanges = 'true'
        />
        <button onClick={this.sendTransaction}>Send!</button>
      </div>
    );
  }
}

export default App;
