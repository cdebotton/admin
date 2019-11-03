import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { HomeQuery } from '../__generated__/HomeQuery.graphql';

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
  const data = useLazyLoadQuery<HomeQuery>(query, {});
  console.log(data);
  return (
    <>
      <h1>Home</h1>
      <ul>
        {data.allUsers!.edges.map(edge => {
          return <li>{edge.node!.username}</li>;
        })}
      </ul>
    </>
  );
}

export default Home;
