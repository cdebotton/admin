import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useRouteMatch } from 'react-router-dom';

import { UserForm } from '../components/UserForm';
import { AdminEditUserQuery } from '../__generated__/AdminEditUserQuery.graphql';

const query = graphql`
  query AdminEditUserQuery($id: UUID!) {
    userById(id: $id) {
      ...UserForm_user
    }
  }
`;

function AdminEditUser() {
  const match = useRouteMatch<{ id: string }>();
  const data = useLazyLoadQuery<AdminEditUserQuery>(query, {
    id: match!.params.id,
  });

  return <UserForm key={match!.params.id} user={data.userById as any} />;
}

export default AdminEditUser;
