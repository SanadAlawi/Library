import CountDown from "./CountDown"
// import adventureImage from "../../public/images/adventure 6.png"
// import adventureImage from "../assets/images/adventure 6.png"

const Offer = () => {


    return (
        <div className="relative flex p-4 flex-col items-center bg-black gap-4 h-screen md:flex-row md:h-[80vh]">
            {/* <img className="absolute z-[-1] object-cover w-full h-full" src={adventureImage} alt="" /> */}
            <div className="p-4 flex flex-col items-center gap-4 text-white md:items-start">
                <h1 className="font-bold text-5xl text-center md:text-left">Delicious Burger & French Fry</h1>
                <p className="text-center md:text-left">
                    Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.
                </p>
                <CountDown />
                <button className="text-white bg-primary rounded py-2 px-4">Order Now</button>

            </div>

            <div className="w-full h-full relative">
                <img loading="lazy" className="absolute object-contain w-full h-full text-white" src="/images/adventure 6.png" alt="Adventure image" />
            </div>


        </div>
    )
}

export default Offer