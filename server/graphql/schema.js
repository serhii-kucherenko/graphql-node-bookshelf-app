import {makeExecutableSchema} from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = `
    type Book { 
        id: String,
        title: String, 
        author: String,
        description: String,
        coverImageLink: String,
        rating: Int
    }
    
    type Query {
        books(search: String): [Book]
        book(id: String!): Book
    }
    
    type Mutation {
        addBook(title: String!, author: String!, description: String!, coverImageLink: String!): Book
        like(id: String!): Book
        dislike(id: String!): Book
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
