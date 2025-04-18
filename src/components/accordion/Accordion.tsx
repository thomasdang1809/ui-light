
interface IAccordion {
    children?: React.ReactNode
}
const Accordion: React.FC<IAccordion> = ({children}) => {
    return (
        <div className="accordions">
            {children}
        </div>
    )
}

export default Accordion