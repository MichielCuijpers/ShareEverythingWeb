import Web3 from 'web3'
import contract from 'truffle-contract'

import OwnerJSON from '../../contracts/compiled/Owner.json'
import AssetJSON from '../../contracts/compiled/Asset.json'

const Owner = contract(OwnerJSON);
const Asset = contract(AssetJSON);

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

const accounts = web3Provided.eth.accounts;

//unlock
// web3Provided.personal.unlockAccount("0x1a31786A953BD0663aABF41383D8270f2A7Ab587", "123456Qwerty", 3600 * 25)
web3Provided.personal.unlockAccount("0xD6BEC68BC2017a2312f0c12778F8e34aa9bCF1f2", "123456Qwerty", 3600 * 25)

export { Owner, Asset, accounts }