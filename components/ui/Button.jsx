import React from 'react'

const Button = ({children, styles}) => {
  return (
    <button className={`${styles}`}>
    {children}
    </button>
  )
}

export default Button