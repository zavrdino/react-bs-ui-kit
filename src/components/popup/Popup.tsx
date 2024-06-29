import React, { useEffect } from 'react';
import { ErrorBoundary } from '../error-boundary/ErrorBoundary';
import { Button } from '../button/Button';
import { Spinner } from '../spinner/Spinner';
import { BaseComponent } from '../BaseComponent';
import { Colors } from '../../enum/Colors';
import style from './Popup.module.scss'

export interface IFooterButton {
    caption?: string,
    disabled?: boolean,
    fontColor?: Colors,
    color?: Colors,
    loading?: boolean,
    testId?: string,
    id?: string,
    onClick?(): any
}

export interface IComponentProps {
    children?: any,
    visible?: boolean,
    size?: 'auto' | 'sm' | 'md' | 'lg',
    title?: any,
    onClose: any | null,
    hideHeader?: boolean,
    footerButtons?: IFooterButton[],
    icon?: string,
    iconSrc?: string,
    loading?: boolean,
    minHeight?: any
    rightComponent?: any
    shadowOpacity?: number,
    onKeyPress?: any,
    maxHeight?: any
}

export const Popup = ({ children, visible, size, onKeyPress, title, onClose, shadowOpacity, hideHeader, rightComponent, footerButtons, icon, iconSrc, loading, maxHeight, minHeight }: IComponentProps) => {
    useEffect(() => {
        const handler = (e: any) => {
            if (e.key === 'Escape' && visible && onClose) {
                return onClose();
            }

            if (onKeyPress) onKeyPress(e)
        }

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        }
    }, [])

    const getSizeWidth = (size = 'auto') => {
        switch (size) {
            case 'auto':
                return 'auto';
            case 'sm':
                return 400;
            case 'md':
                return 768;
            default:
                return 1024;
        }
    }

    const minHeightStyle = (minHeight ? minHeight : 'auto')
    const maxHeightStyle = (maxHeight ? maxHeight : 'calc(100vh - 200px)')

    return (
        <BaseComponent>
            {visible && (
                <div className={style.screen}>
                    <div
                        className={style.shadow}
                        style={{ backgroundColor: `rgba(0, 0, 0, ${shadowOpacity || 0.7})` }}
                        onClickCapture={() => {
                            if (onClose && !loading) onClose();
                        }}
                    />

                    <div className={style.popup} style={{ width: getSizeWidth(size) }}>
                        {
                            !hideHeader && (
                                <div className={style.header}>
                                    <div className='w-100 d-flex justify-content-between align-items-center'>
                                        <span className='d-flex align-items-center'>
                                            { loading && <span className='px-2'><Spinner color='light' size='sm' /></span> }
                                            { iconSrc && <img alt="" src={iconSrc} width={24} height={24} />}
                                            { icon && <span className="material-icons mx-2">{icon}</span> }
                                            <span className="fw-bold">{ title }</span>
                                        </span>

                                        <span>
                                            {rightComponent ? rightComponent : null}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                        <div className={style.body} style={{ minHeight: minHeightStyle, maxHeight: maxHeightStyle }}>
                            <ErrorBoundary
                                fallback={<></>}
                            >
                                {children}
                            </ErrorBoundary>
                        </div>

                        {
                            Array.isArray(footerButtons) && footerButtons?.length > 0 && (
                                <div className={style.footer}>
                                    {footerButtons.map((button) => (
                                        <span className='px-2' key={button.caption}>
                                            <Button
                                                size='sm'
                                                id={button?.id}
                                                testId={button?.testId}
                                                caption={button.caption}
                                                loading={button.loading}
                                                fontColor={button.fontColor}
                                                color={button.color || Colors.Primary}
                                                disabled={button.loading || button.disabled}
                                                onClick={(!button.disabled) ? button.onClick :  null}
                                            />
                                        </span>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            )}
        </BaseComponent>
    );
};
