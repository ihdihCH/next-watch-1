import ContactCom from '@/components/ContactCom'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import React from 'react'
import contactImg from "../public/contactImg.svg"
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero heroImg={contactImg} heading="Contact page"/>
        <Search/>
        <ContactCom/>
        <Footer/>
    </div>
  )
}

export default Contact