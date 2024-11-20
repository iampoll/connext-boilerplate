"use client";

import React from "react";

import { useConvexAuth } from "convex/react";

import MarketingNavbar from "./navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isLoading } = useConvexAuth();
    if (isLoading) return null;

    return (
        <div>
            <MarketingNavbar />

            {children}
        </div>
    );
};

export default DashboardLayout;
