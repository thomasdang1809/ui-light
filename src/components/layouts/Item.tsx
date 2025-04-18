import classNames from "classnames"

interface IItem {
    size?: number
    children?: React.ReactNode,
    className?: string
}
const Item: React.FC<IItem> = ({ children, size, className }) => {
    return (
        <div
            className={classNames(className, { [`col-${size}`]: size })}
        >
            {children}
        </div>
    )
}

export default Item