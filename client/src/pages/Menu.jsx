import Notification from '../components/Notification'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Notification />
      <Navbar />

      <div className='p-4 h-[calc(100vh-6rem)] flex flex-col md:h-[calc(100vh-9rem)] md:flex-row items-center lg:px-20 xl:px-40'>

        <Link to='/menu/pastas' className='h-1/3 w-full relative text-white md:h-1/2'>
          <img className='absolute w-full h-full object-cover' src="https://source.unsplash.com/a-book-sitting-on-top-of-a-white-table-Cp5ofLz1gOM" alt="" />

          <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
            <h1 className='font-bold uppercase text-4xl'>italian pastas</h1>
            <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
          </div>
        </Link>

        <Link to='/menu/burgers' className='h-1/3 w-full relative text-white md:h-1/2'>
          <img className='absolute w-full h-full object-cover' src="https://source.unsplash.com/matt-ridleys-how-innovation-works-H-LIL57PHCc" alt="" />

          <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
            <h1 className='font-bold uppercase text-4xl'>italian pastas</h1>
            <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
          </div>
        </Link>

        <Link to='/menu/pizzas' className='h-1/3 w-full relative text-white md:h-1/2'>
          <img className='absolute w-full h-full object-cover' src="https://source.unsplash.com/milk-and-honey-by-rupi-kaur-book-on-side-table-CXYPfveiuis" alt="" />

          <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
            <h1 className='font-bold uppercase text-4xl'>italian pastas</h1>
            <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
          </div>
        </Link>

      </div>

      <Footer />
    </main>
  )
}

export default Menu