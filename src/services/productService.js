const Product = require('../models/productModel');
const facturapi = require('../apis/facturapi');

module.exports = {

    getAllProducts: async () => {
        return await Product.find();
    },

    createProduct: async (product) => {
        const newProduct = new Product(product);
        const facturapiProduct = await facturapi.createProduct(product);
        newProduct.facturapiid = facturapiProduct.id;
        return await newProduct.save();
    },

    updateProduct: async (_id, ...product) => {
        return await Product.findByIdAndUpdate(_id, product), {new:true};
    },

    deleteProduct: async (_id) => { 
        return await Product.findByIdAndDelete(_id);
    },
    
}