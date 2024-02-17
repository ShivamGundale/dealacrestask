import Textimgcompo from '../components/Textimgcompo'
import Navbar from '../components/Navbar'
import basiccss from './basiccss.module.css'
import React from 'react'
import Basicbox from '@/components/Basicbox'

const basicdetail = () => {
  return (
    <>
    <Navbar/>
    <div className={basiccss.basic}>
        <Textimgcompo firsttext='An Accurate Location is the most ' secondtext='essential as it helps you to connect the perfect buyer or tenant' img='/basicimg.png'/>
        <Basicbox/>
    </div>
    </>
  )
}

export default basicdetail