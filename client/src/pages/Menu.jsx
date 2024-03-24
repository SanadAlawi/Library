import { Link } from 'react-router-dom'

const Menu = () => {
  return (

    <div className='p-4 h-[calc(100vh-6rem)] flex flex-col md:h-[calc(100vh-9rem)] md:flex-row items-center lg:px-20 xl:px-40'>

      <Link to='/menu/adventure' className='h-1/3 bg-green-900 w-full relative text-white md:h-1/2'>
        <img loading="lazy" className='absolute bg-red right-0 bottom-0 w-[50%] h-full  object-contain' src="/Library/images/adventure 1.png" alt="" />

        <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
          <h1 className='font-bold uppercase text-4xl'>Adventure</h1>
          <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
        </div>
      </Link>
      
      <Link to='/menu/fantasy' className='h-1/3 bg-red-900 w-full relative text-white md:h-1/2'>
        <img loading="lazy" className='absolute right-0 bottom-0 w-[50%] h-full  object-contain' src="/Library/images/fantasy 1.png" alt="" />

        <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
          <h1 className='font-bold uppercase text-4xl'>Fantasy</h1>
          <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
        </div>
      </Link>

      <Link to='/menu/crime' className='h-1/3 bg-purple-800 w-full relative text-white md:h-1/2'>
        <img loading="lazy" className='absolute right-0 bottom-0 w-[50%] h-full  object-contain' src="/Library/images/crime 1.png" alt="" />

        <div className='absolute flex flex-col gap-4 bottom-0 p-3'>
          <h1 className='font-bold uppercase text-4xl'>Crime</h1>
          <p className='w-[50%]'>Savor the taste of perfection with our exquisite italian</p>
        </div>
      </Link>

    </div>

  )
}

export default Menu