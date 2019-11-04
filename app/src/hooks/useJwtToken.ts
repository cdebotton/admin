import { useState, useEffect } from 'react';
import { useRelayEnvironment } from 'react-relay/hooks';

function readJwToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('jwtToken');
  }

  return null;
}

export function useJwtToken() {
  const environment = useRelayEnvironment();
  const [token, setToken] = useState(() => readJwToken());

  useEffect(() => {
    setToken(readJwToken());
  }, [setToken, environment]);

  return token;
}
