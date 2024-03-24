import { useDispatch } from "react-redux"
import { add } from "../../app/redux/CartSlice/CartSlice"

const useAddToCart = () => {

    const dispatch = useDispatch()

    const addToCart = (book, quantity=1) => {
        dispatch(add(book, quantity))
    }

    return addToCart
}

export default useAddToCart