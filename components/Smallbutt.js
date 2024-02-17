import React from 'react'
import smallcss from './smallbutt.module.css'
const Smallbutt = (props) => {
  return (
    <>
        <button className={smallcss.smallbutt}>{props.buttext}</button>
    </>
  )
}

export default Smallbutt