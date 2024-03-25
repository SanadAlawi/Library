import { Link } from 'react-router-dom'

const GenreCard = (props) => {
    const { genre, title, desc, bgColor, textColor, img } = props
    console.log({ genre, title, desc, bgColor })
    return (
        <Link to={`/genres/${genre}`} className={`bg-white h-[20vh] md:h-[40vh] text-black relative`} style={{backgroundColor: bgColor, color: textColor}}>
            <img src={img} alt="" className="w-[150px] h-full object-contain absolute right-0" />
            <div className="flex flex-col gap-4 w-[50%] absolute  bottom-5 left-5">
                <h1 className="text-xl md:text-3xl">{title}</h1>
                <p className='text-sm md:text-base'>
                    {desc}
                </p>
            </div>
        </Link>
    )
}

export default GenreCard