import { Link } from 'react-router-dom'
import useAddToCart from './utils/useAddToCart'

const CategoryCard = (book) => {
    const addToCart = useAddToCart()

    const handleAddBook = () => {
        addToCart(book)
    }

    return (
        <div className='p-4  group flex flex-col items-center justify-between w-full h-[60vh] border border-r-primary border-b-primary md:w-1/2 lg:w-1/3 odd:bg-primary_light'>
            <Link to={`/product/${book.id}`} className='relative h-[80%] w-full'>
                <img loading="lazy" className='absolute object-contain bg-gr w-full h-full  ' src={book.img} alt="" />
            </Link>
            <div className='flex w-full justify-between items-center font-bold uppercase text-primary'>
                <h1 className='text-xl'>{book.title}</h1>
                <p className='group-hover:hidden'>{book.price}</p>
                <button className='hidden group-hover:inline-block uppercase px-4 py-2 text-white bg-primary font-bold rounded' onClick={handleAddBook} >add to cart</button>
            </div>
        </div>
    )
}

export default CategoryCard