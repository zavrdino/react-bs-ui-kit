import React from 'react'
import { BaseComponent } from '../BaseComponent'

export const Container = ({ children, fluid }: any) => {
  return (
    <BaseComponent>
        <div className={`${fluid ? 'container-fluid' : 'container'} w-100`}>
            {children}
        </div>
    </BaseComponent>
  )
}
