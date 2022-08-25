import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
};
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log('Boundary Error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>I got confused...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
