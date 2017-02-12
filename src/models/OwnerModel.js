import BigNumber from 'bignumber.js'

import { Owner, Asset } from './Contracts'
import { addItem } from '../actions/items';

class OwnerModel {
	static async load(dispatch) {
		let owner = Owner.at("0x41503427309bb552F7D41ee4cDf55B16599e575B");

		for (let i = 0; i < 30; i++) {
			var assetAddress = await owner._assets(i);
			if (assetAddress === "0x0000000000000000000000000000000000000000") {
				continue;
			}

			Asset.at(assetAddress)
				.then(async (assetContract) => {
					return {
						id: new BigNumber(await assetContract._id()).toFixed(),
						description: await assetContract._description(0),
						owner: await assetContract._owner(),
						address: assetContract.address
					};
				})
				.then((asset) => {
					dispatch(addItem(asset));
				});
		}
	}
}

export default OwnerModel
