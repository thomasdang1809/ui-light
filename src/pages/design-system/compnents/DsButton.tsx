import { IconTrash } from "@tabler/icons-react"
import Section from "../../../components/containers/Section"


const DsButton: React.FC = () => {
    return (
        <Section title="Buttons">
            <div className="ds-section-title">Filled Buttons</div>
            <div className="flex">
                <button className="btn filled primary">Button</button>
                <button className="btn filled secondary">Button</button>
                <button className="btn filled info">Button</button>
                <button className="btn filled warning">Button</button>
                <button className="btn filled danger">Button</button>
                <button className="btn filled light">Button</button>
                <button className="btn filled dark">Button</button>
                <button className="btn filled gray">Button</button>
            </div>
            <br />
            <div className="ds-section-title">Outlined Buttons</div>
            <div className="flex">
                <button className="btn outlined primary">Button</button>
                <button className="btn outlined secondary">Button</button>
                <button className="btn outlined info">Button</button>
                <button className="btn outlined warning">Button</button>
                <button className="btn outlined danger">Button</button>
                <button className="btn outlined light">Button</button>
                <button className="btn outlined dark">Button</button>
                <button className="btn outlined gray">Button</button>
            </div>

            <br />
            <div className="ds-section-title">Squared Buttons</div>
            <div className="flex">
                <button className="btn filled primary">
                    <IconTrash />
                </button>
            </div>
            <br />
            <div className="ds-section-title">Circled Buttons</div>
            <div className="flex">
                <button className="btn filled primary">
                    <IconTrash />
                </button>
            </div>
        </Section>
    )
}

export default DsButton