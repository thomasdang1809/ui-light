import { IconStarFilled } from "@tabler/icons-react"


interface IRating {
    rate?: number
}   

const Rating:React.FC<IRating> = ({rate = 0}) => {
    return (
        <dd className="hstack gap-2">
            {
                Array.from({ length: 10 - rate }, (_, i) => {
                    return (
                        <IconStarFilled size={18} key={i} color="#1D3D72" />
                    )
                })
            }
            {
                Array.from({ length: rate }, (_, i) => {
                    return (
                        <IconStarFilled size={18} color="#FFBF6C" key={i} />
                    )
                })
            }
        </dd>
    )
}
export default Rating