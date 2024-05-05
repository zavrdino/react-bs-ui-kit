import React from 'react'
import { BaseComponent } from '../BaseComponent'

export interface IComponentProps {
    icon: string,
    size?: 'tiniest' | 'tiny' | 'small' | 'medium' | 'large',
    color?: string,
    family?: 'material-icons' | 'material-icons-outlined' | 'material-icons-two-tone' | 'material-icons-round' | 'material-icons-sharp'
}

export const sizes = {
    tiniest: '0.7rem',
    tiny: '1rem',
    small: '1.6rem',
    medium: '2.6rem',
    large: '4.5rem',
}

export const MaterialIcon = ({ icon, size='medium', color='dark', family = 'material-icons' }: IComponentProps) => {
  return (
    <BaseComponent>
      <span style={{ fontSize: sizes[size] }} className={`${family} text-${color}`}>{icon}</span>
    </BaseComponent>
  )
}
