import graphql from './graphql';

export default app => {
    app.get('/api/v1', (req, res) => res.status(200).json({
        success: true,
        data: 'Welcome to the Bookshelf API'
    }));

    graphql(app);
}
