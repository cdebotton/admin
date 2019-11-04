import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import { useRouteMatch, Link } from 'react-router-dom';

import { UserItem_user } from '../__generated__/UserItem_user.graphql';

type Props = {
  user: UserItem_user;
};

const fragment = graphql`
  fragment UserItem_user on User {
    id
    username
  }
`;

export function UserItem({ user }: Props) {
  const data: UserItem_user = useFragment(fragment, user as any);
  const match = useRouteMatch();

  return (
    <li>
      <Link to={`${match!.url}/${data.id}`}>{data.username}</Link>
    </li>
  );
}
