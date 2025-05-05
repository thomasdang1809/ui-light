import Accordion from "../../../components/accordion/Accordion"
import Section from "../../../components/containers/Section"


const DsAccordion: React.FC = () => {
 
    return (
        <Section title="accordion">
            <div className="ds-section-title">Accordion</div>
            <div className="flex gap-1">
                <Accordion/>
            </div>
        </Section>
    )
}

export default DsAccordion