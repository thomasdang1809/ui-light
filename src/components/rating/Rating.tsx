import { IconStar } from "@tabler/icons-react";
import React from "react";


const Rating:React.FC = () => {
    return (
        <div className="hstack gap-1">
            <IconStar size={16} />
            <IconStar size={16} />
            <IconStar size={16} />
            <IconStar size={16} />
            <IconStar size={16} />
        </div>
    )
}

export default Rating