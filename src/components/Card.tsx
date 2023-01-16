import {FC, ReactNode} from 'react'
import classNames from 'classnames'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({children, className}) => (
  <div
    className={classNames(
      'block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md',
      className
    )}
  >
    {children}
  </div>
)
