import express from 'express';
import cors from 'cors';
import { postgraphile } from 'postgraphile';

const {
  NODE_ENV = 'development',
  PORT: port = 3001,
  DATABASE_URL: databaseURL = 'postgres://cdebotton@localhost:5432/cdb',
} = process.env;

const app = express();

const isDev = NODE_ENV === 'development';

app.use(cors());

app.use(
  postgraphile(databaseURL, 'app_public', {
    graphiql: isDev,
    enhanceGraphiql: isDev,
    watchPg: isDev,
    exportGqlSchemaPath: isDev && '../app/data/schema.graphql',
  }),
);

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
