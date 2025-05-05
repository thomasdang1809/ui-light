import React from "react";

import DsTypography from "./design-system/compnents/DsTypography";
import DsButton from "./design-system/compnents/DsButton";
import DsShadow from "./design-system/compnents/DsShadow";
import DsColor from "./design-system/compnents/DsColor";
import DsFont from "./design-system/compnents/DsFont";
import DsIcon from "./design-system/compnents/DsIcon";
import DsInput from "./design-system/compnents/DsInput";
import DsAlert from "./design-system/compnents/DsAlert";
import DsVariant from "./design-system/compnents/DsVariant";
import DsShape from "./design-system/compnents/DsShape";
import DsFlex from "./design-system/compnents/DsFlex";

import DsAccordion from "./design-system/compnents/DsAccordion";
import Product from "../components/cards/Product";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
    
   
    return (
        <div className="contain">
            <div className="grid min-320">
                <Product />
                <Product />
                <Product />
            </div>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <DsFlex />
            <DsAccordion />
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
         
            
        </div>

    )
}

export default Home