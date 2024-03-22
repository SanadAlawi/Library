import { Price } from "../components/Price"
import { useParams } from "react-router-dom"
import { books } from "../db"

const Product = () => {


    const { id } = useParams()
    const product = books.find(product => product.id === +id)


    return (

        <div className='p-4 text-primary h-[calc(100vh-6rem)] gap-8 flex flex-col md:flex-row md:items-center md:h-[calc(100vh-9rem)] lg:px-20 xl:p-40'>
            <div className='relative w-full h-1/2 md:h-[70vh]'>
                <img loading="lazy" className='absolute object-contain w-full h-full rounded' src={product.img} alt="" />
            </div>

            <div className='flex flex-col justify-center gap-4 h-1/2 md:h-[70vh] '>
                <h1 className='font-bold text-4xl'>{product.title}</h1>
                <p>
                    {product.desc}                </p>

                <Price productPrice={product.price} />

            </div>

        </div>
    )
}

export default Product