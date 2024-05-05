import React from 'react'
import { Colors } from '../../enum/Colors'
import { BaseComponent } from '../BaseComponent'
import style from './Switch.module.scss'

export interface IComponentProps {
  value: any,
  size?: number,
  color?: string,
  onClick?(): void,
  disabled?: boolean,
}

export const Switch = ({ onClick, color = Colors.Primary, value, disabled = false, size = 36 }: IComponentProps) => {
  return (
    <BaseComponent>
      <span className='pointer' onClickCapture={disabled  ? () => null : onClick}>
        <span
          className={`material-icons text-${color}`}
          style={{ fontSize: size }}
        >
          { value ? 'toggle_on' : 'toggle_off' }
        </span>
      </span>
    </BaseComponent>
  )
}
