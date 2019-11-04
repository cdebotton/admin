import React, {
  ReactNode,
  useTransition,
  MouseEvent,
  MouseEventHandler,
} from 'react';

import { padding, em } from 'polished';
import 'styled-components/macro';

type Props = {
  type: 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  pending?: ReactNode;
};

export function Button({ type, onClick, children, pending }: Props) {
  const [startTransition, isPending] = useTransition({ timeoutMs: 300 });

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      startTransition(() => {
        onClick(event);
      });
    }
  }

  return (
    <button
      css={`
        padding: ${padding(em(8))};
      `}
      disabled={isPending}
      type={type}
      onClick={handleClick}
    >
      {isPending && pending ? pending : children}
    </button>
  );
}
