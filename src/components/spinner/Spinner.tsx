import React from 'react'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
    size?: 'sm' | 'md' | 'lg'
    type?: 'grow' | 'border'
    color?: 'light' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'primary-gradient'
}

export const Spinner = ({ size = "sm", color = "primary", type="grow" }: IComponentProps) => {
    return (
        <BaseComponent>
            <span className={`m-1 spinner-${type} spinner spinner-${type}-${size} text-${color}`} role="status" />
        </BaseComponent>
    );
}
