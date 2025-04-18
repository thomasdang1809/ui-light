import Section from "../../../components/containers/Section"


export interface Heading {
    level: string;
    weight: string;
    size: number;
    line: number;
    spacing: number;
}
const DsTypography: React.FC = () => {
    return (
        <Section title="Typography">
            <div className="ds-section-title">Typography</div>
            <div className="ds-grid-typo border-b">
                <div>Typeface</div>
                <span>Weight</span>
                <span>Size</span>
                <span>Line</span>
                <span>Spacing</span>
            </div>
            

            <div className="ds-grid-typo">
                <p>p. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <span>Semi Bold</span>
                <span>48</span>
                <span>58</span>
                <span>0</span>
            </div>
            <div className="ds-grid-typo">
                <p>Caption</p>
                <span>Semi Bold</span>
                <span>48</span>
                <span>58</span>
                <span>0</span>
            </div>
            <div className="ds-grid-typo">
                <small>small</small>
                <span>Semi Bold</span>
                <span>48</span>
                <span>58</span>
                <span>0</span>
            </div>
            <div className="ds-section-title">Eaxamples</div>
        </Section>
    )
}
export default DsTypography