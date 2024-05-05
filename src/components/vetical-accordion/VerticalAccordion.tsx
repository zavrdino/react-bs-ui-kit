import React from 'react'
import { TouchableOpacity } from '../touchable-opacity/TouchableOpacity'
import { MaterialIcon } from '../material-icon/MaterialIcon'
import { Colors } from '../../enum/Colors'
import { BaseComponent } from '../BaseComponent'
import style from './VerticalAccordion.module.scss'

interface IComponentProps {
    items: {
        caption: string
        onClick?: any,
        active?: boolean,
        content?: any,
        testId?: string,
        key?: string,
    }[]
}

export const VerticalAccordion = ({ items }: IComponentProps) => {
    return (
        <BaseComponent>
            <div className={style.accordion}>
                {items.map((item: any, i, all) => {
                    const isLast = i === (all.length -1)

                    return (
                        <div
                            className="w-100"
                            key={item?.key || i}
                        >
                            <div
                                className={item?.active?  style.activeAccordionItem : style.accordionItem}
                                onClickCapture={() => {
                                    if (item?.onClick) item.onClick()
                                }}
                            >
                                <TouchableOpacity
                                    className="w-100 d-flex align-items-center justify-content-between px-2 py-2"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                >
                                    <div className='w-100 d-flex align-items-center'>
                                        <MaterialIcon
                                            icon={item.active ? 'remove' : 'add'}
                                            color={Colors.Secondary}
                                            size='tiny'
                                        />

                                        <span className='w-100 ms-2'>
                                            {item?.caption}
                                        </span>
                                    </div>
                                    {item?.name}
                                </TouchableOpacity>
                            </div>

                            {item?.active && (
                                <div
                                    className={`${item?.active ? 'd-flex' : 'd-none'} w-100`}
                                >
                                    {item?.content}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </BaseComponent>
    )
}
