import React from "react";
import { Outlet } from "react-router-dom";


const LayoutAdmin: React.FC = () => {
    return <div>
        <Outlet />
    </div>;
};

export default LayoutAdmin;