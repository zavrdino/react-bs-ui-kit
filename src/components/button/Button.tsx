import React from 'react'
import { BaseComponent } from '../BaseComponent'
import { Spinner } from '../spinner/Spinner'
import { MaterialIcon } from '../material-icon/MaterialIcon'
import style from './Button.module.scss'
import { Colors } from '../../enum/Colors'

export interface IComponentProps { 
    color?: Colors,
    fontColor?: Colors,
    testId?: string,
    id?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    caption?: any,
    disabled?: boolean,
    loading?: boolean,
    w100?: boolean,
    bold?: boolean,
    nowrap?: boolean,
    onClick?: any,
    icon?: string,
    iconSize?: any,
    outline?: boolean
}

export const Button = ({ color=Colors.PrimaryGradient, id, fontColor=Colors.Light, testId, size, caption, onClick, nowrap, disabled, loading, w100, bold, icon, iconSize, outline }: IComponentProps)=> {
    return (
        <BaseComponent>
            <span
                data-testid={testId}
                id={id}
                onClickCapture={(onClick && !disabled && !loading) ? onClick : null}
                className={[
                    nowrap ? 'text-nowrap' : '',
                    `${disabled ? 'disabled' : ''}`,
                    `btn-${size || 'md'}`,
                    `${w100 ? 'w-100' : ''}`,
                    `${bold ? 'fw-bolder' : ''}`,
                    `text-${fontColor}`,
                    `${outline ? '' : `bg-${color}`}`,
                    `btn-${outline ? 'outline-' : ''}${color}`,
                    'btn py-0 d-flex align-items-center px-2 justify-content-center',
                    style.button,
                ].join(' ')}
            >
                <>
                    {loading ? (
                        <span className=''>
                            <Spinner color={fontColor} size='sm' type='border' />
                        </span>
                    ) : (
                        <div className='d-flex align-items-center'>
                            {icon && (
                                <span className='d-flex align-items-center small'>
                                    <MaterialIcon icon={icon} size={iconSize} color={fontColor} />
                                </span>
                            )}
                            <span className={`text-${fontColor} ${icon && caption ? 'ps-1' : ''}`}>{caption}</span>
                        </div>
                    )}
                </>
            </span>
        </BaseComponent>
    )
}
