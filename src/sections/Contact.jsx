import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Contact() {

  const OMSLinks = {
    twitter: 'https://twitter.com/castingopenmic/',
    email: 'mailto:casting.openmicstudios@gmail.com',
    discord: "https://discord.gg/4dpyTHEGQD"
  }
  return (
    <div>
      <p className='section__text__p1'>Get in Touch</p>
      <h1 className='title'>Contact Us</h1>
      <div className='contact-info-upper-container'>
        <div className='contact-info-container'>
          <SocialIcon url={OMSLinks.twitter} bgColor='#000' className='icon contact-icon'/>
          <p><a href={OMSLinks.twitter}>Twitter</a></p>
        </div>
        <div className='contact-info-container'>
        <SocialIcon url={OMSLinks.email} bgColor='#000' className='icon contact-icon' />
        <p><a href={OMSLinks.email}>casting.openmicstudios@gmail.com</a></p>

        </div>
        <div className='contact-info-container'>
        <SocialIcon url={OMSLinks.discord} bgColor='#000' className='icon contact-icon' />
        <p><a href={OMSLinks.discord}>Join Our Discord!</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
