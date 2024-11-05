const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 

const productTypeDefs = require('./src/schemas/productSchema');
const productResolvers = require('./src//resolvers/productResolver');
const userTypeDefs = require('./src/schemas/userSchema');
const userResolvers = require('./src/resolvers/userResolver');

const startConnection = async () => {
    await mongoose.connect('mongodb+srv://arjaibanezpa:C19400437@tasks.kooqk.mongodb.net/?retryWrites=true&w=majority&appName=TASKS');

    const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs]);
    const resolvers = mergeResolvers([productResolvers, userResolvers]);

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();
