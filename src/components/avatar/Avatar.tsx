import React from 'react'
import { BaseComponent } from '../BaseComponent'

interface IComponentProps {
    size: number,
    name?: string,
    imagePath: string,
    singleInitial?: boolean
}

export const Avatar = ({ size, name = '', imagePath, singleInitial = false }: IComponentProps) => {
    if (!imagePath) {

        const parts = `${name || ''}`.split(' ')
        const initials = singleInitial
            ? name[0].toUpperCase()
            : `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()

        return (
            <BaseComponent>
                <span>
                    <div
                        title={name}
                        className='rounded-circle d-flex bg-whitesmoke border justify-content-center align-items-center'
                        style={{ height: size, width: size }}
                    >
                        <span
                            style={{ fontSize: size * 0.5 }}
                            className="font-weight-bolder text-secondary"
                        >
                            {initials}
                        </span>
                    </div>
                </span>
            </BaseComponent>
        )
    }

    return (
        <BaseComponent>
            <img
                className='rounded-circle border'
                src={imagePath}
                height={size}
                width={size}
            />
        </BaseComponent>
    )
}
