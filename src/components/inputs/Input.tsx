import React from "react";

interface IInput {
    label?: React.ReactNode
    type?: string
    helperText?: React.ReactNode
}

const Input: React.FC<IInput> = ({ type, label, helperText }) => {
    return (
        <div className="field" style={{display:'flex', flexDirection:'column', gap:'4px'}}>
            {label && <label>{label}</label>}
            <div className="input">
                <input type={type} />
            </div>
            <div>{helperText && <small>{helperText}</small>}</div>
        </div>

    )
}

export default Input