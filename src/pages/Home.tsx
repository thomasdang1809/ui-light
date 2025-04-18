import React from "react";

import DsTypography from "./design-system/compnents/DsTypography";
import DsButton from "./design-system/compnents/DsButton";
import DsShadow from "./design-system/compnents/DsShadow";
import DsColor from "./design-system/compnents/DsColor";
import DsFont from "./design-system/compnents/DsFont";
import DsIcon from "./design-system/compnents/DsIcon";
import DsInput from "./design-system/compnents/DsInput";
import DsAlert from "./design-system/compnents/DsAlert";
import DsCheck from "./design-system/compnents/DsCheck";
import DsRadio from "./design-system/compnents/DsRadio";
import DsVariant from "./design-system/compnents/DsVariant";
import DsShape from "./design-system/compnents/DsShape";
import Callback from "../components/callback/Callback";
import ChildCom from "../components/test/ChildCom";
import DsFlex from "./design-system/compnents/DsFlex";
import Accordion from "../components/accordion/Accordion";
import AccordionItem from "../components/accordion/AccordionItem";
import { UserList } from "./user/compoments/UserList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Home: React.FC = () => {
    const [UIColor, setUIColor] = React.useState<string>('#FF00CC');
    const myColor = (color: string) => {
        setUIColor(color);
    }
    const [name, setName] = React.useState<string>('Carol');
    const setYourName = (name: string) => {
        setName(name)
    };
    
    return (
        <div className="container">
            <h1 className="bg-primary">Home</h1>
            <UserList />
            <ReactQueryDevtools/>
            <div className="card">
                <div className="card-header">
                    This is card header
                </div>
                <div className="card-body">
                    Card body
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
            <div className="toast">
                <div className="toast-header">
                    This is a toast
                </div>
                <div className="toast-body">
                    Toast body
                </div>
                <div className="toast-footer">
                    Toast Footer
                </div>
            </div>
            <Accordion>
                <AccordionItem 
                    summary="This is summary" 
                    details="This is details"
                />
                <AccordionItem 
                    summary="This is summary" 
                    details="This is details" 
                />
            </Accordion>
            <DsFlex />
            <DsFont />
            <DsIcon />
            <DsTypography />
            <DsColor />
            <DsVariant />
            <DsShape />
            <DsShadow />
            <DsButton />
            <DsInput />
            <DsAlert />
            <DsCheck />
            <DsRadio />
            <div style={{ backgroundColor: UIColor }}>
                This is color
            </div>
            <Callback getColor={myColor} defaultColor={UIColor} />
            <ChildCom getColor={setYourName} defaultValue="My name is: " />{name}
        </div>

    )
}

export default Home