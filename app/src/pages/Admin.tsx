import React, { lazy, useEffect, Suspense } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Link,
} from 'react-router-dom';

import { useJwtToken } from '../hooks/useJwtToken';
import { LogoutButton } from '../components/LogoutButton';
import { Loader } from '../components/Loader';

const AdminLogin = lazy(() => import('./AdminLogin'));
const AdminUsers = lazy(() => import('./AdminUsers'));

function Admin() {
  const { url } = useRouteMatch()!;
  const token = useJwtToken();
  const history = useHistory();

  const isLoggedIn = token !== null;

  useEffect(() => {
    if (!isLoggedIn) {
      history.push(`${url}/login`);
    }
  }, [isLoggedIn, history, url]);

  return (
    <div>
      <header hidden={!isLoggedIn}>
        <h1>Admin</h1>
        <nav>
          <Link to={`${url}/users`}>Users</Link>
          <Link to={`${url}/galleries`}>Galleries</Link>
          <LogoutButton />
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${url}/login`} component={AdminLogin} />
          <Route path={`${url}/users`} component={AdminUsers} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Admin;
