const Product = require('../models/productModel');
const facturapi = require('../api/facturapi');

module.exports = {

    getProducts: async () => await Product.find(),

    createProduct: async (product) => {
        const facturapiProduct = await facturapi.createProduct(product);
        const newProduct = {
            _id: facturapiProduct.id,
            ...product  
        };

        return (await Product.create(newProduct)).save();
    },

    updateProduct: async ({_id, ...args}) => {
        const productUpdated = await facturapi.updateProduct(_id, args);
        console.log(productUpdated);
        return await Product.findByIdAndUpdate(_id, args, { new: true });
    },

    deleteProduct: async (_id) => {
        return await Product.findByIdAndDelete(_id);
    },
}
