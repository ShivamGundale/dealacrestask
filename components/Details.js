import React from 'react'
import loccss from './location.module.css'
import Inputfld from './Inputfld'
import Smallbutt from './Smallbutt'
import boxcss from './otpcompo.module.css'
import Image from 'next/image'
const Details = () => {
  return (
    <div className={loccss.pricediv}>
        <h2>Price Details</h2>
        <Inputfld placeholder='Expected Price'/><br/>
        <Inputfld placeholder='Price per Sq.Yd'/>
        <h2>Property Facing</h2>
        <div className={loccss.locbutt}>
            <Smallbutt buttext='North'/>
            <Smallbutt buttext='South'/>
            <Smallbutt buttext='East'/>
        </div>
        <div className={loccss.locbutt}>
            <Smallbutt buttext='West'/>
            <Smallbutt buttext='North-East'/>
            <Smallbutt buttext='North-West'/>
        </div>
        <div className={loccss.locbutt}>
            <Smallbutt buttext='South-East'/>
            <Smallbutt buttext='South-West'/>
            
        </div>
        <div className={boxcss.uploadpic}>
      <Image src='/uploadpic.png' width={50} height={50} />
      <h5>Drag & Drop Image Here</h5>
      <p>Uploaded photo is maximum is of 2MB</p>
      <button>Upload Media</button>
      </div>
    </div>
  )
}

export default Details