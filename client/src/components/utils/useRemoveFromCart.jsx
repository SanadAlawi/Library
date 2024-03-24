import { useDispatch } from "react-redux"
import { remove } from "../../app/redux/CartSlice/CartSlice"

const useRemoveFromCart = () => {

    const dispatch = useDispatch()

    const removeFromCart = (bookID) => {
        console.log(bookID)
        dispatch(remove(bookID))
    }

    return removeFromCart
}

export default useRemoveFromCart