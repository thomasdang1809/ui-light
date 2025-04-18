import Section from "../../../components/containers/Section"


const DsShape: React.FC = () => {

    return (
        <Section title="Shapes">
            <h3 className="ds-section-title">Shapes</h3>
            <div className="flex" style={{ justifyContent: 'center', gap: '40px' }}>
                <div className="variant filled primary">
                    Rounded-0
                </div>
                <div className="variant filled primary">
                    Rounded-1
                </div>
                <div className="variant filled primary">
                    Rounded-2
                </div>
                <div className="variant filled primary">
                    Rounded-n
                </div>
            </div>
        </Section>
    )
}

export default DsShape