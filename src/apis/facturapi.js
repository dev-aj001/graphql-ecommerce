// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('sk_test_G3lbrnjem2WK9x0Z1Dzow8LRvZkRV7XAQOdJN5PwMa');

async function createProduct(product) {
    const facturapiProduct = {
        description: product.description,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}


module.exports = {createProduct};

// // c) Crea una factura
// const invoice = await facturapi.invoices.create({
//   customer: {
//     legal_name: 'Dunder Mifflin',
//     email: 'email@example.com',
//     tax_id: 'ABC101010111',
//     tax_system: '601',
//     address: {
//       zip: '85900'
//     }
//   },
//   items: [{
//     quantity: 1,
//     product: {
//       description: 'Ukelele',
//       product_key: '60131324',
//       price: 345.60
//     }
//   }],
//   use: 'G01',
//   payment_form: '28' // Tarjeta de crédito
// });