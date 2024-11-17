import React from "react";
import DashboardNavbar from "./navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <DashboardNavbar />

            {children}
        </div>
    );
};

export default DashboardLayout;
