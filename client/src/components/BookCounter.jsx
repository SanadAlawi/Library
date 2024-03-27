import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import useAddToCart from "./utils/useAddToCart"
import useQuantityCounter from "./utils/useQuantityCounter"
import SuccessMessage from "./SuccessMessage"

export const BookCounter = (book) => {

    const [count, handleIncrement, handleDecrement] = useQuantityCounter()
    let price = (book.price * count).toFixed(2)

    const addToCart = useAddToCart()
    const handleAddBook = () => {
        addToCart(book, count)
    }

    const maxQuantityMessage = count == 10 ? 'Max Quantity': ''

    return (
        <div className='flex flex-col gap-5'>

            {/* PRICE */}
            <p className='font-bold text-2xl'>${price} <span className="text-red-600 text-sm">{maxQuantityMessage}</span> </p>

            <div className="flex">
                <div className='flex-1 flex justify-between items-center border border-primary p-1'>

                    {/* QUANTITY */}
                    <h1 className='flex-1'>Quantity</h1>
                    <div className='flex items-center gap-2'>
                        <span className="cursor-pointer" onClick={handleDecrement}> <ArrowBackIosNew /> </span>
                        <span className="text-xl"> {count} </span>
                        <span className="cursor-pointer" onClick={handleIncrement}> <ArrowForwardIos /> </span>
                    </div>
                </div>

                {/* ADD TO CARD BUTTON */}
                {/* <AddToCartButton book={book} quantity={count} /> */}
                <button className='text-white bg-primary px-4 py-2 uppercase' onClick={handleAddBook}>add to cart</button>
            </div>

            <SuccessMessage message='Book Added Successfully' color='red' />

        </div>
    )
}
