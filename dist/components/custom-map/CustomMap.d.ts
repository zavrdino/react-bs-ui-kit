import React from 'react';
import { IMapPlace } from './components/place/Place';
interface IComponentProps {
    height?: number;
    showGrid?: boolean;
    showCursorPosition: boolean;
    backgroundImage: string;
    places: IMapPlace[];
    parentDimensions: {
        width: number;
        height: number;
    };
}
export declare const CustomMap: ({ height, backgroundImage, places, showGrid, showCursorPosition, parentDimensions }: IComponentProps) => React.JSX.Element;
export {};
//# sourceMappingURL=CustomMap.d.ts.map