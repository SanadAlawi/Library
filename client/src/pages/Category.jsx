import { useParams } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { books } from '../db'

const Category = () => {

  const { category } = useParams()
  const renderedBook = books.filter(book => book.genre === category)

  return (

    <div className='flex flex-wrap'>

      {renderedBook.map(book =>
        <CategoryCard key={book.id} {...book} />
        )
      }




    </div>

  )
}

export default Category