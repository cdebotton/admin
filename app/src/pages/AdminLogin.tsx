import React from 'react';
import { Formik } from 'formik';
import { useRelayEnvironment } from 'react-relay/hooks';
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { Input } from '../components/Input';
import { AdminLoginAuthenticateMutation } from '../__generated__/AdminLoginAuthenticateMutation.graphql';

type Values = {
  email: string;
  password: string;
};

const mutation = graphql`
  mutation AdminLoginAuthenticateMutation($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken {
        role
        userId
      }
    }
  }
`;

function AdminLogin() {
  const environment = useRelayEnvironment();

  function handleSubmit(input: Values) {
    commitMutation<AdminLoginAuthenticateMutation>(environment, {
      mutation,
      variables: { input },
      onCompleted(response) {
        console.log(response);
      },
    });
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Input name="email" />
            <Input type="password" name="password" />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default AdminLogin;
