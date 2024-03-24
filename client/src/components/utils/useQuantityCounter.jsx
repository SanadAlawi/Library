import { useState } from "react"

const useQuantityCounter = () => {

    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount)
    }

    return [count, handleIncrement, handleDecrement]
}

export default useQuantityCounter