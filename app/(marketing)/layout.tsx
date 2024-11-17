import React from "react";
import MarketingNavbar from "./navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MarketingNavbar />

            {children}
        </div>
    );
};

export default DashboardLayout;
