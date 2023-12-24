"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './page.css'

import logo from '../../public/pictures/logo.svg'

import facebookIcon from '../../public/pictures/socialMedia/facebook.svg'
import instagramIcon from '../../public/pictures/socialMedia/instagram.svg'
import linkedinIcon from '../../public/pictures/socialMedia/linkedin.svg'
import twitterIcon from '../../public/pictures/socialMedia/twitter.svg'
import youtubeIcon from '../../public/pictures/socialMedia/youtube.svg'

import americanExpressIcon from '../../public/pictures/payment/americanexpress.svg'
import discoverIcon from '../../public/pictures/payment/discover.svg'
import mastercardIcon from '../../public/pictures/payment/mastercard.svg'
import paypalIcon from '../../public/pictures/payment/paypal.svg'
import unionPayIcon from '../../public/pictures/payment/unionPay.svg'
import visaIcon from '../../public/pictures/payment/visa.svg'














const mobileMediaQuery = '(max-width: 750px)';

const ToggleItem = ({description, key}) => {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia(mobileMediaQuery).matches);

  useEffect(() => {
    const query = window.matchMedia(mobileMediaQuery);
    function handleQueryChange(queryEvent) {
      setIsMobile(queryEvent.matches);
    }
    query.addEventListener('change', handleQueryChange);

    return () => {
      query.removeEventListener('change', handleQueryChange);
    };
  }, []);

  if(isMobile) {
    return (
      <div className='dropdown-menu' key={key}>
        <button onClick={() => setToggle(!toggle)} className='dropBtn'>{description}</button>
        {toggle && (
        <div className='dropdown-content'>
          <a href='#'>Random link 1</a>
          <a href='#'>Random link 2</a>
          <a href='#'>Random link 3</a>
        </div>
        )}
      </div>
    )
  } else {
    return (
      <div className='dropdown-menu' key={key}>
        <button className='dropBtn'>{description}</button>
        <div className='dropdown-content'>
          <a href='#'>Random link 1</a>
          <a href='#'>Random link 2</a>
          <a href='#'>Random link 3</a>
        </div>
      </div>
    )
  }
}

export default function Footer() {
const testData = ['MENU1','MENU2','MENU3']

  return (
    <main id='footer__body'>
      <div id='container'>
        <div id='left__info'>
          <Image src={logo} alt="logo" id='footer__logo'/>
          <p id='about__us'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div id='payment__icons'>
            <Image src={americanExpressIcon} alt='American Express icon' className='payEmote'/>
            <Image src={discoverIcon} alt='Discover icon' className='payEmote'/>
            <Image src={mastercardIcon} alt='Mastercard icon' className='payEmote'/>
            <Image src={paypalIcon} alt='Paypal icon' className='payEmote'/>
            <Image src={unionPayIcon} alt='Union Pay icon' className='payEmote'/>
            <Image src={visaIcon} alt='Visa icon' className='payEmote'/>
          </div>
        </div>
        <div id='right__info'>
          <div id='categories'>
            {
              testData.map((d, id) => { return <ToggleItem description={d} key={id}/> })
            }
          </div>
          <div id='social__icons'>
            <a href='https:www.facebook.com'><Image src={facebookIcon} alt='Facebook icon' className='socialEmote'/></a>
            <a href='https:www.instagram.com'><Image src={instagramIcon} alt='Instagram icon' className='socialEmote'/></a>
            <a href='https:www.linkedin.com'><Image src={linkedinIcon} alt='linkedin icon' className='socialEmote'/></a>
            <a href='https:www.twitter.com'><Image src={twitterIcon} alt='twitter icon' className='socialEmote'/></a>
            <a href='https:www.youtube.com'><Image src={youtubeIcon} alt='youtube icon' className='socialEmote'/></a>
          </div>
          <div id='copyright'>
            Copyright © Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div id='disclaimer'>
            This is just a test production
          </div>
        </div>
      </div>
    </main>
  )
}
