import React from 'react';
export interface IComponentProps {
    value: any;
    size?: number;
    color?: string;
    onClick?(): void;
    disabled?: boolean;
}
export declare const Switch: ({ onClick, color, value, disabled, size }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Switch.d.ts.map