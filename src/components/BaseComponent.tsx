import { useEffect } from 'react'

export const BaseComponent = ({ children }: any) => {
  useEffect(() => {
    // console.log(this)
  }, [])

  return children
}
