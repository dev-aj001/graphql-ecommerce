require('dotenv').config();

const Facturapi = require('facturapi').default;

const facturapi = new Facturapi(process.env.FACTURAPI_SECRET_KEY);

async function createProduct(product) {
    const facturapiProduct = {
        description: product.name,
        product_key: product.product_key,
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function updateProduct(_id, rest) {
    const facturapiProduct = {
        ...rest,
        description: rest.name || undefined,
    };
    return await facturapi.products.update(_id, facturapiProduct);
}


async function deleteProduct(_id){
    return await facturapi.products.del(_id);
}



module.exports = {createProduct, updateProduct, deleteProduct};