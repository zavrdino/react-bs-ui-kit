import React from 'react'
import { TransformComponent, TransformWrapper, KeepScale, useControls } from 'react-zoom-pan-pinch'
import Controls from './Controls'

interface IComponentProps {
    children?: any,
    setScale?: any,
    scale: number,
    showCursorPosition?: boolean,
    cursorPosition: {
        x: number,
        y: number
    },
}

export const ZoomPanPinch = ({ children, setScale, scale, showCursorPosition, cursorPosition }: IComponentProps) => {
    return (
        <>
            <TransformWrapper
                minScale={1}
                minPositionX={0}
                smooth={false}
                initialScale={1}
                centerOnInit={true}
                wheel={{ step: 1 }}
                disablePadding={true}
                alignmentAnimation={{ animationType: 'linear' }}
                onTransformed={((e: any, ref: any) => { setScale(ref.scale) })}
            >
                <>
                    <TransformComponent
                        wrapperClass='w-100'
                        contentClass='w-100 d-flex justify-content-center'
                    >
                        {children}
                    </TransformComponent>

                    <div className='w-100'>
                        <Controls
                            scale={scale}
                            cursorPosition={cursorPosition}
                            showCursorPosition={showCursorPosition}
                        />
                    </div>
                </>
            </TransformWrapper>
        </>
    )
}
