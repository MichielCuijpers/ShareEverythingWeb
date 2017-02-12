import BigNumber from 'bignumber.js'

import { Owner, Asset } from './Contracts'
import { addItem } from '../actions/items';

class OwnerModel {
	static async load(dispatch) {
		let owner = Owner.at("0x1d2a32d9b311dc5d4f28e6d2d50b7bfda3c60cc9");

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
						address: assetContract.address,
						isBooked: (await assetContract._currentAgreement()) !== "0x0000000000000000000000000000000000000000"
					};
				})
				.then((asset) => {
					console.log(asset);
					dispatch(addItem(asset));
				});
		}
	}
}

export default OwnerModel
