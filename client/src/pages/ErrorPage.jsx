import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Notification from '../components/Notification'

const ErrorPage = () => {
    return (
        <main className='flex flex-col min-h-screen'>
            <Notification />
            <Navbar />
            <div className='h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center md:h-[calc(100vh-9rem)]'>
                <h1 className='text-2xl font-bold'>Error Not Found</h1>
                <Link className='bg-primary text-white px-4 py-2 rounded'>Go Home</Link>
            </div>
            <Footer />
        </main>
    )
}

export default ErrorPage