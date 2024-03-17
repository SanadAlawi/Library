import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Notification from '../components/Notification'
import { pizzas } from './utils'

const Category = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Notification />
      <Navbar />

      <div className='flex flex-wrap'>

        {pizzas.map(pizza =>
          <Link to={`/product/${pizza.id}`} key={pizza.id} className='p-4  group flex flex-col items-center justify-between w-full h-[60vh] border border-r-primary border-b-primary md:w-1/2 lg:w-1/3 odd:bg-primary_light'>
            <div className='relative h-[80%] w-full'>
              <img className='absolute object-cover w-full h-full  ' src={pizza.img} alt="" />
            </div>
            <div className='flex w-full justify-between items-center font-bold uppercase text-primary'>
              <h1 className='text-xl'>{pizza.title}</h1>
              <p className='group-hover:hidden'>{pizza.price}</p>
              <button className='hidden group-hover:inline-block uppercase px-4 py-2 text-white bg-primary font-bold rounded'>add to cart</button>
            </div>
          </Link>)}




      </div>

      <Footer />
    </main>
  )
}

export default Category