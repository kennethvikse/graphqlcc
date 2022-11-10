const express = require('express');
const colors = require ('colors'); 
require('dotenv').config();

const schema = require('./schema/schema');
const connectDB = require ('./config/db');
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');

const app = express ();

//connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'

}))

app.listen(port, console.log(`server running on port ${port}`));