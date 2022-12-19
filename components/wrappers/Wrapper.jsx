import React from 'react'

const Wrapper = ({styles,children}) => {
  return (
    <div className={`max-w-[104rem] w-full mx-auto z-[100] px-6 relative ${styles}`}>
    {children}
    </div>
  )
}

export default Wrapper