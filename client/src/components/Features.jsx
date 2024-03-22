import Feature from "./Feature"
import { books } from "./utils"




const Features = () => {
    return (
        <div className="overflow-x-auto">

            <div className="flex w-max">
                {
                    books.map(feature =>
                        <Feature key={feature.id} {...feature} />
                    )
                }

            </div>

        </div>
    )
}

export default Features