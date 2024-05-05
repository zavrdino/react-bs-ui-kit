import React from 'react';
import { Colors } from '../../enum/Colors';
export interface IFooterButton {
    caption?: string;
    disabled?: boolean;
    fontColor?: Colors;
    color?: Colors;
    loading?: boolean;
    testId?: string;
    onClick?(): any;
}
export interface IComponentProps {
    children?: any;
    visible?: boolean;
    size?: 'auto' | 'sm' | 'md' | 'lg';
    title?: any;
    onClose: any | null;
    hideHeader?: boolean;
    footerButtons?: IFooterButton[];
    icon?: string;
    iconSrc?: string;
    loading?: boolean;
    minHeight?: any;
    rightComponent?: any;
    shadowOpacity?: number;
    onKeyPress?: any;
    maxHeight?: any;
}
export declare const Popup: ({ children, visible, size, onKeyPress, title, onClose, shadowOpacity, hideHeader, rightComponent, footerButtons, icon, iconSrc, loading, maxHeight, minHeight }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Popup.d.ts.map