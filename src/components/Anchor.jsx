import React from 'react'

const Anchor = ({href, style, children}) => {
  return (
    <a href={href} className={style}>
        {children}
    </a>
  )
}

export default Anchor