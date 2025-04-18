import { useState } from "react";

interface ICallback {
    defaultColor?: string
    getColor: (value: any) => void
}
const Callback: React.FC<ICallback> = ({ getColor, defaultColor}) => {
    const [activeColor, setActiveColor ] = useState(defaultColor);
    const handleChange = (e:any) => {
        const {value} = e.target
        setActiveColor(value)
        getColor(value)
    }
    return (
        <>
            
            <input 
                type="color"
                id="input"
                area-label="input" 
                onChange={handleChange} 
                value={activeColor}
                style={{width:'50px', height:'50px', appearance:'none', border:'none', padding:'0'}}
            />
        </>
        
    )
}

export default Callback