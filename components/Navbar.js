import React from 'react'
import style from './Navbar.module.css'
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className={style.Navbar}>
        <div className={style.logo1}><Image src='/newlogo.png' width={50} height={50} /></div>
        <div className={style.logo2}><Image src='/dealuser.png' width={40} height={40} /></div>
    </div>
  )
}

export default Navbar