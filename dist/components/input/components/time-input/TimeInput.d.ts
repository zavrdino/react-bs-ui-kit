import React from 'react';
interface IComponentProps {
    size: 'sm' | 'md' | 'lg';
    testId: string;
    name: string;
    onFocus?: any;
    value: any;
    min: any;
    max: any;
    disabled?: boolean;
    readOnly?: boolean;
    autoComplete?: boolean;
    placeholder?: string;
    handleChange?(newValue: any): any;
}
export declare const TimeInput: ({ name, size, testId, value, disabled, handleChange, onFocus, placeholder, readOnly, min, max }: IComponentProps) => React.JSX.Element;
export {};
//# sourceMappingURL=TimeInput.d.ts.map