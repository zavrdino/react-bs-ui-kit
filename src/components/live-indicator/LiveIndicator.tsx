import React from 'react'
import style from './LiveIndicator.module.scss'
import { BaseComponent } from '../BaseComponent'

export const LiveIndicator = ({ size = 5 }) => {
    return (
        <BaseComponent>
            <div
                className={`${style.liveIndicator} bg-success`}
                style={{ height: size, width: size }}
            />
        </BaseComponent>
    )
}
