import React from 'react'
import otpstyle from './otpcompo.module.css'
import Button from './Button'
import Link from 'next/link'
const Otpcompo = () => {
  return (
    <div className={otpstyle.otpgen} >
        <h2>Welcome back,</h2>
        <p>Your number is registered with us. <br/> Please login to continue</p>
        <p>+91-XXXXXXXXXX</p>
        <h4>Enter Your OTP</h4>
        <div className={otpstyle.input}>
            <input className={otpstyle.otpbox}></input>
            <input className={otpstyle.otpbox}></input>
            <input className={otpstyle.otpbox}></input>
            <input className={otpstyle.otpbox}></input>
        </div>
        <a>Resend OTP</a>
        <Link href='/secondpg'><Button content='Verify & Login'/></Link>
    </div>
  )
}

export default Otpcompo