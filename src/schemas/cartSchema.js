const { gql } = require("apollo-server");

const categories = require("../models/cartModel");

const typeDefs = gql`
  # Required type definitions for cart [Product, User, Address, Category]
  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    category: Category!
    brand: String
    stock: Int!
    createdAt: String!
    imgs: [String!]
    product_key: String!
  }

  type Address {
    zip: String! # Código postal
    street: String # Nombre de la calle
    exterior: String # Número exterior
    interior: String # Número interior
    neighborhood: String # Colonia
    city: String # Ciudad
    municipality: String # Municipio o delegación
    state: String # Nombre del estado o código ISO 3166-2
    country: String # Código de país ISO 3166-1 alpha-3
  }

  type User {
    _id: ID!
    fullname: String!
    email: String!
    password: String!
    address: Address!
    tel: String!
    registerDate: Date!
    userType: Roles!
    paymentMethod: [String!]
  }

  # Cart Type Definition and its requirements

  type Cart {
    id: ID!
    user: User!
    items: [CartItem!]!
    subtotal: Float!
    tax: Float!
    total: Float!
    status: Boolean!
    createdAt: String!
    closedAt: String
  }

  type CartItem {
    productId: Product!
    quantity: Int!
  }

  input CartItemInput {
    productId: ID!
    quantity: Int!
  }

  type Query {
    getCart(id: ID!): Cart
    getCartsByUser(user: ID!): [Cart!]!
    getActiveCart(user: ID!): [Cart!]!
  }

  type Mutation {
    createCart(user: ID!, items: [CartItemInput!]!): Cart!
    updateCart(id: ID!, items: [CartItemInput!]!): Cart!
    closeCart(id: ID!): Cart!
  }
`;

module.exports = typeDefs;
