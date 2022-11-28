import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div className='bg-bgColor'>
      <Header />
      <Landing />
      <Services />
      <About />
      <Testimonials />
      <Work />
      <Contact />
    </div>
  )
}

export default Home
