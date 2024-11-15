const cartService = require('../services/cartService');

const resolvers = {
  Query: {
    getCartById: async (_, { _id }) => await cartService.getCartById(_id),
  },
  Mutation: {
    createCart: async (_, args) => await cartService.createCart(args),
    updateCart: async (_, args) => await cartService.updateCart(args),
    closeCart: async (_, { _id }) => await cartService.deleteCart(_id),
  },
};

module.exports = resolvers;