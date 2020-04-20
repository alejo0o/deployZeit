'use strict';
const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const gqlMiddleWare = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const cors = require('cors');
const resolvers = require('./lib/resolvers');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production'; //Identifica si esta en produccion
//si está en produccion activa graphiql sino lo desactiva
// Obtiene los tipos del schema definido de graphql
const typeDefs = readFileSync(
  join(__dirname, 'lib/graphql', 'schema.graphql'),
  'utf-8'
);
// Se crea el esquema
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors()); // La API queda abierta al publico

// Se crea la ruta y se añade el middleware de express para el uso de graphql
app.use(
  '/api',
  gqlMiddleWare({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
