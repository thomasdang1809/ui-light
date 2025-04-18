import Section from "../../../components/containers/Section"

const DsFont: React.FC = () => {
    return (
        <Section title="About Font">
            <div className="ds-grid-2">
                <div style={{fontSize: '96px'}}>
                    Aa
                </div>
                <div>
                    <div className="ds-section-title">Font Family</div>
                    <div className="ds-section-title">"Poppins", sans-serif</div>
                    <br />
                    <div>
                        <p>
                            a b c d e f g h i j k l m n o p q r s t u v w x y z
                        </p>
                        <div className="ds-section-title">
                            a b c d e f g h i j k l m n o p q r s t u v w x y z
                        </div>

                    </div>
                </div>
            </div>

        </Section>
    )
}

export default DsFont