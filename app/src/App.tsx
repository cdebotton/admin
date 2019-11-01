import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { ThemeProvider } from 'styled-components/macro';

import { Loader } from './components/Loader';
import { GlobalStyle } from './components/GlobalStyle';
import { environment } from './environment';
import { ErrorBoundary } from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <ErrorBoundary>
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider theme={{ mode: 'dark', size: 2 }}>
          <Suspense fallback={<Loader />}>
            <GlobalStyle />
            <Switch>
              <Route component={Home} />
            </Switch>
          </Suspense>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </ErrorBoundary>
  );
}

export default App;
