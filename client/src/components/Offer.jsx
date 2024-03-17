import CountDown from "./CountDown"

const Offer = () => {
    return (
        <div className="flex p-4 flex-col items-center gap-4 bg-black h-screen md:flex-row md:h-[80vh]">

            <div className="flex-1 p-4 flex flex-col items-center gap-4 text-white md:items-start">
                <h1 className="font-bold text-5xl text-center md:text-left">Delicious Burger & French Fry</h1>
                <p className="text-center md:text-left">
                    Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.
                </p>
                <CountDown />
                <button className="text-white bg-primary rounded py-2 px-4">Order Now</button>

            </div>

            <div className="flex-1 w-full h-full relative">
                <img className="absolute object-cover w-full h-full" src="https://source.unsplash.com/milk-and-honey-by-rupi-kaur-book-on-side-table-CXYPfveiuis" alt="" />
            </div>


        </div>
    )
}

export default Offer