import React from 'react';
import Web3 from 'web3';
import BigNumber from 'bignumber.js'; 

import injectTapEventPlugin from 'react-tap-event-plugin';


var denominations = [ "wei", "Kwei", "Mwei", "Gwei", "szabo", "finney", "ether", "grand", "Mether", "Gether", "Tether", "Pether", "Eether", "Zether", "Yether", "Nether", "Dether", "Vether", "Uether" ];

function splitValue(a) {
	var i = 0;
	var a = new BigNumber('' + a);
	if (a.gte(new BigNumber("10000000000000000")) && a.lt(new BigNumber("100000000000000000000000")) || a.eq(0))
		i = 6;
	else
		for (var aa = a; aa.gte(1000) && i < denominations.length - 1; aa = aa.div(1000))
			i++;

	for (var j = 0; j < i; ++j)
		a = a.div(1000);

	return {base: a, denom: i};
}


export class Balance extends React.Component {
	render () {
		var v = new BigNumber(this.props.value);
		var isNeg = v.lt(0);
		var s = splitValue(v.mul(isNeg ? -1 : 1));
		var a = ('' + s.base.mul(1000).round().div(1000)).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
		return (
			<span className={'_balance _' + denominations[s.denom]}>
				{isNeg ? "-" : this.props.signed ? "+" : ""}
				{a}
				<span className="_denom">
					{denominations[s.denom]}
				</span>
			</span>
		);
	}
} 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // address: null,
      version: null,
      accounts: null,
      balance: 0,
    }

  }

  run = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://bczakv4pt.westeurope.cloudapp.azure.com:8545"));
    0x1a31786a953bd0663aabf41383d8270f2a7ab587
    const defaultAccount = web3.eth.defaultAccount;
    const version = "" + web3.version.ethereum;

    const balance = web3.eth.getBalance(web3.eth.accounts[0]);

    this.setState({ 
      version: version,
      accounts: web3.eth.accounts,
      balance,
    });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.run}>Run!</button>
        <h1>{this.state.version}</h1>
        <h1>{this.state.accounts}</h1>
        <h1><Balance value={this.state.balance} /></h1>
        
      </div>
    );
  }
}

export default App;
