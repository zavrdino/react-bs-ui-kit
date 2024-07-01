import React from 'react'
import { Colors } from '../../index';
import { BaseComponent } from '../BaseComponent';

interface IComponentProps {
    size?: number,
    value?: number,
    strokeWidth?: number,
    fontSize?: string,
    color?: string
}

export const Speedometer = ({ size = 200, value = 0, strokeWidth = 15, fontSize = '2rem', color = 'var(--bs-primary)' }: IComponentProps) => {
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
                    stroke="#ccc"
                    fill="none"
                />

                <circle
                    fill="none"
                    cy={size / 2}
                    cx={(size - strokeWidth) / 2}
                    r={(size - strokeWidth) / 2}
                    style={{ color }}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${(Math.PI * size / 2) * value} ${Math.PI * size / 2}`}
                    transform={`rotate(180 ${size / 2} ${size / 2})`}
                    className=''
                />

                <text
                    y={size / 2 - 20}
                    width={size}
                    x={(size - (strokeWidth * 2)) / 2}
                    style={{ fontSize,  }}
                >
                    {isNaN(value) ? 0.000 : (value * 100).toFixed(1)}%
                </text>
            </svg>
        </BaseComponent>
    )
}
