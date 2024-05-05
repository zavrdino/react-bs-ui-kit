import React from 'react';
export interface IComponentProps {
    size?: 'sm' | 'md' | 'lg';
    type?: 'grow' | 'border';
    color?: 'light' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'primary-gradient';
}
export declare const Spinner: ({ size, color, type }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Spinner.d.ts.map