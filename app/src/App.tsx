import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { Loader } from './components/Loader';
import { GlobalStyle } from './components/GlobalStyle';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnvironmentProvider } from './components/EnvironmentProvider';

const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <ErrorBoundary>
      <EnvironmentProvider>
        <ThemeProvider theme={{ mode: 'dark', size: 2 }}>
          <Suspense fallback={<Loader />}>
            <GlobalStyle />
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route component={Home} />
            </Switch>
          </Suspense>
        </ThemeProvider>
      </EnvironmentProvider>
    </ErrorBoundary>
  );
}

export default App;
