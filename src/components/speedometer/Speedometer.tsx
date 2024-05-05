import React from 'react'
import { Colors } from '../../index';
import { BaseComponent } from '../BaseComponent';

interface IComponentProps {
    size?: number,
    value?: number,
}

export const Speedometer = ({ size = 200, value = 0 }: IComponentProps) => {
    const  strokeWidth = 15;

    return (
        <BaseComponent>
            <svg width={size + 10} height={size / 2}>
                <circle
                    cy={size / 2}
                    cx={(size - strokeWidth) / 2}
                    r={(size - strokeWidth) / 2}
                    strokeWidth={strokeWidth}
                    transform={`rotate(180 ${size / 2} ${size / 2})`}
                    strokeDasharray={`${Math.PI * size / 2} ${Math.PI * size / 2}`}
                    stroke="whitesmoke"
                    fill="none"
                />

                <circle
                    fill="none"
                    cy={size / 2}
                    cx={(size - strokeWidth) / 2}
                    r={(size - strokeWidth) / 2}
                    style={{ stroke: 'var(--bs-primary)' }}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${(Math.PI * size / 2) * value} ${Math.PI * size / 2}`}
                    transform={`rotate(180 ${size / 2} ${size / 2})`}
                    className=''
                />

                <text y={size / 2 - 20} width={size} x={(size - strokeWidth) / 2} fontSize="2em">
                    {isNaN(value) ? 0.000 : (value * 100).toFixed(1)}%
                </text>
            </svg>
        </BaseComponent>
    )
}
