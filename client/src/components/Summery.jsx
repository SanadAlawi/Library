import { useSelector } from "react-redux"
import { getAllBooks } from "../app/redux/CartSlice/CartSlice"

const Summery = () => {

    const list = useSelector(getAllBooks)

    const subTotal = list.reduce((sum, book) => sum + (book.price * book.quantity) , 0).toFixed(2)
    const serviceCost = +subTotal >= 50 ? 0: (15).toFixed(2)
    const total = (+subTotal + +serviceCost).toFixed(2)


    return (
        <div className='p-4 bg-primary_light text-primary flex flex-col gap-4 w-full h-1/2 md:h-full md:w-1/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40'>

            <div className='flex justify-between'>
                <span>Subtotal (3 items)</span>
                <span>${subTotal}</span>
            </div>

            <div className='flex justify-between'>
                <span>Service Cost</span>
                <span>${serviceCost}</span>
            </div>

            <div className='flex justify-between'>
                <span>Delivery Cost</span>
                <span className='uppercase text-green-500'>free!</span>
            </div>

            <hr />

            <div className='flex justify-between'>
                <span className='uppercase'>total(incl. vat)</span>
                <span className='font-bold'>${total}</span>
            </div>

            <button className='px-4 py-2 uppercase text-white bg-primary rounded w-1/2 self-end'>checkout</button>

        </div>
    )
}

export default Summery