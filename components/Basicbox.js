import React from 'react'
import boxcss from './otpcompo.module.css'
import Smallbutt from './Smallbutt'
import Button from './Button'
import Link from 'next/link'
import Inputfld from './Inputfld'

const Basicbox = () => {
  return (
    <div className={boxcss.otpgen}>
      <h3>Your Property Location?</h3>
      
      <Inputfld placeholder='State'/><br/>
      <Inputfld placeholder='City'/><br/>
      <Inputfld placeholder='Name of Project / Property'/><br/>
      <Inputfld placeholder='Area / Sector'/><br/>
      <Inputfld placeholder='House No.  (Optional)'/><br/>
      <br/>
      
      <Link href='/location'><Button content='Continue'/></Link>
    </div>
  )
}

export default Basicbox