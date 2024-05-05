import React from 'react';
interface IComponentProps {
    children?: any;
    setScale?: any;
    scale: number;
    showCursorPosition?: boolean;
    cursorPosition: {
        x: number;
        y: number;
    };
}
export declare const ZoomPanPinch: ({ children, setScale, scale, showCursorPosition, cursorPosition }: IComponentProps) => React.JSX.Element;
export {};
//# sourceMappingURL=ZoomPanPinch.d.ts.map