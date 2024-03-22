import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { useState } from "react"

export const Price = ({productPrice}) => {

    const [count, setCount] = useState(1)
    let price = (productPrice * count).toFixed(2)

    const handleIncrement = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount)
    }

    return (
        <div className='flex flex-col gap-5'>

            {/* PRICE */}
            <p className='font-bold text-2xl'>${price}</p>

            <div className="flex">
                <div className='flex-1 flex justify-between items-center border border-primary p-1'>

                    {/* QUANTITY */}
                    <h1 className='flex-1'>Quantity</h1>
                    <div className='flex items-center gap-2'>
                        <span className="cursor-pointer" onClick={handleDecrement}> <ArrowBackIosNew /> </span>
                        <span className="text-xl"> {count} </span>
                        <span className="cursor-pointer" onClick={handleIncrement}> <ArrowForwardIos /> </span>
                    </div>
                </div>

                {/* ADD TO CARD BUTTON */}
                <button className='text-white bg-primary px-4 py-2 uppercase'>add to cart</button>
            </div>

        </div>
    )
}
