const { gql } = require('apollo-server');

const typeDefs = gql`

    scalar Date

    enum Category {
        LACTEOS
        CARNES
        FRUTAS Y VERDURAS
        FRITURAs
    }

    type Product {
        _id: ID!
        description: String!
        price: Float!
        category: Category!
        brand: String!
        stock: Int!
        imgs: [String!]!
        facturapiid: String
    }

    input newProduct {
        description: String!
        price: Float!
        category: String!
        brand: String!
        stock: Int!
        imgs: [String!]
        facturapiid: String
    }

    input updateProduct {
        description: String
        price: Float
        category: String
        brand: String
        stock: Int
        imgs: [String!]
        facturapiid: String
    }

    type Query {
        products: [Product]!
    }

    type Mutation {
        createProduct(input: newProduct!): Product
        updateProduct(_id: ID!, input: updateProduct!): Product
        deleteProduct(_id: ID!): Product
    }
`;

module.exports = typeDefs;