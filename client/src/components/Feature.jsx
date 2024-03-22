
const Feature = (feature) => {
  
  const {img, title, desc, price} = feature

  return (
    <div className="p-4 hover:bg-primary_light cursor-pointer  flex flex-col items-center gap-2 h-[60vh] w-screen md:w-[50vw] xl:w-[33vw]">
      <div className="flex-1 relative w-full">
        <img loading="lazy" className="absolute object-contain w-full h-full" src={img} alt="" />
      </div>

      <div className="flex-1 text-primary flex flex-col items-center gap-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-center">
          {desc}
        </p>
        <div className="font-bold">{price}</div>
        <button className="text-white bg-primary rounded p-2">Add to Cart</button>
      </div>
    </div>
  )
}

export default Feature