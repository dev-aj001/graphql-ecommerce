require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 

const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');

const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

const cartTypeDefs = require('./schemas/cartSchema');
const cartResolvers = require('./resolvers/cartResolver');

const startConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs, cartTypeDefs]);
    const resolvers = mergeResolvers([productResolvers, userResolvers, cartResolvers]);

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();