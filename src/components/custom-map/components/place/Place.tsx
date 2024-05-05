import React from 'react'

export interface IMapPlace {
    backgroundColor?: string,
    backgroundImage?: string,
    markerSize?: any,
    onClick?: any,
    name: string,
    id: number,
    x: number,
    y: number,
}

interface IComponentProps {
    place: IMapPlace
}

export const Place = ({ place }: IComponentProps) => {
    return (
        <div
            className="rounded-circle"
            onClickCapture={place.onClick || null}
            style={{
                position: 'absolute',
                width: place.markerSize || 20,
                height: place.markerSize || 20,
                background: place.backgroundColor,
                backgroundImage: place.backgroundImage,
                top: (place.y - ((place.markerSize || 20) / 2)),
                left: (place.x - ((place.markerSize || 20) / 2)),
            }}
        >
            <span className=''>
                {place.name}
            </span>
        </div>
    )
}
