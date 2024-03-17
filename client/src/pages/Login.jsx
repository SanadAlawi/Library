import { Facebook, Google } from '@mui/icons-material'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Notification from '../components/Notification'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Notification />
      <Navbar />

      <div className='p-4 flex justify-center items-center h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:px-20'>

        <div className='shadow-md h-full flex flex-col rounded overflow-hidden border md:w-full md:flex-row md:h-[70%] lg:w-[60%]'>

          <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
            <img className='absolute w-full h-full object-cover' src="https://source.unsplash.com/a-book-sitting-on-top-of-a-white-table-Cp5ofLz1gOM" alt="" />
          </div>

          <div className='p-10 flex flex-col gap-8 text-black md:w-1/2'>
            <h1 className='font-bold text-xl'>Welcome</h1>
            <p>Log into your account or create a new one using social buttons</p>

            <div className='flex cursor-pointer items-center gap-4 ring-1 ring-blue-100 p-3 rounded bg-white text-black'>
              <Google className='text-red-500' />
              <span>Sign in with Google</span>
            </div>

            <div className='flex cursor-pointer items-center gap-4 ring-1 ring-blue-100 p-3 rounded bg-white text-black'>
              <Facebook className='text-blue-500' />
              <span>Sign in with Facebook</span>
            </div>

            <span>Have a problem? <Link to='/' className='underline'>Contact us</Link></span>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Login