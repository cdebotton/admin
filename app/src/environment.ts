import { Environment, RecordSource, Store, Network } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(async (request, variables) => {
  const response = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query: request.text,
    }),
  });

  const json = await response.json();

  return json;
});

export const environment = new Environment({ store, network });
