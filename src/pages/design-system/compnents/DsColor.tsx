import { useState } from "react";
import Section from "../../../components/containers/Section"
import Palette from "../../../components/cards/Palette";

const DsColor: React.FC = () => {
    const [brighten,] = useState([.8, .6, .4, .2]);
    const [darken,] = useState([.2, .4, .6, .8])
    const [baseColors,] = useState([
        {
            name: 'primary',
            value: '#4B70F8'
        },
        {
            name: 'secondary',
            value: '#4D4D4D'
        },
        {
            name: 'info',
            value: '#3D9CF5'
        },
        {
            name: 'success',
            value: '#13bf13'
        },
        {
            name: 'warning',
            value: '#fa8a20'
        },
        {
            name: 'danger',
            value: '#F6413A'
        }
    ]
    )
    return (
        <Section title="Colors">

            {
                baseColors.map((baseColor, index) => (
                    <div key={index} style={{ marginBottom: '1.5rem' }}>
                        <h3 className="ds-section-title">{baseColor.name}</h3>
                        <div className="grid-auto-fit min-80" >
                            {
                                brighten.map((tint, index) => (
                                    <Palette color={baseColor} tint={tint} key={index} direction={1} />
                                ))
                            }
                            <Palette color={baseColor} tint={0} key={0} />

                            {
                                darken.map((shade, index) => (
                                    <Palette color={baseColor} tint={shade} key={index} direction={-1} />

                                ))
                            }

                        </div>
                    </div>

                ))
            }
        </Section>
    )
}

export default DsColor