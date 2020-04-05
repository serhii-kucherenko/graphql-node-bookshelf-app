import {makeExecutableSchema} from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = `
    type Book { 
        id: String,
        title: String, 
        author: String,
        description: String,
        rating: Int
    }
    
    type Query {
        books(searchTerm: String): [Book]
        book(id: String!): Book
    }
    
    type Mutation {
        addBook(title: String!, author: String!, description: String): Book
        rate(id: String!, amount: Int!): Book
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
