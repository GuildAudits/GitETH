import React from 'react'

const CustomText = (props:any) => {
  return (
    <h2 className={` ${props.style} ${" bg-gradient-to-r from-gray-700 via-slate-50 to-gray-700 inline-block text-transparent bg-clip-text"}`}>
        {props.text}
    </h2>

  )
}

export default CustomText
