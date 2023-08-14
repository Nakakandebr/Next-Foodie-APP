import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer'
import Fastfood from './fastfood/fastfood'
import Service from './services/services'
import Categories from './product/product'

export default function Home() {
  return (
    
      <div >
          <Navbar/>
          <br/>
          <br/>
          <Fastfood/>
          <br/>
          <br/>
          <Service/>
          <Categories/>

          <Footer/>
      </div>
    
 
  )
}
 