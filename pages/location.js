import Navbar from '../components/Navbar'
import React from 'react'
import locationcss from './location.module.css'
import Textimgcompo from '@/components/Textimgcompo'
import Locationbox from '@/components/Locationbox'
const location = () => {
  return (
    <>
    <Navbar/>
    <div className={locationcss.loc}>
        <Locationbox/>
        <Textimgcompo firsttext='Describe your property in brief so the buyer or renter can easily get to know how your property is' secondtext='what makes your property different from others.' img='/homeimg.png'/>
    </div>
    </>
  )
}

export default location