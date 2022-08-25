const colors = require('colors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./schema/schema');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`[server]: Server is running on port ${PORT}`)
);
