"use client";

import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const useListMessages = () => {
    return usePaginatedQuery(api.messages.list, {}, { initialNumItems: 10 });
};
