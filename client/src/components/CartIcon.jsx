import { ShoppingCart } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllBooks } from "../app/redux/CartSlice/CartSlice"

const CartIcon = () => {

  const list = useSelector(getAllBooks)
  const size = list.length

  return (
    <Link to='/cart' className="flex items-center gap-1 relative ">
        <ShoppingCart className="md:text-primary" />
        <div className="cursor-pointer absolute top-[-20px] right-[-25px] md:right-[-10px]">({size})</div>
    </Link>
  )
}

export default CartIcon