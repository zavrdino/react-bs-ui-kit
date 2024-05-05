import React from 'react';
export interface IMapPlace {
    backgroundColor?: string;
    backgroundImage?: string;
    markerSize?: any;
    onClick?: any;
    name: string;
    id: number;
    x: number;
    y: number;
}
interface IComponentProps {
    place: IMapPlace;
}
export declare const Place: ({ place }: IComponentProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Place.d.ts.map