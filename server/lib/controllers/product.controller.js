import Product from '../models/product.js'

const getAll = async (_req, res) => {
	try {
		const product = new Product()
		const result = await product.getAll()
		res.status(200).json(result)
	} catch (error) {
		console.error(error)
	}
}

export default { getAll }