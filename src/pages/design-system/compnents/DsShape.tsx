import Section from "../../../components/containers/Section"


const DsShape: React.FC = () => {

    return (
        <Section title="Shapes">
            <h3 className="ds-section-title">Shapes</h3>
            <div className="flex" style={{ justifyContent: 'center', gap: '40px' }}>
                <div className="variant filled primary rounded-0">
                    Rounded-0
                </div>
                <div className="variant filled primary rounded-1">
                    Rounded-1
                </div>
                <div className="variant filled primary rounded-2">
                    Rounded-2
                </div>
                <div className="variant filled primary rounded-full">
                    Rounded-n
                </div>
            </div>
        </Section>
    )
}

export default DsShape