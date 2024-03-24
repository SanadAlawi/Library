import { useSelector } from "react-redux"
import { getAllBooks } from "../app/redux/CartSlice/CartSlice"
import CartCard from "./CartCard"

const CartList = () => {
    const list = useSelector(getAllBooks)

    return (
        <div className='p-4 flex flex-col gap-4 overflow-y-auto w-full h-1/2 md:h-full md:w-2/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40'>

            {/* BOOKS */}
            {list.map(book =>
                <CartCard key={book.id} {...book} />
            )}

        </div>
    )
}

export default CartList