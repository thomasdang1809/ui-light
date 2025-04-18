import classNames from "classnames"

interface IFlex {
    columns?: number,
    children?: React.ReactNode,
    className?: string
}
const Flex: React.FC<IFlex> = ({ children, className, columns }) => {
    return (
        <div
            className={classNames("flex-row-wrap", className, { [`columns-${columns}`]: columns })}
        >
            {children}
        </div>
    )
}

export default Flex