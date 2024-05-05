import { useEffect } from 'react'
import '../style/global.scss'

export const BaseComponent = ({ children }: any) => {
  useEffect(() => {
    // console.log(this)
  }, [])

  return children
}
