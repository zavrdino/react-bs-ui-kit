import React from 'react'

interface IComponentProps {
    height: number,
    width: number,
    lineStroke: number,
    lineColor: string,
    size?: number
}

export const Grid = ({ height, width, lineStroke, lineColor, size = 10 }: IComponentProps) => {
   const items = []
    for (let i = 1; i <= size; i++) items.push(i)

    return (
        <>
            {items.map((_,i) => (
                <span key={`_grid${i+1}`}>
                    <div
                        id={`_hGrid${i}`}
                        style={{
                            background: lineColor,
                            position: 'absolute',
                            height: lineStroke,
                            width,
                            top: (i * (height / size)) + 10
                        }}
                    />

                    <div
                        id={`_vGrid${i}`}
                        style={{
                            background: lineColor,
                            position: 'absolute',
                            height,
                            width: lineStroke,
                            top: 0,
                            left: (i * (width / size)) + 10
                        }}
                    />
                </span>
            ))}
        </>
    )
}
