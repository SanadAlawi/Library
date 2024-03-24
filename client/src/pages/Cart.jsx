import { useSelector } from 'react-redux'
import { getAllBooks } from '../app/redux/CartSlice/CartSlice'
import Summery from '../components/Summery'
import CartList from '../components/CartList'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {

    const list = useSelector(getAllBooks)

    return (

        list.length ?
            <div className='h-[calc(100vh-6rem)] w-full flex flex-col md:flex-row md:h-[calc(100vh-9rem)]'>
                {/* BOOKS LIST */}
                <CartList />

                {/* SUMMERY */}
                <Summery />
            </div> :
            <EmptyCart />
    )
}

export default Cart