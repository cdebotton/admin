import express from 'express';
import cors from 'cors';
import { postgraphile } from 'postgraphile';
import PostGraphileNestedMutations from 'postgraphile-plugin-nested-mutations';

const {
  NODE_ENV = 'development',
  PORT: port = 3001,
  JWT_SECRET: jwtSecret = 'secret',
  DATABASE_URL: databaseURL = 'postgres://app_postgraphile@localhost:5432/cdb',
  OWNER_CONNECTION_STRING: ownerConnectionString = 'postgres://cdebotton@localhost:5432/cdb',
} = process.env;

const app = express();

const isDev = NODE_ENV === 'development';

app.use(cors());

app.use(
  postgraphile(databaseURL, 'app_public', {
    graphiql: isDev,
    enhanceGraphiql: isDev,
    watchPg: isDev,
    ownerConnectionString,
    exportGqlSchemaPath: isDev && '../data/schema.graphql',
    jwtPgTypeIdentifier: 'app_public.jwt_token',
    pgDefaultRole: 'app_anonymous',
    jwtSecret,
    appendPlugins: [PostGraphileNestedMutations],
  }),
);

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
