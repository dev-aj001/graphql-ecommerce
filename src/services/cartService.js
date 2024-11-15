const Cart = require('../models/cartModel');
const facturapi = require('../api/facturapi');

module.exports = {

    getCartById: async (id) => {
        try {
            const cart = await Cart.findById(id)
            .populate("user") // Aquí se obtiene el usuario completo
            .populate("items.productId");

            return cart;
        } catch (error) {
            console.error(error);
        }
    },  

    createCart: async (cart) => {
        return await Cart.create(cart);
    },

    updateCart: async ({ _id, ...args }) => {
        await facturapi.updateCart(_id, args);
        return await Cart.findByIdAndUpdate(_id, args, { new: true });
    },

    deleteCart: async (_id) => {
        await facturapi.deleteCart(_id);
        return await Cart.findByIdAndDelete(_id);
    },
}


