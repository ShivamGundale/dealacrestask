import React from 'react'
import textimgcss from './textimgcompo.module.css'
import Image from 'next/image';


const Textimgcompo = (props) => {
  return (
    <div className={textimgcss.textimgcompo}>
        <p>{props.firsttext}<br/> {props.secondtext}  </p>
        <Image src={props.img} width={150} height={120} />
        <div className={textimgcss.textfoot}>
        <h4>Need Help?</h4>
        <p>You Can Email Us</p>
        <a>Contact@dealacres.com</a>
        </div>
    </div>
  )
}

export default Textimgcompo