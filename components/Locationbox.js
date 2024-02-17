import React from 'react'
import loccss from './location.module.css'
import Smallbutt from './Smallbutt'
import Button from './Button'
import Link from 'next/link'
import Inputfld from './Inputfld'

const Locationbox = () => {
  return (
    <div className={loccss.locdiv}>
        <h2>Now, tell us about your property</h2>
        <h4>Describe Your Property</h4>
        <p>Write Several Thing which can describe your propety appropriately.</p>
        <div className={loccss.sublocdiv}></div>

        <h4>Add Room Details</h4>
        <div className={loccss.circlediv}>
        <div className={loccss.circle}>1</div>
        <div className={loccss.circle}>2</div>
        <div className={loccss.circle}>3</div>
        <div className={loccss.circle}>4</div>
        <div className={loccss.circle}>5</div>
        </div>

        <h4>Number of Bathrooms</h4>
        <div className={loccss.circlediv}>
        <div className={loccss.circle}>1</div>
        <div className={loccss.circle}>2</div>
        <div className={loccss.circle}>3</div>
        <div className={loccss.circle}>4</div>
        <div className={loccss.circle}>5</div>
        </div>

        <h4>Number of Balconies</h4>
        <div className={loccss.circlediv}>
        <div className={loccss.circle}>1</div>
        <div className={loccss.circle}>2</div>
        <div className={loccss.circle}>3</div>
        <div className={loccss.circle}>4</div>
        <div className={loccss.circle}>5</div>
        </div>

        <h4>Other Rooms</h4>
        <div className={loccss.circlediv}>
           <Link href='/upload'> <Smallbutt buttext='Pooja Room'/> </Link>
           <Link href='/upload'>  <Smallbutt buttext='Study Room'/> </Link>
        </div>
        <div className={loccss.circlediv}>
        <Link href='/upload'>  <Smallbutt buttext='Servent Room'/> </Link>
        <Link href='/upload'>  <Smallbutt buttext='Store Room'/> </Link>
        </div>
        <h4>Furnished</h4>
        <div className={loccss.circlediv}>
        <Link href='/upload'> <Smallbutt buttext='Fully Furnished'/> </Link>
        <Link href='/upload'> <Smallbutt buttext='Unfurnished'/> </Link>
        </div>
        <h4>Furnished</h4>
        
        <div className={loccss.circlediv}>
        <p>Covered Parking</p>
        <div className={loccss.circle}>1</div>
        <div className={loccss.circle}>2</div>
        </div>

        <div className={loccss.circlediv}>
        <p>Open Parking</p>
        <div className={loccss.circle}>1</div>
        <div className={loccss.circle}>2</div>
        </div>

        <h3>Flooring Details</h3>
        <div className={loccss.locinput}>
            <Inputfld placeholder='Total Floors'/><br/><br/>
            <Inputfld placeholder='Property on Floors'/>
        </div>
        <br/>
        <Link href='/upload'><Button content='Continue'/></Link>
    </div>
  )
}

export default Locationbox