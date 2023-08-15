
import Navbar from './components/navbar'
import Footer from './components/footer'
import Fastfood from './components/fastfood/fastfood'
import Service from './components/services/services'

import Product2 from './components/product2/product2'
import BestDelivered from './components/product/product'

export default function Home() {
  return (
    
      <div >
          <Navbar/>
         
          <Fastfood/>
          
          <Service/>
          <BestDelivered/>
          <Product2/>
          <Footer/>
      </div>
    
 
  )
}
 