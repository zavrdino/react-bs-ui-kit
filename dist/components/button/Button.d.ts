import React from 'react';
import { Colors } from '../../enum/Colors';
export interface IComponentProps {
    color?: Colors;
    fontColor?: Colors;
    testId?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    caption?: any;
    disabled?: boolean;
    loading?: boolean;
    w100?: boolean;
    bold?: boolean;
    nowrap?: boolean;
    onClick?: any;
    icon?: string;
    iconSize?: any;
    outline?: boolean;
}
export declare const Button: ({ color, fontColor, testId, size, caption, onClick, nowrap, disabled, loading, w100, bold, icon, iconSize, outline }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map