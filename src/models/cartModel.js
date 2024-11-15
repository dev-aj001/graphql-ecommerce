const { getNullableType } = require('graphql');
const mongoose = require('mongoose');

const cart = new mongoose.Schema({

    user: 
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // Suponiendo que también tengas un modelo de 'Product'
                required: true
            },
            quantity: { type: Number, required: true, default: 1 },
        }
    ],
    subTotal: { type:  Number, required: true, default: 0 },
    iva: { type:  Number, required: true, default: .16 },
    total: { type:  Number, required: true, default: 0 },
    status: { type:  Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now },
    closedAt: { type: Date, default: null }

});

module.exports = mongoose.model('Cart', cart);
