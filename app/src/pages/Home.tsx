import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

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

function Home() {
  const data = useLazyLoadQuery(query, {});

  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Home;
