import Section from "../../../components/containers/Section"
import Input from "../../../components/inputs/Input"


const DsInput: React.FC = () => {
    return (
        <Section title="Inputs">
            <div className="ds-section-title">Input</div>
            <div>
                <Input label="Input label" helperText="This is helper text" />
            </div>
        </Section>
    )
}

export default DsInput