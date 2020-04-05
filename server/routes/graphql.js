import bodyParser from "body-parser";
import {graphiqlExpress, graphqlExpress} from "apollo-server-express";
import schema from "../graphql/schema";

export default app => {
    app.use(
        '/api/v1/graphql',
        bodyParser.json(),
        graphqlExpress({ schema })
    );

// GraphiQL - visual editor for queries
    app.use('/api/v1/graphiql', graphiqlExpress({ endpointURL: '/api/v1/graphql' }));
}
