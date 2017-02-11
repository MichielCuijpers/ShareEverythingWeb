import { Owner, Asset } from './Contracts'

class OwnerModel {
	static async load() {
		// let owner = Owner.at("0xaebbe6ad5a6cd3b9f2f309f1f13f051a076f58ff");
		let owner = Owner.at("0x9829777a3289b7b52c82256b9f900d336d108e80");

		let promises = [];
		for (let i = 0; i < 255; i++) {
			var asset = owner._assets(i)
				.then((address) => {
					if (address === "0x0000000000000000000000000000000000000000") {
						return null;
					}

					console.log(address);
					return Asset.at(address)
						.then(async (assetContract) => {
							return {
								id: await assetContract._id(),
								description: await assetContract._description(0),
								price: await assetContract._pricePerTimeUnit(),
							};
						});
				});

			promises.push(asset);
		}
		return promises;
	}
}

export default OwnerModel
