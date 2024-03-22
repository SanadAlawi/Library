import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className='md:hidden'>
            {
                open ?
                    <Close className='text-primary cursor-pointer' onClick={() => setOpen(false)} />
                    :
                    <MenuIcon className='text-primary cursor-pointer' onClick={() => setOpen(true)} />
            }

            {
                open &&
                <ul className={`uppercase text-2xl absolute bg-primary top-24 left-0 w-full h-full flex flex-col text-white justify-center items-center gap-7 z-10`}>
                    <Link to='/'><li className="cursor-pointer">home</li></Link>
                    <Link to='/menu'><li className="cursor-pointer">menu</li></Link>
                    <Link to='/login'><li className="cursor-pointer">login</li></Link>
                    <CartIcon />
                </ul>
            }



        </nav>
    )
}

export default Menu