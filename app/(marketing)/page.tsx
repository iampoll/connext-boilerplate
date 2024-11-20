import React from "react";

import CreateMessage from "@/features/messages/components/create-message";
import { ListMessages } from "@/features/messages/components/list-messages";

const Marketing = () => {
    return (
        <div>
            <CreateMessage />

            <ListMessages />
        </div>
    );
};

export default Marketing;
