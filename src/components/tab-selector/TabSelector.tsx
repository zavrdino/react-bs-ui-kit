import React from 'react'
import { BaseComponent } from '../BaseComponent'

interface ITab {
    caption?: string,
    isSelected: boolean,
    onSelectItem: any,
    testId?: string
}

interface IComponentProps {
    items: ITab[]
}

export const TabSelector = ({ items }: IComponentProps) => {
    return (
        <BaseComponent>
            <div className='w-100'>
                <ul className="nav nav-tabs">
                    {items.map((item, i) => (
                        <li
                            data-testid={item.testId}
                            className="nav-item" key={`tab-item-${i}`}
                            onClickCapture={item.onSelectItem}
                        >
                            <span
                                className={`nav-link px-2 py-0 pointer ${item?.isSelected ? 'active  text-primary' : ''}`}
                                aria-current="page"
                            >
                                {item.caption}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </BaseComponent>
    )
}
