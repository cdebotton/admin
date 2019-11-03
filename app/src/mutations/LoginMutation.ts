import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-runtime';
import { useRelayEnvironment } from 'react-relay/hooks';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
  LoginMutationVariables,
  LoginMutation,
} from '../__generated__/LoginMutation.graphql';
import { useResetEnvironment } from '../components/EnvironmentProvider';

const mutation = graphql`
  mutation LoginMutation($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken
    }
  }
`;

export function useLoginMutation() {
  const environment = useRelayEnvironment();
  const resetEnvironment = useResetEnvironment();
  const history = useHistory();

  return useCallback(
    (variables: LoginMutationVariables) => {
      commitMutation<LoginMutation>(environment, {
        mutation,
        variables,
        onCompleted(response) {
          if (response.authenticate && response.authenticate.jwtToken) {
            localStorage.setItem('jwtToken', response.authenticate.jwtToken);
            resetEnvironment();
            history.replace('/admin');
          }
        },
      });
    },
    [environment, resetEnvironment, history],
  );
}
