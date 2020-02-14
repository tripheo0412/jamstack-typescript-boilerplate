import React, { FC } from 'react'
import './Button.scss'
export type btnType =
  | 'primary'
  | 'secondary'
  | 'ternary'
  | 'danger'
  | 'primary-hollow'
  | 'secondary-hollow'
  | 'ternary-hollow'
  | 'danger-hollow'

interface ButtonProps {
  /** button type */
  type?: btnType
  /** text type */
  text: string
  /** button handler */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <>
      <button type="button" className={`btn btn__${type}`} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button
