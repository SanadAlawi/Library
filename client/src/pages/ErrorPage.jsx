import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (

        <div className='h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center md:h-[calc(100vh-9rem)]'>
            <h1 className='text-2xl font-bold'>Error Not Found</h1>
            <Link className='bg-primary text-white px-4 py-2 rounded'>Go Home</Link>
        </div>

    )
}

export default ErrorPage