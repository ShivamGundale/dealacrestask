import React from 'react'
import Firstcss from './Firstcompo.module.css'
const Inputfld = (props) => {
  return (
    <input type="text" className={Firstcss.input} id="username" name="username" placeholder={props.placeholder} required></input>
            
  )
}

export default Inputfld