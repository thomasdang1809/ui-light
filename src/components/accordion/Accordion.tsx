
interface IAccordion {
    children?: React.ReactNode
}
const Accordion: React.FC<IAccordion> = ({children}) => {
    return (
        <div className="accordions">
            <div className="accordion">
                <div className="accordion-header">
                    This is header
                </div>
                <div className="accordion-body">
                    This is body
                </div>
            </div>
            {children}
        </div>
    )
}

export default Accordion