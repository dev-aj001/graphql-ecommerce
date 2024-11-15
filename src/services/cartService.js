const Cart = require('../models/cartModel');
const facturapi = require('../api/facturapi');

module.exports = {

    getCarts: async () => await Cart.find(),

    createCart: async (cart) => {
        return await Cart.create(cart);
    },

    updateCart: async ({_id, ...args}) => {
        await facturapi.updateCart(_id, args);
        return await Cart.findByIdAndUpdate(_id, args, { new: true });
    },

    deleteCart: async (_id) => {
        await facturapi.deleteCart(_id);
        return await Cart.findByIdAndDelete(_id);
    },
}


