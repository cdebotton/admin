import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { preloadQuery, usePreloadedQuery } from 'react-relay/hooks';

import { environment } from '../environment';

const query = graphql`
  query HomeQuery {
    allUsers {
      edges {
        cursor
        node {
          id
          username
          createdAt
          updatedAt
        }
      }
    }
  }
`;

const resource = preloadQuery(environment, query, {});

function Home() {
  const data = usePreloadedQuery(query, resource);

  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Home;
