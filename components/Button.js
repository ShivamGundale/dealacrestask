import React from 'react'
import buttoncss from './button.module.css'
const Button = (props) => {
  return (
    <button className={buttoncss.butt}>{props.content}</button>
  )
}

export default Button
