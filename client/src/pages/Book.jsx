import { useParams } from "react-router-dom"
import { BookCounter } from "../components/BookCounter"
import { books } from "../db"

const Book = () => {
    
    const { id } = useParams()
    const book = books.find(book => book.id === +id)

    const handleImageClick = () => {
        window.open(book.img, "_blank"); // Open the image URL in a new tab
    }

    return (

        <div className='p-4 text-primary h-[calc(100vh-6rem)] gap-8 flex flex-col md:flex-row md:items-center md:h-[calc(100vh-9rem)] lg:px-20 xl:p-40'>
            <a className='relative w-full h-1/2 md:h-[70vh]' href={book.img} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <img loading="lazy" className='absolute object-contain w-full h-full rounded' src={book.img} alt='' onClick={handleImageClick} />
            </a>

            <div className='flex flex-col justify-center gap-4 h-1/2 md:h-[70vh] '>
                <h1 className='font-bold text-4xl'>{book.title}</h1>
                <p>
                    {book.desc}                </p>

                <BookCounter {...book} />

            </div>

        </div>
    )
}

export default Book