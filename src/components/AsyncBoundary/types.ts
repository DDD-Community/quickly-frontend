import { ComponentProps, Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';

export type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

export interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: ComponentProps<typeof Suspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['FallbackComponent'];
}
