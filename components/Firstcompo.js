import React from 'react'
import Firstcss from './Firstcompo.module.css'
import Image from 'next/image';
import Link from 'next/link';
// import myurl from '../app/Otpgen.js'
const Firstcompo = () => {
  
  return (
    <div className={Firstcss.Firstcompo}>
        <div className={Firstcss.Firstcompo1}>
            <h2>POST YOUR PROPERTY FREE</h2>
            <p>Add Basic Details</p>
            <h6>Looking for.......</h6>
            <div className={Firstcss.button1}>
            
            <Link href='/firstpage'><button type='submit'>Sell</button></Link>
            <Link href='/firstpage'><button type='submit'>Rent</button></Link>
            </div>
            <h6>Property Type</h6>
            <div className={Firstcss.button1}>

                <Link href='/firstpage'><button type='submit'>Residential</button></Link>
                <Link href='/firstpage'><button type='submit'>Commertial</button></Link>
            </div>
            <div className={Firstcss.button1}>

                <button type='submit'>Flat/Apartment</button>
                <button type='submit'>Vila</button>
                <button type='submit'>Plot</button>
            </div>
            <div className={Firstcss.button1}>

                <button type='submit'>Independent House</button>
                <button type='submit'>Builder Floor</button>
            </div>
            
            <label for="username"><h6>Add Your Contact Detail</h6>
            <input type="text" className={Firstcss.input} id="username" name="username" placeholder="Phone Number" required></input>
            </label>
            <p>Are you Registered User?</p>
            <Link href='/firstpage'><button type='submit' className={Firstcss.subbutton}> Start Now</button></Link>
            
        </div>
        <div className={Firstcss.Firstcompo2}>
          <div className={Firstcss.compotext}>
            <div><h2>Post property Ad to <br/> sell or rent online for</h2></div>
            <div><h1><i>FREE</i></h1></div>
          </div>
          <div className={Firstcss.compolist}>
            <ul>
              <li>Advertise For FREE</li>
              <li>Sell 10 X faster</li>
              <li>Connect with genuine buyer</li>
              <li>Get unlimited enquiries</li>

            </ul>
          </div>
          <div className={Firstcss.compoimg}>
          <Image src='/freeimg.png' width={200} height={200} />
          </div>
        </div>
        
    </div>
  )
}

export default Firstcompo