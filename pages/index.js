import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Feautres from '@/components/Feautres'
import Store from '@/components/Store'
import Testimonial from '@/components/Testimonial'
import ContactCom from '@/components/ContactCom'
import Footer from '@/components/Footer'
import watch from "../public/watch.png"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watches Store</title>
      </Head>
      <Navbar />
      <Hero
      heroImg={watch} heading="Watches Store"/>
      <About />
      <Feautres/>
      <Store/>
      <Testimonial/>
      <ContactCom/>
      <Footer/>
    </div>
  )
}
