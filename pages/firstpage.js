
import React from 'react'
import Navbar from "../components/Navbar";
import Textimgcompo from '../components/Textimgcompo';
import Otpcompo from '../components/Otpcompo';
import firstpg from './firstpage.module.css'
const firstpage = () => {
  return (
    <>
    <div>
        <Navbar />
      <div className={firstpg.first}>
        <div>
        <Textimgcompo firsttext='Your Phone number gives ' secondtext='access to your account.' img='/handiimg.png' />
        </div>
        <div>
        <Otpcompo/>
        </div>
      </div>
    </div>
    </>
  )
}

export default firstpage