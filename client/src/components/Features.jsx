import Feature from "./Feature"
import { featureds } from "./utils"




const Features = () => {
    return (
        <div className="overflow-x-auto">

            <div className="flex w-max">
                {
                    featureds.map(feature =>
                        <Feature key={feature.id} {...feature} />
                    )
                }

            </div>

        </div>
    )
}

export default Features