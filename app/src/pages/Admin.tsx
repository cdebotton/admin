import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const AdminLogin = lazy(() => import('./AdminLogin'));

function Admin() {
  const { url } = useRouteMatch()!;

  return (
    <div>
      <h1>Admin</h1>
      <Switch>
        <Route path={`${url}/login`} component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default Admin;
