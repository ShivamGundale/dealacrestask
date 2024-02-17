import Textimgcompo from '../components/Textimgcompo'
import Navbar from '../components/Navbar'
import pricecss from './pricing.module.css'
import React from 'react'
import uploadcss from './upload.module.css'
import Details from '../components/Details'
import Button from '@/components/Button'
import Link from 'next/link'

const pricing = () => {
  return (
    <>
    <Navbar/>
    <div className={pricecss.price}>
        <Details/>
        <Textimgcompo firsttext='Mention attractive amenities and appealing details of your property.' secondtext='Add property proximity to transit Shopping, Market Areas, and more...' img='/priceimg.png'/>
    </div>
    <div className={uploadcss.gdpr}>
    <h2>GDPR Agreement </h2> 
    <div>
        
        <p><input type='checkbox'></input>I agree to this website "Deal Acres" storing my submitted information; see more details below.</p>
        <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
        <div className={uploadcss.postbutt}>
        <Link href='/submit'><Button content='Post your Property'/></Link>
        
        </div>
    </div>
    </div> 
    </>
  )
}

export default pricing