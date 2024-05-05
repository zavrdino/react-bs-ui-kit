import React from 'react';
import { Colors } from '../../enum/Colors';
export interface IComponentProps {
    value: boolean;
    label?: any;
    color?: Colors;
    labelColor?: Colors;
    size?: "xs" | "sm" | "md" | "lg";
    fontSize?: "xs" | "sm" | "md" | "lg";
    testId?: string;
}
export declare const Checkbox: ({ value, testId, label, color, labelColor, size }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map