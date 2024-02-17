import React from 'react'
import stepcss from './Stepcompo.module.css'
import Image from 'next/image';
import myImage from '../public/dealuser.png';
const Stepcompo = (props) => {
  return (
    <div className={stepcss.step}>
    <div className={stepcss.step1}><Image src={props.url} width={80} height={80} /></div>
    <div className={stepcss.step2}> <h3>{props.stephead}</h3> </div>
    <div className={stepcss.step3}> <p>{props.steptext}</p> </div>
    </div>
  )
}

export default Stepcompo