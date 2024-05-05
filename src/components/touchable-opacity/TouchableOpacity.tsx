import React from 'react'
import style from './TouchableOpacity.module.scss'
import { BaseComponent } from '../BaseComponent'

interface IComponentProps {
  onClick?(e?: any): void,
  onDoubleClick?(e?: any): void,
  disabled?: boolean,
  testId?: string,
  className?: string,
  children: any,
  alt?: string,
  cursor?: string
}

export const TouchableOpacity = ({ children, testId, onClick, onDoubleClick, disabled=false, className='', alt='', cursor='pointer' }: IComponentProps) => {
  return (
    <BaseComponent>
      <button
        data-testid={testId}
        type="button"
        title={alt}
        unselectable="on"
        className={`touchable text-start ${className}`}
        style={{ background: 'transparent', cursor: disabled ? "default" : cursor }}
        onDoubleClickCapture={(e) => {
          if (onDoubleClick) {
            onDoubleClick(e)
            e.preventDefault()
          }
        }}
        onClickCapture={(e) => {
          if (onClick) {
            onClick(e)
            e.preventDefault()
          }
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </BaseComponent>
  )
}
