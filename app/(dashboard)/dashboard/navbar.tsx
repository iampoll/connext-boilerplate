import React from "react";

import { SignOutButton } from "@clerk/nextjs";

const DashboardNavbar = () => {
    return (
        <div className="flex gap-2">
            <span>DashboardNavbar</span>

            <div>
                <SignOutButton />
            </div>
        </div>
    );
};

export default DashboardNavbar;
