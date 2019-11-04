import React, { lazy } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { Route, useRouteMatch } from 'react-router-dom';

import { AdminUsersQuery } from '../__generated__/AdminUsersQuery.graphql';
import { UserItem } from '../components/UserItem';

const query = graphql`
  query AdminUsersQuery {
    allUsers(first: 25) {
      edges {
        cursor
        node {
          ...UserItem_user
        }
      }
    }
  }
`;

const AdminEditUser = lazy(() => import('./AdminEditUser'));

function AdminUsers() {
  const match = useRouteMatch();
  const data = useLazyLoadQuery<AdminUsersQuery>(query, {});

  return (
    <>
      <h2>Users</h2>
      <ul>
        {data.allUsers!.edges.map(edge => {
          return <UserItem key={edge.cursor!} user={edge.node as any} />;
        })}
      </ul>
      <Route path={`${match!.url}/:id`} component={AdminEditUser} />
    </>
  );
}

export default AdminUsers;
