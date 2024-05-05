import React from 'react';
export interface IComponentProps {
    icon: string;
    size?: 'tiniest' | 'tiny' | 'small' | 'medium' | 'large';
    color?: string;
    family?: 'material-icons' | 'material-icons-outlined' | 'material-icons-two-tone' | 'material-icons-round' | 'material-icons-sharp';
}
export declare const sizes: {
    tiniest: string;
    tiny: string;
    small: string;
    medium: string;
    large: string;
};
export declare const MaterialIcon: ({ icon, size, color, family }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=MaterialIcon.d.ts.map