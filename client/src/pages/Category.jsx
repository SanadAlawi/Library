import { Link, useParams } from 'react-router-dom'
import { books } from '../db'

const Category = () => {

  const { category } = useParams()
  const renderedBook = books.filter(book => book.genre === category)

  return (

    <div className='flex flex-wrap'>

      {renderedBook.map(book =>
        <Link to={`/product/${book.id}`} key={book.id} className='p-4  group flex flex-col items-center justify-between w-full h-[60vh] border border-r-primary border-b-primary md:w-1/2 lg:w-1/3 odd:bg-primary_light'>
          <div className='relative h-[80%] w-full'>
            <img loading="lazy" className='absolute object-contain bg-gr w-full h-full  ' src={book.img} alt="" />
          </div>
          <div className='flex w-full justify-between items-center font-bold uppercase text-primary'>
            <h1 className='text-xl'>{book.title}</h1>
            <p className='group-hover:hidden'>{book.price}</p>
            <button className='hidden group-hover:inline-block uppercase px-4 py-2 text-white bg-primary font-bold rounded'>add to cart</button>
          </div>
        </Link>)
      }




    </div>

  )
}

export default Category