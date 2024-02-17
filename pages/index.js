import Image from "next/image";
import Link from 'next/link'
import styles from "./index.module.css";
import Navbar from "../components/Navbar";
import Firstcompo from "../components/Firstcompo";
import Stepcompo  from "../components/Stepcompo";
import step1img from '../public/step1img.png';
import step2img from '../public/step2img.png';
import step3img from '../public/step3img.png';
import bgImage from '../public/bgdivimg.png';
import cardimg from '../public/dealuser.png';
import Cardcompo from "../components/Cardcompo";


export default function Home() {

  return (
    <>
    <Navbar />
    <Firstcompo/>
    <div className={styles.steps}>
      <h2>Step by Step Guide for Free Property Listing</h2>
      <div className={styles.stepdiv}>
      <Stepcompo url={step1img} stephead='Step 1 : Add proper detail' steptext='Start filling the form with a few basic details like type of property, Area, Location, etc.' />
      <Stepcompo url={step2img} stephead='Step 1 : Add proper detail' steptext='Start filling the form with a few basic details like type of property, Area, Location, etc.' />
      <Stepcompo url={step3img} stephead='Step 1 : Add proper detail' steptext='Start filling the form with a few basic details like type of property, Area, Location, etc.' />
      </div>

      <div className={styles.bgdiv}>
      
      <div className={styles.bgtext}>
        <h1>Why Choose Deal Acres?</h1>
      <p>Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate website in India today, with some of the simple and easy facilities for uploading your property.</p>



      <p>Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listing.</p>



      <p>So, a builder, an owner, or an agent does need not spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.</p>
      </div>
      </div>
      <Link href='/firstpage'><button type='submit' className={styles.subbutton}>List Your Property for FREE NOW!</button></Link>
    </div>
    <div className={styles.mainfoottext}>
    <div className={styles.foottext}>
      <h1>Everything you need to know about Deal Acres FREE Property Listing...</h1>
      <h3>What is Free Property Listing?</h3>
      <p>It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently. It is the perfect way to reach the audience who want to rent their home or buy their dream home. By doing property listing you save your time for selling or renting it.</p>
      <h4>Advantages of Free Listing</h4>
      <ul>
        <li><p>Provide free online exposure to more buyers.</p></li>
        <li><p>Provide free online exposure to more buyers.</p></li>
        <li><p>Provide free online exposure to more buyers.</p></li>
        <li><p>Provide free online exposure to more buyers.</p></li>
        <li><p>Provide free online exposure to more buyers.</p></li>
      </ul>
      <h1>Frequently Asked Questions</h1>
      <ul>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      <b><li>Provide free online exposure to more buyers.</li><hr/></b>
      </ul>
    </div>
    
    </div>
    <div className={styles.heading}>
    <h2>Interesting Reads</h2>
    </div>
    <div className={styles.cardcontent}>
      <Cardcompo cardurl={cardimg} cardtext='It is a process where a builder' cardpara='It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently.'/>
      <Cardcompo cardurl={cardimg} cardtext='It is a process where a builder' cardpara='It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently.'/>
      <Cardcompo cardurl={cardimg} cardtext='It is a process where a builder' cardpara='It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently.'/>
      <Cardcompo cardurl={cardimg} cardtext='It is a process where a builder' cardpara='It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently.'/>
    </div>

  <div className={styles.footer}>
    <h1>Footer</h1>
  </div>
    </>
  );
}
