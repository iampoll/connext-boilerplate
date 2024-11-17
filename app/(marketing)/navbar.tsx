"use client";

import React from "react";

import {
    SignInButton,
    SignOutButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const MarketingNavbar = () => {
    const { user } = useUser();

    return (
        <header className="flex justify-between gap-2">
            <span>LOGO</span>

            <div>
                {!user && (
                    <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                        <Button>Sign in</Button>
                    </SignInButton>
                )}

                {user && (
                    <>
                        <UserButton />

                        <SignOutButton>
                            <Button>Sign out</Button>
                        </SignOutButton>
                    </>
                )}
            </div>
        </header>
    );
};

export default MarketingNavbar;
