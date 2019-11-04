import React from 'react';
import { useHistory } from 'react-router-dom';

import { useResetEnvironment } from './EnvironmentProvider';
import { Button } from './Button';

export function LogoutButton() {
  const resetEnvironment = useResetEnvironment();
  const history = useHistory();

  function onClick() {
    localStorage.removeItem('jwtToken');
    resetEnvironment();
    history.push('/admin/login');
  }

  return (
    <Button type="button" onClick={onClick}>
      Logout
    </Button>
  );
}
