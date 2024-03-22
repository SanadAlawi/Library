import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"

const CartIcon = () => {
  return (
    <Link to='/cart' className="flex items-center gap-1 relative ">
        <ShoppingCart className="md:text-primary" />
        <div className="cursor-pointer absolute top-[-20px] right-[-25px] md:right-[-10px]">(2)</div>
    </Link>
  )
}

export default CartIcon