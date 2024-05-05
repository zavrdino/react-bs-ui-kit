import React, { ErrorInfo } from 'react';
export interface ErrorBoundaryProps {
    children: any;
    fallback: React.ReactNode;
}
export interface ErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    props: ErrorBoundaryProps;
    state: {
        hasError: boolean;
    };
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): React.ReactNode;
}
//# sourceMappingURL=ErrorBoundary.d.ts.map