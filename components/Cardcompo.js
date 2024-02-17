import React from 'react'
import Image from 'next/image';
import cardcss from "./Cardcss.module.css";

const Cardcompo = (props) => {
  return (
    <div className={cardcss.cards}>
        <Image src={props.cardurl} width={250} height={150} />
        <h4>{props.cardtext}</h4>
        <p>{props.cardpara}</p>
    </div>
  )
}

export default Cardcompo