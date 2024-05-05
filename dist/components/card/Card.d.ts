import React from 'react';
import { Colors } from '../../enum/Colors';
export interface IComponentProps {
    header?: any;
    children?: any;
    footer?: any;
    size?: 'sm' | 'md' | 'lg';
    color?: Colors;
    fontColor?: Colors;
}
export declare const Card: ({ header, children, footer, size, color, fontColor }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Card.d.ts.map