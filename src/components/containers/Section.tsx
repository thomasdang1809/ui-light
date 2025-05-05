import React from "react";

interface ISection {
    title?: React.ReactNode
    children?: React.ReactNode
}
const Section: React.FC<ISection> = ({ title, children }) => {
    return (
        <section className="ds-section">
            {
                title && <div className="ds-heading">{title}</div>
            }
            
            <div className="content">
                {children}
            </div>

        </section>
    )
}
export default Section