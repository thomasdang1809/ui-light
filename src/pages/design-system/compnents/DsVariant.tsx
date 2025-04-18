import Section from "../../../components/containers/Section"


const DsVariant: React.FC = () => {

    return (
        <Section title="Variants">
            <h3 className="ds-section-title">Variants</h3>
            <div className="flex gap-4 sm:gap-9 md:gap-2 xl:gap-9" style={{ justifyContent: 'center'}}>
                <div className="variant filled info">
                    Filled
                </div>
                <div className="variant outlined danger">
                    Outlined
                </div>
                <div className=" flex">
                    This is gap
                </div>
                
            </div>
        </Section>
    )
}

export default DsVariant