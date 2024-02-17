import React from 'react'
import subcss from './submit.module.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
const submit = () => {
  return (
    <>
    <Navbar/>
    <div className={subcss.mainsub}>
    <div className={subcss.submitcss}>
    <Image className={subcss.subimg} src='/subimg.png' width={40} height={40} />
    <b><h1>Submited</h1></b>
    </div>
    </div>
    </>

  )
}

export default submit