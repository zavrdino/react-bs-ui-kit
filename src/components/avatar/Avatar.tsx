import React from 'react'
import { BaseComponent } from '../BaseComponent'
import { useToggler } from '../../hooks'
import { Popup } from '../popup'

interface IComponentProps {
    size: number,
    name?: string,
    imagePath: string,
    singleInitial?: boolean,
    viewUserPopup?: {
        size?: 'sm' | 'md' | 'lg' | 'auto',
        content: any
    }
}

export const Avatar = ({ size, name = '', imagePath, singleInitial = false, viewUserPopup }: IComponentProps) => {
    const popupToggler = useToggler()

    const popup = (
        <Popup
            onClose={popupToggler.toggle}
            hideHeader={true}
            visible={popupToggler.value}
            size={viewUserPopup?.size || 'auto'}
        >
            <>{viewUserPopup?.content}</>
        </Popup>
    )

    if (!imagePath) {

        const parts = `${name || ''}`.split(' ')
        const initials = singleInitial
            ? name[0].toUpperCase()
            : `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()

        return (
            <BaseComponent>
                {viewUserPopup?.content && (popup)}
                <span
                    onClickCapture={viewUserPopup?.content ? popupToggler.toggle : undefined}
                    className={`${viewUserPopup?.content ? 'pointer' : ''}`}
                >
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
            {viewUserPopup?.content && (popup)}
            <img
                onClickCapture={viewUserPopup?.content ? popupToggler.toggle : undefined}
                className={`rounded-circle border ${viewUserPopup?.content ? 'pointer' : ''}`}
                src={imagePath}
                height={size}
                width={size}
            />
        </BaseComponent>
    )
}
