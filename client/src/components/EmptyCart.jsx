import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="text-primary flex flex-col items-center justify-center gap-8 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
        <ShoppingCart className="text-primary_light" style={{fontSize: 'min(50vw, 20rem)'}} />
        <h1 className="text-2xl font-bold md:text-4xl">Cart is Empty</h1>
        <Link to='/genres' className="bg-primary text-white rounded px-4 py-2 hover:opacity-90">Go To Genres</Link>
    </div>
  )
}

export default EmptyCart