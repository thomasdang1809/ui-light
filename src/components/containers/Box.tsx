import classNames from "classnames";
import React from "react";

interface IBox extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
    tag?: string
    props?: React.HTMLAttributes<HTMLElement>
    href?: string
    variant?: string
    color?: string
}
const Box: React.FC<IBox> = ({children, tag="div", variant, color, ...props}) => {
    const Tag = tag as React.ElementType;
    return (
        <Tag className={classNames("box", variant, color)} {...props}>{children}</Tag>
    )
}

export default Box