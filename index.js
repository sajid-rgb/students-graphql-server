const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 5000;
const app = express();
const dotenv = require('dotenv');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolver/resolvers');

dotenv.config();
app.use(cors());
app.use(express.json());
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.br08v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(URL, {
  useNewUrlParser: true, useUnifiedTopology: true,
}, () => console.log('Db Connected'));

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(process.env.PORT || port, () => {
    console.log(`connected on port ${port}`);
  });
};
startServer();
