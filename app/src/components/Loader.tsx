import React from 'react';
import styled from 'styled-components/macro';

type Props = {
  className?: string;
};

export function Loader({ className }: Props) {
  return (
    <Container className={className}>
      <p>Loading...</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
