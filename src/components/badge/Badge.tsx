import React from 'react'
import { Colors } from '../../enum/Colors'

interface IComponentProps {
    caption: any,
    onClick?: any,
    onDoubleClick?: any,
    color?: Colors,
    fontColor?: Colors
}

export const Badge = ({ caption, onClick = null, onDoubleClick = null, color = Colors.Info, fontColor = Colors.Light }: IComponentProps) => {
    return (
        <span onClickCapture={onClick} onDoubleClick={onDoubleClick}>
            <span className={`badge bg-${color} text-${fontColor}`}>{caption}</span>
        </span>
    )
}
