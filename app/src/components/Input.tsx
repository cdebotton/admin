import React from 'react';
import { useField } from 'formik';

type Props = {
  name: string;
  type?: 'text' | 'password';
};

export function Input({ name, type = 'text' }: Props) {
  const [field] = useField(name);

  return <input type={type} {...field} />;
}
