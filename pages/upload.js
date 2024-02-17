import Uploadcompo from '../components/Uploadcompo'
import Navbar from '../components/Navbar'
import Textimgcompo from '../components/Textimgcompo'
import uploadcss from './upload.module.css'
import React from 'react'
import Button from '../components/Button'

const upload = () => {
  return (
    <>
    <Navbar/>
    
    <div className={uploadcss.uploaddiv}>
        
    <Textimgcompo firsttext='Click Perfact picture of your property so the renter or ' secondtext='buyer see the best image of your property.' img='/camera.png'/>
    <Uploadcompo/>
    </div>
    
    </>
  )
}

export default upload