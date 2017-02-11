import Web3 from 'web3'
import contract from 'truffle-contract'

import OwnerJSON from '../../contracts/compiled/Owner.sol_Owner.abi.json'
import AssetJSON from '../../contracts/compiled/Asset.sol_Asset.abi.json'

const Owner = contract({ abi: OwnerJSON });
const Asset = contract({ abi: AssetJSON });

// const web3Location = 'http://localhost:8545'
const web3Location = 'http://bczakv4pt.westeurope.cloudapp.azure.com:8545';

var web3Provided
// Supports Metamask and Mist, and other wallets that provide 'web3'.
if (typeof web3 !== 'undefined') {
  // Use the Mist/wallet provider.
  // eslint-disable-next-line
  web3Provided = new Web3(web3.currentProvider)
} else {
  web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location))
}

Owner.setProvider(web3Provided.currentProvider)
Asset.setProvider(web3Provided.currentProvider)

const accounts = web3Provided.eth.accounts

export { Owner, Asset, accounts }