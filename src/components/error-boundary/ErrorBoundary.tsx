import React, { ErrorInfo } from 'react';

export interface ErrorBoundaryProps {
    children: any,
    fallback: React.ReactNode; // O componente que será renderizado em caso de erro
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public props;
    public state;

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.props = props;
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Aqui você pode realizar alguma ação, como enviar o erro para um serviço de monitoramento de erros (por exemplo, Sentry, LogRocket, etc.)
        console.error('Erro capturado no componente:', error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
