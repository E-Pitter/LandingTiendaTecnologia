import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children,
    radius = `10`,
    disabled =  false
}) => {
  return (
    <StyledButton 
    whileTap={{scale: 0.8}}
    disabled= {disabled}
    radius= {radius}
    >
        {children}
    </StyledButton>
  )
}

export default Button