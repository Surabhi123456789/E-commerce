import React from 'react'
import logo1 from '../assest/logo1.png'

const Logo = ({w,h}) => {
  return (
    <div >
      <img src={logo1} alt="Logo" width={w} height={h} />
    </div>
   
  )
}

export default Logo;
