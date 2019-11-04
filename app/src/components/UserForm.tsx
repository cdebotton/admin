import React from 'react';
import { Formik } from 'formik';
import { useFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { UserForm_user } from '../__generated__/UserForm_user.graphql';
import { useUpdateUserMutation } from '../mutations/UpdateUserMutation';

import { Button } from './Button';
import { Input } from './Input';

type Values = {
  username: string;
};

type Props = {
  user: UserForm_user;
};

export function UserForm({ user }: Props) {
  const data: UserForm_user = useFragment(
    graphql`
      fragment UserForm_user on User {
        id
        username
        createdAt
        updatedAt
      }
    `,
    user as any,
  );

  const updateUser = useUpdateUserMutation();

  function onSubmit(values: Values) {
    updateUser({ input: { id: data.id, userPatch: values } });
  }

  return (
    <Formik<Values>
      initialValues={{
        username: data.username!,
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Input name="username" />
            <Button type="submit">Save</Button>
          </form>
        );
      }}
    </Formik>
  );
}
