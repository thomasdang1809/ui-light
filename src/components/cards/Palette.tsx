import chroma from "chroma-js";
interface IPalette {
    color?: any,
    tint?: number,
    direction?: number,
    shade?: number,
    bgColor?: string,
    textColor?: string,
    name?: string
}
const Palette: React.FC<IPalette> = ({ color, tint, direction = 0 }) => {
    const _tint = direction === 1 ? chroma(color.value).tint(tint).hex() : chroma(color.value).shade(tint).hex();
    return (
        <div className="color">
            <div
                className="color-palette"
                style={{
                    backgroundColor: String(_tint),
                    color: chroma(_tint).luminance() > 0.5 ? '#000000' : '#FFFFFF'
                }}
            >
                {
                    chroma(_tint).luminance().toFixed(2)
                }


            </div>
            <div className="color-code">
                {String(_tint)}
            </div>
        </div>
    )
}
export default Palette