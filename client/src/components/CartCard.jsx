import { Delete } from "@mui/icons-material"
import { Link } from "react-router-dom"
import useRemoveFromCart from "./utils/useRemoveFromCart"

const CartCard = (book) => {
    const { id, img, title, price, quantity } = book
    const removeFromCart = useRemoveFromCart()

    const handleRemoveBook = (e) => {
        e.preventDefault()
        removeFromCart(id)
    }

    return (
        <Link to={`/book/${id}`}  className='text-primary flex justify-between items-center gap-8'>
                <img loading="lazy" className=' h-[100px] w-[100px] object-contain' src={img} alt="" />
            <div>
                <h1 className='uppercase text-xl font-bold'>{title}</h1>
                <span className="">Quantity: {quantity}</span>
            </div>
            <p className='font-bold'>${(price * quantity).toFixed(2)}</p>
            <Delete onClick={handleRemoveBook} className='cursor-pointer hover:text-red-500' />
        </Link>
    )
}

export default CartCard