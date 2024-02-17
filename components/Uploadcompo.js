import React from 'react'
import boxcss from './otpcompo.module.css'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Uploadcompo = () => {
  return (
    <div className={boxcss.otpgen}>
      <h2>Add Media</h2>
      <div className={boxcss.uploadpic}>
      <Image src='/uploadpic.png' width={50} height={50} />
      <h5>Drag & Drop Image Here</h5>
      <p>Uploaded photo is maximum is of 2MB</p>
      <Link href='/pricing'><button>Upload Media</button></Link>
      </div>
      <p>At least add 3 images of your property for good visibility and high response.</p>
      <Link href='/pricing'><Button content='Continue'/></Link>
    </div>
  )
}

export default Uploadcompo