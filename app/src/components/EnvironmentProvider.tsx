import React, {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Environment, RecordSource, Store, Network } from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/network/RelayQueryResponseCache';

const oneMinute = 60 * 1000;
const cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });

const network = Network.create(async (request, variables, cacheConfig) => {
  const queryID = request.text;
  const isQuery = request.operationKind === 'query';
  const isMutation = request.operationKind === 'mutation';
  const forceFetch = cacheConfig && cacheConfig.force;

  const fromCache = cache.get(queryID!, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  const token = localStorage.getItem('jwtToken');

  const headers: RequestInit['headers'] = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch('http://localhost:3001/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      variables,
      query: request.text,
    }),
  });

  const json = await response.json();

  if (isQuery && json) {
    cache.set(queryID!, variables, json);
  }

  if (isMutation) {
    cache.clear();
  }

  return json;
});

export function createEnvironment() {
  const source = new RecordSource();
  const store = new Store(source);

  return new Environment({ store, network });
}

type Props = {
  children: ReactNode;
};

const RelayEnvironmentSetterContext = createContext<
  Dispatch<SetStateAction<Environment>>
>(() => {
  throw new Error('Not implemented');
});

export function EnvironmentProvider({ children }: Props) {
  const [environment, setEnvironment] = useState(() => createEnvironment());

  return (
    <RelayEnvironmentProvider environment={environment}>
      <RelayEnvironmentSetterContext.Provider value={setEnvironment}>
        {children}
      </RelayEnvironmentSetterContext.Provider>
    </RelayEnvironmentProvider>
  );
}

export function useResetEnvironment() {
  const setEnvironment = useContext(RelayEnvironmentSetterContext);

  return () => setEnvironment(createEnvironment());
}
