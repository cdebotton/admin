import React from 'react';
import { Formik } from 'formik';

import { Input } from '../components/Input';
import { useLoginMutation } from '../mutations/LoginMutation';

type Values = {
  email: string;
  password: string;
};

function AdminLogin() {
  const login = useLoginMutation();

  function handleSubmit(input: Values) {
    login({ input });
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
