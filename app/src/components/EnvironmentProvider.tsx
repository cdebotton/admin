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

const network = Network.create(async (request, variables) => {
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
