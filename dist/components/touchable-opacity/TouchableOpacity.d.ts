import React from 'react';
interface IComponentProps {
    onClick?(e?: any): void;
    onDoubleClick?(e?: any): void;
    disabled?: boolean;
    testId?: string;
    className?: string;
    children: any;
    alt?: string;
    cursor?: string;
}
export declare const TouchableOpacity: ({ children, testId, onClick, onDoubleClick, disabled, className, alt, cursor }: IComponentProps) => React.JSX.Element;
export {};
//# sourceMappingURL=TouchableOpacity.d.ts.map