import React from 'react'
import { Colors } from '../../enum/Colors'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
    header?: any,
    children?: any,
    footer?: any,
    size?: 'sm' | 'md' | 'lg',
    color?: Colors,
    fontColor?: Colors
}

export const Card = ({ header, children, footer, size = 'sm', color = Colors.Light, fontColor = Colors.Dark }: IComponentProps) => {
  return (
    <BaseComponent>
        <div className={`card card-${size} card-${color} text-${fontColor}`}>
            {header && (
                <div className="card-header p-0">
                    {header}
                </div>
            )}

            {children && (
                <div className={`card-body p-0 text-${fontColor}`}>
                    {children}
                </div>
            )}

            {footer && (
                <div className="card-footer p-0">
                    {footer}
                </div>
            )}
        </div>
    </BaseComponent>
  )
}
