import React from 'react'
import { BaseComponent } from '../BaseComponent'

export const Row = ({ children }: any) => {
  return (
    <BaseComponent>
      <div className='row'>
          {children}
      </div>
    </BaseComponent>
  )
}
