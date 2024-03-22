import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="mt-auto h-12 bg-white p-4 md:h-24 lg:px-40 flex flex-col items-center text-primary gap-4 md:flex-row md:justify-between">
      <div className="text-primary uppercase text-2xl md:font-bold"><Link to='/'>bo<span className="text-gray-400">ok</span> sto<span className="text-gray-400">re</span></Link></div>
        <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer