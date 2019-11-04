import graphql from 'babel-plugin-relay/macro';
import { useRelayEnvironment } from 'react-relay/hooks';
import { commitMutation } from 'relay-runtime';
import { useCallback } from 'react';

import {
  UpdateUserMutationVariables,
  UpdateUserMutation,
} from '../__generated__/UpdateUserMutation.graphql';

const mutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserByIdInput!) {
    updateUserById(input: $input) {
      user {
        id
        username
      }
    }
  }
`;

export function useUpdateUserMutation() {
  const environment = useRelayEnvironment();

  const commit = useCallback(
    (variables: UpdateUserMutationVariables) => {
      return commitMutation<UpdateUserMutation>(environment, {
        mutation,
        variables,
      });
    },
    [environment],
  );

  return commit;
}
