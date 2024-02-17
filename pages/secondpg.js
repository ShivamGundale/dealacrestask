import React from 'react'
import Navbar from '../components/Navbar'
import secondpgcss from './secondpage.module.css'
import Boxcompo from '../components/Boxcompo'
import Textimgcompo from '../components/Textimgcompo'
const secondpg = () => {
  return (

    <>
        <Navbar/>
        <div className={secondpgcss.mainbox}>
          <Boxcompo/>
          <Textimgcompo firsttext='This information creates a' secondtext='transparency and build trust with buyers tenants' img='/secimg.png' />
        </div>
        
    </>
  )
}

export default secondpg