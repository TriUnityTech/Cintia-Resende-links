import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const BtnLinks = () => {
  return (
    <div className='rounded-full flex items-center border gap-1 mt-3 text-white px-4 py-1'>
      <p className=' tracking-widest'>Links úteis</p>
      <KeyboardDoubleArrowDownIcon style={{ fontSize: '1rem' }} /> 
    </div>
  )
}

export default BtnLinks