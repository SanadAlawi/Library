import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"

const CartIcon = () => {
  return (
    <Link to='/cart' className="flex items-center gap-4">
        <ShoppingCart className="text-yellow-200" />
        <div className="cursor-pointer">cart (2)</div>
    </Link>
  )
}

export default CartIcon