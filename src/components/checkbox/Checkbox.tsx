import React from 'react'
import { MaterialIcon } from '../material-icon/MaterialIcon'
import { Colors } from '../../enum/Colors'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
    value: boolean,
    label?: any,
    color?: Colors,
    labelColor?: Colors,
    size?: "xs" | "sm" | "md" | "lg",
    fontSize?: "xs" | "sm" | "md" | "lg",
    testId?: string
}

export const Checkbox = ({ value, testId, label = '', color = Colors.Primary, labelColor = Colors.Dark, size = 'sm' }: IComponentProps) => {
    const materialIconSizesMap = {
        'xs': 'tiny',
        'sm': 'small',
        'md': 'medium',
        'lg': 'large',
    } as any

    return (
        <BaseComponent>
            <div className='d-flex align-items-center' data-testid={testId}>
                <MaterialIcon icon={value ? 'check_box' : 'check_box_outline_blank'} color={color} size={materialIconSizesMap[size]} />

                {label && (
                    <span className={`d-flex align-items-center ms-1 text-${labelColor} text-${size}`}>
                        {label}
                    </span>
                )}
            </div>
        </BaseComponent>
    )
}
