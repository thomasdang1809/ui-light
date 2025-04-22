import { IconTrash } from "@tabler/icons-react"
import Section from "../../../components/containers/Section"


const DsButton: React.FC = () => {
    return (
        <Section title="Buttons">
            <div className="ds-section-title">Filled Buttons</div>
            <div className="d-flex gap-1">
                <button className="button filled primary">Button</button>
                <button className="button filled secondary">Button</button>
                <button className="button filled info">Button</button>
                <button className="button filled warning">Button</button>
                <button className="button filled danger">Button</button>
                <button className="button filled light">Button</button>
                <button className="button filled dark">Button</button>
                <button className="button filled gray">Button</button>
            </div>
            <br />
            <div className="ds-section-title">Outlined Buttons</div>
            <div className="flex gap-1">
                <button className="button outlined primary">Button</button>
                <button className="button outlined secondary">Button</button>
                <button className="button outlined info">Button</button>
                <button className="button outlined warning">Button</button>
                <button className="button outlined danger">Button</button>
                <button className="button outlined light">Button</button>
                <button className="button outlined dark">Button</button>
                <button className="button outlined gray">Button</button>
            </div>

            <br />
            <div className="ds-section-title">Squared Buttons</div>
            <div className="flex">
                <button className="icon filled primary rounded-2">
                    <IconTrash size={18}/>
                </button>
            </div>
            <br />
            <div className="ds-section-title">Circled Buttons</div>
            <div className="flex">
                <button className="icon filled primary rounded-full">
                    <IconTrash size={18} />
                </button>
            </div>
        </Section>
    )
}

export default DsButton


