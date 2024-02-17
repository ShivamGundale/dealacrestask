import React from 'react'
import boxcss from './otpcompo.module.css'
import Smallbutt from './Smallbutt'
import Button from './Button'
import Link from 'next/link'
const Boxcompo = () => {
  return (
    
    <div className={boxcss.otpgen}>
        <h2>To Continue Please let us<br/> what you are?</h2>
        <div className={boxcss.buttdiv}>
        <Link href='/basicdetail'><Smallbutt buttext='An Owner'/></Link>
        <Link href='/basicdetail'><Smallbutt buttext='An Agent'/></Link>
        <Link href='/basicdetail'><Smallbutt buttext='An Builder'/></Link>
        </div>
        <p>Please choose correctly, if you want to change in the future,  it done through profile section</p>
        <Link href='/basicdetail'><Button content='Continue'/></Link>
    </div>
    
  )
}

export default Boxcompo