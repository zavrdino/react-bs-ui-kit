import React from 'react'
import { Input } from '../input/Input'
import { MaterialIcon } from '../material-icon/MaterialIcon'
import { TouchableOpacity } from '../touchable-opacity/TouchableOpacity'
import { IUsePaginator } from '../../hooks/usePaginator'
import { Spinner } from '../../components/spinner/Spinner'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
    paginator: IUsePaginator,
    disabled?: boolean,
    loading?: boolean
}

export const Paginator = ({ paginator, disabled, loading }: IComponentProps) => {
    return (
        <BaseComponent>
            <nav aria-label="paginator" className='container'>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                    {
                        paginator.elements.map((element, i) => {
                            const isDisabled = element.disabled || disabled

                            let currentElementIndicator
                            if (element.isCurrentIndicator) {
                                const elements = []
                                for (let i = 1; i <= paginator.totalPages; i++) elements.push({ caption: i.toString(), value: i.toString() })

                                currentElementIndicator = (
                                    <div
                                        className='w-100 d-flex justify-content-center'
                                        style={{ minWidth: (element?.title?.length || 5) * 11 }}
                                    >
                                        {
                                            loading
                                                ? <Spinner size='sm' />
                                                : (
                                                    <div
                                                        title={element.alt}
                                                        key={i}
                                                        className='d-flex align-items-center mx-1 border rounded'
                                                        onClick={() => {
                                                            element.onClick()
                                                        }}
                                                    >
                                                        <span className='w-auto d-flex align-items-center'>
                                                            <Input
                                                                name=''
                                                                value={paginator.currentPage}
                                                                onChange={(_: any, newValue: number) => paginator.setCurrentPage(newValue)}
                                                                specs={{
                                                                    options: elements,
                                                                    type: 'select'
                                                                }}
                                                            />
                                                            <span className='mx-1'>/</span>
                                                            <span className='small pe-2'>{paginator.totalPages}</span>
                                                        </span>
                                                    </div>
                                                )
                                        }
                                    </div>
                                )
                            }

                            return (
                                <TouchableOpacity
                                    alt={element.alt}
                                    key={i}
                                    className='d-flex align-items-center mx-1'
                                    disabled={isDisabled}
                                    onClick={() => {
                                        element.onClick()
                                    }}
                                >{
                                    element.isCurrentIndicator
                                        ? currentElementIndicator
                                        : element.icon
                                            ? (
                                                <span className={`d-flex align-items-center ${element.disabled ? 'text-secondary' : ''}`}>
                                                    <MaterialIcon icon={element.icon} color={isDisabled ? 'secondary' : 'primary'} size="small" />
                                                </span>
                                            ) : <span className='border border-light px-2 rounded'>{element.title}</span>
                                }
                                </TouchableOpacity>
                            )
                        })
                    }
                </div>
            </nav>
        </BaseComponent>
    )
}
