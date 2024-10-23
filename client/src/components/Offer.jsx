import CountDown from "./CountDown"
// import adventureImage from "../../public/images/adventure 6.png"
// import adventureImage from "../assets/images/adventure 6.png"

const Offer = () => {


    return (
        <div className="relative flex p-4 flex-col items-center bg-black gap-4 h-screen md:flex-row md:h-[80vh]">
            <div className="p-4 flex flex-col items-center gap-4 text-white md:items-start">
                <h1 className="font-bold text-5xl text-center md:text-left">Limited Time Offer: Dive into Exclusive Book Deals!</h1>
                <p className="text-center md:text-left">
                    Don&apos;t miss out on our exclusive book event! For a limited time, explore a curated selection of captivating reads at unbeatable prices. Grab your favorites before time runs out!
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