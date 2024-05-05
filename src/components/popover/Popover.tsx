import React, { useState } from 'react'
import { useFloating, Placement } from '@floating-ui/react';
import { BaseComponent } from '../BaseComponent';
import style from './Popover.module.scss'

interface IComponentProps {
    label: any,
    popup: any,
    placement: Placement,
    trigger: 'click' | 'hover'
}

export const Popover = ({ label, popup, placement, trigger = 'hover' }: IComponentProps) => {
    const { refs, floatingStyles } = useFloating({ placement });


    const [isOpen, setIsOpen] = useState(false)


    return (
        <BaseComponent>
            <span
                onMouseOver={trigger === 'hover' ? () => setIsOpen(true) : undefined}
                onClickCapture={trigger === 'click' ? () => setIsOpen(true) : undefined}
                onMouseLeave={trigger === 'hover' ? () => setIsOpen(false) : undefined}
            >
                <span
                    ref={refs.setReference}
                >
                    {label}
                </span>

                {isOpen && (
                    <>
                        <div className={style.screen} style={{ zIndex: 998 }} />
                        <span
                            style={{ ...floatingStyles, zIndex: 999 }}
                            className={style.popup}
                            ref={refs.setFloating}
                        >
                            {popup}
                        </span>
                    </>
                )}
            </span>
        </BaseComponent>
    )
}
