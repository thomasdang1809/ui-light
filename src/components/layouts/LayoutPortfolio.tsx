import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../pages/porfolio/components/aside";


const LayoutPortfolio: React.FC = () => {
    return (
        <div className="flex wrapper bg-blue">
            <Aside />
            <div className="main-content">
            <Outlet />
            </div>
            
        </div>
    )
};

export default LayoutPortfolio;