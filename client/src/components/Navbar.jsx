import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <header className="h-12 bg-white p-4 border-b-2 border-primary flex justify-between items-center md:h-24 lg:px-40">

      {/* DESCTOP LEFT MENU */}
      <ul className="hidden md:flex items-center gap-4 text-primary uppercase">
        <Link to='/'><li className="cursor-pointer">home</li></Link>
        <Link to='/menu'><li className="cursor-pointer">menu</li></Link>
      </ul>

      {/* LOGO */}
      <div className="text-primary uppercase text-2xl md:font-bold"><Link to='/'>bo<span className="text-gray-400">ok</span> sto<span className="text-gray-400">re</span></Link></div>

      {/* DESCTOP RIGHT MENU */}
      <ul className="hidden md:flex items-center gap-4 text-primary uppercase">
        <Link to='/login'><li className="cursor-pointer">login</li></Link>
        <CartIcon />
      </ul>

      {/* MOBILE MENU */}
      <Menu />

    </header>
  )
}

export default Navbar