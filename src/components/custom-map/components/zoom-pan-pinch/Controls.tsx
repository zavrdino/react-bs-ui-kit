import React from 'react'
import { useControls } from 'react-zoom-pan-pinch'
import { MaterialIcon } from '../../../..'

interface IComponentProps {
    showCursorPosition?: boolean,
    scale: number,
    cursorPosition: {
        x: number,
        y: number
    },
}

const Controls = ({ showCursorPosition, scale, cursorPosition }: IComponentProps) => {
    const { zoomIn, zoomOut, resetTransform } = useControls()

    return (
        <div className='w-100 d-flex justify-content-between mt-2'>
            <span>
                <span>
                    <span onClickCapture={() => zoomOut()} className='py-2'>
                        <MaterialIcon icon='zoom_out' size='small' color='primary' />
                    </span>
                </span>

                <span className='ms-2'>
                    <span onClickCapture={() => zoomIn()} className='py-2'>
                        <MaterialIcon icon='zoom_in' size='small' color='primary' />
                    </span>
                </span>

                <span className='ms-2'>
                    <span onClickCapture={() => resetTransform()} className='py-2'>
                        <MaterialIcon icon='zoom_out_map' size='small' color='primary' />
                    </span>
                </span>
            </span>

            <span>
                {showCursorPosition && (
                    <span className='tiniest'>{cursorPosition.x?.toFixed(0)} {cursorPosition.y?.toFixed(0)}</span>
                )}

                <span className='ms-3 tiniest'>{(scale * 100).toFixed(0)}%</span>
            </span>
        </div>
    )
}

export default Controls