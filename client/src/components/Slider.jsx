import { useEffect } from "react";
import { useState } from "react";
import { SliderData } from "./utils";


const Slider = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>
        setIndex(prevIndex => (prevIndex == SliderData.length - 1 ? 0 : prevIndex + 1))
        , 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-primary_light h-[calc(100vh-6rem)] flex flex-col  gap-4 md:h-[calc(100vh - 9rem)] md:flex-row">

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div className="uppercase font-bold text-primary text-center text-4xl md:text-5xl lg:text-6xl">
                    {SliderData[index].title}
                </div>
                <button className="text-white bg-primary px-8 py-4">Order Now</button>
            </div>

            <div className="relative flex-1 w-full h-ful">
                
                <img loading="lazy" src={SliderData[index].image} alt="" className="absolute object-contain w-full h-full" />
            </div>

        </div>
    )
}

export default Slider