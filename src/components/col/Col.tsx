import React from 'react'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
  children?: any,
  size: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
  xs?: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
  sm?: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
  md?: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
  lg?: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
  xl?: '1' | '2' | '3' | '4'| '5'| '6' | '7'| '8' | '9'| '10' | '11' | '12' | string,
}

export const Col = ({ size, xs, sm, md, lg, xl, children }: IComponentProps) => {
    return (
        <BaseComponent>
            <div className={`col col-${size} ${xs ? `col-xs-${xs}` : ''} ${sm ? `col-sm-${sm}` : ''} ${md ? `col-md-${md}` : ''} ${lg ? `col-lg-${lg}` : ''} ${xl ? `col-xl-${xl}` : ''}`}>
                {children}
            </div>
        </BaseComponent>
    )
}
