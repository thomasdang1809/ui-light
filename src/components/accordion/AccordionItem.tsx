import { IconChevronDown } from "@tabler/icons-react"

interface IAccordionItem {
    children?: React.ReactNode,
    expandIcon?: React.ReactNode,
    details?: React.ReactNode,
    summary?: React.ReactNode
}
const AccordionItem: React.FC<IAccordionItem> = ({ summary, expandIcon = <IconChevronDown />, details }) => {
    return (
        <div className="accordion">
            <div className="accordion-header">
                {summary}
                <div>
                    {expandIcon}
                </div>

            </div>
            <div className="accordion-body">
                {details}
            </div>


        </div>

    )
}

export default AccordionItem