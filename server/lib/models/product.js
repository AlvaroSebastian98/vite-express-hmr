class Product {

    async getAll() {
        return {
            status: 200,
            time: (new Date).getTime(),
            list: [
                { id: 12, name: 'Polo' },
                { id: 13, name: 'Pantalón' },
                { id: 14, name: 'Camisa' },
                { id: 20, name: 'Celular' },
                { id: 49, name: 'TV' }
            ]
        }
    }
}

export default Product
