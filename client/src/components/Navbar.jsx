import { Phone } from "@mui/icons-material"
import CartIcon from "./CartIcon"
import Menu from "./Menu"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="h-12 bg-white p-4 border-b-2 border-primary flex justify-between items-center md:h-24 lg:px-40">

      {/* DESCTOP LEFT MENU */}
      <ul className="hidden md:flex items-center gap-4 text-primary uppercase">
        <Link to='/'><li className="cursor-pointer">homepage</li></Link>
        <Link to='/menu'><li className="cursor-pointer">menu</li></Link>
        <li className="cursor-pointer">contact</li>
      </ul>

      {/* LOGO */}
      <div className="text-primary uppercase text-2xl md:font-bold"><Link to='/'>LOGO</Link></div>

      {/* DESCTOP RIGHT MENU */}
      <ul className="hidden md:flex items-center gap-4 text-primary uppercase">
        <li className="cursor-pointer absolute top-2 lg:static right-4  p-1 flex items-center text-primary bg-orange-300 rounded">
          <Phone className="text-white" />
          123 456 78
        </li>
        <Link to='/login'><li className="cursor-pointer">login</li></Link>
        <CartIcon />
      </ul>

      {/* MOBILE MENU */}
      <Menu />
      
    </header>
  )
}

export default Navbar