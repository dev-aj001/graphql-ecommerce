const userService = require('../services/userService');

const resolvers = {
    Query: {
        users: () => userService.getAllUsers(),
    },

    Mutation: {
        createUser: async (_, usuario) => await userService.createUser(usuario),

        updateUser: async (_, { _id, input }) => {
            return await userService.updateUser(_id, input);
        },

        deleteUser: async (_, { _id }) => {
            return userService.deleteUser(_id);
        },
    },
};

module.exports = resolvers;