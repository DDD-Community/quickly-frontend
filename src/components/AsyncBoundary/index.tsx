import React, { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import * as t from './types';

function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
}: t.Props): any {
  return (
    <ErrorBoundary FallbackComponent={rejectedFallback}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
