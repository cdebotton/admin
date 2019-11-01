import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(error, errorInfo);
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Whoops, something bad happened</h1>
          <pre>
            <code>{JSON.stringify(this.state.error, null, 2)}</code>
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
