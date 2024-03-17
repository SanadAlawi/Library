import { useEffect } from "react";
import { useState } from "react";

const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "https://source.unsplash.com/milk-and-honey-by-rupi-kaur-book-on-side-table-CXYPfveiuis",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "https://source.unsplash.com/matt-ridleys-how-innovation-works-H-LIL57PHCc",
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "https://source.unsplash.com/a-book-sitting-on-top-of-a-white-table-Cp5ofLz1gOM",
    },
];

const Slider = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>
        setIndex(prevIndex => (prevIndex == data.length - 1 ? 0 : prevIndex + 1))
        , 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-primary_light h-[calc(100vh-6rem)] flex flex-col  gap-4 md:h-[calc(100vh - 9rem)] md:flex-row">

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div className="uppercase font-bold text-primary text-center text-4xl md:text-5xl lg:text-6xl">
                    {data[index].title}
                </div>
                <button className="text-white bg-primary px-8 py-4">Order Node</button>
            </div>

            <div className="relative flex-1 w-full h-ful">
                <img src={data[index].image} alt="" className="absolute object-cover w-full h-full" />
            </div>

        </div>
    )
}

export default Slider