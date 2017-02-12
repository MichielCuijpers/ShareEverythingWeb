import { Asset, accounts } from './Contracts'

class AssetModel {
	static async rent(address, duration) {
		if (!address) {
			return;
		}

		const asset = Asset.at(address);
		const price = await asset._pricePerTimeUnit()

		asset.rent(duration, {
			from: "0xD6BEC68BC2017a2312f0c12778F8e34aa9bCF1f2",
			value: price.toFixed()
		})
	}
}

export default AssetModel