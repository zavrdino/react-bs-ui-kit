import *  as _ from 'lodash-es';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IMapPlace, Place, ZoomPanPinch, Grid } from './'

interface IComponentProps {
    height?: number,
    showGrid?: boolean,
    showCursorPosition: boolean,
    backgroundImage: string,
    places: IMapPlace[],
    parentDimensions: {
        width: number,
        height: number
    }
}

enum LayerIndexEnum {
    background = 6666,
    grid = 6667,
    places = 69999,
}

export const CustomMap = ({ height = 300, backgroundImage, places, showGrid, showCursorPosition, parentDimensions }: IComponentProps) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [backgroundImageRealDimensions, setBackgroundImageRealDimensions] = useState({ width: 250, height: height })
    const [scale, setScale] = useState(1)

    const containerRef = useRef<any>()

    const dimensions = useMemo(() => {
        let displayRatio = height / backgroundImageRealDimensions.height
        let displayHeight = backgroundImageRealDimensions.height * displayRatio
        let displayWidth = backgroundImageRealDimensions.width * displayRatio

        if (displayWidth > parentDimensions?.width) {
            displayRatio = parentDimensions?.width / backgroundImageRealDimensions.width
            displayHeight = backgroundImageRealDimensions.height * displayRatio
            displayWidth = backgroundImageRealDimensions.width * displayRatio
        }

        return {
            displayRatio,
            displayWidth,
            displayHeight,
        }
    }, [backgroundImageRealDimensions, parentDimensions, height])

    useEffect(() => {
        const image = new Image()

        image.onload = (e) => {
            setBackgroundImageRealDimensions({
                width: image.width,
                height: image.height
            })
        }

        image.src = backgroundImage
    }, [backgroundImage])

    const handleMouseMove = useCallback(_.debounce((e: any) => {
        const rect = e.target.getBoundingClientRect();

        const transformedX =  e.clientX - rect.x
        const transformedY =  e.clientY - rect.y

        setCursorPosition({ x: transformedX / scale, y: transformedY / scale })
    }, 50), [])


    const onClickMap = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const transformedX =  e.clientX - rect.x
        const transformedY =  e.clientY - rect.y

        setCursorPosition({ x: transformedX / scale, y: transformedY / scale })
    }


    return (
        <div className='w-100 d-flex justify-content-center pb-2'>
            <div style={{ position: 'relative', width: dimensions.displayWidth, height: dimensions.displayHeight }}>
                <ZoomPanPinch
                    setScale={setScale}
                    scale={scale}
                    showCursorPosition={showCursorPosition}
                    cursorPosition={cursorPosition}
                >
                    <span
                        ref={containerRef}
                        onClickCapture={(e) => onClickMap(e)}
                        onMouseMoveCapture={(e) => handleMouseMove(e)}
                    >
                        <img
                            src={backgroundImage}
                            style={{ zIndex: LayerIndexEnum.background }}
                            height={dimensions.displayHeight}
                            width={dimensions.displayWidth}
                        />

                        {showGrid && (
                            <Grid
                                height={dimensions.displayHeight}
                                width={dimensions.displayWidth}
                                lineColor='#eeee'
                                lineStroke={1}
                                size={20}
                            />
                        )}

                        {places?.map((place) => (
                            <Place key={place.id} place={place} />
                        ))}
                    </span>
                </ZoomPanPinch>
            </div>
        </div>
    )
}
